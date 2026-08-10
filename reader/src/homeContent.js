/** Homepage editorial copy only. Keeps UI chrome (i18n) and brief bodies separate. */

import { getBrandMark, getBrandSubtitle, withBrandPrefix } from "./brand.js";

/**
 * Card / article value lines.
 * `gain` — collection “你将获得” (Chinese ≤ 20 chars)
 * `conclusion` — article “一句话结论”
 * `takeaways` — article “读完本文，你将理解”
 */
export const BRIEF_VALUE = {
  "db-001": {
    gain: { en: "See AI compute move to the rack.", zh: "理解算力迁向机柜" },
    conclusion: {
      en: "Blackwell reframes AI compute as a rack-scale platform, not a faster chip alone.",
      zh: "Blackwell 把 AI 算力重新定义为机柜级平台，而不只是更快的芯片。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Who structurally benefits",
        "What remains Unknown",
      ],
      zh: ["为什么价值重新分配", "谁真正受益", "哪些仍属于 Unknown"],
    },
  },
  "db-002": {
    gain: { en: "See scarcity in the programming model.", zh: "看清编程模型稀缺" },
    conclusion: {
      en: "CUDA sells GPU compute as a gated programming model—compiler, driver, and SDK.",
      zh: "CUDA 把 GPU 计算卖成受控编程模型：编译器、驱动与 SDK。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Who structurally benefits",
        "What remains Unknown",
      ],
      zh: ["为什么价值重新分配", "谁真正受益", "哪些仍属于 Unknown"],
    },
  },
  "db-003": {
    gain: { en: "See T0 capture in immersion.", zh: "看清浸没延寿抓取" },
    conclusion: {
      en: "EUV tools arrive at customers, but T0 capture still sits in immersion extension.",
      zh: "EUV 已进客户现场，但 T0 抓取仍在浸没延寿。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Who structurally benefits",
        "What remains Unknown",
      ],
      zh: ["为什么价值重新分配", "谁真正受益", "哪些仍属于 Unknown"],
    },
  },
  "db-004": {
    gain: { en: "See card acceptance as one API.", zh: "理解收卡变开发接口" },
    conclusion: {
      en: "Stripe turns online card acceptance into a developer API with one published fee.",
      zh: "Stripe 把线上收卡做成开发者 API，费率一条写死。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Who structurally benefits",
        "What remains Unknown",
      ],
      zh: ["为什么价值重新分配", "谁真正受益", "哪些仍属于 Unknown"],
    },
  },
  "db-005": {
    gain: { en: "See open control with vacant Tier 1.", zh: "理解开源控制面空位" },
    conclusion: {
      en: "Kubernetes opens fleet control as open source—and leaves Tier 1 vacant at T0.",
      zh: "Kubernetes 打开开源集群控制面，T0 上 Tier 1 空着。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Who structurally benefits",
        "What remains Unknown",
      ],
      zh: ["为什么价值重新分配", "谁真正受益", "哪些仍属于 Unknown"],
    },
  },
  "db-006": {
    gain: { en: "See dialogue as the LLM entry.", zh: "理解对话成公共入口" },
    conclusion: {
      en: "ChatGPT makes dialogue the public interface to large language models—while Tier 1 stays vacant.",
      zh: "ChatGPT 把对话做成大模型公共入口；T0 上 Tier 1 仍空着。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Who structurally benefits",
        "What remains Unknown",
      ],
      zh: ["为什么价值重新分配", "谁真正受益", "哪些仍属于 Unknown"],
    },
  },
  "db-007": {
    gain: { en: "See coding help enter the IDE.", zh: "理解编码帮助进编辑器" },
    conclusion: {
      en: "Copilot moves coding help into the editor—without a Tier 1 capturer yet.",
      zh: "Copilot 把编码辅助推进编辑器；T0 尚无 Tier 1 抓取方。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Who structurally benefits",
        "What remains Unknown",
      ],
      zh: ["为什么价值重新分配", "谁真正受益", "哪些仍属于 Unknown"],
    },
  },
  "db-008": {
    gain: { en: "See competition on memory and software.", zh: "看清内存与软件竞争" },
    conclusion: {
      en: "MI300 frames accelerator competition around high HBM3 memory and ROCm—not peak FLOPs alone.",
      zh: "MI300 把竞争框到高 HBM3 与 ROCm，而不只看峰值 FLOPs。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Who structurally benefits",
        "What remains Unknown",
      ],
      zh: ["为什么价值重新分配", "谁真正受益", "哪些仍属于 Unknown"],
    },
  },
  "db-009": {
    gain: { en: "See a commercial foundation-model API.", zh: "理解基座模型商业接入" },
    conclusion: {
      en: "Claude opens as a commercial chat-and-API surface with dual SKUs.",
      zh: "Claude 以商业聊天与 API 面上线，并拆出双 SKU。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Who structurally benefits",
        "What remains Unknown",
      ],
      zh: ["为什么价值重新分配", "谁真正受益", "哪些仍属于 Unknown"],
    },
  },
  "db-010": {
    gain: { en: "See an open lakehouse pattern.", zh: "理解开放湖仓一体" },
    conclusion: {
      en: "The lakehouse is an open pattern—warehouse features on open lakes—so Tier 1 stays vacant.",
      zh: "Lakehouse 是开放架构：仓能力建在开放湖上，故 Tier 1 锁不住。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Who structurally benefits",
        "What remains Unknown",
      ],
      zh: ["为什么价值重新分配", "谁真正受益", "哪些仍属于 Unknown"],
    },
  },
};

function localized(entry, locale, field) {
  if (!entry?.[field]) return "";
  return entry[field][locale] ?? entry[field].en ?? "";
}

