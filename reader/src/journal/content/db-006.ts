import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-006 — layout migration only; facts and reasoning preserved. */
export const db006JournalZh: JournalBrief = {
  slug: "db-006",
  locale: "zh",
  productId: "DB-006",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "稀缺点在对话界面与反馈环，不在又一个 checkpoint。",
      "T0 上 Tier 1 抓取仍空着。",
    ],
    title: "ChatGPT：对话成大模型公共入口，Tier 1 空着",
    summary:
      "2022 年 11 月 30 日，OpenAI 在 chat.openai.com 以免费研究预览上线 ChatGPT：GPT-3.5 系列经 RLHF 调成对话，能跟进追问、承认错误、反驳错误前提、拒绝不当请求。训练用 Azure AI；Moderation API 与反馈竞赛（API 额度）支撑迭代部署。若多轮对话成为人们使用大模型的默认方式，价值迁向该界面与反馈环。未披露定价、免费是否持续、云排他条款，以及谁留住盈余。Tier 1 空位；幅度仍属 Unknown。",
    meta: { id: "DB-006", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "若多轮对话成为使用大模型的默认方式，而产品免费且未定价，谁拿走盈余？",
  },
  story: {
    paragraphs: [
      "变的是公共入口形态，不是又发一版基座模型。",
      "单轮指令与非对话工具，对不上人们怎么求助；用户要多轮上下文、纠错与拒绝行为。",
      "ChatGPT 的解法：公开对话表面——免费研究预览，入口 chat.openai.com。",
      "交互模式上移到对话；改进走审核与用户反馈的迭代部署环。",
      "使用是否粘住、并转成可持久付费产品面，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: [
      "单轮指令跟随 / 非对话工具",
      "经 RLHF 调优的 GPT-3.5 系列对话模型",
      "免费浏览器聊天界面",
      "审核 + 反馈 / 迭代部署",
      "用户与相邻 API 表面",
    ],
    caption:
      "若采用站得住，价值迁向免费、可及的对话式 RLHF 界面与反馈环；T0 免费且无已披露计价留存机制，Tier 1 空位",
  },
  keyInsight: {
    sentence:
      "ChatGPT 卖的是大模型的公共对话入口外加迭代反馈环，不是又一个模型 checkpoint；OpenAI 仅 Tier 2，Tier 1 空位。",
  },
  analysis: {
    paragraphs: [
      "2022-11-30：ChatGPT 免费研究预览对话模型；InstructGPT 同系；GPT-3.5 上用 RLHF；入口 chat.openai.com。",
      "自述强项含跟进、认错、挑战错误前提、拒绝不当请求；同时列幻觉、冗长、提示敏感、安全等失效模式。",
      "训练伙伴点名 Azure AI；Moderation API；反馈竞赛奖励 API 额度；T0 无订阅价或广告模式。",
      "OpenAI 为 Tier 2；Tier 1 空位；价格/广告、免费是否持续、云条款与盈余份额仍属 Unknown。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "当大模型默认交互从单轮补全迁到对话式 RLHF 界面时，价值迁向该表面与反馈环——但免费且无已披露计价留存时，Tier 1 可以空着。",
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

/** DB-006 — layout migration only; facts and reasoning preserved. */
export const db006JournalEn: JournalBrief = {
  slug: "db-006",
  locale: "en",
  productId: "DB-006",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The scarce point is the dialogue interface and feedback loop — not another checkpoint.",
      "Tier 1 capture stays vacant at T0.",
    ],
    title: "ChatGPT Makes Dialogue the Public Interface to Large Language Models",
    summary:
      "On 30 November 2022, OpenAI released ChatGPT as a free research preview at chat.openai.com: a GPT-3.5-series model tuned with RLHF for dialogue, able to follow-ups, admit mistakes, challenge premises, and refuse inappropriate requests. Training used Azure AI; a Moderation API and feedback contest (API credits) support iterative deployment. If multi-turn conversation becomes the default way people use large language models, value migrates toward that interface and feedback loop. Pricing, whether free remains free, exclusive cloud terms, and who retains surplus are undisclosed. Tier 1 is vacant; magnitude remains Unknown.",
    meta: { id: "DB-006", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "If multi-turn conversation becomes the default way people use LLMs, and the product is free and unpriced, who captures surplus?",
  },
  story: {
    paragraphs: [
      "What changed is the public interface form — not another base-model release.",
      "Single-turn instruction-following and non-dialogue tools do not match how people ask for help across a conversation.",
      "ChatGPT answers with a public conversational surface: free research preview at chat.openai.com.",
      "Interaction mode moves toward dialogue; moderation and user feedback enter the deployment loop.",
      "Whether usage sticks and converts into a durable paid product surface is still Unknown.",
    ],
  },
  diagram: {
    nodes: [
      "Single-turn instruction-following / non-dialogue tools",
      "RLHF-tuned GPT-3.5-series dialogue model",
      "Free browser chat interface",
      "Moderation + feedback / iterative deployment",
      "Users and adjacent API surfaces",
    ],
    caption:
      "Value moves toward a free conversational RLHF interface and feedback loop if adoption holds; Tier 1 vacant at T0 with no disclosed priced retention",
  },
  keyInsight: {
    sentence:
      "ChatGPT is less a new model checkpoint than dialogue as the public interface to LLMs, shipped free with an iterative feedback loop — OpenAI Tier 2 only; Tier 1 vacant.",
  },
  analysis: {
    paragraphs: [
      "30 Nov 2022: ChatGPT free research preview; InstructGPT sibling; RLHF on GPT-3.5-series; chat.openai.com.",
      "Strengths named: follow-ups, admitting mistakes, challenging incorrect premises, rejecting inappropriate requests; failure modes include hallucination, verbosity, prompt sensitivity, safety.",
      "Training partnership named Azure AI; Moderation API; feedback contest offers API credits; no subscription price or ads at T0.",
      "OpenAI Tier 2; Tier 1 vacant; price/ads, whether free remains free, cloud terms, and surplus share remain Unknown.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "When default LLM interaction moves from single-turn completion to a conversational RLHF interface, value migrates to that surface and feedback loop — but Tier 1 can stay vacant while the product is free with no disclosed priced retention.",
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
