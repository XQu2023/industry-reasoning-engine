import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-005 — layout migration only; facts and reasoning preserved. */
export const db005JournalZh: JournalBrief = {
  slug: "db-005",
  locale: "zh",
  productId: "DB-005",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "结构变化真实，盈余归属未定。",
      "卖的是开源集群控制，不是 Google 秘制调度器外泄。",
    ],
    title: "Kubernetes：打开集群控制面，Tier 1 空着",
    summary:
      "2014 年 6 月 10 日，Google 发布 Kubernetes：开源容器管理器，负责跨集群部署、健康检查、副本与连通，并同步扩大 Google Cloud Platform 上的 Docker 支持。内部用 Omega 级调度；Kubernetes 面向需求更克制的开发者，放在 GitHub，社区支持。若共享集群控制成为跑容器的方式，结构故事成立——但管理器开源，谁拿走盈余未立住。许可费、排他控制、“社区”以外的治理、竞争编排器结局未披露；抓取幅度仍属 Unknown。",
    meta: { id: "DB-005", readingTime: "5 min", industry: "Cloud Infrastructure" },
  },
  question: {
    text: "若共享集群控制成为跑容器的方式，而管理器开源，谁拿走盈余？",
  },
  story: {
    paragraphs: [
      "变的是控制面公开，不是内部调度外泄成封闭产品。",
      "互联网规模需要高效容器调度；多数开发者要的是放置容器、保健康、做副本、连起来——用不上 Omega。",
      "Kubernetes 的解法：把控制面开源发布。",
      "调度接口外移到共享管理器；支持模型是社区；GCP Docker 路径并列但盈余条款未写明。",
      "采用是否跟进，以及日后是否有人把可用 Kubernetes 围起来，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: [
      "临时或专有容器调度",
      "按应用脚本与人工集群运维",
      "开源集群控制面（Kubernetes）",
      "社区支持 + GitHub 分发",
      "跑容器的云主机与开发者",
    ],
    caption: "若采用跟进，价值迁向开放、共享的集群控制面；因项目开源，稀缺与盈余抓取仍属 Unknown；T0 上 Tier 1 空位",
  },
  keyInsight: {
    sentence: "Tier 1 空位是结论，不是简报缺口：即便无人被点为 Tier 1，行业仍可能被带动。",
  },
  analysis: {
    paragraphs: [
      "2014 年 6 月 10 日：Kubernetes 开源容器管理器（部署、健康、副本、连通）；GitHub 可得；社区支持；语境为 Omega 经验与需求更克制的开发者。",
      "同次更新点名 App Engine Managed VM Docker、Compute Engine Docker、cAdvisor；Docker 出现在周边容器生态。",
      "T0 上 Tier 1、Tier 2 空位；Google 为 Tier 4 / 假说；Docker 为周边生态、Low。",
      "费用、治理、谁留住盈余，仍属 Unknown。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "当集群控制面以开源、社区支持方式外移为共享管理器时，结构变化可以成立，但盈余抓取不一定落在发布方——Tier 1 可以空着。",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "容器编排",
      "开源控制面",
      "云托管 Kubernetes",
      "社区/基金会治理",
      "开发者集群运维",
    ],
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

/** DB-005 — layout migration only; facts and reasoning preserved. */
export const db005JournalEn: JournalBrief = {
  slug: "db-005",
  locale: "en",
  productId: "DB-005",
  homeHref: "/",
  hero: {
    quoteLines: [
      "Structural change is real; who captures surplus is not established.",
      "Fleet control published as open source — not Google’s secret scheduler.",
    ],
    title: "Google Opens Container Fleet Control — and Leaves Tier 1 Vacant",
    summary:
      "On 10 June 2014, Google announced Kubernetes, an open-source container manager for deploying, health-checking, replicating, and connecting containers across a fleet, alongside broader Docker support on Google Cloud Platform. Internally Google uses Omega-scale scheduling; Kubernetes is positioned for developers with more modest needs, published on GitHub as community-supported. If shared fleet control becomes how containers are run, the structural change is real — but because the manager is open source, who captures surplus is not established. Licence fees, exclusive control, governance beyond “community,” and competing orchestrators’ outcomes are undisclosed; magnitude of capture remains Unknown.",
    meta: { id: "DB-005", readingTime: "5 min", industry: "Cloud Infrastructure" },
  },
  question: {
    text: "If shared fleet control becomes how containers are run, and the manager is open source, who captures surplus?",
  },
  story: {
    paragraphs: [
      "Google opens fleet container management as a community-supported control plane — not a closed productization of internal Omega.",
      "Efficient container scheduling matters at Internet scale, but most developers need place, health, replicate, connect — not Omega.",
      "Kubernetes answers by publishing that control plane as open source.",
      "Scheduling interface moves outward to a shared manager; support model is community; GCP Docker paths sit beside it without surplus terms.",
      "Whether adoption follows — and whether any party later encloses usable Kubernetes — is still Unknown.",
    ],
  },
  diagram: {
    nodes: [
      "Ad-hoc or proprietary container scheduling",
      "Per-app scripts and manual fleet ops",
      "Open-source fleet control plane (Kubernetes)",
      "Community support + GitHub distribution",
      "Cloud hosts and developers running containers",
    ],
    caption: "Value moves toward an open, shared fleet control plane if adoption follows; scarcity and surplus capture Unknown because open source; Tier 1 vacant at T0",
  },
  keyInsight: {
    sentence: "Vacant Tier 1 is the point — not a gap in the Brief: the industry can move even when no Tier 1 capturer is named.",
  },
  analysis: {
    paragraphs: [
      "10 June 2014: Kubernetes as open-source container manager for deploy, health, replication, and connection; on GitHub; community-supported; framed against Omega experience and developers with more modest needs.",
      "Same update names App Engine Managed VM Docker, Compute Engine Docker, and cAdvisor; Docker named in the surrounding container ecosystem.",
      "Tier 1 and Tier 2 vacant at T0; Google Tier 4 / Hypothesis; Docker Low in the ecosystem.",
      "Fees, governance, and who keeps surplus remain Unknown.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "When a fleet control plane moves outward as an open-source, community-supported shared manager, structural change can be real while surplus capture stays unestablished — Tier 1 can be vacant.",
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

