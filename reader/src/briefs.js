import db001en from "../briefs/DB-001-NVIDIA-Blackwell.en.md?raw";
import db001zh from "../briefs/DB-001-NVIDIA-Blackwell.zh.md?raw";
import db002en from "../briefs/DB-002-NVIDIA-CUDA.en.md?raw";
import db002zh from "../briefs/DB-002-NVIDIA-CUDA.zh.md?raw";
import db003en from "../briefs/DB-003-ASML-EUV.en.md?raw";
import db003zh from "../briefs/DB-003-ASML-EUV.zh.md?raw";
import db004en from "../briefs/DB-004-Stripe.en.md?raw";
import db004zh from "../briefs/DB-004-Stripe.zh.md?raw";
import db005en from "../briefs/DB-005-Kubernetes.en.md?raw";
import db005zh from "../briefs/DB-005-Kubernetes.zh.md?raw";
import db006en from "../briefs/DB-006-ChatGPT.en.md?raw";
import db006zh from "../briefs/DB-006-ChatGPT.zh.md?raw";
import db007en from "../briefs/DB-007-GitHub-Copilot.en.md?raw";
import db007zh from "../briefs/DB-007-GitHub-Copilot.zh.md?raw";
import db008en from "../briefs/DB-008-AMD-MI300.en.md?raw";
import db008zh from "../briefs/DB-008-AMD-MI300.zh.md?raw";
import db009en from "../briefs/DB-009-Anthropic-Claude-API.en.md?raw";
import db009zh from "../briefs/DB-009-Anthropic-Claude-API.zh.md?raw";
import db010en from "../briefs/DB-010-Databricks-Lakehouse.en.md?raw";
import db010zh from "../briefs/DB-010-Databricks-Lakehouse.zh.md?raw";
import db011zh from "../briefs/DB-011-Micron-HBM3E.zh.md?raw";
import db012zh from "../briefs/DB-012-InP.zh.md?raw";
import { localizeReadingTime, t } from "./i18n.js";
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
  { slug: "db-011", category: "semiconductors", confidence: "Medium", fileStem: "DB-011-Micron-HBM3E" },
  { slug: "db-012", category: "aiInfrastructure", confidence: "Medium", fileStem: "DB-012-InP" },
];

const BRIEF_FILES = {
  "db-001": {
    en: { file: "DB-001-NVIDIA-Blackwell.en.md", markdown: db001en },
    zh: { file: "DB-001-NVIDIA-Blackwell.zh.md", markdown: db001zh },
  },
  "db-002": {
    en: { file: "DB-002-NVIDIA-CUDA.en.md", markdown: db002en },
    zh: { file: "DB-002-NVIDIA-CUDA.zh.md", markdown: db002zh },
  },
  "db-003": {
    en: { file: "DB-003-ASML-EUV.en.md", markdown: db003en },
    zh: { file: "DB-003-ASML-EUV.zh.md", markdown: db003zh },
  },
  "db-004": {
    en: { file: "DB-004-Stripe.en.md", markdown: db004en },
    zh: { file: "DB-004-Stripe.zh.md", markdown: db004zh },
  },
  "db-005": {
    en: { file: "DB-005-Kubernetes.en.md", markdown: db005en },
    zh: { file: "DB-005-Kubernetes.zh.md", markdown: db005zh },
  },
  "db-006": {
    en: { file: "DB-006-ChatGPT.en.md", markdown: db006en },
    zh: { file: "DB-006-ChatGPT.zh.md", markdown: db006zh },
  },
  "db-007": {
    en: { file: "DB-007-GitHub-Copilot.en.md", markdown: db007en },
    zh: { file: "DB-007-GitHub-Copilot.zh.md", markdown: db007zh },
  },
  "db-008": {
    en: { file: "DB-008-AMD-MI300.en.md", markdown: db008en },
    zh: { file: "DB-008-AMD-MI300.zh.md", markdown: db008zh },
  },
  "db-009": {
    en: { file: "DB-009-Anthropic-Claude-API.en.md", markdown: db009en },
    zh: { file: "DB-009-Anthropic-Claude-API.zh.md", markdown: db009zh },
  },
  "db-010": {
    en: { file: "DB-010-Databricks-Lakehouse.en.md", markdown: db010en },
    zh: { file: "DB-010-Databricks-Lakehouse.zh.md", markdown: db010zh },
  },
  "db-011": {
    zh: { file: "DB-011-Micron-HBM3E.zh.md", markdown: db011zh },
  },
  "db-012": {
    zh: { file: "DB-012-InP.zh.md", markdown: db012zh },
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

export function hasLocale(slug, locale) {
  return Boolean(BRIEF_FILES[slug]?.[locale]);
}

/**
 * Load authored markdown for a locale.
 * Never silently falls back to another language body.
 */
export function loadBriefMarkdown(slug, locale) {
  const entry = BRIEF_FILES[slug];
  if (!entry) return null;
  if (!entry[locale]) {
    return {
      slug,
      locale,
      unavailable: true,
      availableLocales: Object.keys(entry),
      fallbackLocale: entry.en ? "en" : Object.keys(entry)[0],
    };
  }
  return {
    slug,
    locale,
    unavailable: false,
    contentLocale: locale,
    file: entry[locale].file,
    markdown: entry[locale].markdown,
    availableLocales: Object.keys(entry),
  };
}

export function loadParsedBrief(slug, locale) {
  const loaded = loadBriefMarkdown(slug, locale);
  if (!loaded) return null;
  if (loaded.unavailable) {
    const en = entryEnglishMeta(slug);
    return {
      ...loaded,
      brief: null,
      catalog: getCatalogEntry(slug),
      meta: en,
    };
  }
  return {
    ...loaded,
    brief: parseBriefMarkdown(loaded.markdown),
    catalog: getCatalogEntry(slug),
  };
}

function entryEnglishMeta(slug) {
  const entry = BRIEF_FILES[slug];
  if (!entry) return null;
  const locale = entry.en ? "en" : entry.zh ? "zh" : Object.keys(entry)[0];
  if (!locale) return null;
  const brief = parseBriefMarkdown(entry[locale].markdown);
  return {
    product: brief.meta.product,
    t0: brief.meta.t0,
    readingTime: brief.meta.readingTime,
    titleEn: brief.title,
  };
}

/** Build Founding Collection cards. Titles never mix languages. */
export function listCollectionCards(locale) {
  const ui = t(locale);
  return CATALOG.map((entry) => {
    const locales = availableLocales(entry.slug);
    const hasRequested = hasLocale(entry.slug, locale);
    const sourceLocale = hasRequested
      ? locale
      : hasLocale(entry.slug, "en")
        ? "en"
        : locales[0];
    const parsed = loadParsedBrief(entry.slug, sourceLocale);
    const brief = parsed?.brief;
    const productId = extractProductId(brief?.meta?.product) ?? entry.slug.toUpperCase();

    return {
      slug: entry.slug,
      productId,
      title: hasRequested
        ? (brief?.title ?? productId)
        : `${productId} · ${ui.cardPendingTitle}`,
      category: entry.category,
      publishedDate: brief?.meta?.t0 ?? "",
      readingTime: localizeReadingTime(brief?.meta?.readingTime, locale),
      confidence: entry.confidence,
      languages: locales,
      translationReady: hasRequested,
      hrefLocale: locale,
    };
  });
}

function extractProductId(product) {
  const match = String(product ?? "").match(/DB-\d+/i);
  return match ? match[0].toUpperCase() : null;
}
