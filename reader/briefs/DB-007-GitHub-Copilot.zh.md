# Copilot：编码辅助进编辑器，Tier 1 空着

| Field | Value |
| --- | --- |
| Product | Decision Brief DB-007 |
| Parent research | `reports/SRE-114-GitHub-Copilot.md` |
| T0 | 2021-06-29 |
| Reading time | 约 5 分钟 |
| Source | GitHub 博客 |
| Disclaimer | 供长期研究参考。不构成投资建议。不构成买卖或持有任何证券的推荐。 |

---

# Headline

结论先说：GitHub Copilot 技术预览把编码辅助做成编辑器内 AI 合成，背后是 OpenAI Codex。T0 上 Tier 1 抓取仍空着。

---

# Executive Summary

为什么值得关心？稀缺点在编辑器内合成栈，不在又一个文档站。2021 年 6 月 29 日，GitHub 宣布 Copilot 技术预览：VS Code 扩展，按编辑器上下文建议代码行与函数，由 OpenAI Codex 驱动。预览免费且限量（顶尖 AI 硬件约束）；GitHub 称若预览成功将推商业产品。若开发者默认用编辑器内合成替代搜索与文档写样板，价值迁向托管的 Copilot + 模型栈。**未披露**商业定价、GitHub 与 OpenAI 分成、排他条款，以及谁留住盈余。Tier 1 空位；幅度仍属 Unknown。

---

# What Changed?

变的是辅助落点，不是又上线一个搜索框。2021 年 6 月 29 日，GitHub 与 Copilot 站点描述该技术预览。

- Copilot：按编辑器内上下文建议代码（行与函数）；定位为 AI pair programmer。
- 由 OpenAI Codex 驱动；以 Visual Studio Code 扩展交付。
- 免费限量技术预览；GitHub 以顶尖 AI 硬件作为可用性约束。
- GitHub 表明：预览成功则推出商业产品。
- 早期接入以数百名工程师表述；更广用户与收入总量未立住。

---

# Why It Matters

问题只有一个：样板与查文档的时间，能否被上下文合成吃掉。开发者耗在样板代码上，也耗在搜文档找模型本可从上下文合成的模式。稀缺体验不是又一个文档站——是编辑器里的建议。

Copilot 的解法：托管、按上下文条件的合成。

1. **帮助进 IDE** — 从搜索与文档，转向行内生成。
2. **模型与产品成对** — OpenAI Codex 撑起 GitHub 产品面。
3. **商业路径有条件** — 现为免费预览；仅当预览成功才付费产品，且受硬件限制。

编辑器内 AI 是否成为默认，以及盈余如何切，仍属 Unknown。

---

# Where Value Is Moving

Simple value flow (five nodes):

```text
[搜索、文档与手工样板]
        ↓
[编辑器上下文作为提示]
        ↓
[托管 Copilot 产品面]
        ↓
[OpenAI Codex 级模型]
        ↓
[开发者、IDE 与 AI 硬件层]
```

**Reading.** 若预览转成商业默认，价值迁向经托管 Copilot + Codex 栈实现的编辑器内 AI 合成。T0 未立住 Tier 1 抓取方；GitHub 与 OpenAI 为 Tier 2，盈余切分仍属 Unknown。硬件商为未点名类别。

---

# Potential Beneficiaries

下列公司仅为进一步研究而点名。**不构成推荐。不按吸引力排序。无目标价。**

| Company | Reason | Confidence | Unknown |
| --- | --- | --- | --- |
| **— (Tier 1 vacant)** | 免费限量预览；商业定价与排他留存未披露 | — | 商业上市是否填上 Tier 1 |
| **GitHub, Inc.** | Copilot 预览与商业路径的产品方；SRE-114 Tier 2 | Medium | 价格；分成；对 OpenAI 排他；上市 |
| **OpenAI** | 提供 Copilot 背后的 Codex 模型；Tier 2 | Medium | 与 GitHub 的商业条款；盈余份额 |
| **— (VS Code publisher)** | 扩展宿主点名为 VS Code；发行方未立为上市受益方 | — | 身份/条款；IDE 经济 |
| **— (AI hardware providers)** | 硬件约束以类别点名，非具体公司 | — | 谁供应；盈余是否在此 |

---

# Reality Check

**Current thesis.** 编码辅助若默认走按上下文的编辑器内合成，价值迁向托管 Copilot + 模型栈——但 T0 上 Tier 1 空位，GitHub/OpenAI 在硬件约束预览下盈余切分仍属 Unknown。

**What would prove us wrong?**

- Copilot 下线且无商业替代。
- 盈余主要落在 GitHub/OpenAI 条款外的未点名硬件或模型层。
- 编辑器内 AI 始终不成默认辅助方式。
- 出现零切换成本、可互换的模型 API。

**Next validation point.** 下一验证看：商业上线与定价；OpenAI–GitHub 条款；IDE 扩至 VS Code 以外；以及独立质量/安全结果。

---

# Bottom Line

方向清楚：Copilot 卖的是托管的编辑器内合成式编码辅助，不是“加强版自动补全”；商业路径仍有条件。T0 无人被点为 Tier 1；GitHub 与 OpenAI 是 Tier 2 结构候选。价格与盈余切分，仍属 Unknown。

---

# Sources

- **Parent research:** SRE-114 — GitHub Copilot (`reports/SRE-114-GitHub-Copilot.md`)
- **Underlying official sources (P0 only, via SRE-114):** GitHub Blog（Nat Friedman）与 copilot.github.com FAQ，2021 年 6 月 29 日

未使用其他来源。未做新研究。每条陈述均可追溯至 SRE-114。内容对应 Decision Brief DB-007。
