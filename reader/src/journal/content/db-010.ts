import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-010 — layout migration only; facts and reasoning preserved. */
export const db010JournalZh: JournalBrief = {
  slug: "db-010",
  locale: "zh",
  productId: "DB-010",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "品类在变，排他抓取未立住。",
      "模式开放，故 Tier 1 空着。",
    ],
    title: "Lakehouse：开放架构被命名，Tier 1 锁不住",
    summary:
      "2020 年 1 月 30 日，Databricks 发布 “What Is a Lakehouse?”：企业要一套系统同时扛 BI/SQL、流式与数据科学/ML（含非结构化 AI 数据），既不要仓的成本与适配上限，也不要湖的质量缺口，或是多系统拷贝延迟。Lakehouse 把仓式管理放在低成本对象存储与开放格式上。Databricks 交付平台实现，但架构明确开放——承认 Azure Synapse 类模式、BigQuery/Redshift Spectrum 的部分行为，以及 DIY Delta/Iceberg/Hudi 路径。若企业用一个开放仓库替代双栈，品类迁移成立——排他抓取却未立住。定价、利润率与盈余切分仍属 Unknown；Tier 1 空位。",
    meta: { id: "DB-010", readingTime: "5 min", industry: "Data Platforms" },
  },
  question: {
    text: "若企业用开放对象存储湖上的仓式管理替代双栈，而模式开放、多实现方具名，谁拿走盈余？",
  },
  story: {
    paragraphs: [
      "变的是品类定义，不是又一项专有功能清单。",
      "企业不想为分析与 ML 养三套系统加拷贝管线；要可信 SQL 与治理，又不放弃开放低成本存储。",
      "Lakehouse 的解法是架构层：兼得湖与仓——低成本对象存储上的管理能力，用开放格式。",
      "仓库收敛；开放格式要紧；托管云与 DIY 开放格式建设者同处一类故事。",
      "性能与体验能否追上仓，以及谁拿走盈余，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: [
      "独立数据仓库",
      "独立数据湖 + 拷贝 / 延迟",
      "开放表格式下的对象存储",
      "仓式管理 / 治理层",
      "同一 lakehouse 上的 BI、流式、DS/ML",
    ],
    caption:
      "若企业采用并补上性能/体验缺口，价值迁向单一开放 lakehouse；模式开放故 Tier 1 空位；Databricks 为 Tier 2",
  },
  keyInsight: {
    sentence:
      "Lakehouse 是品类架构——开放对象存储湖上的仓能力——不是 Databricks 品牌口号；Tier 1 空位是刻意结论。",
  },
  analysis: {
    paragraphs: [
      "2020-01-30：Databricks 定义 lakehouse——低成本对象存储上的仓式管理，开放格式；负载含 BI/SQL、流式、DS/ML。",
      "开放性：Azure Synapse 相关模式；BigQuery/Redshift Spectrum 部分步骤；Delta/Iceberg/Hudi 支撑 DIY。",
      "Tier 1 空位；Databricks Tier 2；Microsoft（Synapse / Azure Databricks）Tier 3。",
      "定价、利润率、排他 IP 与谁留住盈余仍属 Unknown。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "当分析架构被命名为开放对象存储湖上的仓式管理、且多实现路径被承认时，品类迁移可以成立，但排他抓取未立住——Tier 1 可以空着。",
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

/** DB-010 — layout migration only; facts and reasoning preserved. */
export const db010JournalEn: JournalBrief = {
  slug: "db-010",
  locale: "en",
  productId: "DB-010",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The category shifts; exclusive capture is not established.",
      "Tier 1 stays vacant because the pattern is open.",
    ],
    title: "Databricks Names the Lakehouse — an Open Pattern, Not a Locked Tier 1",
    summary:
      "On 30 January 2020, Databricks published “What Is a Lakehouse?”: enterprises need one system for BI/SQL, streaming, and data science/ML (including unstructured AI data) without warehouse cost/fit limits, data-lake quality gaps, or multi-system copy delay. A lakehouse puts warehouse-style management on low-cost object storage in open formats. Databricks ships a platform implementation, but the architecture is explicitly open — Azure Synapse patterns, partial BigQuery/Redshift Spectrum behaviour, and DIY Delta/Iceberg/Hudi paths are acknowledged. If enterprises adopt one open repository instead of dual stacks, the category shifts — yet exclusive capture is not established. Pricing, margins, and surplus split remain Unknown; Tier 1 is vacant.",
    meta: { id: "DB-010", readingTime: "5 min", industry: "Data Platforms" },
  },
  question: {
    text: "If enterprises consolidate onto warehouse-like management over open object-storage lakes, and the pattern is open with named alternatives, who captures surplus?",
  },
  story: {
    paragraphs: [
      "What changed is the category definition — not another proprietary feature list.",
      "Enterprises do not want three systems and a copy pipeline; they want trustworthy SQL and governance without giving up open, low-cost storage.",
      "The lakehouse answer is architectural: management features on low-cost object storage using open formats.",
      "Repository consolidates; open formats matter; managed clouds and DIY open-format builders sit in the same category story.",
      "Whether performance and UX close the gap to warehouses — and who captures surplus — is still Unknown.",
    ],
  },
  diagram: {
    nodes: [
      "Separate data warehouse",
      "Separate data lake + copies / delays",
      "Object storage in open table formats",
      "Warehouse-like management / governance layer",
      "BI, streaming, DS/ML on one lakehouse",
    ],
    caption:
      "Value moves toward a single open lakehouse on object storage if adoption closes performance/UX gaps; Tier 1 vacant because open; Databricks Tier 2",
  },
  keyInsight: {
    sentence:
      "The lakehouse is a category architecture — warehouse features on open object-store lakes — not a Databricks brand claim; vacant Tier 1 is intentional.",
  },
  analysis: {
    paragraphs: [
      "30 Jan 2020: Databricks defines lakehouse — warehouse-style management on low-cost object storage in open formats; workloads BI/SQL, streaming, DS/ML.",
      "Openness: Azure Synapse related patterns; BigQuery/Redshift Spectrum as partial steps; Delta/Iceberg/Hudi enable DIY.",
      "Tier 1 vacant; Databricks Tier 2; Microsoft (Synapse / Azure Databricks) Tier 3.",
      "Pricing, margins, exclusive IP, and who keeps surplus remain Unknown.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "When analytics architecture is named as warehouse-like management on open object-storage lakes, with multiple implementers acknowledged, category shift can be real while exclusive capture stays unestablished — Tier 1 can be vacant.",
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
