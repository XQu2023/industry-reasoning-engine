import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-010 — Public Beta Sprint 2 editorial rewrite; facts and reasoning unchanged. */
export const db010JournalZh: JournalBrief = {
  slug: "db-010",
  locale: "zh",
  productId: "DB-010",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "品类可以迁移。",
      "但模式开放时，排他抓取未必立住——Tier 1 可以空着。",
    ],
    title: "Lakehouse：开放架构被命名，Tier 1 锁不住",
    summary:
      "2020 年 1 月 30 日，Databricks 发布 “What Is a Lakehouse?”——把仓式管理放在低成本对象存储与开放格式上。",
    meta: { id: "DB-010", readingTime: "5 min", industry: "Data Platforms" },
  },
  question: {
    text: "若企业用开放对象存储湖上的仓式管理替代双栈，而模式开放、多实现方具名，谁拿走盈余？",
  },
  story: {
    paragraphs: [
      "过去几年，如果有人问：分析与 ML 数据放哪？",
      "答案往往是仓一套、湖一套，再加拷贝管线。",
      "这些都没有错。",
      "但企业不想养三套系统。",
      "要可信 SQL 与治理，又不放弃开放低成本存储。",
      "品类定义变了。",
      "不是又一项专有功能清单。",
      "Lakehouse 的答案在架构层。",
      "低成本对象存储上的管理能力。",
      "用开放格式。",
      "仓库收敛；托管云与 DIY 开放格式建设者同处一类故事。",
      "性能与体验能否追上仓，以及谁拿走盈余，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: ["湖 + 仓双栈 / 拷贝延迟", "对象存储 + 开放格式", "仓式管理（开放模式）"],
    caption: "价值迁向单一开放 lakehouse；模式开放故 Tier 1 空位；Databricks Tier 2",
  },
  keyInsight: {
    sentence: "Lakehouse 是品类架构——开放对象存储湖上的仓能力——不是品牌口号；Tier 1 空位是刻意结论。",
  },
  analysis: {
    paragraphs: [
      "2020 年 1 月 30 日。",
      "Databricks 定义 lakehouse：低成本对象存储上的仓式管理，开放格式。",
      "负载含 BI/SQL、流式、数据科学/ML（含非结构化 AI 数据）。",
      "既不要仓的成本与适配上限，也不要湖的质量缺口，或是多系统拷贝延迟。",
      "开放性：承认 Azure Synapse 类模式。",
      "BigQuery / Redshift Spectrum 的部分行为。",
      "以及 DIY Delta / Iceberg / Hudi 路径。",
      "Tier 1 空位；Databricks 为 Tier 2。",
      "Microsoft（Synapse / Azure Databricks）为 Tier 3。",
      "定价、利润率、排他 IP 与谁留住盈余，仍属 Unknown。",
      "品类迁移可以成立；排他抓取未立住。",
      "方向比幅度更清楚。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看谁命名了品类。先问自己：模式是否开放、多实现方是否具名——Tier 1 是否因此空着？",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "湖仓一体架构",
      "开放表格式",
      "对象存储分析栈",
      "多实现方品类",
      "BI/流式/ML 仓库收敛",
    ],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "企业放弃 lakehouse，回到持久的双栈湖+仓",
      "盈余只落在未点名的存储或工具层",
      "开放格式失败，封闭仓重新吸回 AI 数据",
      "单一专有栈独占 Tier 1",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-005", slug: "db-005", title: "Kubernetes：打开集群控制面，Tier 1 空着", href: "/zh/briefs/db-005" },
      { id: "DB-004", slug: "db-004", title: "Stripe：收卡变成开发者 API，费率一条写死", href: "/zh/briefs/db-004" },
      { id: "DB-007", slug: "db-007", title: "Copilot：编码辅助进编辑器，Tier 1 空着", href: "/zh/briefs/db-007" },
    ],
  },
  footer: JOURNAL_FOOTER,
};

