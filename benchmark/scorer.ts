import {
  IRA_CATEGORIES,
  IRA_WEIGHTS,
  type BenchmarkCase,
  type CategoryScores,
  type EvaluatorScores,
  type GoldCase,
  type ScoreResult,
} from "./types.ts";

export type ScoreGoldCaseArgs = {
  caseId: string;
  goldCase: GoldCase;
  facts: { text: string; source?: string }[];
  benchmarkCase: BenchmarkCase;
  /** Explicit evaluator scores. Required in V0.1 — no automatic semantic scoring. */
  evaluatorScores: EvaluatorScores;
  notes?: string[];
};

function assertFiniteScore(
  category: keyof CategoryScores,
  score: number,
  max: number,
): string | null {
  if (!Number.isFinite(score)) {
    return `${category}: score must be a finite number`;
  }
  if (score < 0) {
    return `${category}: score ${score} is below 0`;
  }
  if (score > max) {
    return `${category}: score ${score} exceeds max ${max}`;
  }
  return null;
}

/**
 * Score a generated GoldCase against a BenchmarkCase.
 * V0.1: category points are supplied explicitly by an evaluator.
 * This function only validates arithmetic and sums IRA.
 */
export function scoreGoldCase(args: ScoreGoldCaseArgs): ScoreResult {
  const notes: string[] = [...(args.notes ?? [])];
  const categoryScores: CategoryScores = {
    facts: args.evaluatorScores.facts,
    customerProblem: args.evaluatorScores.customerProblem,
    leadingSignal: args.evaluatorScores.leadingSignal,
    reasoning: args.evaluatorScores.reasoning,
    valueReallocation: args.evaluatorScores.valueReallocation,
    evidence: args.evaluatorScores.evidence,
  };

  // Keep generated artifacts available for human review notes only.
  void args.goldCase;
  void args.facts;
  void args.benchmarkCase;

  for (const category of IRA_CATEGORIES) {
    const error = assertFiniteScore(
      category,
      categoryScores[category],
      IRA_WEIGHTS[category],
    );
    if (error) {
      throw new Error(`Invalid evaluator score for ${args.caseId}: ${error}`);
    }
  }

  const totalIra = IRA_CATEGORIES.reduce(
    (sum, category) => sum + categoryScores[category],
    0,
  );

  notes.push(
    "V0.1 scoring uses explicit evaluator scores only; no automatic semantic scoring.",
  );

  return {
    caseId: args.caseId,
    categoryScores,
    totalIra,
    notes,
  };
}

export function calculateAverageIra(totals: number[]): number {
  if (totals.length === 0) return 0;
  const sum = totals.reduce((acc, value) => acc + value, 0);
  return sum / totals.length;
}

export function iraWeightsTotal(): number {
  return IRA_CATEGORIES.reduce((sum, category) => sum + IRA_WEIGHTS[category], 0);
}
