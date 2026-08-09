import db001en from "../briefs/DB-001-NVIDIA-Blackwell.en.md?raw";
import db001zh from "../briefs/DB-001-NVIDIA-Blackwell.zh.md?raw";
import db002en from "../briefs/DB-002-NVIDIA-CUDA.en.md?raw";
import db003en from "../briefs/DB-003-ASML-EUV.en.md?raw";
import db004en from "../briefs/DB-004-Stripe.en.md?raw";
import db005en from "../briefs/DB-005-Kubernetes.en.md?raw";
import db006en from "../briefs/DB-006-ChatGPT.en.md?raw";
import db007en from "../briefs/DB-007-GitHub-Copilot.en.md?raw";
import db008en from "../briefs/DB-008-AMD-MI300.en.md?raw";
import db009en from "../briefs/DB-009-Anthropic-Claude-API.en.md?raw";
import db010en from "../briefs/DB-010-Databricks-Lakehouse.en.md?raw";
import { parseBriefMarkdown } from "./parseBrief.js";

/** Category keys map to i18n labels. Confidence from parent SRE standing. */
const CATALOG = [
  { slug: "db-001", category: "aiComputing", confidence: "Medium", fileStem: "DB-001-NVIDIA-Blackwell" },
  { slug: "db-002", category: "aiComputing", confidence: "Medium", fileStem: "DB-002-NVIDIA-CUDA" },
  { slug: "db-003", category: "semiconductors", confidence: "Medium", fileStem: "DB-003-ASML-EUV" },
  { slug: "db-004", category: "payments", confidence: "Medium", fileStem: "DB-004-Stripe" },
  { slug: "db-005", category: "cloudInfrastructure", confidence: "Medium", fileStem: "DB-005-Kubernetes" },
  { slug: "db-006", category: "aiComputing", confidence: "Medium", fileStem: "DB-006-ChatGPT" },
  { slug: "db-007", category: "developerTools", confidence: "Medium", fileStem: "DB-007-GitHub-Copilot" },
  { slug: "db-008", category: "aiComputing", confidence: "Medium", fileStem: "DB-008-AMD-MI300" },
  { slug: "db-009", category: "aiComputing", confidence: "Medium", fileStem: "DB-009-Anthropic-Claude-API" },
  { slug: "db-010", category: "dataPlatforms", confidence: "Medium", fileStem: "DB-010-Databricks-Lakehouse" },
];

const BRIEF_FILES = {
  "db-001": {
    en: { file: "DB-001-NVIDIA-Blackwell.en.md", markdown: db001en },
    zh: { file: "DB-001-NVIDIA-Blackwell.zh.md", markdown: db001zh },
  },
  "db-002": {
    en: { file: "DB-002-NVIDIA-CUDA.en.md", markdown: db002en },
  },
  "db-003": {
    en: { file: "DB-003-ASML-EUV.en.md", markdown: db003en },
  },
  "db-004": {
    en: { file: "DB-004-Stripe.en.md", markdown: db004en },
  },
  "db-005": {
    en: { file: "DB-005-Kubernetes.en.md", markdown: db005en },
  },
  "db-006": {
    en: { file: "DB-006-ChatGPT.en.md", markdown: db006en },
  },
  "db-007": {
    en: { file: "DB-007-GitHub-Copilot.en.md", markdown: db007en },
  },
  "db-008": {
    en: { file: "DB-008-AMD-MI300.en.md", markdown: db008en },
  },
  "db-009": {
    en: { file: "DB-009-Anthropic-Claude-API.en.md", markdown: db009en },
  },
  "db-010": {
    en: { file: "DB-010-Databricks-Lakehouse.en.md", markdown: db010en },
  },
};

export { parseBriefMarkdown };

export function listBriefSlugs() {
  return CATALOG.map((entry) => entry.slug);
}

export function getCatalogEntry(slug) {
  return CATALOG.find((entry) => entry.slug === slug) ?? null;
}

export function getNeighbors(slug) {
  const slugs = listBriefSlugs();
  const index = slugs.indexOf(slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index > 0 ? slugs[index - 1] : null,
    next: index < slugs.length - 1 ? slugs[index + 1] : null,
  };
}

export function availableLocales(slug) {
  const entry = BRIEF_FILES[slug];
  if (!entry) return [];
  return Object.keys(entry);
}

export function loadBriefMarkdown(slug, locale) {
  const entry = BRIEF_FILES[slug];
  if (!entry) return null;
  const localized = entry[locale] ?? entry.en;
  if (!localized) return null;
  return {
    slug,
    locale: entry[locale] ? locale : "en",
    contentLocale: entry[locale] ? locale : "en",
    file: localized.file,
    markdown: localized.markdown,
  };
}

export function loadParsedBrief(slug, locale) {
  const loaded = loadBriefMarkdown(slug, locale);
  if (!loaded) return null;
  return {
    ...loaded,
    brief: parseBriefMarkdown(loaded.markdown),
    catalog: getCatalogEntry(slug),
  };
}

/** Build Founding Collection cards from parsed brief metadata. */
export function listCollectionCards(locale) {
  return CATALOG.map((entry) => {
    const parsed = loadParsedBrief(entry.slug, locale);
    const brief = parsed?.brief;
    const locales = availableLocales(entry.slug);
    return {
      slug: entry.slug,
      productId: extractProductId(brief?.meta?.product) ?? entry.slug.toUpperCase(),
      title: brief?.title ?? entry.fileStem,
      category: entry.category,
      publishedDate: brief?.meta?.t0 ?? "",
      readingTime: brief?.meta?.readingTime ?? "",
      confidence: entry.confidence,
      languages: locales,
      hrefLocale: locale,
    };
  });
}

function extractProductId(product) {
  const match = String(product ?? "").match(/DB-\d+/i);
  return match ? match[0].toUpperCase() : null;
}
