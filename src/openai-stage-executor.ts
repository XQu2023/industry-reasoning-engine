import OpenAI from "openai";
import {
  detectDomainFromT0Facts,
  domainFramingInstruction,
  t0TextForDomainDetection,
} from "./domain-binding.ts";
import type {
  StageExecutor,
  StageInputs,
  StageName,
  StageOutputs,
} from "./reasoning-engine.ts";
import type { EvidenceItem, Fact } from "./types.ts";

/** Single model constant — change here only. */
export const OPENAI_MODEL = "gpt-5.4";

export class OpenAIStageOutputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "OpenAIStageOutputError";
  }
}

export type OpenAIChatCompletionCreate = (body: {
  model: string;
  messages: Array<{ role: "system" | "user"; content: string }>;
  response_format: {
    type: "json_schema";
    json_schema: {
      name: string;
      strict: true;
      schema: Record<string, unknown>;
    };
  };
}) => Promise<{
  choices: Array<{ message: { content: string | null } }>;
}>;

export type OpenAIClientLike = {
  chat: {
    completions: {
      create: OpenAIChatCompletionCreate;
    };
  };
};

export const STRING_STAGES = [
  "customerProblem",
  "leadingSignal",
  "change",
  "reasoning",
  "valueReallocation",
  "winner",
  "verification",
  "marketBlindSpot",
] as const satisfies ReadonlyArray<StageName>;

const STRING_STAGE_SET = new Set<StageName>(STRING_STAGES);

/** Exact shared contract for every string stage. */
export const STRING_STAGE_JSON_SCHEMA = {
  name: "string_stage_output",
  strict: true as const,
  schema: {
    type: "object",
    additionalProperties: false,
    required: ["value"],
    properties: {
      value: { type: "string" },
    },
  } as Record<string, unknown>,
};

const factsSchema = {
  type: "object",
  additionalProperties: false,
  required: ["facts"],
  properties: {
    facts: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["text", "source"],
        properties: {
          text: { type: "string" },
          source: { type: ["string", "null"] },
        },
      },
    },
  },
} as const;

const evidenceSchema = {
  type: "object",
  additionalProperties: false,
  required: ["evidence"],
  properties: {
    evidence: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["text", "source"],
        properties: {
          text: { type: "string" },
          source: { type: ["string", "null"] },
        },
      },
    },
  },
} as const;

function schemaFor(stage: StageName): {
  name: string;
  strict: true;
  schema: Record<string, unknown>;
} {
  if (stage === "factExtraction") {
    return {
      name: "fact_extraction",
      strict: true,
      schema: factsSchema as unknown as Record<string, unknown>,
    };
  }
  if (stage === "evidence") {
    return {
      name: "evidence_items",
      strict: true,
      schema: evidenceSchema as unknown as Record<string, unknown>,
    };
  }
  return STRING_STAGE_JSON_SCHEMA;
}

function looksLikeSchemaDump(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed.startsWith("{")) return false;
  try {
    const obj = JSON.parse(trimmed) as {
      type?: unknown;
      properties?: unknown;
      required?: unknown;
      additionalProperties?: unknown;
      example?: unknown;
      $schema?: unknown;
    };
    if (typeof obj !== "object" || obj === null) return false;
    const looksLikeJsonSchema =
      obj.$schema !== undefined ||
      (obj.type === "object" &&
        (obj.properties !== undefined ||
          obj.required !== undefined ||
          obj.additionalProperties !== undefined ||
          obj.example !== undefined));
    return looksLikeJsonSchema;
  } catch {
    return false;
  }
}

/** If a string stage encodes {"value":"..."} as text, unwrap the inner string. */
function normalizeStringStageValue(value: string): string {
  let current = value.trim();
  for (let i = 0; i < 3; i += 1) {
    if (!current.startsWith("{")) break;
    try {
      const parsed = JSON.parse(current) as unknown;
      if (
        parsed !== null &&
        typeof parsed === "object" &&
        !Array.isArray(parsed) &&
        "value" in parsed &&
        typeof (parsed as { value: unknown }).value === "string" &&
        Object.keys(parsed as object).length === 1
      ) {
        current = (parsed as { value: string }).value.trim();
        continue;
      }
    } catch {
      break;
    }
    break;
  }
  return current;
}

function parseStringStageValue(stage: StageName, parsed: object): string {
  const rawValue = (parsed as { value?: unknown }).value;
  if (typeof rawValue !== "string") {
    throw new OpenAIStageOutputError(
      `OpenAI output for stage "${stage}" must include string field "value"`,
    );
  }

  const value = normalizeStringStageValue(rawValue);
  if (value === "") {
    throw new OpenAIStageOutputError(
      `OpenAI output for stage "${stage}" returned empty value`,
    );
  }
  if (looksLikeSchemaDump(value)) {
    throw new OpenAIStageOutputError(
      `OpenAI output for stage "${stage}" returned a schema/example dump instead of plain answer text`,
    );
  }
  return value;
}

function stageContext(input: { prompt: string } & Record<string, unknown>): string {
  const { prompt: _prompt, ...context } = input;
  return JSON.stringify(context);
}

