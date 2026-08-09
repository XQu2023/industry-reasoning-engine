import enMd from "../briefs/DB-001-NVIDIA-Blackwell.en.md?raw";
import zhMd from "../briefs/DB-001-NVIDIA-Blackwell.zh.md?raw";
import { parseBriefMarkdown } from "./parseBrief.js";

const BRIEF_FILES = {
  "db-001": {
    en: { file: "DB-001-NVIDIA-Blackwell.en.md", markdown: enMd },
    zh: { file: "DB-001-NVIDIA-Blackwell.zh.md", markdown: zhMd },
  },
};

export { parseBriefMarkdown };

export function listBriefSlugs() {
  return Object.keys(BRIEF_FILES);
}

export function loadBriefMarkdown(slug, locale) {
  const entry = BRIEF_FILES[slug];
  if (!entry) return null;
  const localized = entry[locale] ?? entry.en;
  if (!localized) return null;
  return {
    slug,
    locale: entry[locale] ? locale : "en",
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
  };
}
