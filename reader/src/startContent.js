/** Start Here — first-time reader onboarding. Editorial copy only. */

import { withBrandPrefix } from "./brand.js";
import { getBriefWhy } from "./homeContent.js";

const START = {
  en: {
    documentTitleSuffix: "Start here",
    documentDescription:
      "Three minutes to understand what a Decision Brief is, how to read one, and where to begin.",
    heroTitle: "Start here",
    heroSummary: "Three minutes to understand FORESIGHT—then begin reading.",
    briefTitle: "What is a Decision Brief?",
    briefParagraphs: [
      "A Decision Brief is a short structural judgment built from primary evidence.",
      "It shows what changed, where value is moving, and what remains to be confirmed.",
      "It is not news. It is not financial advice.",
    ],
    howTitle: "How to Read",
    howSteps: [
      {
        title: "Begin with the question",
        text: "One structural problem. Hold it while you read.",
      },
      {
        title: "Story before analysis",
        text: "See the scene first. Density comes later.",
      },
      {
        title: "Pause at the Key Insight",
        text: "One sentence names where value moves.",
      },
      {
        title: "Keep the World Model",
        text: "A principle you can reuse on the next brief.",
      },
      {
        title: "Note what would change your mind",
        text: "Certainty is not the goal. Conditions are.",
      },
    ],
    pathTitle: "Recommended Reading Path",
    pathLede: "Three briefs. Read in order if you are new.",
    pathSlugs: ["db-001", "db-002", "db-006"],
    learnTitle: "What You'll Learn",
    learnItems: [
      {
        title: "Where value flows",
        text: "Not where attention is loudest.",
      },
      {
        title: "Who may structurally benefit",
        text: "From constraints, not from headlines.",
      },
      {
        title: "What remains Unknown",
        text: "Marked clearly. Not guessed away.",
      },
    ],
    beginTitle: "Begin Reading",
    beginText: "Start with DB-001. Five minutes.",
    beginCta: "Begin with DB-001",
    beginSlug: "db-001",
    collectionCta: "Browse all briefs",
  },
  zh: {
    documentTitleSuffix: "从这里开始",
    documentDescription: "三分钟理解什么是决策简报、如何阅读，以及从哪一篇开始。",
    heroTitle: "从这里开始",
    heroSummary: "三分钟理解 FORESIGHT——然后开始阅读。",
    briefTitle: "什么是决策简报？",
    briefParagraphs: [
      "决策简报是一份基于第一手证据的短篇结构判断。",
      "它说明发生了什么变化、价值迁向何处，以及哪些仍属待确认。",
      "它不是新闻。它不是投资建议。",
    ],
    howTitle: "如何阅读",
    howSteps: [
      {
        title: "先抓住问题",
        text: "一个结构问题。读的时候把它放在心里。",
      },
      {
        title: "先故事，后分析",
        text: "先看见场景。密度稍后到来。",
      },
      {
        title: "在关键洞察处停一下",
        text: "一句话点明价值迁向何处。",
      },
      {
        title: "带走 World Model",
        text: "一条可复用的原则，带到下一篇。",
      },
      {
        title: "记下什么会改变结论",
        text: "目标不是假装确定。目标是看清条件。",
      },
    ],
    pathTitle: "推荐阅读路径",
    pathLede: "三篇简报。如果是第一次，按顺序读。",
    pathSlugs: ["db-001", "db-002", "db-006"],
    learnTitle: "你将学到什么",
    learnItems: [
      {
        title: "价值流向何处",
        text: "不是注意力最响的地方。",
      },
      {
        title: "谁可能结构性地受益",
        text: "来自约束，不是来自标题。",
      },
      {
        title: "哪些仍属待确认",
        text: "清楚标注。不靠猜测抹平。",
      },
    ],
    beginTitle: "开始阅读",
    beginText: "从 DB-001 开始。约五分钟。",
    beginCta: "开始阅读 DB-001",
    beginSlug: "db-001",
    collectionCta: "浏览全部简报",
  },
};

export function getStartContent(locale) {
  const code = locale === "zh" ? "zh" : "en";
  const base = START[code] ?? START.en;
  const path = base.pathSlugs.map((slug, index) => ({
    slug,
    id: slug.toUpperCase(),
    why: getBriefWhy(slug, code),
    index: String(index + 1).padStart(2, "0"),
  }));

  return {
    ...base,
    path,
    documentTitle: withBrandPrefix(code, base.documentTitleSuffix),
  };
}
