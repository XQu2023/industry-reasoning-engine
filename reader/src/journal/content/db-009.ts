import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-009 — Public Beta Sprint 2 editorial rewrite; facts and reasoning unchanged. */
export const db009JournalZh: JournalBrief = {
  slug: "db-009",
  locale: "zh",
  productId: "DB-009",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "稀缺的不是又一个聊天演示。",
      "而是可控的商业聊天与 API 面——外加信任叙事。",
    ],
    title: "Claude：商业聊天与 API 面打开，双 SKU 上架",
    summary:
      "2023 年 3 月 14 日，Anthropic 经聊天与 API 推出 Claude——申请门控、双 SKU，Constitutional AI / HHH 作信任框架。",
    meta: { id: "DB-009", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "若开发者经带信任定位的专有基座模型 API 交付助手功能，价值迁向谁？",
  },
  story: {
    paragraphs: [
      "过去一段时间，如果有人问：基座模型怎么交付？",
      "答案往往是封闭 alpha，或又一次聊天演示。",
      "这些都没有错。",
      "但模型走出封闭 alpha 后，团队要的是 API 与聊天面。",
      "还要清晰 SKU，以及信任叙事。",
      "接入面变了。",
      "不是又一次封闭演示。",
      "Anthropic 的答案：受控商业表面。",
      "申请门控的聊天与 API。",
      "产品拆成 Claude 与 Claude Instant。",
      "Constitutional AI / HHH 作信任框架；具名伙伴并行分发。",
      "申请接入能否转成持续付费使用，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: ["封闭 alpha / 仅伙伴接入", "门控聊天 + 双 SKU API", "Constitutional AI / HHH"],
    caption: "价值迁向：接入形态 → Anthropic 可控商业面 → 信任框架；Anthropic Tier 1",
  },
  keyInsight: {
    sentence: "卖的是门控聊天与 API 式基座接入，双 SKU 加信任产品——不是又一个聊天演示；Anthropic 为 Tier 1。",
  },
  analysis: {
    paragraphs: [
      "2023 年 3 月 14 日。",
      "Claude 经聊天与 API 可用；开发者控制台需申请接入。",
      "双 SKU：Claude（更强）与 Claude Instant（更快/更便宜）。",
      "框架：Constitutional AI 与 HHH；强调可引导性。",
      "T0 限制：约 9k 上下文；无联网；无 embeddings。",
      "具名伙伴/用例：Poe、Notion AI、DuckAssist、Juni Learning、Robin AI、AssemblyAI。",
      "Anthropic 为 Tier 1；伙伴为 Tier 2。",
      "美元标价、利润率、付费转化与合同条款，仍属 Unknown。",
      "方向比幅度更清楚。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看又一个聊天演示。先问自己：谁拥有门控商业 API 面，并用信任框架锁住接入？",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "专有基座模型 API",
      "双 SKU 能力/成本拆分",
      "Constitutional AI 式信任产品",
      "申请门控接入",
      "伙伴嵌入分发",
    ],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "Anthropic 放弃商业 API",
      "盈余主要落在伙伴或买方",
      "开发者标准化到非 Claude API",
      "安全结果迫使产品下线",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-006", slug: "db-006", title: "ChatGPT：对话成大模型公共入口，Tier 1 空着", href: "/zh/briefs/db-006" },
      { id: "DB-007", slug: "db-007", title: "Copilot：编码辅助进编辑器，Tier 1 空着", href: "/zh/briefs/db-007" },
      { id: "DB-001", slug: "db-001", title: "英伟达把 AI 算力从芯片推进到机柜", href: "/zh/briefs/db-001" },
    ],
  },
  footer: JOURNAL_FOOTER,
};

export const db009JournalEn: JournalBrief = {
  slug: "db-009",
  locale: "en",
  productId: "DB-009",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The scarce thing is not another chatbot demo.",
      "It is a controlled commercial chat-and-API surface — with a trust story.",
    ],
    title: "Anthropic Opens Claude as a Commercial Chat-and-API Surface",
    summary:
      "On 14 March 2023, Anthropic introduced Claude via chat and API — request-gated, dual SKUs, Constitutional AI / HHH as trust framing.",
    meta: { id: "DB-009", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "If builders ship assistant features through a proprietary foundation-model API with trust positioning, who captures the value?",
  },
  story: {
    paragraphs: [
      "For a while, foundation-model delivery sounded simple.",
      "Closed alpha.",
      "Or another chatbot demo.",
      "That is not wrong.",
      "But once models leave closed alpha, teams need an API and chat surface.",
      "Plus clear SKUs — and a trust story.",
      "The access surface changes.",
      "Not another closed demo.",
      "Anthropic’s answer is a controlled commercial surface.",
      "Request-gated chat and API.",
      "Product splits into Claude and Claude Instant.",
      "Constitutional AI / HHH framing; named-partner distribution beside it.",
      "Whether request access converts to sustained paid usage is still Unknown.",
    ],
  },
  diagram: {
    nodes: ["Closed alpha / partner-only access", "Gated chat + dual-SKU API", "Constitutional AI / HHH"],
    caption: "Value migrates: access form → Anthropic-controlled commercial surface → trust framing; Anthropic Tier 1",
  },
  keyInsight: {
    sentence:
      "What ships is gated chat-and-API foundation access with dual SKUs and a trust product — not another chatbot demo; Anthropic is Tier 1.",
  },
  analysis: {
    paragraphs: [
      "14 March 2023.",
      "Claude via chat and API; request-gated developer console.",
      "Dual SKUs: Claude (more powerful) and Claude Instant (faster/cheaper).",
      "Framing: Constitutional AI and HHH; steerability emphasised.",
      "T0 limits: ~9k context; no internet; no embeddings.",
      "Named partners/use cases: Poe, Notion AI, DuckAssist, Juni Learning, Robin AI, AssemblyAI.",
      "Anthropic Tier 1; partners Tier 2.",
      "Dollar list prices, margins, paid conversion, and contract terms remain Unknown.",
      "Direction is clearer than magnitude.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "Don’t only ask which chatbot demo looks better. Ask first: who owns the gated commercial API surface — and locks access with a trust frame?",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "Proprietary foundation-model APIs",
      "Dual capability/cost SKUs",
      "Constitutional AI-style trust products",
      "Request-gated access",
      "Partner embedding distribution",
    ],
  },
  changeMind: {
    prompt: "What would change today’s conclusion?",
    items: [
      "Anthropic abandoning the commercial API",
      "Surplus accruing mainly to partners or buyers",
      "Builders standardising on non-Claude APIs",
      "Safety outcomes forcing withdrawal of the product",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      {
        id: "DB-006",
        slug: "db-006",
        title: "ChatGPT Makes Dialogue the Public Interface to Large Language Models",
        href: "/briefs/db-006",
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
