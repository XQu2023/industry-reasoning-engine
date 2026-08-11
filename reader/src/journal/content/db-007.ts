import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-007 — Public Beta Sprint 2 editorial rewrite; facts and reasoning unchanged. */
export const db007JournalZh: JournalBrief = {
  slug: "db-007",
  locale: "zh",
  productId: "DB-007",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "稀缺的不是又一个文档站。",
      "而是编辑器里、按上下文给出的建议。",
    ],
    title: "Copilot：编码辅助进编辑器，Tier 1 空着",
    summary:
      "2021 年 6 月 29 日，GitHub 宣布 Copilot 技术预览：VS Code 扩展，由 OpenAI Codex 驱动，按编辑器上下文建议代码。",
    meta: { id: "DB-007", readingTime: "5 min", industry: "Developer Tools" },
  },
  question: {
    text: "若编码辅助默认走编辑器内按上下文合成，而预览仍免费限量，谁拿走盈余？",
  },
  story: {
    paragraphs: [
      "过去几年，如果有人问：写样板代码靠什么？",
      "答案往往是搜索、文档，再手工粘贴。",
      "这些都没有错。",
      "但稀缺体验，在编辑器里。",
      "辅助落点变了。",
      "不是又上线一个搜索框。",
      "Copilot 的答案，是托管、按上下文条件的合成。",
      "VS Code 扩展。",
      "OpenAI Codex 驱动。",
      "帮助进 IDE；模型与产品成对。",
      "商业路径有条件，且受顶尖 AI 硬件约束。",
      "编辑器内 AI 是否成为默认，以及盈余如何切，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: ["搜索、文档与手工样板", "编辑器上下文合成", "托管 Copilot + Codex"],
    caption: "价值迁向：辅助落点 → 上下文合成 → 产品加模型栈；T0 Tier 1 空位",
  },
  keyInsight: {
    sentence: "卖的是托管的编辑器内合成，不是加强版自动补全；商业路径仍有条件，Tier 1 空着。",
  },
  analysis: {
    paragraphs: [
      "2021 年 6 月 29 日。",
      "Copilot：按编辑器内上下文建议行与函数；定位 AI pair programmer。",
      "VS Code 扩展；由 OpenAI Codex 驱动。",
      "免费限量技术预览。",
      "顶尖 AI 硬件约束可用性。",
      "预览成功则推商业产品。",
      "早期接入以数百名工程师表述。",
      "GitHub 与 OpenAI 为 Tier 2。",
      "硬件商为未点名类别；VS Code 发行方未立为上市受益方。",
      "Tier 1 空位。",
      "商业定价、分成、排他与盈余切分，仍属 Unknown。",
      "方向比幅度更清楚。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看又一个文档站。先问自己：谁拥有编辑器内合成栈——免费限量预览时 Tier 1 是否空着？",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "编辑器内 AI 辅助",
      "IDE 扩展产品面",
      "模型与宿主配对",
      "有条件商业化预览",
      "AI 硬件约束可用性",
    ],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "Copilot 下线且无商业替代",
      "盈余主要落在 GitHub/OpenAI 条款外的未点名硬件或模型层",
      "编辑器内 AI 始终不成默认辅助方式",
      "出现零切换成本、可互换的模型 API",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-006", slug: "db-006", title: "ChatGPT：对话成大模型公共入口，Tier 1 空着", href: "/zh/briefs/db-006" },
      { id: "DB-009", slug: "db-009", title: "Claude：商业聊天与 API 面打开，双 SKU 上架", href: "/zh/briefs/db-009" },
      { id: "DB-005", slug: "db-005", title: "Kubernetes：打开集群控制面，Tier 1 空着", href: "/zh/briefs/db-005" },
    ],
  },
  footer: JOURNAL_FOOTER,
};

export const db007JournalEn: JournalBrief = {
  slug: "db-007",
  locale: "en",
  productId: "DB-007",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The scarce experience is not another documentation site.",
      "It is suggestion inside the editor, conditioned on context.",
    ],
    title: "GitHub Copilot Moves Coding Help Into the Editor — Without a Tier 1 Capturer Yet",
    summary:
      "On 29 June 2021, GitHub announced Copilot as a technical preview: a VS Code extension powered by OpenAI Codex, suggesting code from editor context.",
    meta: { id: "DB-007", readingTime: "5 min", industry: "Developer Tools" },
  },
  question: {
    text: "If coding help defaults to context-conditioned in-editor synthesis, and the preview is still free and limited, who captures surplus?",
  },
  story: {
    paragraphs: [
      "For years, writing boilerplate sounded simple.",
      "Search.",
      "Docs.",
      "Then paste by hand.",
      "That is not wrong.",
      "But the scarce experience is suggestion inside the editor.",
      "Where assistance lands changes.",
      "Not another search box.",
      "Copilot’s answer is hosted, context-conditioned synthesis.",
      "A VS Code extension.",
      "Powered by OpenAI Codex.",
      "Help moves into the IDE; model and product are paired.",
      "The commercial path is conditional — and constrained by state-of-the-art AI hardware.",
      "Whether in-editor AI becomes default — and how surplus splits — is still Unknown.",
    ],
  },
  diagram: {
    nodes: ["Search, docs, manual boilerplate", "Editor-context synthesis", "Hosted Copilot + Codex"],
    caption: "Value migrates: assistance locus → context synthesis → product-plus-model stack; Tier 1 vacant at T0",
  },
  keyInsight: {
    sentence:
      "What ships is hosted in-editor synthesis — not autocomplete++; commercial path still conditional; Tier 1 vacant.",
  },
  analysis: {
    paragraphs: [
      "29 June 2021.",
      "Copilot: suggests lines and functions from editor context; AI pair programmer.",
      "VS Code extension; powered by OpenAI Codex.",
      "Free limited technical preview.",
      "State-of-the-art AI hardware constrains availability.",
      "Commercial product if preview succeeds.",
      "Early access in hundreds of engineers.",
      "GitHub and OpenAI Tier 2.",
      "Hardware providers an unnamed class; VS Code publisher not established as listed beneficiary.",
      "Tier 1 vacant.",
      "Commercial price, revenue share, exclusivity, and surplus split remain Unknown.",
      "Direction is clearer than magnitude.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "Don’t only ask which docs site is better. Ask first: who owns the in-editor synthesis stack — and is Tier 1 vacant under a free, hardware-limited preview?",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "In-editor AI assistance",
      "IDE extension product surfaces",
      "Model–host product pairing",
      "Conditional commercial previews",
      "AI hardware-constrained availability",
    ],
  },
  changeMind: {
    prompt: "What would change today’s conclusion?",
    items: [
      "Copilot withdrawn without a commercial substitute",
      "Surplus accruing mainly to unnamed hardware or model layers outside GitHub/OpenAI terms",
      "In-editor AI never becoming the default assistance mode",
      "Portable, interchangeable model APIs with zero switching cost",
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
        id: "DB-009",
        slug: "db-009",
        title: "Anthropic Opens Claude as a Commercial Chat-and-API Surface",
        href: "/briefs/db-009",
      },
      {
        id: "DB-005",
        slug: "db-005",
        title: "Google Opens Container Fleet Control — and Leaves Tier 1 Vacant",
        href: "/briefs/db-005",
      },
    ],
  },
  footer: JOURNAL_FOOTER,
};
