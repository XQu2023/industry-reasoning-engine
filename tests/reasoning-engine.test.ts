import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  GoldCaseValidationError,
  ReasoningEngine,
  STAGE_ORDER,
  type StageExecutor,
  type StageInputs,
  type StageName,
  type StageOutputs,
} from "../src/reasoning-engine.ts";
import type { Fact, ReasoningInput } from "../src/types.ts";

function createTrackingExecutor(
  overrides: Partial<{ [S in StageName]: StageOutputs[S] }> = {},
): {
  executor: StageExecutor;
  calls: StageName[];
  inputs: Partial<{ [S in StageName]: StageInputs[S] }>;
} {
  const calls: StageName[] = [];
  const inputs: Partial<{ [S in StageName]: StageInputs[S] }> = {};

  const defaults: StageOutputs = {
    factExtraction: [{ text: "GPU lead times lengthened for major buyers." }],
    customerProblem: "Buyers cannot secure AI compute on demand.",
    leadingSignal: "Lead times for advanced GPUs are extending.",
    change: "Buyers shift from spot purchases to long-term contracts.",
    reasoning:
      "Longer lead times force earlier capacity commitments, moving spend toward contracted supply.",
    valueReallocation: "Value moves from spot brokers to contracted suppliers.",
    winner: "Suppliers with secured long-term GPU allocation.",
    evidence: [{ text: "Reported GPU lead times increased across major buyers." }],
    verification: "Track contract share versus spot share over two quarters.",
    marketBlindSpot: "Markets still assume spot availability normalizes quickly.",
  };

  const executor: StageExecutor = {
    executeStage(stage, input) {
      calls.push(stage);
      inputs[stage] = input as never;
      return (overrides[stage] ?? defaults[stage]) as never;
    },
  };

  return { executor, calls, inputs };
}

describe("ReasoningEngine", () => {
  const input: ReasoningInput = {
    text: "AI compute buyers report longer GPU lead times.",
  };

  it("pipeline executes stages in correct order", async () => {
    const { executor, calls } = createTrackingExecutor();
    const engine = new ReasoningEngine(executor);

    await engine.run(input);

    assert.deepEqual(calls, [...STAGE_ORDER]);
  });

  it("valid fake outputs produce valid ReasoningResult", async () => {
    const { executor } = createTrackingExecutor();
    const engine = new ReasoningEngine(executor);

    const result = await engine.run(input);

    assert.ok(Array.isArray(result.facts));
    assert.equal(result.facts.length, 1);
    assert.equal(
      result.goldCase.customerProblem,
      "Buyers cannot secure AI compute on demand.",
    );
    assert.equal(
      result.goldCase.winner,
      "Suppliers with secured long-term GPU allocation.",
    );
  });

  it("facts remain separate from reasoning", async () => {
    const facts: Fact[] = [{ text: "Observed fact only." }];
    const { executor, inputs } = createTrackingExecutor({
      factExtraction: facts,
      reasoning: "Inferred explanation only.",
    });
    const engine = new ReasoningEngine(executor);

    const result = await engine.run(input);

    assert.deepEqual(result.facts, facts);
    assert.equal(result.goldCase.reasoning, "Inferred explanation only.");
    assert.notEqual(result.goldCase.reasoning, result.facts[0]?.text);
    assert.deepEqual(inputs.reasoning?.facts, facts);
    assert.equal(inputs.reasoning?.change, "Buyers shift from spot purchases to long-term contracts.");
    assert.equal(
      Object.prototype.hasOwnProperty.call(inputs.reasoning ?? {}, "reasoning"),
      false,
    );
  });

  it('"Unknown" is preserved', async () => {
    const { executor } = createTrackingExecutor({
      verification: "Unknown",
      marketBlindSpot: "Unknown",
    });
    const engine = new ReasoningEngine(executor);

    const result = await engine.run(input);

    assert.equal(result.goldCase.verification, "Unknown");
    assert.equal(result.goldCase.marketBlindSpot, "Unknown");
  });

  it("invalid final GoldCase fails validation", async () => {
    const { executor } = createTrackingExecutor({
      reasoning: "   ",
      evidence: [],
    });
    const engine = new ReasoningEngine(executor);

    await assert.rejects(
      () => engine.run(input),
      (error: unknown) => {
        assert.ok(error instanceof GoldCaseValidationError);
        assert.ok(error.errors.includes("reasoning is empty"));
        assert.ok(error.errors.includes("evidence is empty"));
        return true;
      },
    );
  });

  it("no stage runs twice", async () => {
    const { executor, calls } = createTrackingExecutor();
    const engine = new ReasoningEngine(executor);

    await engine.run(input);

    assert.equal(calls.length, STAGE_ORDER.length);
    assert.equal(new Set(calls).size, STAGE_ORDER.length);
  });
});
