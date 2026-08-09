import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { pathToFileURL } from "node:url";
import type { ReasoningEngine } from "../src/reasoning-engine.ts";
import {
  calculateAverageIra,
  scoreGoldCase,
} from "./scorer.ts";
import type {
  BaselineComparison,
  BenchmarkCase,
  BenchmarkReport,
  CaseRunResult,
  EvaluatorScores,
} from "./types.ts";

export type EvaluateCase = (args: {
  benchmarkCase: BenchmarkCase;
  generated: CaseRunResult["generated"];
}) => EvaluatorScores | Promise<EvaluatorScores>;

export type RunBenchmarkOptions = {
  engine: ReasoningEngine;
  cases: BenchmarkCase[];
  evaluate: EvaluateCase;
  /** Optional prior IRA by case id. When omitted, no improved/unchanged/regressed report. */
  baselineByCaseId?: Record<string, number>;
};

export function compareToBaseline(
  results: CaseRunResult[],
  baselineByCaseId: Record<string, number>,
): BaselineComparison {
  const improved: string[] = [];
  const unchanged: string[] = [];
  const regressed: string[] = [];

  for (const result of results) {
    const prior = baselineByCaseId[result.benchmarkCase.id];
    if (prior === undefined) continue;
    const current = result.score.totalIra;
    if (current > prior) improved.push(result.benchmarkCase.id);
    else if (current < prior) regressed.push(result.benchmarkCase.id);
    else unchanged.push(result.benchmarkCase.id);
  }

  return { improved, unchanged, regressed };
}

export async function loadBenchmarkCases(
  casesDir: string,
): Promise<BenchmarkCase[]> {
  let entries: string[] = [];
  try {
    entries = await readdir(casesDir);
  } catch {
    return [];
  }

  const cases: BenchmarkCase[] = [];
  for (const entry of entries) {
    if (entry === "README.md") continue;
    if (extname(entry) !== ".ts") continue;
    const moduleUrl = pathToFileURL(join(casesDir, entry)).href;
    const loaded = (await import(moduleUrl)) as {
      default?: BenchmarkCase;
      benchmarkCase?: BenchmarkCase;
    };
    const benchmarkCase = loaded.default ?? loaded.benchmarkCase;
    if (!benchmarkCase) {
      throw new Error(
        `Benchmark case module ${entry} must export default or benchmarkCase`,
      );
    }
    cases.push(benchmarkCase);
  }

  cases.sort((a, b) => a.id.localeCompare(b.id));
  return cases;
}

export async function runBenchmark(
  options: RunBenchmarkOptions,
): Promise<BenchmarkReport> {
  const results: CaseRunResult[] = [];

  for (const benchmarkCase of options.cases) {
    const generated = await options.engine.run(benchmarkCase.input);
    const evaluatorScores = await options.evaluate({
      benchmarkCase,
      generated,
    });
    const score = scoreGoldCase({
      caseId: benchmarkCase.id,
      goldCase: generated.goldCase,
      facts: generated.facts,
      benchmarkCase,
      evaluatorScores,
    });
    results.push({ benchmarkCase, generated, score });
  }

  const averageIra = calculateAverageIra(
    results.map((result) => result.score.totalIra),
  );

  const baselineComparison = options.baselineByCaseId
    ? compareToBaseline(results, options.baselineByCaseId)
    : null;

  return {
    results,
    averageIra,
    baselineComparison,
  };
}

export function formatBenchmarkReport(report: BenchmarkReport): string {
  const lines: string[] = [];
  lines.push(`Cases: ${report.results.length}`);
  lines.push(`Average IRA: ${report.averageIra.toFixed(1)}`);

  for (const result of report.results) {
    const c = result.score.categoryScores;
    lines.push(
      [
        result.benchmarkCase.id,
        `facts=${c.facts}`,
        `customerProblem=${c.customerProblem}`,
        `leadingSignal=${c.leadingSignal}`,
        `reasoning=${c.reasoning}`,
        `valueReallocation=${c.valueReallocation}`,
        `evidence=${c.evidence}`,
        `IRA=${result.score.totalIra}`,
      ].join(" | "),
    );
  }

  if (report.baselineComparison) {
    lines.push(
      `Improved: ${report.baselineComparison.improved.length}`,
      `Unchanged: ${report.baselineComparison.unchanged.length}`,
      `Regressed: ${report.baselineComparison.regressed.length}`,
    );
  } else {
    lines.push("Baseline comparison: none");
  }

  return lines.join("\n");
}
