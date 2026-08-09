import type { Fact, GoldCase, ReasoningInput, ReasoningResult } from "../../src/types.ts";

/** AI-001 — NVIDIA Rubin → high-end PCB value reallocation */
export const AI_001_ID = "AI-001";

export const ai001Input: ReasoningInput = {
  text: "AI PCB Rubin report: NVIDIA Rubin platform increases requirements on high-end PCB content per AI system.",
};

/** Facts only — observable claims from the source report framing. Not reasoning. */
export const ai001Facts: Fact[] = [
  {
    text: "NVIDIA Rubin is positioned as a next-generation AI compute platform.",
    source: "AI PCB Rubin report",
  },
  {
    text: "The report links Rubin-class systems to higher high-end PCB content per system.",
    source: "AI PCB Rubin report",
  },
];

export const ai001GoldCase: GoldCase = {
  customerProblem:
    "AI system builders need interconnect and board capability that can support denser, higher-performance Rubin-class compute configurations.",
  leadingSignal:
    "Rubin architecture and system requirements disclosed in the source report.",
  change:
    "Customer BOM decisions shift more budget and qualification effort toward high-end PCB capability in AI systems.",
  reasoning:
    "Rubin-class system requirements increase interconnect, signal-integrity and power-delivery demands → PCB specifications become more demanding → high-layer / HDI / low-loss PCB capability becomes more valuable → value shifts toward suppliers able to meet those requirements.",
  valueReallocation:
    "Value shifts within the AI system BOM toward high-end PCB suppliers relative to a GPU-only attention frame.",
  winner:
    "High-end PCB suppliers able to meet denser Rubin-class AI system requirements.",
  evidence: [
    {
      text: "AI PCB Rubin report links NVIDIA Rubin platform direction to higher high-end PCB content per AI system.",
      source: "AI PCB Rubin report",
    },
  ],
  verification: "Unknown",
  marketBlindSpot:
    "Market attention focuses on the GPU, while high-end PCB value-per-system may be underappreciated.",
};

export const ai001ExpectedResult: ReasoningResult = {
  facts: ai001Facts,
  goldCase: ai001GoldCase,
};