function systemMessageFor(
  stage: StageName,
  prompt: string,
  domainInstruction: string,
): string {
  const shared = [
    prompt,
    domainInstruction,
    "Do not include chain-of-thought.",
    "Do not invent facts.",
    "No stock-price prediction.",
    "No buy/sell advice.",
  ];

  if (stage === "factExtraction") {
    return [
      ...shared,
      "Return only the required JSON object with a facts array.",
    ].join(" ");
  }

  if (stage === "evidence") {
    return [
      ...shared,
      "Return only the required JSON object with an evidence array.",
      "If causal support is missing, use an evidence item whose text states that the source does not provide evidence for that causal step.",
    ].join(" ");
  }

  // String stages: no embedded JSON examples that can leak into answers.
  return [
    ...shared,
    "Return only the required JSON object.",
    "The value field must be plain text only.",
    "If evidence is insufficient, set value to Unknown.",
  ].join(" ");
}

function parseJsonObject(content: string | null, stage: StageName): unknown {
  if (content == null || content.trim() === "") {
    throw new OpenAIStageOutputError(
      `OpenAI returned empty content for stage "${stage}"`,
    );
  }
  try {
    return JSON.parse(content) as unknown;
  } catch {
    throw new OpenAIStageOutputError(
      `OpenAI returned invalid JSON for stage "${stage}"`,
    );
  }
}

function asNonEmptyString(value: unknown, label: string): string {
  if (typeof value !== "string") {
    throw new OpenAIStageOutputError(`${label} must be a string`);
  }
  return value;
}

function mapFact(raw: unknown, index: number): Fact {
  if (raw === null || typeof raw !== "object") {
    throw new OpenAIStageOutputError(`facts[${index}] must be an object`);
  }
  const item = raw as { text?: unknown; source?: unknown };
  const text = asNonEmptyString(item.text, `facts[${index}].text`);
  const fact: Fact = { text };
  if (typeof item.source === "string" && item.source.trim() !== "") {
    fact.source = item.source;
  }
  return fact;
}

function mapEvidenceItem(raw: unknown, index: number): EvidenceItem {
  if (raw === null || typeof raw !== "object") {
    throw new OpenAIStageOutputError(`evidence[${index}] must be an object`);
  }
  const item = raw as { text?: unknown; source?: unknown };
  const text = asNonEmptyString(item.text, `evidence[${index}].text`);
  const evidenceItem: EvidenceItem = { text };
  if (typeof item.source === "string" && item.source.trim() !== "") {
    evidenceItem.source = item.source;
  }
  return evidenceItem;
}

function parseStageOutput<S extends StageName>(
  stage: S,
  parsed: unknown,
): StageOutputs[S] {
  if (parsed === null || typeof parsed !== "object") {
    throw new OpenAIStageOutputError(
      `OpenAI output for stage "${stage}" must be a JSON object`,
    );
  }

  if (stage === "factExtraction") {
    const facts = (parsed as { facts?: unknown }).facts;
    if (!Array.isArray(facts)) {
      throw new OpenAIStageOutputError(
        `OpenAI output for stage "factExtraction" must include a facts array`,
      );
    }
    return facts.map(mapFact) as StageOutputs[S];
  }

  if (stage === "evidence") {
    const evidence = (parsed as { evidence?: unknown }).evidence;
    if (!Array.isArray(evidence)) {
      throw new OpenAIStageOutputError(
        `OpenAI output for stage "evidence" must include an evidence array`,
      );
    }
    return evidence.map(mapEvidenceItem) as StageOutputs[S];
  }

  if (STRING_STAGE_SET.has(stage)) {
    return parseStringStageValue(stage, parsed) as StageOutputs[S];
  }

  throw new OpenAIStageOutputError(`Unsupported stage "${stage}"`);
}

export type OpenAIStageExecutorOptions = {
  client?: OpenAIClientLike;
  model?: string;
  apiKey?: string;
};

export class OpenAIStageExecutor implements StageExecutor {
  private readonly client: OpenAIClientLike;
  private readonly model: string;

  constructor(options: OpenAIStageExecutorOptions = {}) {
    this.model = options.model ?? OPENAI_MODEL;
    if (options.client) {
      this.client = options.client;
      return;
    }
    const apiKey = options.apiKey ?? process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is required");
    }
    this.client = new OpenAI({ apiKey }) as unknown as OpenAIClientLike;
  }

  async executeStage<S extends StageName>(
    stage: S,
    input: StageInputs[S],
  ): Promise<StageOutputs[S]> {
    const jsonSchema = schemaFor(stage);
    const t0Text = t0TextForDomainDetection(
      input as {
        originalInput?: { text?: string };
        facts?: ReadonlyArray<{ text: string }>;
      },
    );
    const domain = detectDomainFromT0Facts(t0Text);
    const domainInstruction = domainFramingInstruction(domain);

    const response = await this.client.chat.completions.create({
      model: this.model,
      messages: [
        {
          role: "system",
          content: systemMessageFor(stage, input.prompt, domainInstruction),
        },
        { role: "user", content: stageContext(input) },
      ],
      response_format: {
        type: "json_schema",
        json_schema: jsonSchema,
      },
    });

    const content = response.choices[0]?.message?.content ?? null;
    const parsed = parseJsonObject(content, stage);
    return parseStageOutput(stage, parsed);
  }
}
