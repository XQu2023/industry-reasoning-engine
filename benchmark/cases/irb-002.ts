import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: NVIDIA press release, 2023-11-13
 *   "NVIDIA Supercharges Hopper..." (investor.nvidia.com / nvidianews)
 * Ground-truth later outcome: not required for this success-path case;
 *   T0 announcement already states H200 is first GPU with HBM3e and gives
 *   capacity/bandwidth claims vs prior NVIDIA GPU.
 */
export const irb002Fidelity = "PASS" as const;

export const irb002: BenchmarkCase = {
  id: "IRB-002",
  title: "HBM3E → NVIDIA H200",
  frozenDate: "2023-11-13",
  input: {
    text: "NVIDIA press release (2023-11-13): NVIDIA announces the NVIDIA HGX H200 platform featuring the NVIDIA H200 Tensor Core GPU. NVIDIA states the H200 is the first GPU to offer HBM3e. With HBM3e, NVIDIA states the H200 delivers 141GB of memory at 4.8 terabytes per second, nearly double the capacity and 2.4x more bandwidth compared with its predecessor, the NVIDIA A100.",
  },
  groundTruth: {
    facts: [
      "T0: NVIDIA announces HGX H200 / H200 Tensor Core GPU (2023-11-13).",
      "T0: NVIDIA states H200 is the first GPU to offer HBM3e.",
      "T0: NVIDIA states H200 has 141GB memory at 4.8 TB/s, nearly double capacity and 2.4x bandwidth vs A100.",
    ],
    customerProblem:
      "T0 implication from NVIDIA statement: generative AI and large-model / HPC workloads need larger, faster GPU memory to process vast amounts of data efficiently.",
    leadingSignal:
      "T0: NVIDIA discloses H200 as first GPU with HBM3e and higher memory capacity/bandwidth vs A100.",
    change:
      "T0: Buyers of H200-class systems are offered a GPU configuration that depends on HBM3e memory specifications disclosed by NVIDIA.",
    reasoning:
      "T0 chain: AI/HPC workloads need large fast GPU memory → H200 couples the platform to HBM3e with higher capacity/bandwidth than A100 → prior lower-memory GPU configurations are insufficient for the disclosed H200 memory point → HBM3e supply capability becomes more valuable in that stack → value reallocates toward HBM providers supporting H200.",
    valueReallocation:
      "T0 thesis: value shifts toward HBM3e memory suppliers within the H200 AI accelerator stack relative to a GPU-only attention frame.",
    winner:
      "T0 thesis: HBM suppliers able to provide HBM3e for H200-class GPUs.",
    evidence: [
      "NVIDIA press release 2023-11-13: H200 first GPU with HBM3e; 141GB at 4.8 TB/s; capacity/bandwidth comparison vs A100.",
    ],
    verification: "Unknown",
    marketBlindSpot:
      "T0 risk: attention focuses on the H200 GPU SKU while HBM3e content/supply constraints may be underweighted.",
  },
  scoringCriteria: {
    facts: "Only 2023-11-13 NVIDIA PR statements about H200/HBM3e.",
    customerProblem: "Must follow NVIDIA's stated generative AI / large-data memory need; no invented model names.",
    leadingSignal: "H200↔HBM3e disclosure only.",
    reasoning: "Memory need → HBM3e requirement → value to HBM suppliers.",
    valueReallocation: "Toward HBM3e suppliers in the accelerator BOM.",
    evidence: "Must cite the NVIDIA PR claims; Unknown for unsupported steps.",
  },
};

export default irb002;
