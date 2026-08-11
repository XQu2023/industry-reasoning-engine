import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-009 — layout migration only; facts and reasoning preserved. */
export const db009JournalZh: JournalBrief = {
  slug: "db-009",
  locale: "zh",
  productId: "DB-009",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "稀缺点在专有基座模型 API 入口，不在又一个聊天演示。",
      "接入从封闭 alpha 推到自家可控的聊天与 API 面。",
    ],
    title: "Claude：商业聊天与 API 面打开，双 SKU 上架",
    summary:
      "2023 年 3 月 14 日，Anthropic 经聊天与 API 推出 Claude：Constitutional AI / HHH 框架，双 SKU（Claude 偏能力；Claude Instant 偏速度/成本），约 9k 上下文，T0 文案写明无联网、无 embeddings；伙伴嵌入已在 Poe、Notion AI、DuckAssist、辅导、法律审阅与转写中上线。超出先前封闭 alpha 的接入经开发者控制台申请门控。若开发者经带信任定位的专有基座模型 API 交付助手功能，价值迁向该 API 所有者。未披露美元标价、利润率、付费转化或伙伴合同条款；幅度仍属 Unknown。",
    meta: { id: "DB-009", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "若开发者经带信任定位的专有基座模型 API 交付助手功能，价值迁向谁？",
  },
  story: {
    paragraphs: [
      "变的是接入面与产品拆分，不是又一次封闭演示。",
      "模型走出封闭 alpha 后，需要带清晰 SKU 与信任叙事的 API 与聊天面。",
      "Anthropic 的解法：受控商业表面——申请门控的聊天与 API。",
      "产品拆成 Claude / Claude Instant；Constitutional AI / HHH 作信任框架，并行经具名伙伴分发。",
      "申请接入能否转成持续付费使用，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: [
      "封闭 alpha、仅伙伴的 Claude 接入",
      "申请门控的开发者控制台",
      "Claude / Claude Instant 双 SKU",
      "Anthropic 聊天 + API + Constitutional AI / HHH 框架",
      "相对 ChatGPT 评估的伙伴应用与开发者",
    ],
    caption:
      "若接入转成付费使用、伙伴继续嵌入，价值迁向 Anthropic 可控商业面；Anthropic 为 Tier 1；美元价格与留存份额 Unknown",
  },
  keyInsight: {
    sentence:
      "Claude 上线卖的是门控聊天与 API 式基座模型接入，双 SKU 加信任产品，不是又一个聊天机器人演示；Anthropic 为 Tier 1。",
  },
  analysis: {
    paragraphs: [
      "2023-03-14：Claude 经聊天与 API 可用；开发者控制台需申请接入；双 SKU Claude（更强）与 Claude Instant（更快/更便宜）。",
      "框架：Constitutional AI 与 HHH；强调可引导性；T0 限制约 9k 上下文、无联网、无 embeddings。",
      "具名伙伴/用例含 Poe、Notion AI、DuckAssist、Juni Learning、Robin AI、AssemblyAI。",
      "Anthropic Tier 1；伙伴 Tier 2；美元标价、利润率、付费转化与合同条款仍属 Unknown。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "当基座模型接入从封闭伙伴 alpha 外移为申请门控的商业聊天与双 SKU API，并以信任框架作卖点时，价值迁向该 API 所有者——即便美元幅度仍属 Unknown。",
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

/** DB-009 — layout migration only; facts and reasoning preserved. */
export const db009JournalEn: JournalBrief = {
  slug: "db-009",
  locale: "en",
  productId: "DB-009",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The scarce point is proprietary foundation-model API access — not another chatbot demo.",
      "Access moves from closed alpha to an Anthropic-controlled chat-and-API surface.",
    ],
    title: "Anthropic Opens Claude as a Commercial Chat-and-API Surface",
    summary:
      "On 14 March 2023, Anthropic introduced Claude via chat and API: Constitutional AI / HHH framing, dual SKUs (Claude for capability; Claude Instant for speed/cost), roughly 9k context, no internet browsing, no embeddings in the T0 product text, and partner embeddings already live in Poe, Notion AI, DuckAssist, tutoring, legal review, and transcription. Access beyond prior closed alpha is request-gated through a developer console. If builders ship assistant features through a proprietary foundation-model API with trust positioning, value migrates to that API owner. Dollar list prices, margins, paid conversion, and partner contract terms are undisclosed; magnitude remains Unknown.",
    meta: { id: "DB-009", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "If builders ship assistant features through a proprietary foundation-model API with trust positioning, who captures the value?",
  },
  story: {
    paragraphs: [
      "What changed is the access surface and product split — not another closed demo.",
      "Once models leave closed alpha, teams need an API and chat surface with clear SKUs and a trust story.",
      "Anthropic’s answer is a controlled commercial surface: request-gated chat and API.",
      "Product splits into Claude / Claude Instant; Constitutional AI / HHH framing sits beside named-partner distribution.",
      "Whether request access converts to sustained paid usage is still Unknown.",
    ],
  },
  diagram: {
    nodes: [
      "Closed-alpha, partner-only Claude access",
      "Request-gated developer console",
      "Claude / Claude Instant dual SKUs",
      "Anthropic chat + API + Constitutional AI / HHH framing",
      "Partner apps and builders evaluating vs ChatGPT",
    ],
    caption:
      "Value moves toward Anthropic-controlled commercial chat-and-API with dual SKUs if access converts to paid usage; Anthropic Tier 1; dollar prices and retained share Unknown",
  },
  keyInsight: {
    sentence:
      "Claude’s launch is foundation-model access sold as gated chat-and-API with dual SKUs and a trust product — not another chatbot demo; Anthropic is Tier 1.",
  },
  analysis: {
    paragraphs: [
      "14 Mar 2023: Claude via chat and API; request-gated developer console; dual SKUs Claude (more powerful) and Claude Instant (faster/cheaper).",
      "Framing: Constitutional AI and HHH; steerability emphasised; T0 limits ~9k context, no internet, no embeddings.",
      "Named partners/use cases include Poe, Notion AI, DuckAssist, Juni Learning, Robin AI, AssemblyAI.",
      "Anthropic Tier 1; partners Tier 2; dollar list prices, margins, paid conversion, and contract terms remain Unknown.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "When foundation-model access moves from closed partner alpha to a request-gated commercial chat-and-API with dual SKUs and trust framing, value migrates to the API owner — even while dollar magnitude stays Unknown.",
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
