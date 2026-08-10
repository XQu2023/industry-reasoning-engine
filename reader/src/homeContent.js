/** Homepage editorial copy only. Keeps UI chrome (i18n) and brief bodies separate. */

import { getBrandMark, getBrandSubtitle, withBrandPrefix } from "./brand.js";

/**
 * Card / article value lines.
 * `gain` — collection “读完这一篇，你将理解”
 * `conclusion` — article “一句话结论”
 * `takeaways` — article “读完本文，你将理解”
 */
export const BRIEF_VALUE = {
  "db-001": {
    gain: {
      en: "Why AI value is starting to move from the chip to the whole system.",
      zh: "为什么 AI 的价值开始从芯片流向整个系统。",
    },
    conclusion: {
      en: "Blackwell reframes AI compute as a rack-scale platform, not a faster chip alone.",
      zh: "Blackwell 把 AI 算力重新定义为机柜级平台，而不只是更快的芯片。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Why those actors structurally benefit",
        "What remains to be confirmed",
      ],
      zh: ["为什么价值重新分配", "为什么这些人真正受益", "哪些仍属于待确认"],
    },
  },
  "db-002": {
    gain: {
      en: "Why CUDA’s real moat is not speed.",
      zh: "为什么 CUDA 的真正护城河不是速度。",
    },
    conclusion: {
      en: "CUDA sells GPU compute as a gated programming model—compiler, driver, and SDK.",
      zh: "CUDA 把 GPU 计算卖成受控编程模型：编译器、驱动与 SDK。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Why those actors structurally benefit",
        "What remains to be confirmed",
      ],
      zh: ["为什么价值重新分配", "为什么这些人真正受益", "哪些仍属于待确认"],
    },
  },
  "db-003": {
    gain: {
      en: "Why ASML’s edge comes from the ecosystem, not EUV alone.",
      zh: "为什么 ASML 的优势来自生态，而不仅是 EUV。",
    },
    conclusion: {
      en: "EUV tools arrive at customers, but T0 capture still sits in immersion extension.",
      zh: "EUV 已进客户现场，但 T0 抓取仍在浸没延寿。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Why those actors structurally benefit",
        "What remains to be confirmed",
      ],
      zh: ["为什么价值重新分配", "为什么这些人真正受益", "哪些仍属于待确认"],
    },
  },
  "db-004": {
    gain: {
      en: "Why Stripe’s real advantage is the developer ecosystem.",
      zh: "为什么 Stripe 的真正优势是开发者生态。",
    },
    conclusion: {
      en: "Stripe turns online card acceptance into a developer API with one published fee.",
      zh: "Stripe 把线上收卡做成开发者 API，费率一条写死。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Why those actors structurally benefit",
        "What remains to be confirmed",
      ],
      zh: ["为什么价值重新分配", "为什么这些人真正受益", "哪些仍属于待确认"],
    },
  },
  "db-005": {
    gain: {
      en: "Why Kubernetes won on open ecosystem, not technology alone.",
      zh: "为什么 Kubernetes 赢的是开放生态，而不是技术。",
    },
    conclusion: {
      en: "Kubernetes opens fleet control as open source—and leaves Tier 1 vacant at T0.",
      zh: "Kubernetes 打开开源集群控制面，T0 上 Tier 1 空着。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Why those actors structurally benefit",
        "What remains to be confirmed",
      ],
      zh: ["为什么价值重新分配", "为什么这些人真正受益", "哪些仍属于待确认"],
    },
  },
  "db-006": {
    gain: {
      en: "Why ChatGPT became the public entry to AI.",
      zh: "为什么 ChatGPT 成为 AI 的公共入口。",
    },
    conclusion: {
      en: "ChatGPT makes dialogue the public interface to large language models—while Tier 1 stays vacant.",
      zh: "ChatGPT 把对话做成大模型公共入口；T0 上 Tier 1 仍空着。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Why those actors structurally benefit",
        "What remains to be confirmed",
      ],
      zh: ["为什么价值重新分配", "为什么这些人真正受益", "哪些仍属于待确认"],
    },
  },
  "db-007": {
    gain: {
      en: "Why coding help is moving into the editor itself.",
      zh: "为什么编码辅助开始进入编辑器本身。",
    },
    conclusion: {
      en: "Copilot moves coding help into the editor—without a Tier 1 capturer yet.",
      zh: "Copilot 把编码辅助推进编辑器；T0 尚无 Tier 1 抓取方。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Why those actors structurally benefit",
        "What remains to be confirmed",
      ],
      zh: ["为什么价值重新分配", "为什么这些人真正受益", "哪些仍属于待确认"],
    },
  },
  "db-008": {
    gain: {
      en: "Why accelerator competition turns on memory and software.",
      zh: "为什么加速器竞争看内存与软件，而不只看峰值算力。",
    },
    conclusion: {
      en: "MI300 frames accelerator competition around high HBM3 memory and ROCm—not peak FLOPs alone.",
      zh: "MI300 把竞争框到高 HBM3 与 ROCm，而不只看峰值 FLOPs。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Why those actors structurally benefit",
        "What remains to be confirmed",
      ],
      zh: ["为什么价值重新分配", "为什么这些人真正受益", "哪些仍属于待确认"],
    },
  },
  "db-009": {
    gain: {
      en: "Why foundation models are opening through commercial APIs.",
      zh: "为什么基座模型开始以商业 API 方式接入。",
    },
    conclusion: {
      en: "Claude opens as a commercial chat-and-API surface with dual SKUs.",
      zh: "Claude 以商业聊天与 API 面上线，并拆出双 SKU。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Why those actors structurally benefit",
        "What remains to be confirmed",
      ],
      zh: ["为什么价值重新分配", "为什么这些人真正受益", "哪些仍属于待确认"],
    },
  },
  "db-010": {
    gain: {
      en: "Why an open lakehouse is hard for one vendor to lock.",
      zh: "为什么开放湖仓一体难以被单一厂商锁定。",
    },
    conclusion: {
      en: "The lakehouse is an open pattern—warehouse features on open lakes—so Tier 1 stays vacant.",
      zh: "Lakehouse 是开放架构：仓能力建在开放湖上，故 Tier 1 锁不住。",
    },
    takeaways: {
      en: [
        "Why value is being reallocated",
        "Why those actors structurally benefit",
        "What remains to be confirmed",
      ],
      zh: ["为什么价值重新分配", "为什么这些人真正受益", "哪些仍属于待确认"],
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
      "Read Decision Briefs to understand why industry value is reallocated—and what remains to be confirmed.",
    titleLines: ["In five minutes,", "see why industry value is reallocated."],
    supportLines: [
      "You will read primary sources only.",
      "You will see why value is reallocated,",
      "not a repeat of the news.",
    ],
    primaryCta: "Start with DB-001",
    secondaryCta: "Choose the next brief",
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
        text: "Understand the forces behind industry change—not the surface story.",
      },
      {
        title: "Find value flow",
        text: "See where value is flowing—not where attention is loudest.",
      },
      {
        title: "Separate known from unconfirmed",
        text: "Separate what is known from what is to be confirmed. Wait for evidence instead of guessing.",
      },
      {
        title: "Form lasting judgment",
        text: "Form judgment you can keep validating and revising.",
      },
    ],
    differenceTitle: "Why trust us?",
    differenceSubtitle: "You can check every brief against the same four standards.",
    differences: [
      {
        title: "Primary sources only",
        text: "You can trace every judgment back to primary sources.",
      },
      {
        title: "Value flow explained",
        text: "You will see why value is reallocated—not a news rewrite.",
      },
      {
        title: "To-be-confirmed marked",
        text: "When evidence is thin, you will see it marked—not guessed.",
      },
      {
        title: "Conclusions kept under test",
        text: "You will see judgments tested by time and new evidence.",
      },
    ],
    readingTitleLines: ["Why start with this brief?"],
    readingId: "DB-001",
    readingGainLabel: "After this brief, you will understand:",
    readingGainLines: [
      "Why AI value is starting",
      "to move from the chip to the whole system.",
    ],
    processTitle: "How we reach a conclusion",
    processSubtitle: "You will see how a conclusion is built from evidence, step by step.",
    processSteps: [
      {
        title: "Gather evidence",
        text: "You will know the judgment rests on announcements, papers, and filings you can check.",
      },
      {
        title: "Structure the analysis",
        text: "You will see facts, inferences, and items to be confirmed kept apart.",
      },
      {
        title: "Form a judgment",
        text: "You will get a structural judgment you can read in five minutes.",
      },
      {
        title: "Keep validating",
        text: "You will see how later evidence confirms, revises, or overturns the judgment.",
      },
      {
        title: "Retain knowledge",
        text: "You can carry validated patterns into the next brief you read.",
      },
    ],
  },
  zh: {
    documentTitleSuffix: "看懂产业价值为什么重新分配",
    documentDescription:
      "读决策简报，看懂产业价值为什么重新分配，以及哪些仍属于待确认。",
    titleLines: ["5 分钟，", "看懂产业价值为什么重新分配。"],
    supportLines: [
      "你将只看到第一手来源。",
      "你将理解价值为什么重新分配，",
      "而不是重复新闻。",
    ],
    primaryCta: "开始阅读 DB-001",
    secondaryCta: "选择下一篇简报",
    startSlug: "db-001",
    trustBar: ["10 篇决策简报", "180+ 第一手来源", "全部可追溯", "持续验证"],
    benefitTitle: "你将获得什么？",
    benefits: [
      {
        title: "理解产业变化",
        text: "理解产业变化背后的驱动力，而不是停留在表象。",
      },
      {
        title: "发现价值流向",
        text: "看清价值流向哪里，而不是停留在热点。",
      },
      {
        title: "区分已知与待确认",
        text: "区分已知与待确认，等待证据，而不是猜测。",
      },
      {
        title: "形成可修正的判断",
        text: "建立能够持续验证和修正的判断。",
      },
    ],
    differenceTitle: "为什么相信我们？",
    differenceSubtitle: "你可以用同样的四项标准，核对每一篇简报。",
    differences: [
      {
        title: "只使用第一手来源",
        text: "你能把每条判断追溯到第一手资料。",
      },
      {
        title: "解释价值流向",
        text: "你将理解价值为什么重新分配，而不是读到新闻复述。",
      },
      {
        title: "明确标注待确认",
        text: "证据不足时，你会看到待确认，而不是猜测。",
      },
      {
        title: "持续验证结论",
        text: "你会看到判断如何接受时间和新证据的检验。",
      },
    ],
    readingTitleLines: ["为什么先读这一篇？"],
    readingId: "DB-001",
    readingGainLabel: "读完这一篇，你将理解：",
    readingGainLines: ["为什么 AI 的价值，", "开始从芯片流向整个系统。"],
    processTitle: "我们如何得出结论？",
    processSubtitle: "你将看清：结论如何从证据一步步形成。",
    processSteps: [
      {
        title: "收集证据",
        text: "你会知道判断建立在公告、论文、财报等可核对的第一手资料上。",
      },
      {
        title: "结构化分析",
        text: "你会看清事实、推断和待确认被分开处理。",
      },
      {
        title: "形成判断",
        text: "你用 5 分钟就能抓住结构判断。",
      },
      {
        title: "持续验证",
        text: "你会看到新证据如何确认、修正或推翻已有判断。",
      },
      {
        title: "知识沉淀",
        text: "你可以把已验证的判断，带到下一篇阅读。",
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
