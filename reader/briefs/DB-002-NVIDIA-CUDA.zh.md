# CUDA：稀缺点在编程模型，不在显卡速度

| Field | Value |
| --- | --- |
| Product | Decision Brief DB-002 |
| Parent research | `reports/SRE-104-NVIDIA-CUDA.md` |
| T0 | 2006-11-08 |
| Reading time | 约 5 分钟 |
| Source | 英伟达新闻稿 |
| Disclaimer | 供长期研究参考。不构成投资建议。不构成买卖或持有任何证券的推荐。 |

---

# Headline

结论先说：CUDA 把 GPU 计算做成厂商专属编程模型——编译器、计算驱动、受控 SDK。卖点不是更快的显卡。

---

# Executive Summary

为什么值得关心？稀缺点在编程路径，不在单颗芯片。2006 年 11 月 8 日，英伟达发布 CUDA：GPU 核心可通信、可同步、可共享数据，并配套其所谓业界首个面向 GPU 的 C 编译环境。传统流式计算做不到这种协作；英伟达称新编译器将淘汰面向 GPU 计算的流式语言。重型仿真与分析若必须经通用语言调用可协作 GPU 核心，入口由英伟达为自家 GPU 定义。公告**未披露**价格、许可条款，也未说明代码能否跑在别家硬件。价值如何分割，仍属 Unknown。

---

# What Changed?

变的是入口，不只是性能数字。2006 年 11 月 8 日，英伟达宣布 CUDA 推出。

- CUDA：英伟达 GPU 上的新计算架构，外加面向 GPU 的 C 编译开发环境。
- 英伟达称：GPU 核心可通信、同步、共享数据，超越传统 GPU 流式计算。
- 含 Parallel Data Cache，片上多核心可协作；入口为独立计算驱动 + NVIDIA C 编译器。英伟达称该编译器将淘汰面向 GPU 计算的流式语言。
- 产品面：GeForce 8800 及后续 Quadro 可用；SDK 经注册开发者计划发放。
- 性能宣称：相较传统方法，最高约 100 倍（厂商宣称）。客户引言点名 Acceleware、SPEAG、Headwave；用例为电磁仿真、地震分析及相关负载。

---

# Why It Matters

问题只有一个：CPU 扛不住的负载，旧 GPU 路径也接不住。产品设计、数据分析、技术计算、游戏物理、地震与电磁仿真，规模或速度上单靠 CPU 不够。旧路径走流式语言和图形接口；核心之间无法像通用机器协作。

CUDA 的解法是两条线绑死：硬件让核心协作；C 编译路径进入该硬件。结构变化有三：

1. **编程模型上移** — 流式语言让位给 C 编译器 + 独立计算驱动。
2. **分工固化** — GPU 做细粒度、数据密集计算；多核 CPU 做粗粒度控制与数据管理。
3. **入口受控** — SDK 走注册开发者计划，非开放、厂商中立栈。

代码能否移植到别家 GPU，仍属 Unknown。

---

# Where Value Is Moving

Simple value flow (five nodes):

```text
[CPU 承担细粒度数值计算]
        ↓
[流式语言 / 图形 API 的 GPU 路径]
        ↓
[可协作的 GPU 核心 + Parallel Data Cache]
        ↓
[英伟达 C 编译器 + 计算驱动 + 受控 SDK]
        ↓
[仿真、分析与技术计算应用]
```

**Reading.** 价值迁向编程模型所有者。压力离开“唯 CPU 扛重活”和流式语言，落到谁控制通往可协作 GPU 计算的厂商专属路径。来源点名：英伟达。价格、许可、跨硬件移植，仍属 Unknown。

---

# Potential Beneficiaries

下列公司仅为进一步研究而点名。**不构成推荐。不按吸引力排序。无目标价。**

| Company | Reason | Confidence | Unknown |
| --- | --- | --- | --- |
| **NVIDIA** | 控制 CUDA 架构、C 编译器、计算驱动与受控开发者计划（自家 GPU）；SRE-104 Tier 1；来源 Nasdaq: NVDA | Medium | 工具链价格/许可；开发者计划条款；跨厂商移植；盈余自留比例 |
| **— (Tier 2 vacant)** | 来源未披露第二家卡位瓶颈层的公司 | — | 后续是否有伙伴拿到可持久份额 |
| **Acceleware, SPEAG, Headwave** | 被点名引用 CUDA 收益的客户/ISV；SRE-104 Tier 3 | Low | 上市状态未确认；商业条款；能否留住盈余 |
| **— (end users)** | 油气、电磁、生物医学及相关负载被点为用例 | — | 规模、支出；盈余是否留在用户侧 |

---

# Reality Check

**Current thesis.** 可协作 GPU 计算若必须经通用语言进入单一厂商 GPU，价值归编程模型所有者。英伟达结构上位居可拿大头的位置；变现规模仍属 Unknown。

**What would prove us wrong?**

- 出现跨厂商可移植编程模型，不依赖英伟达编译器与驱动，却达到同等可协作 GPU 能力。
- 盈余主要落在应用层或终端用户，而非平台方。
- CPU 在上述点名负载上抹平性能差距。
- 计算能力可不经英伟达受控 SDK 获得。

**Next validation point.** 下一验证看：CUDA 定价/许可披露；开发者计划规模与条款；官方移植性表述；跨厂商标准（如 SRE-104 观察名单中的 OpenCL 一类）；Quadro 上 CUDA 可用性；财报中计算相关收入表述。

---

# Bottom Line

方向清楚：竞争看谁控编译器、驱动与开发者入口。CUDA 卖的是受控编程模型下的 GPU 计算，不是“更快一块卡”。来源报告里，英伟达是最清晰的结构性受益方。价格、许可、代码能否离开英伟达硬件，仍属 Unknown。收益大小未定，故事方向已定。

---

# Sources

- **Parent research:** SRE-104 — NVIDIA CUDA (`reports/SRE-104-NVIDIA-CUDA.md`)
- **Underlying official source (P0 only, via SRE-104):** 英伟达新闻稿，2006 年 11 月 8 日 — “NVIDIA Unveils CUDA™ — The GPU Computing Revolution Begins”（archived nvidia.com）

未使用其他来源。未做新研究。每条陈述均可追溯至 SRE-104。内容对应 Decision Brief DB-002。
