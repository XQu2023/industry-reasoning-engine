/**
 * Validation Layer seed records for Founding Collection briefs.
 * Brief bodies stay T0-frozen; this layer appends what happens after.
 *
 * Evidence Score = PVF Prediction Accuracy (0–100) when a validation exists.
 */

/** Brief surface publication for Founding Collection (not a rewrite of T0). */
export const BRIEF_SURFACE_DATE = "2026-08-09";

/**
 * @typedef {{ id: string, text: string, status: 'open'|'partial'|'resolved', note?: string, closedBy?: string|null }} UnknownItem
 * @typedef {{ id: string, path: string, date: string, horizon: string, predictionAccuracy: number, statusLine: string, dimensions?: Array<{code:string,name:string,outcome:string,weight:number}> }} PvfRun
 */

/** @type {Record<string, object>} */
export const VALIDATION_CATALOG = {
  "db-001": {
    productId: "DB-001",
    sreId: "SRE-101",
    srePath: "reports/SRE-101-NVIDIA-Blackwell.md",
    sreTitle: "NVIDIA Blackwell",
    t0: "2024-03-18",
    researchConfidence: "Medium",
    primarySource: "NVIDIA GTC / Blackwell platform disclosures at T0 (via SRE-101)",
    nextValidation:
      "By end of calendar 2024: partner shipping of Blackwell products; cloud disclosure of rack-scale (NVLink/NVSwitch) deployments.",
    unknowns: [
      u("U1", "Product prices; how long the advantage lasts; share of surplus kept vs passed to buyers", "open"),
      u("U2", "TSMC contract terms, volumes, and share of economics", "open"),
      u("U3", "Whether OEM/cloud partners retain surplus or pass cost cuts", "open"),
      u("U4", "Whether EDA/software gains are kept or competed away", "open"),
      u("U5", "Whether an unnamed supply layer is the true bottleneck", "open"),
    ],
    pvfRuns: [],
    knowledgeUnits: [],
  },
  "db-002": {
    productId: "DB-002",
    sreId: "SRE-104",
    srePath: "reports/SRE-104-NVIDIA-CUDA.md",
    sreTitle: "NVIDIA CUDA",
    t0: "2006-11-08",
    researchConfidence: "Medium",
    primarySource: "NVIDIA press release, 8 November 2006 — CUDA launch (via SRE-104)",
    nextValidation:
      "Further capture-magnitude disclosures; compute P&L clarity; portability vs CUDA exclusivity after OpenCL-era standards.",
    unknowns: [
      u(
        "U1",
        "Price/licence for toolchain; share of surplus retained",
        "open",
        "PVF-104: filings show adoption without a clean CUDA software P&L — magnitude still to be confirmed.",
      ),
      u(
        "U2",
        "Portability to other vendors / cross-vendor standard risk",
        "partial",
        "PVF-104: OpenCL 1.0 (2008-12) tested exclusivity inside H60; CUDA stack still held for NVIDIA products.",
        "validations/PVF-104-NVIDIA-CUDA.md",
      ),
      u(
        "U3",
        "Developer-program size and terms",
        "partial",
        "PVF-104: FY2009 10-K disclosed 25,000+ CUDA developers — size closed; commercial terms still thin.",
        "validations/PVF-104-NVIDIA-CUDA.md",
      ),
      u(
        "U4",
        "Whether Tier 2 partners capture a durable share",
        "open",
      ),
      u(
        "U5",
        "End-user surplus retention and spend magnitudes",
        "open",
      ),
    ],
    pvfRuns: [
      {
        id: "PVF-104",
        path: "validations/PVF-104-NVIDIA-CUDA.md",
        date: "2026-08-09",
        horizon: "H60",
        predictionAccuracy: 79,
        statusLine:
          "At H60 the T0 thesis is largely confirmed on industry change and value migration; capture/tiers remain Partial.",
        dimensions: [
          { code: "A", name: "Industry Change", outcome: "Confirmed", weight: 20 },
          { code: "B", name: "Value Migration", outcome: "Confirmed", weight: 20 },
          { code: "C", name: "Value Capture", outcome: "Partially Confirmed", weight: 25 },
          { code: "D", name: "Tier Assignment", outcome: "Partially Confirmed", weight: 20 },
          { code: "E", name: "Monitoring Signals", outcome: "Partially Confirmed", weight: 15 },
        ],
      },
    ],
    knowledgeUnits: [],
  },
  "db-003": {
    productId: "DB-003",
    sreId: "SRE-106",
    srePath: "reports/SRE-106-ASML-EUV.md",
    sreTitle: "ASML EUV",
    t0: "2010-02-22",
    researchConfidence: "Medium",
    primarySource: "ASML disclosures on NXE:3100 / immersion extension at T0 (via SRE-106)",
    nextValidation:
      "Production EUV economics vs immersion; competitor EUV or multi-patterning paths; NXE install base.",
    unknowns: [
      u("U1", "All prices; EUV-specific capture; production EUV timing/performance", "open"),
      u("U2", "Whether optics/source/mask suppliers later become the scarce layer", "open"),
      u("U3", "TSMC contract terms and surplus share", "open"),
      u("U4", "Identities and terms of other NXE recipients", "open"),
      u("U5", "Whether a subsystem supplier is the true bottleneck", "open"),
    ],
    pvfRuns: [],
    knowledgeUnits: [],
  },
  "db-004": {
    productId: "DB-004",
    sreId: "SRE-113",
    srePath: "reports/SRE-113-Stripe.md",
    sreTitle: "Stripe",
    t0: "2011-09-30",
    researchConfidence: "Medium",
    primarySource: "Stripe public launch materials at T0 (via SRE-113)",
    nextValidation:
      "Adoption/volume disclosures; margin or cost language; bank partners; fee competition; chargeback/fraud economics.",
    unknowns: [
      u("U1", "Cost/margin; exclusivity; SLA; geography; volumes", "open"),
      u("U2", "Whether unnamed financial institutions capture most of the fee", "open"),
      u("U3", "Whether surplus accrues to merchants/developers rather than Stripe", "open"),
    ],
    pvfRuns: [],
    knowledgeUnits: [],
  },
  "db-005": {
    productId: "DB-005",
    sreId: "SRE-111",
    srePath: "reports/SRE-111-Kubernetes.md",
    sreTitle: "Kubernetes",
    t0: "2014-06-10",
    researchConfidence: "Medium",
    primarySource: "Google Kubernetes announcement, 10 June 2014 (via SRE-111)",
    nextValidation:
      "External production adopters; foundation governance; managed Kubernetes offerings; commercial enclosure signals.",
    unknowns: [
      u("U1", "Whether later enclosure or managed services fill vacant Tier 1", "open"),
      u("U2", "Implementer vs managed-service surplus split", "open"),
      u("U3", "Google exclusive control and fee path", "open"),
      u("U4", "Whether Docker absorbs orchestration value", "open"),
    ],
    pvfRuns: [],
    knowledgeUnits: [],
  },
  "db-006": {
    productId: "DB-006",
    sreId: "SRE-115",
    srePath: "reports/SRE-115-ChatGPT.md",
    sreTitle: "ChatGPT",
    t0: "2022-11-30",
    researchConfidence: "Medium",
    primarySource: "OpenAI ChatGPT launch materials at T0 (via SRE-115)",
    nextValidation:
      "End of free preview or paid product; pricing; model/safety outcomes; Azure commercial terms.",
    unknowns: [
      u("U1", "Whether paid conversion or switching costs later fill vacant Tier 1", "open"),
      u("U2", "Price/ads; user counts; cost to serve; whether free remains free", "open"),
      u("U3", "Azure provider identity beyond product name; surplus share", "open"),
    ],
    pvfRuns: [],
    knowledgeUnits: [],
  },
  "db-007": {
    productId: "DB-007",
    sreId: "SRE-114",
    srePath: "reports/SRE-114-GitHub-Copilot.md",
    sreTitle: "GitHub Copilot",
    t0: "2021-06-29",
    researchConfidence: "Medium",
    primarySource: "GitHub Copilot technical preview announcement at T0 (via SRE-114)",
    nextValidation:
      "Commercial launch and pricing; OpenAI–GitHub terms; IDE expansion; independent quality/safety outcomes.",
    unknowns: [
      u("U1", "Whether commercial launch fills vacant Tier 1", "open"),
      u("U2", "Price; revenue share; exclusivity with OpenAI", "open"),
      u("U3", "OpenAI commercial terms and surplus share", "open"),
      u("U4", "Whether surplus sits with AI hardware providers", "open"),
    ],
    pvfRuns: [],
    knowledgeUnits: [],
  },
  "db-008": {
    productId: "DB-008",
    sreId: "SRE-116",
    srePath: "reports/SRE-116-AMD-MI300.md",
    sreTitle: "AMD MI300",
    t0: "2023-12-06",
    researchConfidence: "Medium",
    primarySource: "AMD Instinct MI300 availability disclosures at T0 (via SRE-116)",
    nextValidation:
      "Azure/OCI GA; OEM availability; independent benchmarks; ROCm adoption; HBM/foundry economics.",
    unknowns: [
      u("U1", "Price/ASP/margin; shipments/revenue; share retained", "open"),
      u("U2", "Whether Azure/OCI/OEMs keep surplus", "open"),
      u("U3", "HBM/foundry identity and whether that layer is the true bottleneck", "open"),
    ],
    pvfRuns: [],
    knowledgeUnits: [],
  },
  "db-009": {
    productId: "DB-009",
    sreId: "SRE-120",
    srePath: "reports/SRE-120-Anthropic-Claude-API.md",
    sreTitle: "Anthropic Claude API",
    t0: "2023-03-14",
    researchConfidence: "Medium",
    primarySource: "Anthropic Claude chat-and-API launch at T0 (via SRE-120)",
    nextValidation:
      "Generally available signup with published dollar prices; partner expansion; rival API share.",
    unknowns: [
      u("U1", "Dollar list prices; margins; paid conversion; compute-provider identity", "open"),
      u("U2", "Partner contract terms and take rates", "open"),
      u("U3", "Whether ChatGPT retains or loses share versus Claude", "open"),
    ],
    pvfRuns: [],
    knowledgeUnits: [],
  },
  "db-010": {
    productId: "DB-010",
    sreId: "SRE-118",
    srePath: "reports/SRE-118-Databricks-Lakehouse.md",
    sreTitle: "Databricks Lakehouse",
    t0: "2020-01-30",
    researchConfidence: "Medium",
    primarySource: "Databricks “What Is a Lakehouse?” essay at T0 (via SRE-118)",
    nextValidation:
      "Enterprise migration evidence; Databricks pricing; warehouse performance gap; competing lakehouse branding.",
    unknowns: [
      u("U1", "Whether a proprietary stack later takes exclusive Tier 1", "open"),
      u("U2", "Databricks pricing/margin and exclusive IP over the pattern", "open"),
      u("U3", "Surplus split versus Microsoft Synapse / cloud warehouses", "open"),
      u("U4", "Whether surplus accrues to DIY open-format builders", "open"),
    ],
    pvfRuns: [],
    knowledgeUnits: [],
  },
};

function u(id, text, status, note = "", closedBy = null) {
  return { id, text, status, note, closedBy };
}

export function getValidationRecord(slug) {
  return VALIDATION_CATALOG[slug] ?? null;
}