export const db010JournalEn: JournalBrief = {
  slug: "db-010",
  locale: "en",
  productId: "DB-010",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The category can shift.",
      "But when the pattern is open, exclusive capture may not stick — Tier 1 can stay vacant.",
    ],
    title: "Databricks Names the Lakehouse — an Open Pattern, Not a Locked Tier 1",
    summary:
      "On 30 January 2020, Databricks published “What Is a Lakehouse?” — warehouse-style management on low-cost object storage in open formats.",
    meta: { id: "DB-010", readingTime: "5 min", industry: "Data Platforms" },
  },
  question: {
    text: "If enterprises consolidate onto warehouse-like management over open object-storage lakes, and the pattern is open with named alternatives, who captures surplus?",
  },
  story: {
    paragraphs: [
      "For years, analytics and ML data sounded split.",
      "A warehouse.",
      "A lake.",
      "Plus a copy pipeline between them.",
      "That is not wrong.",
      "But enterprises do not want three systems.",
      "They want trustworthy SQL and governance without giving up open, low-cost storage.",
      "The category definition changes.",
      "Not another proprietary feature list.",
      "The lakehouse answer is architectural.",
      "Management features on low-cost object storage.",
      "In open formats.",
      "Repository consolidates; managed clouds and DIY open-format builders sit in the same category story.",
      "Whether performance and UX close the gap to warehouses — and who captures surplus — is still Unknown.",
    ],
  },
  diagram: {
    nodes: ["Lake + warehouse dual stack", "Object storage + open formats", "Warehouse-like management (open)"],
    caption: "Value migrates toward a single open lakehouse; Tier 1 vacant because open; Databricks Tier 2",
  },
  keyInsight: {
    sentence:
      "The lakehouse is a category architecture — warehouse features on open object-store lakes — not a brand claim; vacant Tier 1 is intentional.",
  },
  analysis: {
    paragraphs: [
      "30 January 2020.",
      "Databricks defines lakehouse: warehouse-style management on low-cost object storage in open formats.",
      "Workloads: BI/SQL, streaming, data science/ML (including unstructured AI data).",
      "Avoid warehouse cost/fit limits, data-lake quality gaps, and multi-system copy delay.",
      "Openness: Azure Synapse related patterns acknowledged.",
      "Partial BigQuery / Redshift Spectrum behaviour.",
      "DIY Delta / Iceberg / Hudi paths.",
      "Tier 1 vacant; Databricks Tier 2.",
      "Microsoft (Synapse / Azure Databricks) Tier 3.",
      "Pricing, margins, exclusive IP, and who keeps surplus remain Unknown.",
      "Category shift can be real; exclusive capture is not established.",
      "Direction is clearer than magnitude.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "Don’t only ask who named the category. Ask first: is the pattern open, with named implementers — and does that leave Tier 1 vacant?",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "Lakehouse architecture",
      "Open table formats",
      "Object-storage analytics stacks",
      "Multi-implementer categories",
      "BI/streaming/ML repository consolidation",
    ],
  },
  changeMind: {
    prompt: "What would change today’s conclusion?",
    items: [
      "Enterprises abandoning lakehouse for durable dual lake+warehouse stacks",
      "Surplus accruing only to unnamed storage or tool layers",
      "Open formats failing and closed warehouses re-absorbing AI data",
      "A single proprietary stack taking exclusive Tier 1",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      {
        id: "DB-005",
        slug: "db-005",
        title: "Google Opens Container Fleet Control — and Leaves Tier 1 Vacant",
        href: "/briefs/db-005",
      },
      {
        id: "DB-004",
        slug: "db-004",
        title: "Stripe Makes Card Acceptance a Developer API With One Published Fee",
        href: "/briefs/db-004",
      },
      {
        id: "DB-007",
        slug: "db-007",
        title: "GitHub Copilot Moves Coding Help Into the Editor — Without a Tier 1 Capturer Yet",
        href: "/briefs/db-007",
      },
    ],
  },
  footer: JOURNAL_FOOTER,
};
