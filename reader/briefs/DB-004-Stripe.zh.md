# Stripe：收卡变成开发者 API，费率一条写死

| Field | Value |
| --- | --- |
| Product | Decision Brief DB-004 |
| Parent research | `reports/SRE-113-Stripe.md` |
| T0 | 2011-09-30 |
| Reading time | 约 5 分钟 |
| Source | Stripe 官网 |
| Disclaimer | 供长期研究参考。不构成投资建议。不构成买卖或持有任何证券的推荐。 |

---

# Headline

结论先说：Stripe 上线把线上收卡做成全栈开发者 API 加托管金库，费率一条透明价。卖点不是商户账户拼网关的拼盘。

---

# Executive Summary

为什么值得关心？稀缺点在全栈收单入口，不在又一家网关。约 2011 年 9 月 30 日，Stripe 发布面向开发者的支付平台：API 与库、stripe.js（卡号不必落商户服务器）、订阅与打款，以及单笔成功扣款费率 **2.9% + 30¢**。过去要拆商户账户、网关、不透明多层收费的开发者，现在有一条可编码接入路径。若该 API 成为网页收卡默认方式，价值迁向全栈支付运营方。公告**未披露**服务成本、净利率、银行伙伴或排他条款。留存经济利润，仍属 Unknown。

---

# What Changed?

变的是产品形态：支付按代码交付。Stripe 同期站点（首页、Pricing、About、Docs）呈现面向开发者的在线产品。

- 定位：“Payments for developers”——收卡不必拼传统商户账户 + 网关栈。
- stripe.js 路径采集卡信息，卡号不进商户服务器；API 与库有文档可集成。
- 订阅、打款、存卡作为平台功能。
- 公开定价：每笔成功扣款 **2.9% + 30¢**（费率 FAQ 亦提及 American Express 作为卡品牌）。
- 公司自述为搭建支付基础设施的小团队；体量与地理超出帮助导航话题的部分，未以闭合经济数据量化。

---

# Why It Matters

问题只有一个：线上收卡又难接、又不透明。商户账户、网关、PCI 负担、难预测的费率表，叠在一起。点名受众是想收卡的开发者与网站。

Stripe 的解法是支付即代码：

1. **集成单元上移** — 多方处理器拼装，让位给单一 API 与客户端库表面。
2. **金库内置** — 卡与订阅落在 Stripe 栈上，不只在商户侧。
3. **费率一条公开** — 成功扣款 2.9% + 30¢，替代不透明多层捆绑。

开发者是否把它当作默认路径，以及扣掉银行与网络成本后 Stripe 留多少盈余，仍属 Unknown。

---

# Where Value Is Moving

Simple value flow (five nodes):

```text
[商户账户 + 独立网关]
        ↓
[不透明多层处理器定价]
        ↓
[开发者 API + 库]
        ↓
[stripe.js 金库 + 订阅 + 打款]
        ↓
[线上收卡的网站与应用]
```

**Reading.** 价值迁向带一条公开费率、可开发者集成的全栈支付 API。压力离开商户账户拼网关栈。来源点名运营方：Stripe。成本、利润率、相对其他处理器的排他性，仍属 Unknown。

---

# Potential Beneficiaries

下列公司仅为进一步研究而点名。**不构成推荐。不按吸引力排序。无目标价。**

| Company | Reason | Confidence | Unknown |
| --- | --- | --- | --- |
| **Stripe, Inc.** | 拥有 API、stripe.js 路径、存卡、订阅、打款与已披露 take rate；SRE-113 Tier 1 | Medium | 成本/利润率；排他；SLA；地理；体量；上市状态 |
| **— (Tier 2 vacant)** | 银行与卡组织未被点名为控制已披露瓶颈 | — | 未点名金融机构是否拿走大部分费率 |
| **— (American Express)** | 仅出现在费率 FAQ 的卡品牌——未立为受益方层级 | — | 品牌提及之外的任何经济角色 |
| **— (merchants / developers)** | 产品点名受众 | — | 盈余是否落在用户而非 Stripe |

---

# Reality Check

**Current thesis.** 线上收卡若默认走全栈开发者 API——透明 take rate、存卡状态在平台侧——价值迁向该平台运营方。Stripe 结构上位居该位；留存经济利润仍属 Unknown。

**What would prove us wrong?**

- 即使用 Stripe，商户仍须另开商户账户与网关。
- 费率盈余主要落在银行，而非 Stripe。
- 出现可互换、无金库/订阅锁定的便携处理器 API。
- 开发者拒绝基于 API 的收卡。

**Next validation point.** 下一验证看：采用与体量披露；利润率或成本表述；具名银行伙伴；费率竞争；以及能显示谁留住盈余的拒付/欺诈经济。

---

# Bottom Line

方向清楚：竞争看谁控 API、金库与订阅状态。Stripe 卖的是带一条公开费率的开发者收卡基础设施，不是“又一家支付网关”。来源报告里，Stripe 是 Tier 1 结构性受益方；成本后留存利润，仍属 Unknown。收益大小未定，故事方向已定。

---

# Sources

- **Parent research:** SRE-113 — Stripe (`reports/SRE-113-Stripe.md`)
- **Underlying official sources (P0 only, via SRE-113):** Stripe.com 首页、Pricing、About、Docs（与 2011 年 9 月 30 日上线同期；SRE-113 所引 Internet Archive 存档）

未使用其他来源。未做新研究。每条陈述均可追溯至 SRE-113。内容对应 Decision Brief DB-004。
