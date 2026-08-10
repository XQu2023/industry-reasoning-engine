# ChatGPT：对话成大模型公共入口，Tier 1 空着

| Field | Value |
| --- | --- |
| Product | Decision Brief DB-006 |
| Parent research | `reports/SRE-115-ChatGPT.md` |
| T0 | 2022-11-30 |
| Reading time | 约 5 分钟 |
| Source | OpenAI 博客 |
| Disclaimer | 供长期研究参考。不构成投资建议。不构成买卖或持有任何证券的推荐。 |

---

# Headline

结论先说：OpenAI 发布 ChatGPT，把大模型入口做成免费对话式 RLHF 界面。T0 上 Tier 1 抓取仍空着。

---

# Executive Summary

为什么值得关心？稀缺点在对话界面与反馈环，不在又一个 checkpoint。2022 年 11 月 30 日，OpenAI 在 chat.openai.com 以免费研究预览上线 ChatGPT：GPT-3.5 系列模型经 RLHF 调成对话，能跟进追问、承认错误、反驳错误前提、拒绝不当请求。训练用 Azure AI；Moderation API 与反馈竞赛（API 额度）支撑迭代部署。若多轮对话成为人们使用大模型的默认方式，价值迁向该界面与反馈环。**未披露** ChatGPT 定价、免费是否持续、云排他条款，以及谁留住盈余。Tier 1 空位；幅度仍属 Unknown。

---

# What Changed?

变的是公共入口形态，不是又发一版基座模型。2022 年 11 月 30 日，OpenAI 发布 ChatGPT 公告。

- ChatGPT：免费研究预览对话模型，入口 chat.openai.com。
- 定位为 InstructGPT 同系；在 GPT-3.5 系列上用 RLHF 塑造对话行为。
- OpenAI 自述强项：跟进、认错、挑战错误前提、拒绝不当请求；同时列出失效模式（幻觉、冗长、对提示措辞敏感、安全问题）。
- 训练伙伴点名 Azure AI；提及 Moderation API；反馈竞赛奖励 API 额度。
- T0 公告未给出 ChatGPT 订阅价或广告模式。

---

# Why It Matters

问题只有一个：单轮指令与非对话工具，对不上人们怎么求助。用户要多轮上下文、纠错与拒绝行为。

ChatGPT 的解法：公开对话表面。

1. **交互模式上移** — 从单轮补全，转向对话。
2. **入口即时且免费** — 浏览器研究预览，不只给开发者的 API。
3. **改进走迭代** — 审核与用户反馈进入部署环。

使用是否粘住、并转成可持久付费产品面，仍属 Unknown。

---

# Where Value Is Moving

Simple value flow (five nodes):

```text
[单轮指令跟随 / 非对话工具]
        ↓
[经 RLHF 调优的 GPT-3.5 系列对话模型]
        ↓
[免费浏览器聊天界面]
        ↓
[审核 + 反馈 / 迭代部署]
        ↓
[用户与相邻 API 表面]
```

**Reading.** 若采用站得住，价值迁向免费、可及的对话式 RLHF 界面，以及运营方的反馈环。OpenAI 运营模型与界面，但 T0 上 ChatGPT 免费、无已披露计价留存机制，故 Tier 1 空位。经济利润份额，仍属 Unknown。

---

# Potential Beneficiaries

下列公司仅为进一步研究而点名。**不构成推荐。不按吸引力排序。无目标价。**

| Company | Reason | Confidence | Unknown |
| --- | --- | --- | --- |
| **— (Tier 1 vacant)** | 免费预览；无已披露可持久计价留存机制 | — | 付费转化或切换成本日后是否填上 Tier 1 |
| **OpenAI** | 训练并运营 ChatGPT、界面、Moderation API、反馈环；SRE-115 Tier 2 | Medium | 价格/广告；上市；用户数；服务成本；免费是否持续 |
| **— (Azure AI provider)** | 点名为训练基础设施，来源无公司主体或条款 | — | 产品名以外的身份；商业条款；盈余份额 |
| **— (end users / contest redeemers)** | 被邀请使用并反馈；API 额度作奖品 | — | 盈余是否落在用户侧 |

---

# Reality Check

**Current thesis.** 对话式 RLHF 界面若成大模型默认交互，价值迁向该表面与反馈环——但 T0 上 OpenAI 仅为 Tier 2，Tier 1 空位，抓取幅度仍属 Unknown。

**What would prove us wrong?**

- ChatGPT 下线且无替代对话表面。
- 盈余主要落在基础设施层。
- 对话未能成为默认 LLM 交互方式。
- 出现零留存、可互换的托管聊天。

**Next validation point.** 下一验证看：免费预览结束或付费 ChatGPT 产品；定价披露；模型更新与安全结果；以及能澄清基础设施盈余的 Azure 商业条款。

---

# Bottom Line

方向清楚：ChatGPT 卖的是大模型的公共对话入口，外加迭代反馈环，不是“又一个模型 checkpoint”。产品免费且未定价时，OpenAI 是最清晰的具名运营方，但仅 Tier 2。T0 上 Tier 1 空位；盈余仍属 Unknown。

---

# Sources

- **Parent research:** SRE-115 — ChatGPT (`reports/SRE-115-ChatGPT.md`)
- **Underlying official source (P0 only, via SRE-115):** OpenAI Blog，2022 年 11 月 30 日 — “ChatGPT: Optimizing Language Models for Dialogue”

未使用其他来源。未做新研究。每条陈述均可追溯至 SRE-115。内容对应 Decision Brief DB-006。
