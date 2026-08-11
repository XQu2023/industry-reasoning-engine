/** Start Here — first-time reader onboarding (PB-002). Editorial copy only. */

import { withBrandPrefix } from "./brand.js";

const START = {
  en: {
    documentTitleSuffix: "Start here",
    documentDescription:
      "Understand how value moves. Learn what a Decision Brief is, how to read one, and where to begin.",
    heroTitle: "Understand how value moves.",
    heroLines: [
      "The best investment opportunities rarely begin with obvious winners.",
      "They begin with changing bottlenecks.",
    ],
    heroCta: "Start Reading",
    briefTitle: "What is a Decision Brief?",
    briefSentence:
      "A Decision Brief explains why value moved—not what the stock price did.",
    flowSteps: ["Evidence", "Reasoning", "World Model", "Decision Brief"],
    howTitle: "How to Read",
    howSteps: [
      {
        title: "Read the Hero",
        text: "Understand today's question.",
      },
      {
        title: "Study the Diagram",
        text: "See where value moves.",
      },
      {
        title: "Take away one World Model",
        text: "You do not need to remember every fact. Remember one reusable model.",
      },
    ],
    pathTitle: "Recommended Reading Path",
    pathLede: "A guided path. Not the full shelf.",
    path: [
      {
        slug: "db-001",
        why: "Begin with the shift from chip to system.",
      },
      {
        slug: "db-002",
        why: "Next, see how software turns hardware into a locked platform.",
      },
      {
        slug: "db-008",
        why: "Then watch memory and open software become the contested bottleneck.",
      },
      {
        slug: "db-011",
        why: "Then follow scarcity upward into high-bandwidth memory supply.",
        hrefLocale: "zh",
      },
      {
        slug: "db-012",
        why: "Then look one layer deeper—at a materials bottleneck few discuss.",
        hrefLocale: "zh",
      },
    ],
    learnTitle: "What You'll Learn",
    learnItems: [
      { title: "Bottleneck Migration" },
      { title: "Supply Constraint" },
      { title: "Customer Qualification" },
      { title: "Value Reallocation" },
      { title: "Market Blind Spots" },
    ],
    beginTitle: "Begin Reading",
    beginCta: "Begin with DB-001",
    beginSlug: "db-001",
    collectionCta: "Browse All Briefs",
  },
  zh: {
    documentTitleSuffix: "从这里开始",
    documentDescription:
      "理解价值如何流动。弄清什么是决策简报、如何阅读，以及从哪一篇开始。",
    heroTitle: "理解价值如何流动。",
    heroLines: [
      "最好的投资机会，很少从显而易见的赢家开始。",
      "它们从正在变化的瓶颈开始。",
    ],
    heroCta: "开始阅读",
    briefTitle: "什么是决策简报？",
    briefSentence: "决策简报解释价值为什么迁移——而不是股价做了什么。",
    flowSteps: ["证据", "推理", "World Model", "决策简报"],
    howTitle: "如何阅读",
    howSteps: [
      {
        title: "先读 Hero",
        text: "先弄清今天的问题。",
      },
      {
        title: "看懂 Diagram",
        text: "看见价值迁向何处。",
      },
      {
        title: "带走一个 World Model",
        text: "不必记住每一个事实。记住一条可复用的模型。",
      },
    ],
    pathTitle: "推荐阅读路径",
    pathLede: "一条引导路径。不是全部目录。",
    path: [
      {
        slug: "db-001",
        why: "从芯片到系统的价值迁移开始。",
      },
      {
        slug: "db-002",
        why: "接着看软件如何把硬件锁成平台。",
      },
      {
        slug: "db-008",
        why: "然后看内存与开放软件成为争夺的瓶颈。",
      },
      {
        slug: "db-011",
        why: "再往上追稀缺——高带宽内存供给。",
      },
      {
        slug: "db-012",
        why: "再往下一层——很少被讨论的材料瓶颈。",
      },
    ],
    learnTitle: "你将学到什么",
    learnItems: [
      { title: "瓶颈迁移" },
      { title: "供给约束" },
      { title: "客户资格" },
      { title: "价值再分配" },
      { title: "市场盲点" },
    ],
    beginTitle: "开始阅读",
    beginCta: "从 DB-001 开始",
    beginSlug: "db-001",
    collectionCta: "浏览全部简报",
  },
};

export function getStartContent(locale) {
  const code = locale === "zh" ? "zh" : "en";
  const base = START[code] ?? START.en;
  const path = base.path.map((item, index) => ({
    ...item,
    id: item.slug.toUpperCase(),
    index: String(index + 1).padStart(2, "0"),
    hrefLocale: item.hrefLocale || code,
  }));

  return {
    ...base,
    path,
    documentTitle: withBrandPrefix(code, base.documentTitleSuffix),
  };
}
