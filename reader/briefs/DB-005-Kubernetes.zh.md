# Kubernetes：打开集群控制面，Tier 1 空着

| Field | Value |
| --- | --- |
| Product | Decision Brief DB-005 |
| Parent research | `reports/SRE-111-Kubernetes.md` |
| T0 | 2014-06-10 |
| Reading time | 约 5 分钟 |
| Source | Google 开源 / GCP 博客 |
| Disclaimer | 供长期研究参考。不构成投资建议。不构成买卖或持有任何证券的推荐。 |

---

# Headline

结论先说：Google 宣布 Kubernetes，把容器集群管理做成社区支持的控制面。T0 抓取结论是 Tier 1 空位。

---

# Executive Summary

为什么值得关心？结构变化真实，盈余归属未定。2014 年 6 月 10 日，Google 发布 Kubernetes：开源容器管理器，负责跨集群部署、健康检查、副本与连通，并同步扩大 Google Cloud Platform 上的 Docker 支持。内部用 Omega 级调度；Kubernetes 面向需求更克制的开发者，放在 GitHub，社区支持。若共享集群控制成为跑容器的方式，结构故事成立——但管理器开源，谁拿走盈余未立住。**未披露**许可费、排他控制、“社区”以外的治理，以及竞争编排器结局。抓取幅度，仍属 Unknown。

---

# What Changed?

变的是控制面公开，不是内部调度外泄成封闭产品。2014 年 6 月 10 日，Google 开源 / GCP 博客更新描述新的容器支持。

- Kubernetes：开源容器管理器，覆盖跨集群部署、健康、副本与连通；GitHub 可得；社区支持。
- 语境：Google 内部 Omega 调度经验；许多开发者据称不需要 Google 内部那种规模。
- 同次更新点名相关 GCP 组件：App Engine Managed VM Docker 支持、Compute Engine Docker、cAdvisor。
- Docker 出现在上述产品周边的容器生态中。

---

# Why It Matters

问题只有一个：集群要跑得稳，多数人又用不上 Omega。互联网规模需要高效容器调度；多数开发者要的是：放置容器、保健康、做副本、连起来。

Kubernetes 的解法：把控制面开源发布。

1. **调度接口外移** — 从临时脚本或专有内部系统，转向共享管理器。
2. **支持模型是社区** — T0 未披露 Google 独占产品围栏。
3. **云打包并列** — 点名 GCP Docker 路径，盈余条款未写明。

采用是否跟进，以及日后是否有人把可用 Kubernetes 围起来，仍属 Unknown。

---

# Where Value Is Moving

Simple value flow (five nodes):

```text
[临时或专有容器调度]
        ↓
[按应用脚本与人工集群运维]
        ↓
[开源集群控制面（Kubernetes）]
        ↓
[社区支持 + GitHub 分发]
        ↓
[跑容器的云主机与开发者]
```

**Reading.** 若采用跟进，价值迁向开放、共享的集群控制面。瓶颈层可能是 Kubernetes 本身；因项目开源，稀缺与盈余抓取仍属 Unknown。T0 上 Tier 1 空位。

---

# Potential Beneficiaries

下列公司仅为进一步研究而点名。**不构成推荐。不按吸引力排序。无目标价。**

| Company | Reason | Confidence | Unknown |
| --- | --- | --- | --- |
| **— (Tier 1 vacant)** | 无人被证明控制瓶颈并以持久已披露机制拿走不成比例利润 | — | 日后围栏或托管服务是否填上 Tier 1 |
| **— (Tier 2 vacant)** | T0 未立住具名 Tier 2 抓取方 | — | 实现方与托管服务盈余如何切 |
| **Google** | 宣布并发布 Kubernetes；运营相关 GCP Docker 路径；SRE-111 Tier 4 / 假说 | Low | 依 SRE 纳入规则上市未立住；排他控制；费用 |
| **Docker** | 出现在公告周边容器生态 | Low | 上市未立住；是否吸收编排价值 |
| **— (developers / users)** | 点名受众：“需求更克制” | — | 盈余是否落在用户侧 |

---

# Reality Check

**Current thesis.** 容器集群若标准化到共享开放控制面，结构故事是 Kubernetes——但抓取结论是 Tier 1 空位：盈余可能落在实现方、托管服务或用户，而非单一围栏。

**What would prove us wrong?**

- 一方围住可用 Kubernetes，Tier 1 被填上。
- 无需共享管理器即可满足集群需求。
- Omega 或其他专有调度器成为外部标准。
- 宣称能力未出现在已发布项目中。

**Next validation point.** 下一验证看：外部生产采用方；治理或基金会结构；托管 Kubernetes（GKE 一类）；Docker 吸收编排思路；以及能形成留存的许可或商业条款。

---

# Bottom Line

方向清楚：Kubernetes 卖的是开源发布的集群控制，不是“Google 秘制调度器外泄”。即便无人被点为 Tier 1，行业仍可能被带动。Tier 1 空位是结论，不是简报缺口。费用、治理、谁留住盈余，仍属 Unknown。

---

# Sources

- **Parent research:** SRE-111 — Kubernetes (`reports/SRE-111-Kubernetes.md`)
- **Underlying official source (P0 only, via SRE-111):** Google Open Source Blog / GCP Blog — Eric Brewer，“An update on container support on Google Cloud Platform,” 2014 年 6 月

未使用其他来源。未做新研究。每条陈述均可追溯至 SRE-111。内容对应 Decision Brief DB-005。
