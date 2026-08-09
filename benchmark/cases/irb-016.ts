import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: Cloudflare press release, 2010-09-27
 *   https://www.cloudflare.com/press/press-releases/2010/cloudflare-launches-at-techcrunch-disrupt/
 * Later ground-truth source: Cloudflare Blog, 2017-09-29
 *   https://blog.cloudflare.com/introducing-cloudflare-workers/
 *   (Introducing Cloudflare Workers — run JavaScript at the edge)
 */
export const irb016Fidelity = "PASS" as const;

export const irb016: BenchmarkCase = {
  id: "IRB-016",
  title: "Cloudflare",
  frozenDate: "2010-09-27",
  input: {
    text: "Cloudflare press release (2010-09-27): Cloudflare, Inc. announces the launch of the public beta of its performance and security service at TechCrunch Disrupt. CEO Matthew Prince states Cloudflare addresses two problems for website operators—making sites fast and making them secure—by bringing performance and security tools previously available only to Internet giants to anyone with a website.",
  },
  groundTruth: {
    facts: [
      "T0: Cloudflare launches public beta of its performance and security service (2010-09-27).",
      "T0: Cloudflare positions the product as making websites fast and secure for any site operator.",
      "T0: Cloudflare claims to bring Internet-giant performance/security tools to the rest of the web.",
    ],
    customerProblem:
      "T0: Ordinary website operators need faster delivery and stronger security without enterprise-only tooling.",
    leadingSignal:
      "T0: Cloudflare launches a broadly available reverse-proxy performance + security service.",
    change:
      "T0: Web performance/security is offered as an easy, network-layer service for general websites, not only large operators.",
    reasoning:
      "T0 chain: sites need speed + security → Cloudflare provides edge performance/security → value can reallocate toward Cloudflare’s network if adoption scales beyond CDN point products.",
    valueReallocation:
      "T0 thesis: value shifts toward Cloudflare’s shared performance/security network versus DIY or enterprise-only stacks. LATER verified outcome: Cloudflare introduces Workers to run JavaScript on its edge (2017-09-29), extending the network from CDN/security into programmable edge compute.",
    winner: "Cloudflare edge network platform (later extended via Workers).",
    evidence: [
      "T0: Cloudflare 2010-09-27 press release — public beta; speed + security for any website.",
    ],
    verification:
      "LATER (not T0): Cloudflare Blog 2017-09-29 — Introducing Cloudflare Workers (JavaScript Service Workers at the edge).",
    marketBlindSpot:
      "T0 risk: classifying Cloudflare as a narrow CDN while underweighting a general edge control plane.",
  },
  scoringCriteria: {
    facts: "Only 2010-09-27 Cloudflare launch PR statements.",
    customerProblem: "Website speed + security without enterprise tooling.",
    leadingSignal: "Cloudflare public beta launch.",
    reasoning: "Site ops need → Cloudflare network → edge platform value.",
    valueReallocation:
      "Toward Cloudflare network; Workers only as later verification.",
    evidence: "T0 Cloudflare PR only; Workers stays in verification.",
  },
};

export default irb016;
