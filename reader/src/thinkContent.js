/** How We Think — trust page (PB-003). Editorial copy only. Max ~800 words. */

import { withBrandPrefix } from "./brand.js";

const THINK = {
  en: {
    documentTitleSuffix: "How we think",
    documentDescription:
      "What FORESIGHT studies, what it refuses to do, and why Decision Briefs exist.",
    heroTitle: "How we think",
    heroLines: [
      "Primary evidence.",
      "Structural questions.",
      "Independent judgment.",
    ],
    studyTitle: "What We Study",
    studyLead: "We study where value moves when constraints change.",
    studyItems: [
      "Bottlenecks that migrate",
      "Supply constraints that decide who can ship",
      "Customer qualification—who is allowed to buy",
      "Blind spots the market prices late",
    ],
    studyClose:
      "We begin with primary evidence: announcements, papers, filings, dated records. Not commentary about commentary.",
    dontTitle: "What We Don't Do",
    dontItems: [
      "Stock tips, price targets, or financial advice",
      "News rewrites dressed as research",
      "Certainty where evidence is thin",
      "Issuer marketing language",
    ],
    methodTitle: "How We Think",
    methodItems: [
      {
        title: "Facts before inference",
        text: "Observable records come first. Interpretation comes second.",
      },
      {
        title: "Unknown stays Unknown",
        text: "Gaps are marked. They are not filled with confidence theater.",
      },
      {
        title: "Keep value roles distinct",
        text: "Creation, migration, and capture answer different questions.",
      },
      {
        title: "Name what would change the mind",
        text: "A conclusion is useful only with its falsifiers attached.",
      },
    ],
    historyTitle: "Why Historical Cases",
    historyParagraphs: [
      "History is not nostalgia. It is where bottlenecks already moved.",
      "Past cases let the same structural questions reappear under new labels—and keep the models that still work.",
      "Decision Briefs exist so a reader can finish one structural judgment in minutes, keep a World Model, and continue without borrowing someone else's certainty.",
    ],
    continueTitle: "Continue Reading",
    startCta: "Start Here",
    beginCta: "Begin with DB-001",
    beginSlug: "db-001",
    collectionCta: "Browse All Briefs",
  },
  zh: {
    documentTitleSuffix: "我们如何思考",
    documentDescription: "FORESIGHT 研究什么、拒绝什么，以及决策简报为何存在。",
    heroTitle: "我们如何思考",
    heroLines: ["第一手证据。", "结构问题。", "独立判断。"],
    studyTitle: "我们研究什么",
    studyLead: "我们研究约束变化时，价值迁向何处。",
    studyItems: [
      "会迁移的瓶颈",
      "决定谁能出货的供给约束",
      "客户资格——谁被允许购买",
      "市场定价偏晚的盲点",
    ],
    studyClose:
      "我们从第一手证据开始：公告、论文、备案、有日期的记录。不是关于评论的评论。",
    dontTitle: "我们不做什么",
    dontItems: [
      "股票建议、目标价或投资建议",
      "伪装成研究的新闻改写",
      "证据不足时的假装确定",
      "发行人营销话术",
    ],
    methodTitle: "我们如何思考",
    methodItems: [
      {
        title: "先事实，后推断",
        text: "可观察的记录在前。解释在后。",
      },
      {
        title: "待确认就保持待确认",
        text: "缺口会被标注。不会用信心表演填平。",
      },
      {
        title: "分开价值角色",
        text: "创造、迁移与捕获，回答的是不同问题。",
      },
      {
        title: "写明什么会改变结论",
        text: "结论有用，是因为附带了可证伪条件。",
      },
    ],
    historyTitle: "为什么要看历史案例",
    historyParagraphs: [
      "历史不是怀旧。历史是瓶颈已经移动过的地方。",
      "旧案例让同一类结构问题换上新标签再次出现——并留下仍然成立的模型。",
      "决策简报的存在，是为了让读者在几分钟内完成一次结构判断，带走一个 World Model，继续思考，而不必借用别人的确定性。",
    ],
    continueTitle: "继续阅读",
    startCta: "从这里开始",
    beginCta: "从 DB-001 开始",
    beginSlug: "db-001",
    collectionCta: "浏览全部简报",
  },
};

export function getThinkContent(locale) {
  const code = locale === "zh" ? "zh" : "en";
  const base = THINK[code] ?? THINK.en;
  return {
    ...base,
    documentTitle: withBrandPrefix(code, base.documentTitleSuffix),
  };
}
