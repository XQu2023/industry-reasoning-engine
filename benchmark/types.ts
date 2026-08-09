import type { GoldCase, ReasoningInput, ReasoningResult } from "../src/types.ts";

/** Exact IRA category weights. Total = 100. */
export const IRA_WEIGHTS = {
  facts: 20,
  customerProblem: 20,
  leadingSignal: 15,
  reasoning: 20,
  valueReallocation: 15,
  evidence: 10,
} as const;

export type IraCategory = keyof typeof IRA_WEIGHTS;

export const IRA_CATEGORIES = [
  "facts",
  "customerProblem",
  "leadingSignal",
  "reasoning",
  "valueReallocation",
  "evidence",
] as const satisfies ReadonlyArray<IraCategory>;

export type CategoryScores = {
  facts: number;
  customerProblem: number;
  leadingSignal: number;
  reasoning: number;
  valueReallocation: number;
  evidence: number;
};

/** Human rubric notes per category. Not auto-scored in V0.1. */
export type ScoringCriteria = {
  facts: string;
  customerProblem: string;
  leadingSignal: string;
  reasoning: string;
  valueReallocation: string;
  evidence: string;
};

/** Expected reference material for evaluators. */
export type GroundTruth = {
  facts?: string[];
  customerProblem?: string;
  leadingSignal?: string;
  change?: string;
  reasoning?: string;
  valueReallocation?: string;
  winner?: string;
  evidence?: string[];
  verification?: string;
  marketBlindSpot?: string;
};

export type BenchmarkCase = {
  id: string;
  title: string;
  frozenDate: string;
  input: ReasoningInput;
  groundTruth: GroundTruth;
  scoringCriteria: ScoringCriteria;
};

/** Explicit evaluator-supplied category scores for V0.1. */
export type EvaluatorScores = CategoryScores;

export type ScoreResult = {
  caseId: string;
  categoryScores: CategoryScores;
  totalIra: number;
  notes: string[];
};

export type CaseRunResult = {
  benchmarkCase: BenchmarkCase;
  generated: ReasoningResult;
  score: ScoreResult;
};

export type BaselineComparison = {
  improved: string[];
  unchanged: string[];
  regressed: string[];
};

export type BenchmarkReport = {
  results: CaseRunResult[];
  averageIra: number;
  baselineComparison: BaselineComparison | null;
};

export type { GoldCase, ReasoningResult };
