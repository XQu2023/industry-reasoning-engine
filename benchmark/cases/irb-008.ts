import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Google blog, 2019-03-19
 *   https://blog.google/products-and-platforms/products/stadia/stadia-a-new-way-to-play/
 * Later outcome: Google blog, 2022-09-29
 *   https://blog.google/products-and-platforms/products/stadia/message-on-stadia-streaming-strategy/
 */
export const irb008Fidelity = "PASS" as const;

export const irb008: BenchmarkCase = {
  id: "IRB-008",
  title: "Google Stadia",
  frozenDate: "2019-03-19",
  input: {
    text: "Google blog (2019-03-19): Google announces Stadia as a video game platform delivering instant access to games on screens such as TV, laptop, desktop, tablet, or mobile phone. Google states a goal of resolutions up to 4K and 60 frames per second with HDR and surround sound, and says it will launch later in 2019 in select countries including the U.S., Canada, U.K., and much of Europe.",
  },
  groundTruth: {
    facts: [
      "T0: Google announces Stadia on 2019-03-19.",
      "T0: Google describes Stadia as streaming/instant-access gaming across multiple screen types.",
      "T0: Google states launch later in 2019 in U.S., Canada, U.K., and much of Europe.",
    ],
    customerProblem:
      "T0: Players want high-quality games on available screens without traditional console/PC install-and-upgrade friction.",
    leadingSignal:
      "T0: Google launches Stadia as a cloud/streaming game platform alternative to traditional console ownership models.",
    change:
      "T0: Google asks players and the gaming ecosystem to shift toward streamed play from Google data-center infrastructure.",
    reasoning:
      "T0 intended chain: players want high-quality play without console hardware friction → Stadia offers streamed games on many screens → durable reallocation depends on later catalog, latency, and incentive outcomes.",
    valueReallocation:
      "T0 intended: value toward cloud-gaming platforms. LATER verified outcome: Stadia does not displace console/PC ecosystems after Google winds down the Stadia streaming service (2022).",
    winner:
      "LATER verified: console/PC gaming ecosystems retain value; Stadia is not the lasting winner.",
    evidence: [
      "T0: Google blog 2019-03-19 Stadia announcement attributes.",
    ],
    verification:
      "LATER (not T0): Google blog 2022-09-29 states Stadia streaming service will be wound down; play access through 2023-01-18.",
    marketBlindSpot:
      "T0 risk: cloud-infrastructure strength may be overweighted versus catalog, latency, and publisher incentive constraints.",
  },
  scoringCriteria: {
    facts: "T0 Google blog claims only; shutdown is not a T0 fact.",
    customerProblem: "High-quality play without traditional console friction.",
    leadingSignal: "Stadia launch pitch.",
    reasoning: "Separate intended cloud shift from later verified wind-down.",
    valueReallocation: "Intended T0 cloud shift; later failure only in verification/later notes.",
    evidence: "Keep T0 announcement distinct from 2022 wind-down blog.",
  },
};

export default irb008;
