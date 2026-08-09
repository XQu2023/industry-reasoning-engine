/**
 * Input-conditional industry domain binding (Sprint 1).
 * Domain is detected ONLY from T0 factual text and affects framing only.
 */

export const INDUSTRY_DOMAINS = [
  "Semiconductor",
  "Cloud Infrastructure",
  "Enterprise Software",
  "Consumer Electronics",
  "Manufacturing",
  "Biotechnology",
  "FinTech",
  "Telecommunications",
  "AI Computing",
  "General Technology",
  "Unknown",
] as const;

export type IndustryDomain = (typeof INDUSTRY_DOMAINS)[number];

/** Minimum score gap vs runner-up required to accept a specific domain. */
const CONFIDENCE_MARGIN = 2;

type DomainSignals = {
  domain: Exclude<IndustryDomain, "Unknown" | "General Technology">;
  patterns: RegExp[];
  weight?: number;
};

const DOMAIN_SIGNALS: DomainSignals[] = [
  {
    domain: "AI Computing",
    weight: 3,
    patterns: [
      /\bHBM3e?\b/i,
      /\bTensor Core\b/i,
      /\bCUDA\b/i,
      /\bNVLink\b/i,
      /\bBlackwell\b/i,
      /\bTransformer\b/i,
      /\bself-attention\b/i,
      /\bGPU\b/i,
      /\bAI (?:GPU|training|inference|computing|workload)/i,
      /\blarge language model|\bLLM\b/i,
      /\bmachine translation\b/i,
      /\bBLEU\b/i,
    ],
  },
  {
    domain: "Semiconductor",
    weight: 2,
    patterns: [
      /\bEUV\b/i,
      /\blithography\b/i,
      /\bASML\b/i,
      /\bTSMC\b/i,
      /\bNXE:3100\b/i,
      /\bOptane\b/i,
      /\bwafer\b/i,
      /\bfoundry\b/i,
      /\b5-nanometer\b|\b5nm\b/i,
    ],
  },
  {
    domain: "Cloud Infrastructure",
    weight: 2,
    patterns: [
      /\bAWS\b|\bAmazon Web Services\b/i,
      /\bAmazon (?:S3|EC2|Lambda)\b/i,
      /\bKubernetes\b/i,
      /\bcontainer manager\b/i,
      /\bCloudflare\b/i,
      /\bSnowflake\b/i,
      /\bdata warehouse\b/i,
      /\bevent-driven compute\b/i,
      /\bresizable compute capacity\b/i,
      /\bStadia\b/i,
      /\bcloud gaming\b/i,
    ],
  },
  {
    domain: "Consumer Electronics",
    weight: 2,
    patterns: [
      /\biPhone\b/i,
      /\bApp Store\b/i,
      /\bApple Watch\b/i,
      /\bMacBook\b|\bMac mini\b|\bApple silicon\b|\bM1\b/i,
      /\bmulti-touch\b/i,
      /\bWatchKit\b/i,
      /\biTunes\b/i,
    ],
  },
  {
    domain: "Manufacturing",
    weight: 2,
    patterns: [
      /\bGigafactory\b/i,
      /\bbattery (?:factory|pack|cell)/i,
      /\blithium-?ion\b/i,
      /\beconomies of scale\b/i,
      /\bmass-market (?:vehicle|electric)/i,
    ],
  },
  {
    domain: "Biotechnology",
    weight: 2,
    patterns: [
      /\bmRNA\b|\bmessenger RNA\b/i,
      /\bModerna\b/i,
      /\bbiotherapeutic\b/i,
      /\btherapeutic proteins?\b/i,
      /\bpreclinical\b/i,
      /\bclinical trials?\b/i,
    ],
  },
  {
    domain: "Enterprise Software",
    weight: 2,
    patterns: [
      /\bCRM\b/i,
      /\bSaaS\b/i,
      /\bon-demand software\b/i,
      /\bSalesforce\b/i,
      /\benterprise software\b/i,
    ],
  },
  {
    domain: "FinTech",
    weight: 2,
    patterns: [
      /\bpayment processing\b/i,
      /\bmerchant account\b/i,
      /\bStripe\b/i,
      /\bonline payments?\b/i,
    ],
  },
  {
    domain: "Telecommunications",
    weight: 2,
    patterns: [
      /\bCDMA\b|\bGSM\b|\b5G\b|\bLTE\b/i,
      /\bcarrier network\b/i,
      /\bmobile network operator\b/i,
    ],
  },
];

/**
 * Build the T0 factual string used for domain detection.
 * Prefers extracted fact texts when present; otherwise the T0 input text.
 */
export function t0TextForDomainDetection(input: {
  originalInput?: { text?: string };
  facts?: ReadonlyArray<{ text: string }>;
}): string {
  const facts = input.facts;
  if (facts && facts.length > 0) {
    return facts.map((f) => f.text).join("\n");
  }
  return input.originalInput?.text ?? "";
}

function scoreDomain(text: string, signals: DomainSignals): number {
  const weight = signals.weight ?? 1;
  let hits = 0;
  for (const pattern of signals.patterns) {
    if (pattern.test(text)) hits += 1;
  }
  return hits * weight;
}

/**
 * Detect industry domain from T0 factual text only.
 * Low confidence → General Technology (never invents a domain).
 */
export function detectDomainFromT0Facts(t0Text: string): IndustryDomain {
  const text = t0Text.trim();
  if (text === "") return "General Technology";

  const scored = DOMAIN_SIGNALS.map((signals) => ({
    domain: signals.domain,
    score: scoreDomain(text, signals),
  })).sort((a, b) => b.score - a.score);

  const best = scored[0];
  const second = scored[1];
  if (!best || best.score <= 0) return "General Technology";
  if (second && best.score - second.score < CONFIDENCE_MARGIN) {
    return "General Technology";
  }
  return best.domain;
}

/** Framing instruction only — must not alter or invent facts. */
export function domainFramingInstruction(domain: IndustryDomain): string {
  return [
    `Detected industry domain from T0 facts: ${domain}.`,
    "Frame answers only within this domain.",
    "Do not force AI Computing or AI Computing Supply Chain framing unless the detected domain is AI Computing.",
    "Domain binding affects framing only; do not change, add, or invent facts.",
  ].join(" ");
}
