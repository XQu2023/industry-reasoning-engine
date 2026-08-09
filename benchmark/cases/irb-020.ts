import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Moderna Therapeutics press release via PR Newswire, 2012-12-06
 *   https://www.prnewswire.com/news-releases/moderna-announces-40-million-in-financing-to-advance-development-of-new-biotherapeutic-modality-messenger-rna-therapeutics-182304241.html
 * Later ground-truth source: Moderna / FDA EUA, 2020-12-18
 *   Moderna EX-99.1: https://www.sec.gov/Archives/edgar/data/1682852/000119312520322279/d20652dex991.htm
 *   FDA announcement: https://www.fda.gov/news-events/press-announcements/fda-takes-additional-action-fight-against-covid-19-issuing-emergency-use-authorization-second-covid
 */
export const irb020Fidelity = "PASS" as const;

export const irb020: BenchmarkCase = {
  id: "IRB-020",
  title: "mRNA platform",
  frozenDate: "2012-12-06",
  input: {
    text: "Moderna Therapeutics press release (2012-12-06): Moderna announces more than $40 million in financing to advance messenger RNA Therapeutics™, described as a novel biotherapeutic modality that stimulates the body’s natural ability to produce therapeutic proteins in vivo. Moderna states that if successful in human clinical trials, this would be the first entirely new way of making therapeutic proteins since recombinant technology more than 30 years prior. Moderna states it has conducted proof-of-concept studies in preclinical models, including non-human primates, inducing in vivo production of dozens of intracellular and secreted therapeutic proteins, and has preclinical programs in oncology supportive care, inherited genetic disorders, hemophilia, and diabetes.",
  },
  groundTruth: {
    facts: [
      "T0: Moderna announces financing to advance messenger RNA Therapeutics as a new biotherapeutic modality (2012-12-06).",
      "T0: Moderna claims mRNA can instruct in vivo production of therapeutic proteins; preclinical PoC including non-human primates.",
      "T0: Moderna positions the approach as a potential new modality since recombinant protein technology.",
    ],
    customerProblem:
      "T0: Drug developers need ways to produce therapeutic proteins beyond slow/expensive recombinant manufacturing for many targets.",
    leadingSignal:
      "T0: Moderna publicly advances an mRNA Therapeutics platform for endogenous protein production.",
    change:
      "T0: Biotherapeutic discovery is offered an mRNA-programmed in vivo protein modality versus only recombinant/exogenous protein supply.",
    reasoning:
      "T0 chain: recombinant protein limits constrain many diseases → mRNA platform aims to make proteins in vivo → if clinical success arrives, value can reallocate toward mRNA platform companies and manufacturing.",
    valueReallocation:
      "T0 thesis: value shifts toward mRNA therapeutic platforms versus solely recombinant protein modalities. LATER verified outcome: FDA issues EUA for Moderna’s COVID-19 mRNA vaccine (mRNA-1273) on 2020-12-18, confirming clinical/regulatory validation of the mRNA platform at scale.",
    winner: "mRNA platform modality (Moderna; later verified via COVID vaccine EUA).",
    evidence: [
      "T0: Moderna 2012-12-06 PR — mRNA Therapeutics modality claims; preclinical PoC; financing to advance programs.",
    ],
    verification:
      "LATER (not T0): FDA EUA for Moderna COVID-19 Vaccine / Moderna 2020-12-18 authorization announcement (mRNA-1273).",
    marketBlindSpot:
      "T0 risk: dismissing mRNA as speculative financing news while underweighting a potential new drug modality.",
  },
  scoringCriteria: {
    facts: "Only 2012-12-06 Moderna PR statements; no COVID-era claims in facts.",
    customerProblem: "Limits of recombinant therapeutic protein approaches at T0.",
    leadingSignal: "Moderna mRNA Therapeutics platform financing/unveil.",
    reasoning: "Protein modality gap → mRNA in vivo production → platform value.",
    valueReallocation:
      "Toward mRNA platforms; 2020 vaccine EUA only as later verification.",
    evidence: "T0 Moderna PR only; EUA stays in verification.",
  },
};

export default irb020;
