import { prompts } from "./prompts.ts";
import type {
  EvidenceItem,
  Fact,
  GoldCase,
  ReasoningInput,
  ReasoningResult,
} from "./types.ts";
import { validateGoldCase } from "./validate-gold-case.ts";

export const STAGE_ORDER = [
  "factExtraction",
  "customerProblem",
  "leadingSignal",
  "change",
  "reasoning",
  "valueReallocation",
  "winner",
  "evidence",
  "verification",
  "marketBlindSpot",
] as const;

export type StageName = (typeof STAGE_ORDER)[number];

export type StageInputs = {
  factExtraction: {
    originalInput: ReasoningInput;
    prompt: string;
  };
  customerProblem: {
    originalInput: ReasoningInput;
    facts: Fact[];
    prompt: string;
  };
  leadingSignal: {
    originalInput: ReasoningInput;
    facts: Fact[];
    prompt: string;
  };
  change: {
    originalInput: ReasoningInput;
    facts: Fact[];
    leadingSignal: string;
    prompt: string;
  };
  reasoning: {
    originalInput: ReasoningInput;
    facts: Fact[];
    leadingSignal: string;
    change: string;
    prompt: string;
  };
  valueReallocation: {
    originalInput: ReasoningInput;
    change: string;
    prompt: string;
  };
  winner: {
    originalInput: ReasoningInput;
    valueReallocation: string;
    prompt: string;
  };
  evidence: {
    originalInput: ReasoningInput;
    facts: Fact[];
    customerProblem: string;
    leadingSignal: string;
    change: string;
    reasoning: string;
    valueReallocation: string;
    winner: string;
    prompt: string;
  };
  verification: {
    originalInput: ReasoningInput;
    customerProblem: string;
    leadingSignal: string;
    change: string;
    reasoning: string;
    valueReallocation: string;
    winner: string;
    evidence: EvidenceItem[];
    prompt: string;
  };
  marketBlindSpot: {
    originalInput: ReasoningInput;
    customerProblem: string;
    leadingSignal: string;
    change: string;
    reasoning: string;
    valueReallocation: string;
    winner: string;
    evidence: EvidenceItem[];
    verification: string;
    prompt: string;
  };
};

export type StageOutputs = {
  factExtraction: Fact[];
  customerProblem: string;
  leadingSignal: string;
  change: string;
  reasoning: string;
  valueReallocation: string;
  winner: string;
  evidence: EvidenceItem[];
  verification: string;
  marketBlindSpot: string;
};

export type StageExecutor = {
  executeStage<S extends StageName>(
    stage: S,
    input: StageInputs[S],
  ): StageOutputs[S] | Promise<StageOutputs[S]>;
};

export class GoldCaseValidationError extends Error {
  readonly errors: string[];

  constructor(errors: string[]) {
    super(`GoldCase validation failed: ${errors.join("; ")}`);
    this.name = "GoldCaseValidationError";
    this.errors = errors;
  }
}

export class ReasoningEngine {
  private readonly executor: StageExecutor;

  constructor(executor: StageExecutor) {
    this.executor = executor;
  }

  async run(input: ReasoningInput): Promise<ReasoningResult> {
    const facts = await this.executor.executeStage("factExtraction", {
      originalInput: input,
      prompt: prompts.factExtraction,
    });

    const customerProblem = await this.executor.executeStage("customerProblem", {
      originalInput: input,
      facts,
      prompt: prompts.customerProblem,
    });

    const leadingSignal = await this.executor.executeStage("leadingSignal", {
      originalInput: input,
      facts,
      prompt: prompts.leadingSignal,
    });

    const change = await this.executor.executeStage("change", {
      originalInput: input,
      facts,
      leadingSignal,
      prompt: prompts.change,
    });

    const reasoning = await this.executor.executeStage("reasoning", {
      originalInput: input,
      facts,
      leadingSignal,
      change,
      prompt: prompts.reasoning,
    });

    const valueReallocation = await this.executor.executeStage(
      "valueReallocation",
      {
        originalInput: input,
        change,
        prompt: prompts.valueReallocation,
      },
    );

    const winner = await this.executor.executeStage("winner", {
      originalInput: input,
      valueReallocation,
      prompt: prompts.winner,
    });

    const evidence = await this.executor.executeStage("evidence", {
      originalInput: input,
      facts,
      customerProblem,
      leadingSignal,
      change,
      reasoning,
      valueReallocation,
      winner,
      prompt: prompts.evidence,
    });

    const verification = await this.executor.executeStage("verification", {
      originalInput: input,
      customerProblem,
      leadingSignal,
      change,
      reasoning,
      valueReallocation,
      winner,
      evidence,
      prompt: prompts.verification,
    });

    const marketBlindSpot = await this.executor.executeStage(
      "marketBlindSpot",
      {
        originalInput: input,
        customerProblem,
        leadingSignal,
        change,
        reasoning,
        valueReallocation,
        winner,
        evidence,
        verification,
        prompt: prompts.marketBlindSpot,
      },
    );

    const goldCase: GoldCase = {
      customerProblem,
      leadingSignal,
      change,
      reasoning,
      valueReallocation,
      winner,
      evidence,
      verification,
      marketBlindSpot,
    };

    const validation = validateGoldCase(goldCase);
    if (!validation.valid) {
      throw new GoldCaseValidationError(validation.errors);
    }

    return {
      facts,
      goldCase,
    };
  }
}
