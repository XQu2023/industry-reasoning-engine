import { db001JournalEn, db001JournalZh } from "./content/db-001.ts";
import { db002JournalEn, db002JournalZh } from "./content/db-002.ts";
import { db003JournalEn, db003JournalZh } from "./content/db-003.ts";
import { db004JournalEn, db004JournalZh } from "./content/db-004.ts";
import { db005JournalEn, db005JournalZh } from "./content/db-005.ts";
import { db006JournalEn, db006JournalZh } from "./content/db-006.ts";
import { db007JournalEn, db007JournalZh } from "./content/db-007.ts";
import { db008JournalEn, db008JournalZh } from "./content/db-008.ts";
import { db009JournalEn, db009JournalZh } from "./content/db-009.ts";
import { db010JournalEn, db010JournalZh } from "./content/db-010.ts";
import { db011JournalZh } from "./content/db-011.ts";
import { db012JournalZh } from "./content/db-012.ts";
import type { JournalBrief, JournalLocale } from "./types.ts";

const JOURNAL_BRIEFS: JournalBrief[] = [
  db001JournalEn,
  db001JournalZh,
  db002JournalEn,
  db002JournalZh,
  db003JournalEn,
  db003JournalZh,
  db004JournalEn,
  db004JournalZh,
  db005JournalEn,
  db005JournalZh,
  db006JournalEn,
  db006JournalZh,
  db007JournalEn,
  db007JournalZh,
  db008JournalEn,
  db008JournalZh,
  db009JournalEn,
  db009JournalZh,
  db010JournalEn,
  db010JournalZh,
  db011JournalZh,
  db012JournalZh,
];

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
