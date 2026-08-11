import type { JournalBrief } from "./types.ts";

export type JournalQaFailure = {
  slug: string;
  locale: string;
  missing: string[];
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function hasParagraphs(value: unknown): boolean {
  return Array.isArray(value) && value.length > 0 && value.every(isNonEmptyString);
}

/**
 * Journal QA — every Brief must include the frozen reading system.
 * Missing any required component fails the build.
 */
export function validateJournalBrief(brief: JournalBrief): string[] {
  const missing: string[] = [];

  if (!brief?.hero || !isNonEmptyString(brief.hero.title) || !isNonEmptyString(brief.hero.summary)) {
    missing.push("Hero");
  } else if (
    !Array.isArray(brief.hero.quoteLines)
    || brief.hero.quoteLines.length < 1
    || brief.hero.quoteLines.length > 2
    || !brief.hero.quoteLines.every(isNonEmptyString)
    || !isNonEmptyString(brief.hero.meta?.id)
    || !isNonEmptyString(brief.hero.meta?.readingTime)
    || !isNonEmptyString(brief.hero.meta?.industry)
  ) {
    missing.push("Hero");
  }

  if (!brief?.question || !isNonEmptyString(brief.question.text)) {
    missing.push("Question");
  } else if (brief.question.text.trim().split(/\s+/).length > 120) {
    missing.push("Question");
  }

  if (!brief?.story || !hasParagraphs(brief.story.paragraphs)) {
    missing.push("Story");
  }

  if (!brief?.diagram || !Array.isArray(brief.diagram.nodes) || brief.diagram.nodes.length < 2) {
    missing.push("Diagram");
  } else if (!brief.diagram.nodes.every(isNonEmptyString)) {
    missing.push("Diagram");
  }

  if (!brief?.keyInsight || !isNonEmptyString(brief.keyInsight.sentence)) {
    missing.push("Key Insight");
  }

  if (!brief?.analysis || !hasParagraphs(brief.analysis.paragraphs)) {
    missing.push("Analysis");
  }

  if (
    !brief?.worldModel
    || !isNonEmptyString(brief.worldModel.title)
    || !isNonEmptyString(brief.worldModel.principle)
    || !isNonEmptyString(brief.worldModel.applyLabel)
    || !Array.isArray(brief.worldModel.applyTo)
    || brief.worldModel.applyTo.length < 1
    || !brief.worldModel.applyTo.every(isNonEmptyString)
  ) {
    missing.push("World Model");
  }

  if (
    !brief?.changeMind
    || !isNonEmptyString(brief.changeMind.prompt)
    || !Array.isArray(brief.changeMind.items)
    || brief.changeMind.items.length < 1
    || !brief.changeMind.items.every(isNonEmptyString)
  ) {
    missing.push("Change My Mind");
  }

  if (
    !brief?.continueThinking
    || !isNonEmptyString(brief.continueThinking.title)
    || !Array.isArray(brief.continueThinking.items)
    || brief.continueThinking.items.length < 1
    || !brief.continueThinking.items.every(
      (item) =>
        isNonEmptyString(item?.id)
        && isNonEmptyString(item?.slug)
        && isNonEmptyString(item?.title)
        && isNonEmptyString(item?.href),
    )
  ) {
    missing.push("Continue Thinking");
  }

  if (
    !brief?.footer
    || !isNonEmptyString(brief.footer.brand)
    || !Array.isArray(brief.footer.lines)
    || brief.footer.lines.length !== 2
    || !brief.footer.lines.every(isNonEmptyString)
  ) {
    missing.push("Footer");
  }

  return missing;
}

export function validateJournalCatalog(briefs: JournalBrief[]): JournalQaFailure[] {
  return briefs
    .map((brief) => {
      const missing = validateJournalBrief(brief);
      if (missing.length === 0) return null;
      return { slug: brief.slug, locale: brief.locale, missing };
    })
    .filter((failure): failure is JournalQaFailure => failure !== null);
}

export function assertJournalCatalog(briefs: JournalBrief[]): void {
  const failures = validateJournalCatalog(briefs);
  if (failures.length === 0) return;

  const message = failures
    .map((failure) => `${failure.slug}/${failure.locale}: missing ${failure.missing.join(", ")}`)
    .join("\n");
  throw new Error(`Journal QA failed.\n${message}`);
}
