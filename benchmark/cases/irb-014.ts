import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Tesla Motors blog “Gigafactory”, 2014-02-26 (also furnished as SEC 8-K exhibit)
 *   https://web.archive.org/web/20160630025638/http://www.teslamotors.com/blog/gigafactory
 *   https://www.sec.gov/Archives/edgar/data/1318605/000119312514069779/d685448d8k.htm
 * Later ground-truth source: Tesla announcement, 2017-01-04
 *   “Battery Cell Production Begins at the Gigafactory” (Tesla/Panasonic mass production of 2170 cells)
 *   Contemporaneous report quoting Tesla: https://electrek.co/2017/01/04/tesla-2170-battery-cell-production-gigafactory-model-3/
 */
export const irb014Fidelity = "PASS" as const;

export const irb014: BenchmarkCase = {
  id: "IRB-014",
  title: "Tesla Gigafactory",
  frozenDate: "2014-02-26",
  input: {
    text: "Tesla Motors blog “Gigafactory” (2014-02-26; also referenced in Tesla SEC Form 8-K the same day): Tesla states it is planning to build a large-scale factory with strategic battery manufacturing partners to achieve economies of scale and minimize battery costs. Tesla states the Gigafactory is designed to reduce cell costs much faster than the status quo and, by 2020, produce more lithium-ion batteries annually than were produced worldwide in 2013. Tesla expects that by the end of the first year of volume production of its mass-market vehicle, the Gigafactory will have driven down battery pack cost per kWh by more than 30 percent.",
  },
  groundTruth: {
    facts: [
      "T0: Tesla announces plans for a large-scale Gigafactory with battery manufacturing partners (2014-02-26).",
      "T0: Tesla targets >30% battery pack $/kWh cost reduction by first year of mass-market vehicle volume production.",
      "T0: Tesla claims 2020 Gigafactory output intended to exceed 2013 worldwide lithium-ion battery production.",
    ],
    customerProblem:
      "T0: Tesla needs much lower battery cost/scale to enable a mass-market electric vehicle.",
    leadingSignal:
      "T0: Tesla discloses the Gigafactory vertical scale-up plan for cells/packs with partners.",
    change:
      "T0: EV battery supply strategy shifts from merchant cell constraints toward Tesla-led mega-scale co-located production.",
    reasoning:
      "T0 chain: mass-market EV blocked by battery cost/supply → Gigafactory aims to cut $/kWh via scale → value can reallocate toward integrated cell/pack manufacturing capacity if production materializes.",
    valueReallocation:
      "T0 thesis: value shifts toward mega-scale integrated battery manufacturing (Tesla + partners) versus constrained merchant cell supply. LATER verified outcome: Tesla announces mass production of 2170 lithium-ion cells with Panasonic at the Gigafactory (2017-01-04).",
    winner: "Tesla/Panasonic Gigafactory cell production capacity (later verified start of mass production).",
    evidence: [
      "T0: Tesla Gigafactory blog 2014-02-26 + SEC 8-K referencing that blog (cost/scale claims).",
    ],
    verification:
      "LATER (not T0): Tesla 2017-01-04 Gigafactory cell mass-production announcement (2170 cells for energy products and Model 3).",
    marketBlindSpot:
      "T0 risk: treating Gigafactory as a real-estate/jobs story while underweighting battery cost as the EV bottleneck.",
  },
  scoringCriteria: {
    facts: "Only 2014-02-26 Tesla Gigafactory blog/8-K statements.",
    customerProblem: "Battery cost/scale barrier to mass-market EV.",
    leadingSignal: "Gigafactory plan disclosure.",
    reasoning: "Battery bottleneck → mega-factory → manufacturing value shift.",
    valueReallocation:
      "Toward scaled cell/pack manufacturing; 2017 production start only as later verification.",
    evidence: "T0 Tesla blog/8-K only; cell mass production stays in verification.",
  },
};

export default irb014;
