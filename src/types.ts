export type Fact = {
  text: string;
  source?: string;
};

export type EvidenceItem = {
  text: string;
  source?: string;
};

export type GoldCase = {
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

export type ReasoningInput = {
  text: string;
};

export type ReasoningResult = {
  facts: Fact[];
  goldCase: GoldCase;
};
