# MI300：竞争看 HBM3 与 ROCm，不看峰值 FLOPs

| Field | Value |
| --- | --- |
| Product | Decision Brief DB-008 |
| Parent research | `reports/SRE-116-AMD-MI300.md` |
| T0 | 2023-12-06 |
| Reading time | 约 5 分钟 |
| Source | AMD 新闻稿 / 博客 |
| Disclaimer | 供长期研究参考。不构成投资建议。不构成买卖或持有任何证券的推荐。 |

---

# Headline

结论先说：AMD 发布 MI300，把加速器竞争框到大容量 HBM3 的 CDNA 3 系统加 ROCm 6。卖点不只是峰值芯片 FLOPs。

---

# Executive Summary

为什么值得关心？稀缺点在高 HBM3 Instinct 栈，不在算术单元竞赛。2023 年 12 月 6 日，AMD 宣布 Instinct MI300X 加速器与 MI300A APU 可供货：MI300X 配 192 GB HBM3、5.3 TB/s 带宽（AMD 宣称相对 H100 级在相关内存指标上领先），MI300A 将 CDNA 3 与 Zen 4 合一，外加 ROCm 6 软件（AMD 宣称相对前代 AMD 在 Llama 2 文本生成上大幅提升）。具名路径含 Azure、OCI、OEM 系统及 El Capitan。若 LLM 与 HPC 受制于内存容量与开放软件路径，价值迁向该高 HBM3 Instinct 栈。**未披露**价格、ASP、利润率、出货量，以及工艺节点以外的 HBM/晶圆厂身份。留存份额，仍属 Unknown。

---

# What Changed?

变的是产品叙事：内存与软件入主标题。2023 年 12 月 6 日，AMD 新闻稿与博客描述 MI300 可供货与定位。

- MI300X：192 GB HBM3，5.3 TB/s 带宽；AMD 宣称相对 NVIDIA H100 级，在 LLM 相关内存指标上领先。
- MI300A：CDNA 3 GPU + Zen 4 CPU 的 APU，面向 HPC/AI 融合。
- ROCm 6 软件栈；AMD 宣称相对前代 AMD，Llama 2 文本生成约 8× 提升（厂商宣称）。
- 云与 OEM 路径点名：Microsoft Azure、Oracle Cloud Infrastructure、Dell、HPE、Lenovo、Supermicro；提及 El Capitan / LLNL 路径；Meta 与软件生态名出现在展示/语境中（见 SRE-116 引用）。
- 工艺节点提及（5nm/6nm 级）；HBM 供应商身份在 SRE-116 所用抓取中未立为公司名。

---

# Why It Matters

问题只有一个：大模型与 HPC 卡在内存，不卡在算完 FLOPs。需要巨大内存与带宽，不只更多算术单元。买方还要软件路径（ROCm）与真实设计导入。

MI300 的解法是组合动作：

1. **内存成头条稀缺资源** — MI300X 上 192 GB HBM3 级容量。
2. **封装覆盖独立卡与 APU** — MI300X 做加速节点；MI300A 做 HPC/AI 的 CPU–GPU 一致性。
3. **软件是标配** — ROCm 6 作为与硬件配对的开放栈。

设计导入能否变成持续放量，以及相对 HBM/晶圆厂谁留盈余，仍属 Unknown。

---

# Where Value Is Moving

Simple value flow (five nodes):

```text
[上一代独立加速器（含 MI250X / H100 级基线）]
        ↓
[LLM / HPC 内存容量压力]
        ↓
[CDNA 3 MI300X 高 HBM3 加速器]
        ↓
[MI300A APU + ROCm 6 软件路径]
        ↓
[云、OEM 与 HPC 买方]
```

**Reading.** 若具名设计导入变成持续部署，价值迁向高 HBM3 Instinct 系统加 ROCm，服务生成式 AI 与 HPC/AI 融合。来源点名 AMD 为 Tier 1。价格、出货量，以及相对内存/晶圆厂伙伴的份额，仍属 Unknown。

---

# Potential Beneficiaries

下列公司仅为进一步研究而点名。**不构成推荐。不按吸引力排序。无目标价。**

| Company | Reason | Confidence | Unknown |
| --- | --- | --- | --- |
| **AMD** | 拥有 MI300X/MI300A 组合与 ROCm 6 路径；SRE-116 Tier 1；NASDAQ: AMD | Medium | 价格/ASP/利润率；出货/收入；HBM/晶圆厂经济；留存份额 |
| **— (Tier 2 vacant at firm resolution)** | 云/OEM 相对 AMD 的经济未披露 | — | Azure/OCI/OEM 是否留住盈余 |
| **Microsoft, Oracle, Dell, HPE, Lenovo, Supermicro** | 具名云/OEM 路径；SRE-116 Tier 3/4 | Low | 依纳入规则代码/条款未完全立住；部署组合；盈余留存 |
| **— (Meta, LLNL, ecosystem names)** | 来源中的展示或路径引用 | Low | 部署细节；是否存在留存 |
| **— (HBM / foundry)** | 设计所需；公司身份在来源中 Incomplete | — | 谁供应；该层是否真正瓶颈 |

---

# Reality Check

**Current thesis.** LLM 与 HPC 需求若受制于 HBM3 级内存与可用开放软件路径，价值迁向 AMD 的 MI300 Instinct 组合——AMD 为 Tier 1；价格与留存份额仍属 Unknown；性能数字在独立验证前仍为厂商宣称。

**What would prove us wrong?**

- AMD 无法规模供货。
- 盈余主要落在 HBM 或晶圆厂供应商。
- 运营方停留在上一代或对手加速器。
- 开放/可移植软件使 MI300 成完全可互换商品，AMD 无留存。

**Next validation point.** 下一验证看：Azure/OCI 全面可用；OEM 2024 可供货；独立基准；ROCm 采用证据；HBM/晶圆厂经济；对手匹配内存配置。

---

# Bottom Line

方向清楚：加速器竞争框在高 HBM3、APU 封装与 ROCm，不是“又一个 GPU SKU”。来源报告里，AMD 是 Tier 1 结构性受益方。价格、体量，以及相对内存/晶圆厂层谁留盈余，仍属 Unknown。幅度未定。宣称属 AMD，他处验证前不作独立事实。

---

# Sources

- **Parent research:** SRE-116 — AMD MI300 (`reports/SRE-116-AMD-MI300.md`)
- **Underlying official sources (P0 only, via SRE-116):** AMD 新闻稿与 AMD Blog（Guy Ludden），2023 年 12 月 6 日

未使用其他来源。未做新研究。每条陈述均可追溯至 SRE-116。内容对应 Decision Brief DB-008。
