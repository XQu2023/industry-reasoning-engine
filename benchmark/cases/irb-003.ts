import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: NVIDIA Blackwell platform press release, 2024-03-18
 *   https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing
 *   (GB200 NVL72 described as liquid-cooled rack-scale system)
 * Also consistent with NVIDIA GB200 NVL72 product page stating liquid-cooled design.
 */
export const irb003Fidelity = "PASS" as const;

export const irb003: BenchmarkCase = {
  id: "IRB-003",
  title: "GB200 → liquid cooling",
  frozenDate: "2024-03-18",
  input: {
    text: "NVIDIA press release (2024-03-18): NVIDIA announces the Blackwell platform including the NVIDIA GB200 NVL72. NVIDIA describes GB200 NVL72 as a multi-node, liquid-cooled, rack-scale system for the most compute-intensive workloads, connected by fifth-generation NVLink.",
  },
  groundTruth: {
    facts: [
      "T0: NVIDIA announces GB200 NVL72 with the Blackwell platform (2024-03-18).",
      "T0: NVIDIA describes GB200 NVL72 as a liquid-cooled, rack-scale / multi-node system.",
    ],
    customerProblem:
      "T0 implication: customers deploying GB200-class rack-scale AI systems must manage thermal/power density beyond conventional air-cooled assumptions for that disclosed design.",
    leadingSignal:
      "T0: NVIDIA discloses GB200 NVL72 as liquid-cooled rack-scale infrastructure.",
    change:
      "T0: Buyers planning GB200 NVL72 deployments are directed toward liquid-cooled rack designs rather than air-cooled equivalents for that platform.",
    reasoning:
      "T0 chain: GB200 NVL72 is disclosed as liquid-cooled rack-scale compute → air-cooled facility assumptions are insufficient for that design point → liquid-cooling capability becomes required → value reallocates toward liquid-cooling infrastructure providers.",
    valueReallocation:
      "T0 thesis: value shifts toward liquid-cooling plant/rack infrastructure for GB200-class deployments.",
    winner:
      "T0 thesis: liquid-cooling and liquid-cooled rack infrastructure providers supporting GB200 NVL72 deployments.",
    evidence: [
      "NVIDIA Blackwell press release 2024-03-18: GB200 NVL72 multi-node liquid-cooled rack-scale system.",
    ],
    verification: "Unknown",
    marketBlindSpot:
      "T0 risk: GPU attention may understate facility-side liquid-cooling value capture for GB200 racks.",
  },
  scoringCriteria: {
    facts: "Only 2024-03-18 NVIDIA statements that GB200 NVL72 is liquid-cooled rack-scale.",
    customerProblem: "Thermal/power density for disclosed liquid-cooled rack design.",
    leadingSignal: "Liquid-cooled GB200 NVL72 disclosure.",
    reasoning: "Disclosed liquid-cooled design → air insufficient → cooling value.",
    valueReallocation: "Toward liquid-cooling infrastructure.",
    evidence: "Must cite NVIDIA PR; no invented coolant temperatures unless sourced.",
  },
};

export default irb003;
