import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Intel official Optane SSD DC P4800X product documentation/briefs
 *   describing a new storage tier and Memory Drive Technology (2017 product intro).
 *   Frozen date 2017-03-19 matches the widely cited first Optane SSD DC P4800X
 *   announcement day; Intel materials are the authoritative product source.
 * Later outcome: Intel Q2 2022 statement to wind down / cease future Optane
 *   product development (communicated 2022-07-29 earnings period).
 */
export const irb007Fidelity = "PASS" as const;

export const irb007: BenchmarkCase = {
  id: "IRB-007",
  title: "Intel Optane",
  frozenDate: "2017-03-19",
  input: {
    text: "Intel Optane SSD DC P4800X product materials (2017): Intel describes the Optane SSD DC P4800X as combining attributes of memory and storage, providing a new data storage tier intended to break through data-access bottlenecks with high throughput, low latency, high endurance, and high QoS. Intel also describes using Optane SSD DC P4800X with Intel Memory Drive Technology to extend memory pools alongside DRAM.",
  },
  groundTruth: {
    facts: [
      "T0: Intel positions Optane SSD DC P4800X as a new storage tier combining memory and storage attributes.",
      "T0: Intel claims high throughput, low latency, high endurance, and high QoS versus traditional NAND bottlenecks.",
      "T0: Intel describes Memory Drive Technology using Optane SSD to enlarge memory pools with less DRAM.",
    ],
    customerProblem:
      "T0: Data-center operators want lower-latency storage/caching and larger affordable memory pools than NAND/DRAM configurations alone provide.",
    leadingSignal:
      "T0: Intel introduces Optane SSD DC P4800X as a new intermediate memory/storage tier.",
    change:
      "T0: Buyers are offered a new hierarchy tier between conventional NAND storage and DRAM memory.",
    reasoning:
      "T0 intended chain: customers need lower latency / larger memory pools → Optane is offered as that new tier → durable reallocation depends on later cost/ecosystem/roadmap support.",
    valueReallocation:
      "T0 intended: value toward Optane middle-tier devices and related memory-tier software/hardware. LATER verified outcome: Optane does not become a lasting mainstream hierarchy winner after Intel winds down Optane product development (2022).",
    winner:
      "LATER verified: Optane is not the lasting winner; DRAM/NAND ecosystems retain mainstream value after Optane wind-down.",
    evidence: [
      "T0: Intel Optane SSD DC P4800X product brief/positioning as new storage tier + Memory Drive Technology.",
    ],
    verification:
      "LATER (not T0): Intel states in Q2 2022 communications that it will wind down / cease future product development in the Optane business (around 2022-07-29).",
    marketBlindSpot:
      "T0 risk: novel memory-class claims may be overweighted versus cost and ecosystem adoption constraints.",
  },
  scoringCriteria: {
    facts: "T0 Intel product claims only; Optane wind-down is not a T0 fact.",
    customerProblem: "Latency / memory-pool gap at T0.",
    leadingSignal: "Optane SSD DC P4800X introduction.",
    reasoning: "Separate intended T0 reallocation from later verified wind-down.",
    valueReallocation:
      "Score intended T0 shift to Optane tier; later failure belongs only in verification/later notes.",
    evidence: "Split T0 product docs from later Intel wind-down statement.",
  },
};

export default irb007;
