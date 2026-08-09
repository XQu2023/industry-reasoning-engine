/**
 * Knowledge Network V1 — static relationships for Founding Collection.
 * Does not modify SRE / PVF / SKB artifacts.
 */

/** @typedef {{ slug: string, productId: string, title: { en: string, zh?: string }, company: string[], technology: string[], industry: string[], concepts: string[], related: string[] }} BriefNode */

/** @type {Record<string, BriefNode>} */
export const BRIEF_NODES = {
  "db-001": {
    slug: "db-001",
    productId: "DB-001",
    title: {
      en: "NVIDIA Moves AI Computing From the Chip to the Rack",
      zh: "英伟达把 AI 计算从芯片推到机架",
    },
    company: ["NVIDIA", "TSMC"],
    technology: ["Blackwell", "NVLink", "NVSwitch", "rack-scale AI"],
    industry: ["AI Computing", "Semiconductors"],
    concepts: ["Blackwell", "NVLink", "rack-scale AI", "TSMC"],
    related: ["db-002", "db-008", "db-003", "db-006"],
  },
  "db-002": {
    slug: "db-002",
    productId: "DB-002",
    title: {
      en: "NVIDIA Turns the GPU Into a Programmable Compute Platform",
    },
    company: ["NVIDIA"],
    technology: ["CUDA", "GPU compute", "compute driver"],
    industry: ["AI Computing", "Semiconductors"],
    concepts: ["CUDA", "GPU compute", "programming model", "OpenCL"],
    related: ["db-001", "db-008", "db-007", "db-005"],
  },
  "db-003": {
    slug: "db-003",
    productId: "DB-003",
    title: {
      en: "ASML Places EUV Tools While Immersion Extension Still Carries the Capture Story",
    },
    company: ["ASML", "TSMC"],
    technology: ["EUV", "immersion lithography", "FlexRay", "SMO"],
    industry: ["Semiconductors"],
    concepts: ["EUV", "immersion lithography", "ASML", "TSMC"],
    related: ["db-001", "db-008", "db-002"],
  },
  "db-004": {
    slug: "db-004",
    productId: "DB-004",
    title: {
      en: "Stripe Makes Card Acceptance a Developer API With One Published Fee",
    },
    company: ["Stripe"],
    technology: ["Payments API", "stripe.js", "developer platform"],
    industry: ["Payments", "Developer Tools"],
    concepts: ["Payments API", "developer platform", "take rate"],
    related: ["db-005", "db-007", "db-010", "db-009"],
  },
  "db-005": {
    slug: "db-005",
    productId: "DB-005",
    title: {
      en: "Google Opens Container Fleet Control — and Leaves Tier 1 Vacant",
    },
    company: ["Google", "Docker"],
    technology: ["Kubernetes", "containers", "orchestration"],
    industry: ["Cloud Infrastructure", "Developer Tools"],
    concepts: ["Kubernetes", "containers", "open source", "vacant Tier 1"],
    related: ["db-010", "db-007", "db-004", "db-002"],
  },
  "db-006": {
    slug: "db-006",
    productId: "DB-006",
    title: {
      en: "ChatGPT Makes Dialogue the Public Interface to Large Language Models",
    },
    company: ["OpenAI"],
    technology: ["ChatGPT", "large language models", "dialogue interface"],
    industry: ["AI Computing"],
    concepts: ["ChatGPT", "large language models", "dialogue interface", "foundation model"],
    related: ["db-009", "db-007", "db-001", "db-008"],
  },
  "db-007": {
    slug: "db-007",
    productId: "DB-007",
    title: {
      en: "GitHub Copilot Moves Coding Help Into the Editor — Without a Tier 1 Capturer Yet",
    },
    company: ["GitHub", "OpenAI"],
    technology: ["GitHub Copilot", "Codex", "in-editor AI"],
    industry: ["Developer Tools", "AI Computing"],
    concepts: ["GitHub Copilot", "Codex", "in-editor AI", "vacant Tier 1"],
    related: ["db-006", "db-009", "db-005", "db-002"],
  },
  "db-008": {
    slug: "db-008",
    productId: "DB-008",
    title: {
      en: "AMD Positions MI300 as High-Memory Instinct Compute for LLMs and HPC",
    },
    company: ["AMD"],
    technology: ["MI300", "HBM3", "ROCm", "Instinct"],
    industry: ["AI Computing", "Semiconductors"],
    concepts: ["MI300", "HBM3", "ROCm", "Instinct"],
    related: ["db-001", "db-002", "db-006", "db-003"],
  },
  "db-009": {
    slug: "db-009",
    productId: "DB-009",
    title: {
      en: "Anthropic Opens Claude as a Commercial Chat-and-API Surface",
    },
    company: ["Anthropic"],
    technology: ["Claude", "Constitutional AI", "foundation-model API"],
    industry: ["AI Computing"],
    concepts: ["Claude", "foundation-model API", "Constitutional AI", "ChatGPT"],
    related: ["db-006", "db-007", "db-001", "db-004"],
  },
  "db-010": {
    slug: "db-010",
    productId: "DB-010",
    title: {
      en: "Databricks Names the Lakehouse — an Open Pattern, Not a Locked Tier 1",
    },
    company: ["Databricks", "Microsoft"],
    technology: ["Lakehouse", "open formats", "data platform"],
    industry: ["Data Platforms", "Cloud Infrastructure"],
    concepts: ["Lakehouse", "open formats", "vacant Tier 1", "data platform"],
    related: ["db-005", "db-004", "db-007", "db-009"],
  },
};

/** Concept → brief slugs (built once from BRIEF_NODES). */
export const CONCEPT_INDEX = buildConceptIndex(BRIEF_NODES);

function buildConceptIndex(nodes) {
  /** @type {Record<string, { id: string, briefs: string[] }>} */
  const index = {};
  for (const node of Object.values(nodes)) {
    const terms = unique([
      ...node.concepts,
      ...node.company,
      ...node.technology,
      ...node.industry,
    ]);
    for (const term of terms) {
      const id = conceptId(term);
      if (!index[id]) index[id] = { id, label: term, briefs: [] };
      if (!index[id].briefs.includes(node.slug)) index[id].briefs.push(node.slug);
    }
  }
  return index;
}

export function getBriefNode(slug) {
  return BRIEF_NODES[slug] ?? null;
}

export function getConcept(conceptKey) {
  return CONCEPT_INDEX[conceptKey] ?? CONCEPT_INDEX[conceptId(conceptKey)] ?? null;
}

export function conceptId(label) {
  return String(label)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function briefTitle(node, locale) {
  if (!node) return "";
  if (locale === "zh" && node.title.zh) return node.title.zh;
  return node.title.en;
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}
