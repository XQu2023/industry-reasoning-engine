export type JournalLocale = "zh" | "en";

export type JournalDiagram = {
  nodes: string[];
  caption?: string;
};

export type JournalContinueItem = {
  id: string;
  slug: string;
  title: string;
  href: string;
};

export type JournalBrief = {
  slug: string;
  locale: JournalLocale;
  productId: string;
  hero: {
    quoteLines: [string] | [string, string];
    title: string;
    summary: string;
    meta: {
      id: string;
      readingTime: string;
      industry: string;
    };
  };
  question: {
    text: string;
  };
  story: {
    paragraphs: string[];
  };
  diagram: JournalDiagram;
  keyInsight: {
    sentence: string;
  };
  analysis: {
    paragraphs: string[];
  };
  worldModel: {
    title: string;
    principle: string;
    applyLabel: string;
    applyTo: string[];
  };
  changeMind: {
    prompt: string;
    items: string[];
  };
  continueThinking: {
    title: string;
    items: JournalContinueItem[];
  };
  footer: {
    brand: string;
    lines: [string, string];
  };
  homeHref: string;
};
