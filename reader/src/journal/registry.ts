import { db012JournalZh } from "./content/db-012.ts";
import type { JournalBrief, JournalLocale } from "./types.ts";

const JOURNAL_BRIEFS: JournalBrief[] = [db012JournalZh];

const JOURNAL_INDEX = new Map(
  JOURNAL_BRIEFS.map((brief) => [`${brief.slug}:${brief.locale}`, brief] as const),
);

export function listJournalBriefs(): JournalBrief[] {
  return JOURNAL_BRIEFS.slice();
}

export function getJournalBrief(slug: string, locale: JournalLocale): JournalBrief | null {
  return JOURNAL_INDEX.get(`${slug}:${locale}`) ?? null;
}

export function hasJournalBrief(slug: string, locale: JournalLocale): boolean {
  return JOURNAL_INDEX.has(`${slug}:${locale}`);
}
