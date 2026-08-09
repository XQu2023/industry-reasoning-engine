import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: NVIDIA Blackwell platform press release, 2024-03-18
 *   Fifth-Generation NVLink: 1.8TB/s bidirectional per GPU; communication among up to 576 GPUs.
 */
export const irb004Fidelity = "PASS" as const;

export const irb004: BenchmarkCase = {
  id: "IRB-004",
  title: "Blackwell → NVLink",
  frozenDate: "2024-03-18",
  input: {
    text: "NVIDIA press release (2024-03-18): As part of the Blackwell platform, NVIDIA announces fifth-generation NVLink delivering 1.8TB/s bidirectional throughput per GPU and high-speed communication among up to 576 GPUs for complex large language models.",
  },
  groundTruth: {
    facts: [
      "T0: NVIDIA announces fifth-generation NVLink with Blackwell (2024-03-18).",
      "T0: NVIDIA states 1.8TB/s bidirectional throughput per GPU.",
      "T0: NVIDIA states communication among up to 576 GPUs for complex LLMs.",
    ],
    customerProblem:
      "T0 implication from NVIDIA: training/inference for multitrillion-parameter and mixture-of-experts models needs high-speed multi-GPU communication.",
    leadingSignal:
      "T0: Blackwell materials emphasize fifth-generation NVLink scale-up interconnect.",
    change:
      "T0: Multi-GPU Blackwell system designs are disclosed around NVLink-domain scaling up to hundreds of GPUs.",
    reasoning:
      "T0 chain: large models need many GPUs communicating quickly → NVLink provides the disclosed high-bandwidth GPU-to-GPU path → weaker interconnect assumptions are insufficient for the disclosed scale → NVLink fabric capability becomes more valuable → value reallocates toward NVLink-domain system designs.",
    valueReallocation:
      "T0 thesis: value shifts toward high-bandwidth NVLink interconnect fabric within the Blackwell AI system stack.",
    winner:
      "T0 thesis: NVIDIA NVLink-domain system capability / providers implementing NVLink-scale Blackwell systems.",
    evidence: [
      "NVIDIA Blackwell press release 2024-03-18: fifth-generation NVLink 1.8TB/s per GPU; up to 576 GPUs.",
    ],
    verification: "Unknown",
    marketBlindSpot:
      "T0 risk: GPU FLOPs attention may underweight interconnect as a gating value layer.",
  },
  scoringCriteria: {
    facts: "Only 2024-03-18 NVLink specs from NVIDIA PR.",
    customerProblem: "Multi-GPU communication for large LLMs as stated by NVIDIA.",
    leadingSignal: "Fifth-gen NVLink disclosure.",
    reasoning: "Scale → interconnect need → NVLink value.",
    valueReallocation: "Toward NVLink fabric capability.",
    evidence: "Must cite NVIDIA PR figures only.",
  },
};

export default irb004;
