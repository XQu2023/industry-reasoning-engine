import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  ReasoningEngine,
  type StageExecutor,
  type StageOutputs,
} from "../src/reasoning-engine.ts";
import { validateGoldCase } from "../src/validate-gold-case.ts";
import {
  ai001ExpectedResult,
  ai001Facts,
  ai001GoldCase,
  ai001Input,
} from "./fixtures/ai-001.ts";

function createAi001Executor(): StageExecutor {
  const outputs: StageOutputs = {
    factExtraction: ai001Facts,
    customerProblem: ai001GoldCase.customerProblem,
    leadingSignal: ai001GoldCase.leadingSignal,
    change: ai001GoldCase.change,
    reasoning: ai001GoldCase.reasoning,
    valueReallocation: ai001GoldCase.valueReallocation,
    winner: ai001GoldCase.winner,
    evidence: ai001GoldCase.evidence,
    verification: ai001GoldCase.verification,
    marketBlindSpot: ai001GoldCase.marketBlindSpot,
  };

  return {
    executeStage(stage) {
      return outputs[stage];
    },
  };
}

describe("AI-001 gold case", () => {
  it("runs through the entire pipeline and matches the approved fixture", async () => {
    const engine = new ReasoningEngine(createAi001Executor());
    const result = await engine.run(ai001Input);

    const validation = validateGoldCase(result.goldCase);
    assert.equal(validation.valid, true);
    assert.deepEqual(validation.errors, []);

    assert.equal(result.goldCase.customerProblem, ai001GoldCase.customerProblem);
    assert.equal(result.goldCase.leadingSignal, ai001GoldCase.leadingSignal);
    assert.equal(result.goldCase.change, ai001GoldCase.change);
    assert.equal(result.goldCase.reasoning, ai001GoldCase.reasoning);
    assert.equal(
      result.goldCase.valueReallocation,
      ai001GoldCase.valueReallocation,
    );
    assert.equal(result.goldCase.winner, ai001GoldCase.winner);
    assert.deepEqual(result.goldCase.evidence, ai001GoldCase.evidence);
    assert.equal(result.goldCase.verification, ai001GoldCase.verification);
    assert.equal(
      result.goldCase.marketBlindSpot,
      ai001GoldCase.marketBlindSpot,
    );

    assert.equal(result.goldCase.verification, "Unknown");
    assert.equal(
      result.goldCase.marketBlindSpot,
      "Market attention focuses on the GPU, while high-end PCB value-per-system may be underappreciated.",
    );
    assert.ok(result.goldCase.evidence.length > 0);

    assert.deepEqual(result.facts, ai001Facts);
    assert.notEqual(result.goldCase.reasoning, result.facts[0]?.text);
    assert.notEqual(result.goldCase.reasoning, result.facts[1]?.text);

    assert.deepEqual(result, ai001ExpectedResult);
  });
});
