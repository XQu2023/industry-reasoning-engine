import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-005 — Public Beta Sprint 2 editorial rewrite; facts and reasoning unchanged. */
export const db005JournalZh: JournalBrief = {
  slug: "db-005",
  locale: "zh",
  productId: "DB-005",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "结构变化真实。",
      "盈余归属未定——Tier 1 可以空着。",
    ],
    title: "Kubernetes：打开集群控制面，Tier 1 空着",
    summary:
      "2014 年 6 月 10 日，Google 发布 Kubernetes：开源容器管理器，放在 GitHub，社区支持。",
    meta: { id: "DB-005", readingTime: "5 min", industry: "Cloud Infrastructure" },
  },
  question: {
    text: "若共享集群控制成为跑容器的方式，而管理器开源，谁拿走盈余？",
  },
  story: {
    paragraphs: [
      "互联网规模需要高效容器调度。",
      "多数开发者要的更克制。",
      "放置容器。",
      "保健康。",
      "做副本。",
      "连起来。",
      "用不上 Omega。",
      "Google 没有把内部调度外泄成封闭产品。",
      "它把控制面开源发布。",
      "调度接口外移到共享管理器。",
      "支持模型是社区；分发在 GitHub。",
      "GCP Docker 路径并列，但盈余条款未写明。",
      "采用是否跟进，以及日后是否有人把可用 Kubernetes 围起来，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: ["专有或临时调度", "开源集群控制面（Kubernetes）", "社区 + GitHub；Tier 1 空位"],
    caption: "控制面外移成立；因开源，谁拿走盈余仍属 Unknown",
  },
  keyInsight: {
    sentence: "Tier 1 空位是结论，不是简报缺口。",
  },
  analysis: {
    paragraphs: [
      "2014 年 6 月 10 日。",
      "Kubernetes：开源容器管理器——部署、健康检查、副本与连通。",
      "GitHub 可得；社区支持。",
      "语境为 Omega 经验，面向需求更克制的开发者。",
      "同次更新扩大 Google Cloud Platform 上的 Docker 支持。",
      "点名 App Engine Managed VM Docker、Compute Engine Docker、cAdvisor。",
      "Docker 出现在周边容器生态。",
      "若共享集群控制成为跑容器的方式，结构故事成立。",
      "但管理器开源，谁拿走盈余未立住。",
      "T0 上 Tier 1、Tier 2 空位。",
      "Google 为 Tier 4 / 假说。",
      "Docker 为周边生态、Low。",
      "许可费、排他控制、“社区”以外的治理、竞争编排器结局未披露。",
      "费用、治理、谁留住盈余，仍属 Unknown；抓取幅度仍属 Unknown。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看控制面外移。先问自己：开源之后，谁还能拿走盈余？",
    applyLabel: "Where else can this apply?",
    applyTo: ["容器编排", "开源控制面", "云托管 Kubernetes", "社区/基金会治理", "开发者集群运维"],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "一方围住可用 Kubernetes，Tier 1 被填上",
      "无需共享管理器即可满足集群需求",
      "Omega 或其他专有调度器成为外部标准",
      "宣称能力未出现在已发布项目中",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-010", slug: "db-010", title: "Lakehouse：开放架构被命名，Tier 1 锁不住", href: "/zh/briefs/db-010" },
      { id: "DB-007", slug: "db-007", title: "Copilot：编码辅助进编辑器，Tier 1 空着", href: "/zh/briefs/db-007" },
      { id: "DB-004", slug: "db-004", title: "Stripe：收卡变成开发者 API，费率一条写死", href: "/zh/briefs/db-004" },
    ],
  },
  footer: JOURNAL_FOOTER,
};

/** DB-005 — Public Beta Sprint 2 editorial rewrite; facts and reasoning unchanged. */
export const db005JournalEn: JournalBrief = {
  slug: "db-005",
  locale: "en",
  productId: "DB-005",
  homeHref: "/",
  hero: {
    quoteLines: [
      "Structural change is real.",
      "Who captures surplus is not established — Tier 1 can stay vacant.",
    ],
    title: "Google Opens Container Fleet Control — and Leaves Tier 1 Vacant",
    summary:
      "On 10 June 2014, Google announced Kubernetes: an open-source container manager on GitHub, community-supported.",
    meta: { id: "DB-005", readingTime: "5 min", industry: "Cloud Infrastructure" },
  },
  question: {
    text: "If shared fleet control becomes how containers are run, and the manager is open source, who captures surplus?",
  },
  story: {
    paragraphs: [
      "Efficient container scheduling matters at Internet scale.",
      "Most developers need something more modest.",
      "Place containers.",
      "Keep them healthy.",
      "Replicate.",
      "Connect.",
      "Not Omega.",
      "Google does not productize internal scheduling as a closed offering.",
      "It publishes the control plane as open source.",
      "The scheduling interface moves outward to a shared manager.",
      "Support model is community; distribution is GitHub.",
      "GCP Docker paths sit beside it — without surplus terms.",
      "Whether adoption follows — and whether any party later encloses usable Kubernetes — is still Unknown.",
    ],
  },
  diagram: {
    nodes: [
      "Ad-hoc or proprietary scheduling",
      "Open-source fleet control (Kubernetes)",
      "Community + GitHub; Tier 1 vacant",
    ],
    caption: "Control plane moves outward; because it is open source, who captures surplus stays Unknown",
  },
  keyInsight: {
    sentence: "Vacant Tier 1 is the point — not a gap in the Brief.",
  },
  analysis: {
    paragraphs: [
      "10 June 2014.",
      "Kubernetes: open-source container manager for deploy, health-checking, replication, and connection.",
      "On GitHub; community-supported.",
      "Framed against Omega experience for developers with more modest needs.",
      "Same update expands Docker support on Google Cloud Platform.",
      "Names App Engine Managed VM Docker, Compute Engine Docker, and cAdvisor.",
      "Docker named in the surrounding container ecosystem.",
      "If shared fleet control becomes how containers are run, the structural change is real.",
      "Because the manager is open source, who captures surplus is not established.",
      "Tier 1 and Tier 2 vacant at T0.",
      "Google Tier 4 / Hypothesis.",
      "Docker Low in the ecosystem.",
      "Licence fees, exclusive control, governance beyond “community,” and competing orchestrators’ outcomes are undisclosed.",
      "Fees, governance, and who keeps surplus remain Unknown; magnitude of capture remains Unknown.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "Don’t only watch the control plane move outward. Ask first: once it is open source, who can still capture surplus?",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "Container orchestration",
      "Open-source control planes",
      "Managed Kubernetes offerings",
      "Community / foundation governance",
      "Developer fleet operations",
    ],
  },
  changeMind: {
    prompt: "What would change today’s conclusion?",
    items: [
      "One party enclosing usable Kubernetes such that Tier 1 fills",
      "Fleet needs met without a shared manager",
      "Omega or another proprietary scheduler becoming the external standard",
      "Announced capabilities absent from the published project",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-010", slug: "db-010", title: "Databricks Names the Lakehouse — an Open Pattern, Not a Locked Tier 1", href: "/briefs/db-010" },
      { id: "DB-007", slug: "db-007", title: "GitHub Copilot Moves Coding Help Into the Editor — Without a Tier 1 Capturer Yet", href: "/briefs/db-007" },
      { id: "DB-004", slug: "db-004", title: "Stripe Makes Card Acceptance a Developer API With One Published Fee", href: "/briefs/db-004" },
    ],
  },
  footer: JOURNAL_FOOTER,
};
