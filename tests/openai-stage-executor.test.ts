import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { prompts } from "../src/prompts.ts";
import {
  OpenAIStageExecutor,
  OpenAIStageOutputError,
  OPENAI_MODEL,
  STRING_STAGE_JSON_SCHEMA,
  STRING_STAGES,
  type OpenAIClientLike,
} from "../src/openai-stage-executor.ts";
import type { StageExecutor, StageInputs } from "../src/reasoning-engine.ts";

type CapturedRequest = {
  model: string;
  messages: Array<{ role: "system" | "user"; content: string }>;
  response_format: unknown;
};

function createMockClient(
  contentForCall: (request: CapturedRequest) => string | null,
): {
  client: OpenAIClientLike;
  requests: CapturedRequest[];
} {
  const requests: CapturedRequest[] = [];
  const client: OpenAIClientLike = {
    chat: {
      completions: {
        async create(body) {
          const request: CapturedRequest = {
            model: body.model,
            messages: body.messages,
            response_format: body.response_format,
          };
          requests.push(request);
          return {
            choices: [{ message: { content: contentForCall(request) } }],
          };
        },
      },
    },
  };
  return { client, requests };
}

function stringStageInput<S extends (typeof STRING_STAGES)[number]>(
  stage: S,
): StageInputs[S] {
  const originalInput = { text: "source text" };
  switch (stage) {
    case "customerProblem":
      return {
        originalInput,
        facts: [{ text: "fact" }],
        prompt: prompts.customerProblem,
      } as StageInputs[S];
    case "leadingSignal":
      return {
        originalInput,
        facts: [{ text: "fact" }],
        prompt: prompts.leadingSignal,
      } as StageInputs[S];
    case "change":
      return {
        originalInput,
        facts: [{ text: "fact" }],
        leadingSignal: "signal",
        prompt: prompts.change,
      } as StageInputs[S];
    case "reasoning":
      return {
        originalInput,
        facts: [{ text: "fact" }],
        leadingSignal: "signal",
        change: "change",
        prompt: prompts.reasoning,
      } as StageInputs[S];
    case "valueReallocation":
      return {
        originalInput,
        change: "change",
        prompt: prompts.valueReallocation,
      } as StageInputs[S];
    case "winner":
      return {
        originalInput,
        valueReallocation: "realloc",
        prompt: prompts.winner,
      } as StageInputs[S];
    case "verification":
      return {
        originalInput,
        customerProblem: "problem",
        leadingSignal: "signal",
        change: "change",
        reasoning: "reasoning",
        valueReallocation: "realloc",
        winner: "winner",
        evidence: [{ text: "evidence" }],
        prompt: prompts.verification,
      } as StageInputs[S];
    case "marketBlindSpot":
      return {
        originalInput,
        customerProblem: "problem",
        leadingSignal: "signal",
        change: "change",
        reasoning: "reasoning",
        valueReallocation: "realloc",
        winner: "winner",
        evidence: [{ text: "evidence" }],
        verification: "Unknown",
        prompt: prompts.marketBlindSpot,
      } as StageInputs[S];
    default: {
      const _exhaustive: never = stage;
      throw new Error(`Unhandled stage: ${_exhaustive}`);
    }
  }
}

