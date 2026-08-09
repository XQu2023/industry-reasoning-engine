import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Apple Newsroom press release, 2014-09-09
 *   https://www.apple.com/newsroom/2014/09/09Apple-Unveils-Apple-Watch-Apples-Most-Personal-Device-Ever/
 * Later ground-truth source: Apple Newsroom press release, 2015-03-09
 *   https://www.apple.com/newsroom/2015/03/09Apple-Watch-Available-in-Nine-Countries-on-April-24/
 *   (locks April 24, 2015 availability in nine countries; pre-order April 10)
 */
export const irb018Fidelity = "PASS" as const;

export const irb018: BenchmarkCase = {
  id: "IRB-018",
  title: "Apple Watch",
  frozenDate: "2014-09-09",
  input: {
    text: "Apple Newsroom (2014-09-09): Apple unveils Apple Watch, described as its most personal device ever, with a Digital Crown navigation interface, wrist communication (messages, iPhone calls, Digital Touch including heartbeat), and health and fitness apps. Apple states Apple Watch is available in three collections—Apple Watch, Apple Watch Sport, and Apple Watch Edition—will be available in early 2015 starting at $349 (US), and is compatible with iPhone 5/5c/5s/6/6 Plus running the latest iOS 8. Apple also introduces WatchKit for developers to create wrist experiences.",
  },
  groundTruth: {
    facts: [
      "T0: Apple unveils Apple Watch on 2014-09-09 as a personal wearable with Digital Crown UI.",
      "T0: Apple positions communication, health/fitness, and three hardware collections; early 2015 availability from $349.",
      "T0: Apple introduces WatchKit for wrist-oriented developer experiences; requires recent iPhone + iOS 8.",
    ],
    customerProblem:
      "T0: Users want glanceable communication, notifications, and health/fitness tracking from the wrist without pulling out a phone.",
    leadingSignal:
      "T0: Apple announces Apple Watch as a new wearable category in its product lineup.",
    change:
      "T0: Consumer device competition expands from phones/tablets into Apple’s wrist wearable platform tied to iPhone.",
    reasoning:
      "T0 chain: wrist needs for alerts/fitness/comms → Apple Watch + WatchKit → value can reallocate toward Apple’s wearable platform and iPhone ecosystem lock-in if the product ships and sells.",
    valueReallocation:
      "T0 thesis: value shifts toward Apple’s wearable platform (and iPhone pairing) versus phone-only interaction and rival smartwatches. LATER verified outcome: Apple locks commercial availability—pre-order April 10 and on-sale April 24, 2015 in nine countries (2015-03-09).",
    winner: "Apple Watch wearable platform (later verified by shipping availability).",
    evidence: [
      "T0: Apple Newsroom 2014-09-09 Apple Watch unveil (Digital Crown; collections; $349 early 2015; WatchKit; iPhone compatibility).",
    ],
    verification:
      "LATER (not T0): Apple Newsroom 2015-03-09 — Apple Watch available April 24 in nine countries; pre-order/try-on from April 10.",
    marketBlindSpot:
      "T0 risk: treating Watch as a fashion accessory only while underweighting platform/ecosystem extension of iPhone.",
  },
  scoringCriteria: {
    facts: "Only 2014-09-09 Apple Watch unveil PR statements.",
    customerProblem: "Wrist glanceable comms/fitness without phone-out.",
    leadingSignal: "Apple Watch unveil.",
    reasoning: "Wrist needs → Apple Watch platform → wearable/ecosystem value.",
    valueReallocation:
      "Toward Apple Watch platform; April 2015 availability only as later verification.",
    evidence: "T0 Apple PR only; availability PR stays in verification.",
  },
};

export default irb018;