export function getBriefWhy(slug, locale) {
  return localized(BRIEF_VALUE[slug], locale, "gain");
}

export function getBriefConclusion(slug, locale) {
  return localized(BRIEF_VALUE[slug], locale, "conclusion");
}

export function getBriefTakeaways(slug, locale) {
  const entry = BRIEF_VALUE[slug]?.takeaways;
  if (!entry) return [];
  return entry[locale] ?? entry.en ?? [];
}

/** @deprecated Use getBriefWhy */
export function getBriefTakeaway(slug, locale) {
  return getBriefWhy(slug, locale);
}

const HOME = {
  en: {
    documentTitleSuffix: "See why industry value is reallocated",
    documentDescription:
      "Primary-source Decision Briefs: what changed, why value is reallocated, and what remains Unknown.",
    titleLines: ["In five minutes,", "see why industry value is reallocated."],
    supportLines: [
      "Primary sources only.",
      "Explain why value is reallocated,",
      "not repeat the news.",
    ],
    primaryCta: "Start with DB-001",
    secondaryCta: "Browse all briefs",
    startSlug: "db-001",
    trustBar: [
      "10 Decision Briefs",
      "180+ primary sources",
      "Fully traceable",
      "Ongoing validation",
    ],
    benefitTitle: "What you will gain",
    benefits: [
      {
        title: "Understand industry change",
        text: "See what structurally moved—not a headline pile.",
      },
      {
        title: "Find value migration",
        text: "Name where value may flow, and who sits on scarcity.",
      },
      {
        title: "Identify true Unknowns",
        text: "Gaps stay labeled Unknown. No fake certainty.",
      },
      {
        title: "Build long-term judgment",
        text: "Frozen theses, later validation, a trail you can return to.",
      },
    ],
    differenceTitle: "Why this is not news",
    differences: [
      {
        title: "Primary sources",
        text: "Completed first-party research only.",
      },
      {
        title: "Value flow",
        text: "Where value may move—not the press release alone.",
      },
      {
        title: "Unknown left Unknown",
        text: "No guess dressed as fact.",
      },
      {
        title: "Ongoing validation",
        text: "Later evidence tests what held.",
      },
    ],
    readingTitleLines: ["If you read only one,", "start here."],
    readingId: "DB-001",
    readingGainLabel: "You will gain",
    readingGain: "Understand why Blackwell changes AI infrastructure.",
    processTitle: "How research works",
    processSteps: [
      {
        title: "Primary sources",
        text: "Freeze the original announcement and filings.",
      },
      {
        title: "Structured research",
        text: "Separate facts from inference at a point in time.",
      },
      {
        title: "Decision Brief",
        text: "Distill the structural thesis for readers.",
      },
      {
        title: "Ongoing validation",
        text: "Test what later evidence confirms or weakens.",
      },
      {
        title: "Knowledge retained",
        text: "Keep durable lessons for the next case.",
      },
    ],
  },
  zh: {
    documentTitleSuffix: "看懂产业价值为什么重新分配",
    documentDescription:
      "第一手来源写决策简报：产业变了什么、价值为什么重新分配、哪些事还不知道。",
    titleLines: ["5 分钟，", "看懂产业价值为什么重新分配。"],
    supportLines: [
      "只使用第一手来源。",
      "解释价值为什么重新分配，",
      "而不是重复新闻。",
    ],
    primaryCta: "开始阅读 DB-001",
    secondaryCta: "浏览全部简报",
    startSlug: "db-001",
    trustBar: ["10 篇决策简报", "180+ 第一手来源", "全部可追溯", "持续验证"],
    benefitTitle: "你将获得什么？",
    benefits: [
      {
        title: "理解产业变化",
        text: "看清结构上变了什么，而不是标题堆叠。",
      },
      {
        title: "发现价值迁移",
        text: "标明价值可能往哪走，谁卡在稀缺层。",
      },
      {
        title: "识别真正未知",
        text: "缺口标成 Unknown，不假装确定。",
      },
      {
        title: "建立长期判断",
        text: "论点可冻结、可验证，还能回头核对。",
      },
    ],
    differenceTitle: "为什么不是新闻？",
    differences: [
      {
        title: "第一手来源",
        text: "只用已完成的第一方研究。",
      },
      {
        title: "价值流向",
        text: "写价值可能往哪迁，不只复述公告。",
      },
      {
        title: "明确未知",
        text: "不知道就写 Unknown，不硬猜。",
      },
      {
        title: "持续验证",
        text: "用后来的证据检验论点是否站得住。",
      },
    ],
    readingTitleLines: ["如果只能读一篇，", "从这里开始。"],
    readingId: "DB-001",
    readingGainLabel: "你将获得",
    readingGain: "理解 Blackwell 为什么改变 AI 基础设施。",
    processTitle: "研究怎么做",
    processSteps: [
      {
        title: "第一手来源",
        text: "冻结原始公告与公开资料。",
      },
      {
        title: "结构化研究",
        text: "在固定时点把事实与推断分开。",
      },
      {
        title: "决策简报",
        text: "提炼结构论点，供读者快速判断。",
      },
      {
        title: "持续验证",
        text: "用后来的证据检验哪些站得住。",
      },
      {
        title: "知识沉淀",
        text: "把可复用的教训留下来。",
      },
    ],
  },
};

export function getHomeContent(locale) {
  const base = HOME[locale] ?? HOME.en;
  return {
    ...base,
    brandMark: getBrandMark(locale),
    brandSubtitle: getBrandSubtitle(locale),
    documentTitle: withBrandPrefix(locale, base.documentTitleSuffix),
  };
}
