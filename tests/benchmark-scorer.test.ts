import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  calculateAverageIra,
  iraWeightsTotal,
  scoreGoldCase,
} from "../benchmark/scorer.ts";
import {
  compareToBaseline,
  runBenchmark,
} from "../benchmark/run-benchmark.ts";
import {
  IRA_WEIGHTS,
  type BenchmarkCase,
  type CaseRunResult,
} from "../benchmark/types.ts";
import { ReasoningEngine, type StageExecutor } from "../src/reasoning-engine.ts";

function sampleCase(id: string): BenchmarkCase {
  return {
    id,
    title: `Sample ${id}`,
    frozenDate: "2026-08-08",
    input: { text: "sample input" },
    groundTruth: {
      customerProblem: "sample problem",
      leadingSignal: "sample signal",
      reasoning: "sample reasoning",
      valueReallocation: "sample reallocation",
      evidence: ["sample evidence"],
    },
    scoringCriteria: {
      facts: "facts rubric",
      customerProblem: "customerProblem rubric",
      leadingSignal: "leadingSignal rubric",
      reasoning: "reasoning rubric",
      valueReallocation: "valueReallocation rubric",
      evidence: "evidence rubric",
    },
  };
}

describe("IRB benchmark scorer", () => {
  it("IRA category weights total 100", () => {
    assert.equal(iraWeightsTotal(), 100);
    assert.equal(IRA_WEIGHTS.facts, 20);
    assert.equal(IRA_WEIGHTS.customerProblem, 20);
    assert.equal(IRA_WEIGHTS.leadingSignal, 15);
    assert.equal(IRA_WEIGHTS.reasoning, 20);
    assert.equal(IRA_WEIGHTS.valueReallocation, 15);
    assert.equal(IRA_WEIGHTS.evidence, 10);
  });

  it("sums explicit evaluator scores into total IRA", () => {
    const benchmarkCase = sampleCase("IRB-TEST");
    const result = scoreGoldCase({
      caseId: benchmarkCase.id,
      benchmarkCase,
      facts: [{ text: "fact" }],
      goldCase: {
        customerProblem: "p",
        leadingSignal: "s",
        change: "c",
        reasoning: "r",
        valueReallocation: "v",
        winner: "w",
        evidence: [{ text: "e" }],
        verification: "Unknown",
        marketBlindSpot: "Unknown",
      },
      evaluatorScores: {
        facts: 20,
        customerProblem: 18,
        leadingSignal: 15,
        reasoning: 16,
        valueReallocation: 12,
        evidence: 8,
      },
    });

    assert.equal(result.totalIra, 89);
    assert.deepEqual(result.categoryScores, {
      facts: 20,
      customerProblem: 18,
      leadingSignal: 15,
      reasoning: 16,
      valueReallocation: 12,
      evidence: 8,
    });
  });

  it("rejects evaluator scores above category max", () => {
    const benchmarkCase = sampleCase("IRB-TEST");
    assert.throws(
      () =>
        scoreGoldCase({
          caseId: benchmarkCase.id,
          benchmarkCase,
          facts: [],
          goldCase: {
            customerProblem: "p",
            leadingSignal: "s",
            change: "c",
            reasoning: "r",
            valueReallocation: "v",
            winner: "w",
            evidence: [{ text: "e" }],
            verification: "Unknown",
            marketBlindSpot: "Unknown",
          },
          evaluatorScores: {
            facts: 21,
            customerProblem: 0,
            leadingSignal: 0,
            reasoning: 0,
            valueReallocation: 0,
            evidence: 0,
          },
        }),
      /exceeds max 20/,
    );
  });

  it("calculates average IRA", () => {
    assert.equal(calculateAverageIra([90, 94, 98]), 94);
    assert.equal(calculateAverageIra([]), 0);
  });

  it("compares improved / unchanged / regressed against baseline", () => {
    const mk = (id: string, totalIra: number): CaseRunResult => ({
      benchmarkCase: sampleCase(id),
      generated: {
        facts: [],
        goldCase: {
          customerProblem: "p",
          leadingSignal: "s",
          change: "c",
          reasoning: "r",
          valueReallocation: "v",
          winner: "w",
          evidence: [{ text: "e" }],
          verification: "Unknown",
          marketBlindSpot: "Unknown",
        },
      },
      score: {
        caseId: id,
        categoryScores: {
          facts: 0,
          customerProblem: 0,
          leadingSignal: 0,
          reasoning: 0,
          valueReallocation: 0,
          evidence: 0,
        },
        totalIra,
        notes: [],
      },
    });

    const comparison = compareToBaseline(
      [mk("A", 95), mk("B", 90), mk("C", 88)],
      { A: 90, B: 90, C: 94 },
    );

    assert.deepEqual(comparison.improved, ["A"]);
    assert.deepEqual(comparison.unchanged, ["B"]);
    assert.deepEqual(comparison.regressed, ["C"]);
  });

  it("runBenchmark averages IRA from explicit evaluator scores", async () => {
    const executor = {
      executeStage(stage: string) {
        if (stage === "factExtraction") return [{ text: "fact" }];
        if (stage === "evidence") return [{ text: "evidence" }];
        return "text";
      },
    } as StageExecutor;
    const engine = new ReasoningEngine(executor);
    const cases = [sampleCase("IRB-A"), sampleCase("IRB-B")];

    const report = await runBenchmark({
      engine,
      cases,
      evaluate: ({ benchmarkCase }) => {
        if (benchmarkCase.id === "IRB-A") {
          return {
            facts: 20,
            customerProblem: 20,
            leadingSignal: 15,
            reasoning: 20,
            valueReallocation: 15,
            evidence: 10,
          };
        }
        return {
          facts: 10,
          customerProblem: 10,
          leadingSignal: 10,
          reasoning: 10,
          valueReallocation: 10,
          evidence: 10,
        };
      },
      baselineByCaseId: {
        "IRB-A": 90,
        "IRB-B": 70,
      },
    });

    assert.equal(report.averageIra, 80);
    assert.deepEqual(report.baselineComparison?.improved, ["IRB-A"]);
    assert.deepEqual(report.baselineComparison?.unchanged, []);
    assert.deepEqual(report.baselineComparison?.regressed, ["IRB-B"]);
  });
});
