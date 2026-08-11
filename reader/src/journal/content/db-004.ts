import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-004 — layout migration only; facts and reasoning preserved. */
export const db004JournalZh: JournalBrief = {
  slug: "db-004",
  locale: "zh",
  productId: "DB-004",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "稀缺点在全栈收单入口，不在又一家网关。",
      "卖点不是商户账户拼网关的拼盘。",
    ],
    title: "Stripe：收卡变成开发者 API，费率一条写死",
    summary:
      "约 2011 年 9 月 30 日，Stripe 发布面向开发者的支付平台：API 与库、stripe.js（卡号不必落商户服务器）、订阅与打款，以及单笔成功扣款费率 2.9% + 30¢。过去要拆商户账户、网关、不透明多层收费的开发者，现在有一条可编码接入路径。若该 API 成为网页收卡默认方式，价值迁向全栈支付运营方。服务成本、净利率、银行伙伴或排他条款未披露；留存经济利润仍属 Unknown。",
    meta: { id: "DB-004", readingTime: "5 min", industry: "Payments" },
  },
  question: {
    text: "若线上收卡默认走全栈开发者 API——透明 take rate、存卡状态在平台侧——价值迁向谁？",
  },
  story: {
    paragraphs: [
      "变的是产品形态：支付按代码交付。",
      "线上收卡又难接、又不透明：商户账户、网关、PCI 负担、难预测的费率表叠在一起。",
      "点名受众是想收卡的开发者与网站。",
      "Stripe 的解法是支付即代码：集成单元上移到单一 API 与库；金库内置；费率一条公开（2.9% + 30¢）。",
      "开发者是否把它当作默认路径，以及扣掉银行与网络成本后 Stripe 留多少盈余，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: [
      "商户账户 + 独立网关",
      "不透明多层处理器定价",
      "开发者 API + 库",
      "stripe.js 金库 + 订阅 + 打款",
      "线上收卡的网站与应用",
    ],
    caption: "价值迁向带一条公开费率、可开发者集成的全栈支付 API；压力离开商户账户拼网关栈",
  },
  keyInsight: {
    sentence: "竞争看谁控 API、金库与订阅状态；Stripe 卖的是带一条公开费率的开发者收卡基础设施，不是又一家支付网关。",
  },
  analysis: {
    paragraphs: [
      "约 2011 年 9 月 30 日：定位“Payments for developers”；stripe.js 路径卡号不进商户服务器；订阅、打款、存卡为平台功能；公开定价每笔成功扣款 2.9% + 30¢。",
      "公司自述为搭建支付基础设施的小团队；体量与地理未以闭合经济数据量化。",
      "来源点名 Stripe, Inc. 为 Tier 1；Tier 2 空位（银行与卡组织未被点名为控制已披露瓶颈）。",
      "成本、利润率、排他性仍属 Unknown。收益大小未定，故事方向已定。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "当线上收卡从商户账户拼网关转向带一条公开费率的全栈开发者 API（含金库与订阅状态）时，价值迁向该平台运营方，而不是又一家独立网关。",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "在线收卡",
      "开发者支付平台",
      "API 集成路径",
      "存卡与订阅状态",
      "透明 take rate",
    ],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "即使用 Stripe，商户仍须另开商户账户与网关",
      "费率盈余主要落在银行，而非 Stripe",
      "出现可互换、无金库/订阅锁定的便携处理器 API",
      "开发者拒绝基于 API 的收卡",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-005", slug: "db-005", title: "Kubernetes：打开集群控制面，Tier 1 空着", href: "/zh/briefs/db-005" },
      { id: "DB-007", slug: "db-007", title: "Copilot：编码辅助进编辑器，Tier 1 空着", href: "/zh/briefs/db-007" },
      { id: "DB-010", slug: "db-010", title: "Lakehouse：开放架构被命名，Tier 1 锁不住", href: "/zh/briefs/db-010" },
    ],
  },
  footer: JOURNAL_FOOTER,
};

