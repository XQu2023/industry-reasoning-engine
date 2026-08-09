import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Apple Newsroom press release, 2008-07-10
 *   https://www.apple.com/newsroom/2008/07/10iPhone-3G-on-Sale-Tomorrow/
 * Later ground-truth source: Apple Newsroom press release, 2009-04-24
 *   https://www.apple.com/newsroom/2009/04/24Apples-Revolutionary-App-Store-Downloads-Top-One-Billion-in-Just-Nine-Months/
 */
export const irb001Fidelity = "PASS" as const;

export const irb001: BenchmarkCase = {
  id: "IRB-001",
  title: "Apple App Store",
  frozenDate: "2008-07-10",
  input: {
    text: "Apple press release (2008-07-10): Apple announces that more than 500 native applications will be available on the iPhone’s App Store when iPhone 3G goes on sale. Apple states the App Store enables customers to wirelessly download applications directly onto their iPhones. More than 125 applications are offered for free. Apple states the App Store will be available beginning that day via iTunes 7.7 and as part of the free iPhone 2.0 software update for iPhone customers on July 11.",
  },
  groundTruth: {
    facts: [
      "T0: Apple announces App Store availability with more than 500 native iPhone applications (2008-07-10).",
      "T0: Apple states wireless download of apps directly onto iPhones; more than 125 free apps at launch.",
      "T0: Apple states App Store available via iTunes 7.7 and with iPhone 2.0 update on July 11.",
    ],
    customerProblem:
      "T0: iPhone customers need a way to discover, purchase, and install third-party native applications on the device.",
    leadingSignal:
      "T0: Apple opens the App Store as the distribution channel for native iPhone applications.",
    change:
      "T0: Mobile software distribution for iPhone shifts toward Apple’s centralized App Store download model.",
    reasoning:
      "T0 chain: customers want native apps on iPhone → App Store provides wireless discovery/distribution → developer reach concentrates through Apple’s store → value reallocates toward the App Store platform and Apple’s control of mobile app distribution.",
    valueReallocation:
      "T0 thesis: value shifts toward Apple’s App Store platform as the gate for iPhone software distribution. LATER verified outcome: Apple reports one billion App Store downloads within nine months (2009-04-24), confirming rapid reallocation of mobile software distribution through the App Store.",
    winner: "Apple via App Store platform control.",
    evidence: [
      "T0: Apple Newsroom 2008-07-10 App Store launch claims (>500 apps; wireless download; iTunes/iPhone 2.0 availability).",
    ],
    verification:
      "LATER (not T0): Apple Newsroom 2009-04-24 — App Store downloads top one billion in nine months; Apple calls App Store the largest applications store in the world.",
    marketBlindSpot:
      "T0 risk: observers may focus on handset hardware while underweighting software-distribution platform control.",
  },
  scoringCriteria: {
    facts: "Only 2008-07-10 Apple PR statements.",
    customerProblem: "Need for native iPhone app discovery/install.",
    leadingSignal: "App Store launch disclosure.",
    reasoning: "App demand → App Store distribution → platform value.",
    valueReallocation: "Toward App Store platform; 1B downloads only as later verification.",
    evidence: "T0 Apple PR only; later milestone stays in verification.",
  },
};

export default irb001;
