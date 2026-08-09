import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Snowflake Computing press release via GlobeNewswire/Marketwired, 2014-10-21
 *   https://www.globenewswire.com/news-release/2014/10/21/1186817/0/en/Snowflake-Raises-26M-in-Funding-to-Reinvent-the-Data-Warehouse.html
 *   (companion product announcement: Snowflake Elastic Data Warehouse out of stealth / beta)
 * Later ground-truth source: Snowflake Computing press release, 2015-06-23
 *   https://www.globenewswire.com/news-release/2015/06/23/1186856/0/en/Snowflake-Announces-45M-in-Funding-to-Advance-Cloud-Data-Warehousing.html
 *   (general availability of Snowflake Elastic Data Warehouse)
 */
export const irb019Fidelity = "PASS" as const;

export const irb019: BenchmarkCase = {
  id: "IRB-019",
  title: "Snowflake",
  frozenDate: "2014-10-21",
  input: {
    text: "Snowflake Computing press release (2014-10-21): Snowflake emerges from stealth announcing the Snowflake Elastic Data Warehouse, described as a data warehouse built from the ground up as a cloud service. Snowflake states its architecture delivers SQL data warehousing, big-data flexibility, and cloud elasticity at a claimed 90 percent lower cost than on-premises data warehouses. Snowflake states the service is available in beta for qualified organizations and announces $26 million in funding from Redpoint, Sutter Hill, and Wing Ventures.",
  },
  groundTruth: {
    facts: [
      "T0: Snowflake announces Elastic Data Warehouse as a cloud-native SQL data warehouse service (2014-10-21).",
      "T0: Snowflake claims cloud elasticity and much lower cost versus on-premises warehouses; beta availability.",
      "T0: Snowflake discloses $26M funding alongside the product unveil.",
    ],
    customerProblem:
      "T0: Organizations want warehouse analytics power without on-premises cost/elasticity constraints.",
    leadingSignal:
      "T0: Snowflake exits stealth with a cloud-built elastic SQL data warehouse (beta).",
    change:
      "T0: Data warehousing is offered as a separated-compute/storage cloud service rather than only on-prem appliances.",
    reasoning:
      "T0 chain: warehouses are expensive/inflexible on-prem → Snowflake offers cloud-native elastic SQL DW → value can reallocate toward cloud warehouse platforms if GA adoption follows.",
    valueReallocation:
      "T0 thesis: value shifts toward cloud-native elastic data warehouses (Snowflake) versus on-premises DW stacks. LATER verified outcome: Snowflake announces general availability of the Elastic Data Warehouse (2015-06-23).",
    winner: "Snowflake cloud data warehouse platform (later verified at GA).",
    evidence: [
      "T0: Snowflake 2014-10-21 PR — Elastic Data Warehouse cloud service; cost/elasticity claims; beta.",
    ],
    verification:
      "LATER (not T0): Snowflake 2015-06-23 PR — general availability of Snowflake Elastic Data Warehouse (+ Series C).",
    marketBlindSpot:
      "T0 risk: treating Snowflake as another Hadoop/big-data tool while underweighting SQL warehouse displacement to cloud.",
  },
  scoringCriteria: {
    facts: "Only 2014-10-21 Snowflake stealth/beta PR statements.",
    customerProblem: "On-prem warehouse cost/elasticity gap.",
    leadingSignal: "Snowflake Elastic Data Warehouse beta unveil.",
    reasoning: "Warehouse pain → cloud elastic DW → platform value shift.",
    valueReallocation: "Toward Snowflake cloud DW; GA only as later verification.",
    evidence: "T0 Snowflake PR only; GA stays in verification.",
  },
};

export default irb019;