describe("OpenAIStageExecutor", () => {
  it("implements StageExecutor correctly", async () => {
    const { client } = createMockClient(() =>
      JSON.stringify({
        facts: [{ text: "Observed fact", source: "report" }],
      }),
    );
    const executor: StageExecutor = new OpenAIStageExecutor({ client });

    const facts = await executor.executeStage("factExtraction", {
      originalInput: { text: "source text" },
      prompt: prompts.factExtraction,
    });

    assert.deepEqual(facts, [{ text: "Observed fact", source: "report" }]);
  });

  it("passes stage prompt correctly", async () => {
    const { client, requests } = createMockClient(() =>
      JSON.stringify({ value: "signal" }),
    );
    const executor = new OpenAIStageExecutor({ client });

    await executor.executeStage("leadingSignal", {
      originalInput: { text: "Apple announces App Store for iPhone via iTunes." },
      facts: [{ text: "Apple announces App Store for iPhone via iTunes." }],
      prompt: prompts.leadingSignal,
    });

    assert.equal(requests.length, 1);
    assert.equal(requests[0]?.model, OPENAI_MODEL);
    const system = requests[0]?.messages[0]?.content ?? "";
    assert.ok(system.includes(prompts.leadingSignal));
    assert.ok(system.includes("Detected industry domain from T0 facts:"));
    assert.equal(system.includes("AI Computing Supply Chain only."), false);
  });

  it("passes stage-specific input correctly", async () => {
    const { client, requests } = createMockClient(() =>
      JSON.stringify({ value: "change text" }),
    );
    const executor = new OpenAIStageExecutor({ client });
    const facts = [{ text: "fact A" }];
    const leadingSignal = "signal A";

    await executor.executeStage("change", {
      originalInput: { text: "source text" },
      facts,
      leadingSignal,
      prompt: prompts.change,
    });

    const userContent = requests[0]?.messages[1]?.content ?? "";
    const payload = JSON.parse(userContent) as {
      originalInput: { text: string };
      facts: typeof facts;
      leadingSignal: string;
      prompt?: string;
    };

    assert.deepEqual(payload.originalInput, { text: "source text" });
    assert.deepEqual(payload.facts, facts);
    assert.equal(payload.leadingSignal, leadingSignal);
    assert.equal(payload.prompt, undefined);
  });

  it('"Unknown" is preserved', async () => {
    const { client } = createMockClient(() =>
      JSON.stringify({ value: "Unknown" }),
    );
    const executor = new OpenAIStageExecutor({ client });

    const verification = await executor.executeStage("verification", {
      originalInput: { text: "source text" },
      customerProblem: "problem",
      leadingSignal: "signal",
      change: "change",
      reasoning: "reasoning",
      valueReallocation: "realloc",
      winner: "winner",
      evidence: [{ text: "evidence" }],
      prompt: prompts.verification,
    });

    assert.equal(verification, "Unknown");
  });

  it("invalid model output fails clearly", async () => {
    const { client } = createMockClient(() => "not-json");
    const executor = new OpenAIStageExecutor({ client });

    await assert.rejects(
      () =>
        executor.executeStage("winner", {
          originalInput: { text: "source text" },
          valueReallocation: "realloc",
          prompt: prompts.winner,
        }),
      (error: unknown) => {
        assert.ok(error instanceof OpenAIStageOutputError);
        assert.match(error.message, /invalid JSON/i);
        return true;
      },
    );
  });

  it("invalid structured shape fails clearly", async () => {
    const { client } = createMockClient(() =>
      JSON.stringify({ wrong: true }),
    );
    const executor = new OpenAIStageExecutor({ client });

    await assert.rejects(
      () =>
        executor.executeStage("customerProblem", {
          originalInput: { text: "source text" },
          facts: [{ text: "fact" }],
          prompt: prompts.customerProblem,
        }),
      (error: unknown) => {
        assert.ok(error instanceof OpenAIStageOutputError);
        assert.match(error.message, /string field "value"/i);
        return true;
      },
    );
  });

  it("reasoning string stage returns plain text", async () => {
    const plain =
      "Observable change raises system requirements; prior lower-spec capability becomes insufficient; higher-spec capability gains value; value reallocates to providers of that capability.";
    const { client, requests } = createMockClient(() =>
      JSON.stringify({ value: plain }),
    );
    const executor = new OpenAIStageExecutor({ client });

    const reasoning = await executor.executeStage(
      "reasoning",
      stringStageInput("reasoning"),
    );

    assert.equal(reasoning, plain);
    assert.equal(typeof reasoning, "string");
    assert.equal(reasoning.trim().startsWith("{"), false);

    const format = requests[0]?.response_format as {
      json_schema: typeof STRING_STAGE_JSON_SCHEMA;
    };
    assert.deepEqual(format.json_schema, STRING_STAGE_JSON_SCHEMA);
    assert.equal(
      requests[0]?.messages[0]?.content.includes("evidence:["),
      false,
    );
  });

  it("valueReallocation string stage returns plain text", async () => {
    const plain =
      "Value moves toward suppliers that can deliver the newly required higher-spec capability.";
    const { client, requests } = createMockClient(() =>
      JSON.stringify({ value: plain }),
    );
    const executor = new OpenAIStageExecutor({ client });

    const valueReallocation = await executor.executeStage(
      "valueReallocation",
      stringStageInput("valueReallocation"),
    );

    assert.equal(valueReallocation, plain);
    assert.equal(typeof valueReallocation, "string");
    assert.equal(valueReallocation.includes('{"value"'), false);

    const format = requests[0]?.response_format as {
      json_schema: typeof STRING_STAGE_JSON_SCHEMA;
    };
    assert.deepEqual(format.json_schema, STRING_STAGE_JSON_SCHEMA);
  });

  it("unwraps nested JSON value strings in string stages", async () => {
    const { client } = createMockClient(() =>
      JSON.stringify({
        value:
          '{"value":"Value moves toward high-end PCB suppliers able to meet the new requirements."}',
      }),
    );
    const executor = new OpenAIStageExecutor({ client });

    const valueReallocation = await executor.executeStage(
      "valueReallocation",
      stringStageInput("valueReallocation"),
    );

    assert.equal(
      valueReallocation,
      "Value moves toward high-end PCB suppliers able to meet the new requirements.",
    );
  });

  it("rejects schema/example dump in string stage value", async () => {
    const { client } = createMockClient(() =>
      JSON.stringify({
        value:
          '{"type":"object","properties":{"change":{"type":"string"}},"required":["change"],"example":{"change":"bad"}}',
      }),
    );
    const executor = new OpenAIStageExecutor({ client });

    await assert.rejects(
      () =>
        executor.executeStage("change", stringStageInput("change")),
      (error: unknown) => {
        assert.ok(error instanceof OpenAIStageOutputError);
        assert.match(error.message, /schema\/example dump/i);
        return true;
      },
    );
  });

  it("uses the same schema contract across all string stages", async () => {
    const { client, requests } = createMockClient(() =>
      JSON.stringify({ value: "plain text" }),
    );
    const executor = new OpenAIStageExecutor({ client });

    for (const stage of STRING_STAGES) {
      await executor.executeStage(stage, stringStageInput(stage));
    }

    assert.equal(requests.length, STRING_STAGES.length);
    for (const request of requests) {
      const format = request.response_format as {
        json_schema: typeof STRING_STAGE_JSON_SCHEMA;
      };
      assert.deepEqual(format.json_schema, STRING_STAGE_JSON_SCHEMA);
      assert.equal(format.json_schema.name, "string_stage_output");
      assert.deepEqual(format.json_schema.schema, {
        type: "object",
        additionalProperties: false,
        required: ["value"],
        properties: {
          value: { type: "string" },
        },
      });
    }
  });

  it("rejects empty string stage value", async () => {
    const { client } = createMockClient(() =>
      JSON.stringify({ value: "   " }),
    );
    const executor = new OpenAIStageExecutor({ client });

    await assert.rejects(
      () =>
        executor.executeStage("reasoning", stringStageInput("reasoning")),
      (error: unknown) => {
        assert.ok(error instanceof OpenAIStageOutputError);
        assert.match(error.message, /empty value/i);
        return true;
      },
    );
  });
});