/** DB-004 — layout migration only; facts and reasoning preserved. */
export const db004JournalEn: JournalBrief = {
  slug: "db-004",
  locale: "en",
  productId: "DB-004",
  homeHref: "/",
  hero: {
    quoteLines: [
      "Scarcity is the full-stack acceptance entry — not another gateway.",
      "Not a merchant-account-plus-gateway patchwork.",
    ],
    title: "Stripe Makes Card Acceptance a Developer API With One Published Fee",
    summary:
      "Around 30 September 2011, Stripe published a developer payments platform: APIs and libraries, stripe.js so cards need not hit the merchant’s servers, subscriptions and payouts, and a single successful-charge fee of 2.9% + 30¢. Developers who previously faced separate merchant accounts, gateways, and opaque multi-fee pricing get a coded integration path instead. If that API becomes the default way to take cards on the web, value migrates to the full-stack payments operator. Cost to serve, net margin, bank partners, and exclusivity are undisclosed; retained economic profit remains Unknown.",
    meta: { id: "DB-004", readingTime: "5 min", industry: "Payments" },
  },
  question: {
    text: "If online card acceptance defaults to a full-stack developer API with transparent take rate and stored-card state, where does value migrate?",
  },
  story: {
    paragraphs: [
      "Stripe’s launch reframes online card acceptance as payments-as-code.",
      "Taking cards online has been an integration and opacity problem: merchant accounts, gateways, PCI burden, and hard-to-predict fee schedules.",
      "Developers and sites that want card acceptance are the named audience.",
      "Answer: one API and client library surface; vaulting included; pricing published as one take rate — 2.9% + 30¢.",
      "Whether developers adopt this as the default — and what surplus Stripe keeps after bank and network costs — is still Unknown.",
    ],
  },
  diagram: {
    nodes: [
      "Merchant account + separate gateway",
      "Opaque multi-fee processor pricing",
      "Developer API + libraries",
      "stripe.js vault + subscriptions + payouts",
      "Sites and apps that accept cards online",
    ],
    caption: "Value moves toward a developer-integrated full-stack payments API with one published fee; pressure leaves assembled merchant-account-plus-gateway stacks",
  },
  keyInsight: {
    sentence: "Competition moves toward who owns the API, vault, and subscription state — card acceptance sold as developer infrastructure with one published fee, not another payment gateway.",
  },
  analysis: {
    paragraphs: [
      "Around 30 September 2011: “Payments for developers”; stripe.js so cards need not hit merchant servers; subscriptions, payouts, stored cards as platform features; published fee 2.9% + 30¢ per successful charge.",
      "Company described as a small team building payments infrastructure; volumes and geography not quantified as closed economics.",
      "Stripe, Inc. is Tier 1 in the source report; Tier 2 vacant — banks and networks not named as controlling the disclosed bottleneck.",
      "Cost, margin, and exclusivity remain Unknown — direction of the story clearer than size of the gain.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "When online card acceptance moves from assembled merchant-account-plus-gateway stacks to a full-stack developer API with one published fee — including vault and subscription state — value migrates to that platform operator, not to another standalone gateway.",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "Online card acceptance",
      "Developer payments platforms",
      "API integration paths",
      "Stored-card and subscription state",
      "Transparent take rates",
    ],
  },
  changeMind: {
    prompt: "What would change today’s conclusion?",
    items: [
      "Merchants still needing a separate merchant account and gateway despite Stripe",
      "Fee surplus accruing mainly to banks rather than Stripe",
      "Portable, interchangeable processor APIs with no vault or subscription lock-in",
      "Developers rejecting API-based card acceptance",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-005", slug: "db-005", title: "Google Opens Container Fleet Control — and Leaves Tier 1 Vacant", href: "/briefs/db-005" },
      { id: "DB-007", slug: "db-007", title: "GitHub Copilot Moves Coding Help Into the Editor — Without a Tier 1 Capturer Yet", href: "/briefs/db-007" },
      { id: "DB-010", slug: "db-010", title: "Databricks Names the Lakehouse — an Open Pattern, Not a Locked Tier 1", href: "/briefs/db-010" },
    ],
  },
  footer: JOURNAL_FOOTER,
};

