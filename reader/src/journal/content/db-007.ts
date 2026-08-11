import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-007 — layout migration only; facts and reasoning preserved. */
export const db007JournalZh: JournalBrief = {
  slug: "db-007",
  locale: "zh",
  productId: "DB-007",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "稀缺点在编辑器内合成栈，不在又一个文档站。",
      "T0 上 Tier 1 抓取仍空着。",
    ],
    title: "Copilot：编码辅助进编辑器，Tier 1 空着",
    summary:
      "2021 年 6 月 29 日，GitHub 宣布 Copilot 技术预览：VS Code 扩展，按编辑器上下文建议代码行与函数，由 OpenAI Codex 驱动。预览免费且限量（顶尖 AI 硬件约束）；若预览成功将推商业产品。若开发者默认用编辑器内合成替代搜索与文档写样板，价值迁向托管的 Copilot + 模型栈。未披露商业定价、分成、排他条款，以及谁留住盈余。Tier 1 空位；幅度仍属 Unknown。",
    meta: { id: "DB-007", readingTime: "5 min", industry: "Developer Tools" },
  },
  question: {
    text: "若编码辅助默认走编辑器内按上下文合成，而预览仍免费限量，谁拿走盈余？",
  },
  story: {
    paragraphs: [
      "变的是辅助落点，不是又上线一个搜索框。",
      "开发者耗在样板与搜文档上；稀缺体验是编辑器里的建议。",
      "Copilot 的解法：托管、按上下文条件的合成——VS Code 扩展，OpenAI Codex 驱动。",
      "帮助进 IDE；模型与产品成对；商业路径有条件且受硬件限制。",
      "编辑器内 AI 是否成为默认，以及盈余如何切，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: [
      "搜索、文档与手工样板",
      "编辑器上下文作为提示",
      "托管 Copilot 产品面",
      "OpenAI Codex 级模型",
      "开发者、IDE 与 AI 硬件层",
    ],
    caption:
      "若预览转成商业默认，价值迁向托管 Copilot + Codex 栈；T0 无 Tier 1，GitHub/OpenAI 为 Tier 2，盈余切分 Unknown",
  },
  keyInsight: {
    sentence:
      "Copilot 卖的是托管的编辑器内合成式编码辅助，不是加强版自动补全；商业路径仍有条件，Tier 1 空着。",
  },
  analysis: {
    paragraphs: [
      "2021-06-29：Copilot 按编辑器内上下文建议行与函数；定位 AI pair programmer；VS Code 扩展；OpenAI Codex 驱动。",
      "免费限量技术预览；顶尖 AI 硬件约束可用性；预览成功则推商业产品；早期接入以数百名工程师表述。",
      "GitHub 与 OpenAI 为 Tier 2；硬件商为未点名类别；VS Code 发行方未立为上市受益方。",
      "Tier 1 空位；商业定价、分成、排他与盈余切分仍属 Unknown。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "当编码辅助从搜索与文档迁到托管的编辑器内按上下文合成时，价值迁向产品面加模型栈——但免费限量预览下，Tier 1 可以空着，盈余切分仍可 Unknown。",
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

/** DB-007 — layout migration only; facts and reasoning preserved. */
export const db007JournalEn: JournalBrief = {
  slug: "db-007",
  locale: "en",
  productId: "DB-007",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The scarce experience is suggestion inside the editor — not another documentation site.",
      "Tier 1 capture stays vacant at T0.",
    ],
    title: "GitHub Copilot Moves Coding Help Into the Editor — Without a Tier 1 Capturer Yet",
    summary:
      "On 29 June 2021, GitHub announced Copilot, an AI pair programmer technical preview: a VS Code extension that suggests lines and functions from editor context, powered by OpenAI Codex. The preview is free and limited (state-of-the-art AI hardware constraint); a commercial product is planned if the preview succeeds. If developers default to in-editor synthesis instead of search-and-docs for boilerplate, value migrates toward the hosted Copilot-plus-model stack. Commercial price, revenue share, exclusivity, and who retains surplus are undisclosed. Tier 1 is vacant; magnitude remains Unknown.",
    meta: { id: "DB-007", readingTime: "5 min", industry: "Developer Tools" },
  },
  question: {
    text: "If coding help defaults to context-conditioned in-editor synthesis, and the preview is still free and limited, who captures surplus?",
  },
  story: {
    paragraphs: [
      "What changed is where assistance lands — not another search box.",
      "Developers spend time on boilerplate and searching docs; the scarce experience is suggestion inside the editor.",
      "Copilot answers with hosted, context-conditioned synthesis: VS Code extension powered by OpenAI Codex.",
      "Help moves into the IDE; model and product are paired; commercial path is conditional under hardware limits.",
      "Whether in-editor AI becomes default — and how surplus splits — is still Unknown.",
    ],
  },
  diagram: {
    nodes: [
      "Search, docs, and manual boilerplate",
      "Editor context as the prompt",
      "Hosted Copilot product surface",
      "OpenAI Codex-class model",
      "Developers, IDEs, and AI hardware layer",
    ],
    caption:
      "Value moves toward hosted Copilot-plus-Codex in-editor synthesis if preview becomes commercial default; Tier 1 vacant; GitHub/OpenAI Tier 2 with Unknown surplus split",
  },
  keyInsight: {
    sentence:
      "Copilot is less autocomplete++ than coding assistance sold as hosted in-editor synthesis, with a commercial path still conditional; no Tier 1 capturer named at T0.",
  },
  analysis: {
    paragraphs: [
      "29 Jun 2021: Copilot suggests lines and functions from editor context; AI pair programmer; VS Code extension; powered by OpenAI Codex.",
      "Free limited technical preview; state-of-the-art AI hardware constrains availability; commercial product if preview succeeds; early access in hundreds of engineers.",
      "GitHub and OpenAI Tier 2; hardware providers an unnamed class; VS Code publisher not established as listed beneficiary.",
      "Tier 1 vacant; commercial price, revenue share, exclusivity, and surplus split remain Unknown.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "When coding help moves from search-and-docs to hosted context-conditioned in-editor synthesis, value migrates to the product-plus-model stack — but Tier 1 can stay vacant under a free, hardware-limited preview with Unknown surplus split.",
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
