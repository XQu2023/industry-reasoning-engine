import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-004 — Public Beta Sprint 2 editorial rewrite; facts and reasoning unchanged. */
export const db004JournalZh: JournalBrief = {
  slug: "db-004",
  locale: "zh",
  productId: "DB-004",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "稀缺点在全栈收单入口。",
      "不是又一家网关，也不是商户账户拼盘。",
    ],
    title: "Stripe：收卡变成开发者 API，费率一条写死",
    summary: "约 2011 年 9 月 30 日，Stripe 发布面向开发者的支付平台：API、stripe.js，以及单笔成功扣款 2.9% + 30¢。",
    meta: { id: "DB-004", readingTime: "5 min", industry: "Payments" },
  },
  question: {
    text: "若线上收卡默认走全栈开发者 API——透明 take rate、存卡状态在平台侧——价值迁向谁？",
  },
  story: {
    paragraphs: [
      "线上收卡曾经很难接。",
      "商户账户。",
      "独立网关。",
      "PCI 负担。",
      "不透明的多层收费叠在一起。",
      "点名受众是想收卡的开发者与网站。",
      "Stripe 把支付按代码交付。",
      "集成单元上移到单一 API 与库。",
      "金库内置；卡号不必落商户服务器。",
      "订阅与打款是平台功能。",
      "费率一条公开：2.9% + 30¢。",
      "开发者是否把它当作默认路径，仍属 Unknown。",
      "扣掉银行与网络成本后 Stripe 留多少盈余，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: ["商户账户 + 网关拼盘", "开发者 API + stripe.js 金库", "一条公开费率（2.9% + 30¢）"],
    caption: "价值迁向可编码接入的全栈支付 API；压力离开拼装栈",
  },
  keyInsight: {
    sentence: "竞争看谁控 API、金库与订阅状态——不是又一家支付网关。",
  },
  analysis: {
    paragraphs: [
      "约 2011 年 9 月 30 日。",
      "定位“Payments for developers”。",
      "API 与库；stripe.js 路径卡号不进商户服务器。",
      "订阅、打款、存卡为平台功能。",
      "公开定价：每笔成功扣款 2.9% + 30¢。",
      "公司自述为搭建支付基础设施的小团队。",
      "体量与地理未以闭合经济数据量化。",
      "若该 API 成为网页收卡默认方式，价值迁向全栈支付运营方。",
      "来源点名 Stripe, Inc. 为 Tier 1。",
      "Tier 2 空位——银行与卡组织未被点名为控制已披露瓶颈。",
      "服务成本、净利率、银行伙伴或排他条款未披露。",
      "成本、利润率、排他性仍属 Unknown。",
      "收益大小未定，故事方向已定。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看又一家网关。先问自己：谁拥有带一条公开费率的全栈开发者入口？",
    applyLabel: "Where else can this apply?",
    applyTo: ["在线收卡", "开发者支付平台", "API 集成路径", "存卡与订阅状态", "透明 take rate"],
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

/** DB-004 — Public Beta Sprint 2 editorial rewrite; facts and reasoning unchanged. */
export const db004JournalEn: JournalBrief = {
  slug: "db-004",
  locale: "en",
  productId: "DB-004",
  homeHref: "/",
  hero: {
    quoteLines: [
      "Scarcity is the full-stack acceptance entry.",
      "Not another gateway — and not a merchant-account patchwork.",
    ],
    title: "Stripe Makes Card Acceptance a Developer API With One Published Fee",
    summary:
      "Around 30 September 2011, Stripe published a developer payments platform: APIs, stripe.js, and a single successful-charge fee of 2.9% + 30¢.",
    meta: { id: "DB-004", readingTime: "5 min", industry: "Payments" },
  },
  question: {
    text: "If online card acceptance defaults to a full-stack developer API with transparent take rate and stored-card state, where does value migrate?",
  },
  story: {
    paragraphs: [
      "Taking cards online used to be hard to integrate.",
      "Merchant accounts.",
      "Separate gateways.",
      "PCI burden.",
      "Opaque multi-fee schedules stacked on top.",
      "Developers and sites that want card acceptance are the named audience.",
      "Stripe delivers payments as code.",
      "The integration unit moves up to one API and client libraries.",
      "Vaulting included; cards need not hit the merchant’s servers.",
      "Subscriptions and payouts are platform features.",
      "Pricing published as one take rate: 2.9% + 30¢.",
      "Whether developers adopt this as the default is still Unknown.",
      "What surplus Stripe keeps after bank and network costs is still Unknown.",
    ],
  },
  diagram: {
    nodes: [
      "Merchant account + gateway patchwork",
      "Developer API + stripe.js vault",
      "One published fee (2.9% + 30¢)",
    ],
    caption: "Value moves to a coded full-stack payments API; pressure leaves the assembled stack",
  },
  keyInsight: {
    sentence:
      "Competition moves to who owns the API, vault, and subscription state — not another payment gateway.",
  },
  analysis: {
    paragraphs: [
      "Around 30 September 2011.",
      "Positioned as “Payments for developers.”",
      "APIs and libraries; stripe.js so cards need not hit merchant servers.",
      "Subscriptions, payouts, and stored cards as platform features.",
      "Published fee: 2.9% + 30¢ per successful charge.",
      "Company described as a small team building payments infrastructure.",
      "Volumes and geography not quantified as closed economics.",
      "If that API becomes the default way to take cards on the web, value migrates to the full-stack payments operator.",
      "Stripe, Inc. is Tier 1 in the source report.",
      "Tier 2 vacant — banks and networks not named as controlling the disclosed bottleneck.",
      "Cost to serve, net margin, bank partners, and exclusivity are undisclosed.",
      "Cost, margin, and exclusivity remain Unknown.",
      "Direction of the story clearer than size of the gain.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "Don’t only look for another gateway. Ask first: who owns the full-stack developer entry with one published fee?",
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
