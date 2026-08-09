import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Apple Newsroom press release, 2007-01-09
 *   https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/
 * Later ground-truth source: Apple Newsroom press release, 2008-07-10
 *   https://www.apple.com/newsroom/2008/07/10iPhone-3G-on-Sale-Tomorrow/
 *   (App Store with 500+ native apps — software platform layer on iPhone)
 */
export const irb017Fidelity = "PASS" as const;

export const irb017: BenchmarkCase = {
  id: "IRB-017",
  title: "Original iPhone",
  frozenDate: "2007-01-09",
  input: {
    text: "Apple Newsroom (2007-01-09): Apple introduces iPhone, combining a mobile phone, a widescreen iPod with touch controls, and an Internet communications device with desktop-class email, web browsing, searching and maps into one handheld. Apple states iPhone introduces a multi-touch user interface controlled with fingers. Apple states iPhone will be available in the US in June 2007 in 4GB ($499) and 8GB ($599) models, sold through Apple and Cingular retail/online stores.",
  },
  groundTruth: {
    facts: [
      "T0: Apple introduces iPhone combining phone, widescreen iPod, and Internet communicator (2007-01-09).",
      "T0: Apple highlights multi-touch finger UI as the new interface.",
      "T0: Apple states US availability June 2007 at $499/$599 via Apple and Cingular.",
    ],
    customerProblem:
      "T0: Consumers need a single handheld that combines phone, media, and Internet communications with a modern UI.",
    leadingSignal:
      "T0: Apple announces iPhone as a multi-touch smartphone combining phone + iPod + Internet device.",
    change:
      "T0: Mobile handset competition shifts toward integrated touchscreen Internet phones versus feature-phone / PDA stacks.",
    reasoning:
      "T0 chain: users want phone+media+Internet in one device → iPhone multi-touch platform → value can reallocate toward smartphone platforms and later software ecosystems if the device succeeds.",
    valueReallocation:
      "T0 thesis: value shifts toward integrated multi-touch smartphone platforms (Apple) versus fragmented phone/media/PDA devices. LATER verified outcome: Apple launches the App Store with 500+ native iPhone apps (2008-07-10), confirming software-platform value on top of the handset.",
    winner: "Apple iPhone platform (later reinforced by App Store).",
    evidence: [
      "T0: Apple Newsroom 2007-01-09 iPhone introduction (three-in-one product; multi-touch; pricing/availability).",
    ],
    verification:
      "LATER (not T0): Apple Newsroom 2008-07-10 — App Store with more than 500 native applications for iPhone.",
    marketBlindSpot:
      "T0 risk: scoring iPhone as only a handset SKU while underweighting platform/UI lock-in.",
  },
  scoringCriteria: {
    facts: "Only 2007-01-09 Apple iPhone PR statements.",
    customerProblem: "Need for integrated phone/media/Internet handheld UI.",
    leadingSignal: "iPhone introduction.",
    reasoning: "Integrated device need → iPhone platform → smartphone value shift.",
    valueReallocation:
      "Toward iPhone platform; App Store only as later verification.",
    evidence: "T0 Apple PR only; App Store stays in verification.",
  },
};

export default irb017;
