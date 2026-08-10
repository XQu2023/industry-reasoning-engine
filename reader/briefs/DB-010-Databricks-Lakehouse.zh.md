# Lakehouse：开放架构被命名，Tier 1 锁不住

| Field | Value |
| --- | --- |
| Product | Decision Brief DB-010 |
| Parent research | `reports/SRE-118-Databricks-Lakehouse.md` |
| T0 | 2020-01-30 |
| Reading time | 约 5 分钟 |
| Source | Databricks 博客 |
| Disclaimer | 供长期研究参考。不构成投资建议。不构成买卖或持有任何证券的推荐。 |

---

# Headline

结论先说：Databricks 的 lakehouse 长文把分析架构框成——开放对象存储湖上的仓级管理。模式开放，故 Tier 1 空着。

---

# Executive Summary

为什么值得关心？品类在变，排他抓取未立住。2020 年 1 月 30 日，Databricks 发布 “What Is a Lakehouse?”：企业要一套系统同时扛 BI/SQL、流式与数据科学/ML（含非结构化 AI 数据），既不要仓的成本与适配上限，也不要湖的质量缺口，或是多系统拷贝延迟。Lakehouse 把仓式管理放在低成本对象存储与开放格式上。Databricks 交付平台实现，但架构明确开放——文中承认 Azure Synapse 类模式、BigQuery/Redshift Spectrum 的部分行为，以及 DIY Delta/Iceberg/Hudi 路径。若企业用一个开放仓库替代双栈，品类迁移成立——排他抓取却未立住。定价、利润率与盈余切分，仍属 Unknown；Tier 1 空位。

---

# What Changed?

变的是品类定义，不是又一项专有功能清单。2020 年 1 月 30 日，Databricks 作者（含 Lorica、Armbrust、Xin、Zaharia、Ghodsi）在公司博客定义 lakehouse。

- 问题框定：仓擅长 BI，但对非结构化与多元 AI 数据贵/不适配；湖便宜灵活，但缺 ACID、质量与治理；多系统栈带来拷贝与延迟。
- Lakehouse 定义：兼得湖与仓——低成本对象存储上的管理能力，用开放格式。
- 负载归一处：BI/SQL、流式、数据科学与 ML。
- 开放性：Databricks 平台是一种实现；Azure Synapse 以相关模式语言描述；BigQuery 与 Redshift Spectrum 被记为部分步骤；开放表格式（Delta、Iceberg、Hudi）支撑 DIY 路径。

---

# Why It Matters

问题只有一个：企业不想为分析与 ML 养三套系统加拷贝管线。要可信 SQL 与治理，又不放弃开放、低成本存储与多元数据。

Lakehouse 的解法是架构层：

1. **仓库收敛** — 从湖 + 仓（+ 专用系统）转向一个 lakehouse。
2. **开放格式要紧** — 模式未定义为 Databricks 专有 IP。
3. **多实现方被承认** — 托管云与 DIY 开放格式建设者同处一类故事。

性能与体验能否追上仓，以及谁拿走盈余，仍属 Unknown。

---

# Where Value Is Moving

Simple value flow (five nodes):

```text
[独立数据仓库]
        ↓
[独立数据湖 + 拷贝 / 延迟]
        ↓
[开放表格式下的对象存储]
        ↓
[仓式管理 / 治理层]
        ↓
[同一 lakehouse 上的 BI、流式、DS/ML]
```

**Reading.** 若企业采用并补上性能/体验缺口，价值迁向对象存储上的单一开放 lakehouse 仓库。模式开放且替代路径具名，故 Tier 1 空位。Databricks 作为领先实现方为 Tier 2；抓取幅度仍属 Unknown。

---

# Potential Beneficiaries

下列公司仅为进一步研究而点名。**不构成推荐。不按吸引力排序。无目标价。**

| Company | Reason | Confidence | Unknown |
| --- | --- | --- | --- |
| **— (Tier 1 vacant)** | 开放架构、多实现方；无已披露排他瓶颈所有者 | — | 日后专有栈是否独占 Tier 1 |
| **Databricks, Inc.** | 定义并交付 lakehouse 平台；SRE-118 Tier 2 | Medium | 定价/利润率；对模式的排他 IP；上市；客户经济 |
| **Microsoft** | 引用 Azure Synapse / Azure Databricks 模式；Tier 3 | Low | 相对 Databricks 的盈余切分；Microsoft 抓取多少模式价值 |
| **— (BigQuery / Redshift Spectrum parents)** | 被记为迈向 lakehouse 类行为的部分步骤 | Low | 公司主体/条款；盈余 |
| **— (DIY open-format builders / enterprises)** | Delta、Iceberg、Hudi 路径；客户假说 | — | 盈余落在用户还是工具 |

---

# Reality Check

**Current thesis.** 企业若把 BI、流式与 ML 收敛到开放对象存储湖上的仓式管理，品类迁移是 lakehouse——但抓取结论是 Tier 1 空位：开放性与具名替代在 T0 挡住排他围栏。

**What would prove us wrong?**

- 企业放弃 lakehouse，回到持久的双栈湖+仓。
- 盈余只落在未点名的存储或工具层。
- 开放格式失败，封闭仓重新吸回 AI 数据。
- 单一专有栈独占 Tier 1。

**Next validation point.** 下一验证看：企业迁移案例证据；Databricks 定价披露；性能追上仓的缺口；Synapse 扩展；竞品 “lakehouse” 上线；以及会挑战 Tier 1 空位的锁定证据。

---

# Bottom Line

方向清楚：lakehouse 是品类架构——开放对象存储湖上的仓能力——不是 Databricks 品牌口号。Tier 1 空位是刻意结论。来源报告里，Databricks 是最清晰的 Tier 2 实现方；Microsoft 以 Tier 3 模式同侪出现。价格与谁留住盈余，仍属 Unknown。

---

# Sources

- **Parent research:** SRE-118 — Databricks Lakehouse (`reports/SRE-118-Databricks-Lakehouse.md`)
- **Underlying official source (P0 only, via SRE-118):** Databricks Blog，2020 年 1 月 30 日 — “What Is a Lakehouse?”（Lorica、Armbrust、Xin、Zaharia、Ghodsi）

未使用其他来源。未做新研究。每条陈述均可追溯至 SRE-118。内容对应 Decision Brief DB-010。
