import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-006 — Public Beta Sprint 2 editorial rewrite; facts and reasoning unchanged. */
export const db006JournalZh: JournalBrief = {
  slug: "db-006",
  locale: "zh",
  productId: "DB-006",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "稀缺的不是又一个 checkpoint。",
      "而是对话入口，以及它背后的反馈环。",
    ],
    title: "ChatGPT：对话成大模型公共入口，Tier 1 空着",
    summary:
      "2022 年 11 月 30 日，OpenAI 在 chat.openai.com 以免费研究预览上线 ChatGPT——经 RLHF 调成对话的 GPT-3.5。",
    meta: { id: "DB-006", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "若多轮对话成为使用大模型的默认方式，而产品免费且未定价，谁拿走盈余？",
  },
  story: {
    paragraphs: [
      "过去几年，如果有人问：大模型怎么用？",
      "答案往往是单轮指令，或非对话工具。",
      "这些都没有错。",
      "但人们求助时，要的是多轮上下文、纠错与拒绝。",
      "入口形态变了。",
      "不是又发一版基座模型。",
      "ChatGPT 的答案，是公开对话表面。",
      "免费研究预览。",
      "入口：chat.openai.com。",
      "交互模式上移到对话。",
      "审核与用户反馈，进入迭代部署环。",
      "使用是否粘住，并转成可持久付费产品面，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: ["单轮指令 / 非对话工具", "RLHF 对话 + 审核反馈环", "免费浏览器聊天入口"],
    caption: "价值迁向：入口形态 → 对话模型与反馈环 → 免费可及表面；T0 Tier 1 空位",
  },
  keyInsight: {
    sentence: "卖的是公共对话入口与反馈环，不是又一个 checkpoint；OpenAI 仅 Tier 2，Tier 1 空着。",
  },
  analysis: {
    paragraphs: [
      "2022 年 11 月 30 日。",
      "ChatGPT：免费研究预览对话模型；InstructGPT 同系。",
      "GPT-3.5 系列上用 RLHF；入口 chat.openai.com。",
      "自述强项：跟进、认错、挑战错误前提、拒绝不当请求。",
      "同时列失效模式：幻觉、冗长、提示敏感、安全等。",
      "训练伙伴点名 Azure AI。",
      "Moderation API；反馈竞赛奖励 API 额度。",
      "T0 无订阅价或广告模式。",
      "OpenAI 为 Tier 2；Tier 1 空位。",
      "价格/广告、免费是否持续、云条款与盈余份额，仍属 Unknown。",
      "方向比幅度更清楚。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看又一个 checkpoint。先问自己：谁拥有默认对话入口与反馈环——免费时 Tier 1 是否空着？",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "对话式 LLM 入口",
      "RLHF 产品面",
      "审核与反馈环",
      "免费研究预览转化",
      "相邻开发者 API",
    ],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "ChatGPT 下线且无替代对话表面",
      "盈余主要落在基础设施层",
      "对话未能成为默认 LLM 交互方式",
      "出现零留存、可互换的托管聊天",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-009", slug: "db-009", title: "Claude：商业聊天与 API 面打开，双 SKU 上架", href: "/zh/briefs/db-009" },
      { id: "DB-007", slug: "db-007", title: "Copilot：编码辅助进编辑器，Tier 1 空着", href: "/zh/briefs/db-007" },
      { id: "DB-001", slug: "db-001", title: "英伟达把 AI 算力从芯片推进到机柜", href: "/zh/briefs/db-001" },
    ],
  },
  footer: JOURNAL_FOOTER,
};

export const db006JournalEn: JournalBrief = {
  slug: "db-006",
  locale: "en",
  productId: "DB-006",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The scarce thing is not another checkpoint.",
      "It is the dialogue interface — and the feedback loop behind it.",
    ],
    title: "ChatGPT Makes Dialogue the Public Interface to Large Language Models",
    summary:
      "On 30 November 2022, OpenAI launched ChatGPT as a free research preview at chat.openai.com — GPT-3.5 tuned with RLHF for dialogue.",
    meta: { id: "DB-006", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "If multi-turn conversation becomes the default way people use LLMs, and the product is free and unpriced, who captures surplus?",
  },
  story: {
    paragraphs: [
      "For years, using a large language model sounded simple.",
      "Single-turn instructions.",
      "Or non-dialogue tools.",
      "That is not wrong.",
      "But when people ask for help, they want follow-ups, correction, and refusal across a conversation.",
      "The public interface form changes.",
      "Not another base-model release.",
      "ChatGPT’s answer is a public conversational surface.",
      "A free research preview.",
      "At chat.openai.com.",
      "Interaction mode moves toward dialogue.",
      "Moderation and user feedback enter the iterative deployment loop.",
      "Whether usage sticks and converts into a durable paid product surface is still Unknown.",
    ],
  },
  diagram: {
    nodes: ["Single-turn / non-dialogue tools", "RLHF dialogue + feedback loop", "Free browser chat interface"],
    caption: "Value migrates: interface form → dialogue model and feedback loop → free accessible surface; Tier 1 vacant at T0",
  },
  keyInsight: {
    sentence:
      "What ships is a public dialogue interface and feedback loop — not another checkpoint; OpenAI Tier 2 only; Tier 1 vacant.",
  },
  analysis: {
    paragraphs: [
      "30 November 2022.",
      "ChatGPT: free research preview dialogue model; InstructGPT sibling.",
      "RLHF on GPT-3.5-series; chat.openai.com.",
      "Strengths named: follow-ups, admitting mistakes, challenging incorrect premises, rejecting inappropriate requests.",
      "Failure modes include hallucination, verbosity, prompt sensitivity, safety.",
      "Training partnership named Azure AI.",
      "Moderation API; feedback contest offers API credits.",
      "No subscription price or ads at T0.",
      "OpenAI Tier 2; Tier 1 vacant.",
      "Price/ads, whether free remains free, cloud terms, and surplus share remain Unknown.",
      "Direction is clearer than magnitude.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "Don’t only ask which checkpoint is newer. Ask first: who owns the default dialogue interface and feedback loop — and is Tier 1 vacant while it stays free?",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "Conversational LLM interfaces",
      "RLHF product surfaces",
      "Moderation and feedback loops",
      "Free research-preview conversion",
      "Adjacent developer APIs",
    ],
  },
  changeMind: {
    prompt: "What would change today’s conclusion?",
    items: [
      "ChatGPT withdrawn without a substitute dialogue surface",
      "Surplus accruing mainly to the infrastructure layer",
      "Dialogue failing as the default LLM interaction mode",
      "Portable, interchangeable hosted chat with zero retention",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      {
        id: "DB-009",
        slug: "db-009",
        title: "Anthropic Opens Claude as a Commercial Chat-and-API Surface",
        href: "/briefs/db-009",
      },
      {
        id: "DB-007",
        slug: "db-007",
        title: "GitHub Copilot Moves Coding Help Into the Editor — Without a Tier 1 Capturer Yet",
        href: "/briefs/db-007",
      },
      {
        id: "DB-001",
        slug: "db-001",
        title: "NVIDIA Moves AI Computing From the Chip to the Rack",
        href: "/briefs/db-001",
      },
    ],
  },
  footer: JOURNAL_FOOTER,
};
