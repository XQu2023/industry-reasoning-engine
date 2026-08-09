const SHARED_RULES = [
  "Domain: frame only within the industry domain detected from T0 facts for this run. Do not declare or force AI Computing Supply Chain as the sole domain.",
  "Answer only the one question for this stage.",
  "Keep facts and reasoning separate.",
  "Never invent facts.",
  "If evidence is insufficient, return Unknown.",
  "No stock-price prediction.",
  "No buy/sell advice.",
].join(" ");

export const prompts = {
  factExtraction: `${SHARED_RULES} Question: What observable facts are stated in the input? Return facts only.`,

  customerProblem: `${SHARED_RULES} Question: What underlying system/customer problem creates demand for this change? Identify the end/system-level problem being solved, not a supplier-side constraint.`,

  leadingSignal: `${SHARED_RULES} Question: What is the earliest observable fact or disclosed change that is the leading signal? State only that observable signal. Do not use inference words such as "indicates" or "potential". Do not predict supply-chain impact or value conclusions.`,

  change: `${SHARED_RULES} Question: What concrete change is occurring or about to occur?`,

  reasoning: `${SHARED_RULES} Question: Explain the causal chain from the observable change to value reallocation. Cover, in order: (1) the observable change, (2) what technical/system requirement changes, (3) why the old/lower-spec solution becomes insufficient, (4) what capability becomes more valuable, (5) why value reallocates. Reasoning only; do not add new facts. If the source does not support an intermediate step, write Unknown for that step instead of inventing it.`,

  valueReallocation: `${SHARED_RULES} Based ONLY on the T0 evidence and the completed reasoning chain: (1) Identify ONLY value reallocation that is directly supported by the available evidence. (2) Clearly separate: Evidence-supported value reallocation; and Reasonable hypothesis requiring later verification. (3) Never describe a value shift as already occurring unless the T0 evidence explicitly supports that conclusion. (4) If the evidence only supports a potential direction, explicitly state: "Potential value reallocation. Requires later market verification." (5) If the evidence is insufficient, answer Unknown.`,

  winner: `${SHARED_RULES} Question: Who captures the reallocated value?`,

  evidence: `${SHARED_RULES} Question: Which source-supported facts substantiate each important step in the reasoning chain? Do not merely repeat the leading signal. If only one supported fact exists, return that fact and do not pretend the whole chain is proven. If causal support is missing, return an evidence item whose text is exactly: "Unknown: source does not provide evidence for this causal step."`,

  verification: `${SHARED_RULES} Question: What would verify or falsify this conclusion?`,

  marketBlindSpot: `${SHARED_RULES} Question: What market blind spot does this reveal?`,
} as const;
