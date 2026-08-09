import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: ASML press release, 2010-02-22 (joint with TSMC)
 *   TSMC / ASML announce TSMC will take delivery of TWINSCAN NXE:3100 EUV system
 *   https://pr.tsmc.com/english/news/1604
 *   (ASML announcement mirrored in SEC exhibit filings)
 * Later ground-truth source: TSMC press release, 2019-10-07
 *   https://pr.tsmc.com/english/news/2010
 *   N7+ first commercially available EUV process delivering customer products in high volume
 */
export const irb009Fidelity = "PASS" as const;

export const irb009: BenchmarkCase = {
  id: "IRB-009",
  title: "ASML EUV",
  frozenDate: "2010-02-22",
  input: {
    text: "ASML / TSMC announcement (2010-02-22): ASML Holding NV announces that Taiwan Semiconductor Manufacturing Company will take delivery of a TWINSCAN NXE:3100 extreme ultra-violet (EUV) lithography system. The announcement states this tool represents one of six NXE:3100 EUV systems for ASML’s worldwide partners and customers, and that TSMC is expected to be the first dedicated foundry conducting on-site EUV development, installing the system at Fab 12 for development of future technology nodes.",
  },
  groundTruth: {
    facts: [
      "T0: ASML announces TSMC will take delivery of a TWINSCAN NXE:3100 EUV lithography system (2010-02-22).",
      "T0: NXE:3100 is identified as one of six NXE:3100 EUV systems for ASML partners/customers.",
      "T0: TSMC is expected to install the system at Fab 12 for on-site EUV development of future nodes.",
    ],
    customerProblem:
      "T0: Advanced foundries need next-generation lithography capability to continue patterning smaller features for future process nodes.",
    leadingSignal:
      "T0: ASML places a pre-production NXE:3100 EUV tool with TSMC for on-site EUV development.",
    change:
      "T0: Leading-edge foundry process development begins incorporating ASML EUV tooling rather than relying only on prior non-EUV lithography paths.",
    reasoning:
      "T0 chain: future nodes need finer patterning → EUV is the disclosed next lithography path → ASML supplies the NXE EUV tools customers are taking → value reallocates toward ASML’s EUV lithography franchise.",
    valueReallocation:
      "T0 thesis: value shifts toward ASML EUV lithography systems within the semiconductor equipment stack. LATER verified outcome: TSMC announces N7+ as the industry’s first commercially available EUV process delivering customer products in high volume (2019-10-07), confirming EUV moved from development tools into high-volume manufacturing.",
    winner: "ASML as supplier of EUV lithography systems.",
    evidence: [
      "T0: ASML/TSMC 2010-02-22 NXE:3100 delivery announcement.",
    ],
    verification:
      "LATER (not T0): TSMC press release 2019-10-07 — N7+ first commercially available EUV lithography technology delivering customer products in high volume; TSMC states EUV tools reached production maturity.",
    marketBlindSpot:
      "T0 risk: chipmakers/design wins may be overweighted while the scarce EUV tool layer’s value capture is underweighted.",
  },
  scoringCriteria: {
    facts: "Only 2010-02-22 ASML/TSMC NXE:3100 announcement statements.",
    customerProblem: "Need for next-node lithography capability.",
    leadingSignal: "NXE:3100 EUV tool placement at TSMC.",
    reasoning: "Future nodes → EUV tools → ASML value.",
    valueReallocation: "Toward ASML EUV; N7+ HVM only as later verification.",
    evidence: "T0 announcement only; 2019 HVM stays in verification.",
  },
};

export default irb009;
