# SRE-110 — Cloudflare

| Field | Value |
| --- | --- |
| Subject | Cloudflare performance and security service (public beta launch) |
| T0 (frozen date) | 2010-09-27 |
| Industry domain | Cloud Infrastructure / Web Performance and Security |
| T0 source | Cloudflare, Inc., official press release, 2010-09-27 — “Cloudflare Launches at TechCrunch Disrupt”, subhead “New Service brings the performance and security tools from the Internet giants to the rest of the web” (`cloudflare.com/press/press-releases/2010/cloudflare-launches-at-techcrunch-disrupt/`) |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1 (repository; sprint attribution / confidence / traceability rules applied as stated for this run), `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0 |

Single-source report. All content derives from the one P0 document above, cited throughout as **[Cloudflare, press release, 2010-09-27]**. Nothing published after T0 is used. Third-party conference coverage is not used.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

Cloudflare, Inc. announced the public beta of its performance and security service at TechCrunch Disrupt on September 27, 2010 [facts 1–3]. CEO Matthew Prince states the product addresses two problems for anyone with a website — making sites fast and making them secure — by bringing performance and security tools previously available only to Internet giants to anyone with a website [fact 4]. The service is provisioned by a change to domain settings, works on any platform without hardware, software, or code changes, and leaves the existing hosting provider and infrastructure stack in place; setup typically takes less than five minutes [facts 5–8]. Cloudflare states that once on its network, sites see average gains of 30% better page load times, 60% less bandwidth usage, and 65% less server load; the core service is free, with SSL, realtime reports, and advanced security available from $20/month [facts 9–11]. Private beta since June has powered more than 1,000 websites and more than 50 million page views [facts 12, 13]. *(Evidence-supported)*

**Key conclusion.** Value migrates from enterprise-only or DIY website performance and security stacks toward a shared network intermediary that any website can join by changing domain settings — while origin hosting remains with the customer’s existing provider. *(Reasoned Inference, Medium)*

**Tier 1 is vacant; magnitude is not established.** No durable retention mechanism is disclosed that would let Cloudflare keep a disproportionate share of economic profit: the core service is free [fact 10], provisioning is a domain-settings change that the source presents as simple [facts 5–8], and no contract term, switching cost, or exclusive standard is stated [see the §2 Unknown list]. Cloudflare is positioned as a Tier 2 direct beneficiary because it operates the network and sells paid add-ons from $20/month [facts 3, 10, 11], but share retained is **Unknown**. *(Reasoned Inference for vacant Tier 1 and Tier 2 designation, Medium; Unknown for the share)*

**Top companies for further research — not recommendations, not ranked by attractiveness.**

- **Cloudflare, Inc.** — operates the performance and security network and monetizes add-ons. Tier 2; share retained Unknown. Listing status not established by the T0 source. *(Reasoned Inference, Medium)*

Market blind spot: treating the launch as a narrow speed-up or free CDN point product while underweighting the structural move — performance and security combined as a network-layer service in front of unchanged origin hosting. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in the T0 source without interpretation. Performance and usage claims are recorded as claims Cloudflare made. Future-tense content appears only where the source states it, attributed to Cloudflare.

1. The press release is titled “Cloudflare Launches at TechCrunch Disrupt” and dated September 27, 2010, with subhead stating the new service brings the performance and security tools from the Internet giants to the rest of the web. [Cloudflare, press release, 2010-09-27]
2. The release is datelined San Francisco, CA, September 27, 2010. [Cloudflare, press release, 2010-09-27]
3. Cloudflare, Inc. announced the launch of the public beta of its performance and security service (`www.cloudflare.com` / `@cloudflare`) at the TechCrunch Disrupt conference. [Cloudflare, press release, 2010-09-27]
4. CEO and co-founder Matthew Prince is quoted: “Cloudflare addresses two real problems everyone with a website has: making sure it’s fast and making sure it’s secure. By bringing the performance and security tools previously available only to the Internet giants to anyone with a website, Cloudflare is disrupting the very way in which content is made available online.” [Cloudflare, press release, 2010-09-27]
5. Cloudflare states the service is provisioned through a simple change to a website’s domain settings. [Cloudflare, press release, 2010-09-27]
6. Cloudflare states it works on any platform, regardless of the underlying infrastructure. [Cloudflare, press release, 2010-09-27]
7. Cloudflare states it does not require any hardware, software, or changes to existing code. [Cloudflare, press release, 2010-09-27]
8. Cloudflare states websites keep their existing hosting provider and infrastructure stack, and that setup typically takes less than 5 minutes. [Cloudflare, press release, 2010-09-27]
9. Cloudflare states that once on the Cloudflare network, sites see an average 30% improvement in page load times, a 60% decrease in bandwidth usage, and a 65% decrease in load on their server. [Cloudflare, press release, 2010-09-27]
10. Cloudflare states its core service is free. [Cloudflare, press release, 2010-09-27]
11. Cloudflare states that additional services, such as SSL, realtime reports, and advanced security, are available for a fee beginning at $20/month. [Cloudflare, press release, 2010-09-27]
12. Cloudflare states it has been running a private beta since June and currently powers more than 1,000 websites. [Cloudflare, press release, 2010-09-27]
13. Cloudflare states its network has served more than 50 million page views since the beginning of the private beta. [Cloudflare, press release, 2010-09-27]
14. Co-founder and head of user experience Michelle Zatlyn is quoted stating users already say they can’t live without the service, and that the team is most proud of building a service anyone with a website can use, regardless of technical ability. [Cloudflare, press release, 2010-09-27]
15. Cloudflare states its founding team originally started Project Honey Pot, described as the largest open source community tracking online fraud and abuse. [Cloudflare, press release, 2010-09-27]
16. Cloudflare states it was selected from over 1,000 promising startups that applied to launch on-stage at TechCrunch Disrupt. [Cloudflare, press release, 2010-09-27]
17. Cloudflare states it is based in Palo Alto, California, and is backed by leading security and networking investors from Venrock and Pelion Venture Partners. [Cloudflare, press release, 2010-09-27]

**Not stated in the T0 source, and therefore Unknown:** any service level agreement; any methodology, sample, or measurement window behind the 30%/60%/65% averages; network topology, number or location of points of presence, or peering arrangements; whether the service is a CDN, reverse proxy, or other technical class beyond “performance and security service” / “Cloudflare network”; any competitor or alternative vendor by name; any cost of delivering the free core or paid add-ons; any customer contract term, commitment, or switching cost; any patent, proprietary protocol, or exclusive standard; public-listing or ticker status for Cloudflare or any named investor; revenue, margin, or paid-conversion rate; and any statement that Project Honey Pot data is a product feature of the service. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** Website operators need sites that are both fast and secure. Prince states these as “two real problems everyone with a website has,” and frames prior solutions as performance and security tools “previously available only to the Internet giants” [fact 4]. Zatlyn adds that the product is meant for users “regardless of technical ability” [fact 14]. *(Evidence-supported)*

Two components are distinguishable:

- **Performance (speed).** Quantified by Cloudflare as average page-load improvement and reduced bandwidth and origin-server load once on the network [fact 9]. *(Evidence-supported that the source makes these claims)*
- **Security.** Named as a co-equal problem and as a paid “advanced security” add-on; founding-team history with Project Honey Pot is disclosed as background [facts 4, 11, 15]. What specific threats the free core stops is not specified. *(Evidence-supported for the framing; Unknown for scope)*

**Who is worse off without it:** operators of ordinary websites who lacked Internet-giant tooling — the audience the subhead and Prince quote name [facts 1, 4, 14]. How many such operators existed, what they previously spent, or how often speed/security failures blocked them is not disclosed. Magnitude of the customer problem is **Unknown**.

---

## 4. Industry Change

**The concrete change.** A performance and security service enters public beta as a network that websites join by changing domain settings, without replacing hosting or changing code, with a free core and paid add-ons [facts 3, 5–8, 10, 11]. *(Evidence-supported)*

**Which system requirement shifts.**

1. **From Internet-giant-only tooling to broadly available network service.** Prince states tools previously limited to Internet giants are brought to anyone with a website [fact 4]. *(Evidence-supported as Cloudflare’s claim)*
2. **From infrastructure/code changes to domain-settings provisioning.** No hardware, software, or code changes; existing hosting retained [facts 5–8]. *(Evidence-supported)*
3. **From bundled or enterprise purchase of speed and security as separate hard problems to a combined free + paid network offer.** Core free; SSL, reports, and advanced security from $20/month [facts 10, 11]. *(Evidence-supported)*

**Why the prior solution becomes insufficient.** Cloudflare does not claim sites cannot be fast or secure without it; it claims the prior distribution of tools left non-giant operators without equivalent access [fact 4]. For operators without technical ability, a less-than-five-minute domain change is presented as the reachable path [facts 8, 14]. *(Reasoned Inference)*

**Structural or cyclical.** Structural if adoption scales: content availability is mediated through Cloudflare’s network while origin stacks stay put [facts 4, 5, 8]. At T0 this is a public beta after a private beta of ~1,000 sites [facts 3, 12], so durability of the shift is not yet established. *(Reasoned Inference)*

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows after §4. No winner is identified here.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Origin website hosting and infrastructure stack | Continues to host sites; customers keep existing provider [fact 8] | No | No | → | Reasoned Inference |
| DIY / Internet-giant-only performance and security tooling | Prior path Prince contrasts with Cloudflare’s offer [fact 4] | Yes | Yes | ↓ | Reasoned Inference |
| Shared performance and security network (Cloudflare) | Delivers stated speed and security service after domain-settings join [facts 3–5, 9] | Unknown | No | ↑ | Reasoned Inference |
| Domain / DNS provisioning path | Mechanism that places a site on the network [fact 5] | No | No | ↑ | Reasoned Inference |
| Paid add-on services (SSL, realtime reports, advanced security) | Monetized features beginning at $20/month [fact 11] | Unknown | No | ↑ | Reasoned Inference |
| Website operators (any technical ability) | Buyers/users of free core and optional paid features [facts 4, 10, 14] | No | No | ↑ | Hypothesis |
| Online fraud / abuse intelligence communities | Project Honey Pot named as founding-team origin [fact 15] | Unknown | Unknown | Unknown | Unknown |
| Security and networking venture capital | Venrock and Pelion named as backers [fact 17] | Unknown | No | Unknown | Unknown |

**Layers with no participant named.** Competing CDN, WAF, or DNS vendors are not named. Physical network, data-center, or transit suppliers are not named. Per `RESEARCH_REPORT_STANDARD.md` §5, these layers are not invented; only layers the source establishes are mapped. No competitor is inferred.

**Reading notes.**

- Exactly one layer is `Bottleneck: Yes` — DIY / Internet-giant-only performance and security tooling — as `Reasoned Inference` from Prince’s contrast that such tools were previously available only to Internet giants [fact 4]. The Cloudflare network is the planned alternative path (`Bottleneck: No`); whether network capacity is scarce is **Unknown**.
- Origin hosting is `→` because the source states websites keep their existing hosting provider [fact 8].
- Website-operator surplus is `↑` only as `Hypothesis`: free core and stated load/bandwidth reductions [facts 9, 10] may accrue to buyers.

No winner is identified in this section.

---

## 6. Value Migration

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| DIY / Internet-giant-only performance and security tooling | Shared performance and security network (Cloudflare) | Facts 1, 4, 3, 9 |
| Performance/security requiring hardware, software, or code changes | Domain-settings provisioning onto a network in front of unchanged origin hosting | Facts 5–8 |
| Undifferentiated or unavailable security/reporting for ordinary sites | Paid add-on layer (SSL, realtime reports, advanced security) | Fact 11 |
| Operator spend or effort on origin bandwidth and server load | Network-mediated reduction of bandwidth usage and origin load (as claimed) | Fact 9 |

**Why the migration follows.**

1. Cloudflare states ordinary website operators lacked Internet-giant performance and security tools [fact 4]. *(Evidence-supported as claim)*
2. It offers a network join via domain settings without replacing hosting or changing code [facts 5–8]. *(Evidence-supported)*
3. It claims measurable speed and load effects once on the network, with a free core and paid extras [facts 9–11]. *(Evidence-supported as claims)*
4. Therefore value migrates toward a shared network intermediary for performance and security, and away from giant-only or DIY stacks — if the claimed effects hold and adoption scales beyond private beta. *(Reasoned Inference)*

**Links not established.** Magnitude of profit migration is **Unknown** (core is free; costs undisclosed). Whether “disrupting the very way in which content is made available online” [fact 4] occurs at industry scale is forward-looking rhetoric, not verified at T0. *(Unknown)*

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* Direction is well supported by the problem/remedy structure in the release. Against that: free core, vendor performance averages without methodology, early public beta, and no named competitor. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, undisclosed load-bearing elements cap confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture. Stated page-load, bandwidth, and server-load improvements are *creation* claims [fact 9]; the question is who retains surplus. Every conclusion below carries exactly one evidence label and one confidence level.

**Step 1 — Industry bottleneck.** Access to Internet-giant-class website performance and security tooling for ordinary website operators [fact 4]. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** At T0, the source does not establish a narrowly held scarce capability with a durable enclosure. The service is joined by a simple domain-settings change, requires no proprietary customer hardware, and offers a free core [facts 5–8, 10]. Network operation and paid add-ons are Cloudflare’s, but scarcity of the network itself is **Unknown**. *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As in §6: toward Cloudflare’s shared performance/security network; away from giant-only / DIY tooling.

**Step 4 — Economic profit capture.** Core is free [fact 10]; paid features begin at $20/month [fact 11]; delivery cost and conversion are undisclosed. Magnitude of capture is **Unknown**. *(Unknown, Low)*

**Step 5 — Ranking.**

### Tier 1 — Direct Value Capturer: vacant at T0

**Vacant.** *(Reasoned Inference, Medium)*

No participant qualifies. Tier 1 requires a named, durable retention mechanism. Applying `VALUE_CAPTURE_METHODOLOGY.md` §4 Step 2:

- The core service is free [fact 10], so the primary product path does not, on these facts, extract payment.
- Provisioning is a domain-settings change presented as typically under five minutes [facts 5, 8]; no switching cost, lock-in term, or exclusive standard is disclosed.
- Performance claims are averages without methodology [fact 9]; they do not establish pricing power.
- No installed-base exclusivity, patent, or regulatory barrier is named [see the §2 Unknown list].

Recording a Tier 1 participant here would require a retention mechanism the source does not provide. Under `VALUE_CAPTURE_METHODOLOGY.md` §3, vacant Tier 1 is a valid finding: on this evidence surplus may accrue to website operators via the free core, or be competed away if similar network services appear. *(Reasoned Inference, Medium)*

### Tier 2 — Direct Beneficiary

**Cloudflare, Inc.** *(Reasoned Inference, Medium)*

First-order economics can improve: Cloudflare operates the performance and security network [facts 3, 9], already serves more than 1,000 sites and 50 million page views in private beta [facts 12, 13], and sells SSL, realtime reports, and advanced security beginning at $20/month [fact 11].

Retention is partial, which is why this is Tier 2 rather than Tier 1. The mechanisms nameable from the source are (1) network intermediation once domain settings point at Cloudflare [fact 5] and (2) paid feature upsell adjacent to a free core [facts 10, 11]. Against them: free core, simple reversible-looking join path, and no disclosed contract or multi-homing friction. Whether Cloudflare retains a disproportionate share is **Unknown**. *(Reasoned Inference, Medium)*

### Tier 3 — Indirect Beneficiary

**None assigned.** Venrock and Pelion are named only as investors [fact 17], not as operating beneficiaries with a second-order product path. Project Honey Pot is founding-team history [fact 15], not a capture path. *(Unknown, Low)*

### Negatively affected / displaced (not a beneficiary tier)

**DIY / Internet-giant-only performance and security tooling** *(Reasoned Inference, Low)* Functionally displaced for operators who adopt Cloudflare [fact 4]. No vendor of that tooling is named. Which companies, if any, lose revenue is **Unknown**.

### Tier 4 — Potential Beneficiary

- **Website operators** *(Hypothesis, Low)* Free core plus claimed bandwidth and server-load reductions [facts 9, 10] may mean surplus accrues to buyers. Not excluded; `VALUE_CAPTURE_METHODOLOGY.md` §4 Step 4 requires considering buyers.
- **Venrock / Pelion Venture Partners** *(Unknown, Low)* Named as backers [fact 17]; no economics disclosed.
- **Unnamed alternative network performance/security providers** *(Hypothesis, Low)* If the model is replicable via domain-settings mediation and a free tier, competitors could contest Cloudflare’s Tier 2 position. No competitor is named.

**Alternative explanations.** That paid add-ons become the real product and free core is customer acquisition — possible [fact 11] *(Hypothesis, Low)*. That performance averages do not hold outside private beta — possible [facts 9, 12] *(Hypothesis, Low)*. That origin hosts capture bandwidth savings as higher margin rather than customers capturing them — possible but unnamed *(Unknown, Low)*.

---

## 8. Listed Companies

Publicly listed participants named in the T0 source. **Not ranked; not a recommendation; no valuation.**

**Inclusion rule.** Enter only if the T0 source names the entity and that named entity is established by the T0 source as the publicly listed company (not an inferred parent).

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |

**Why this table has zero rows.** The T0 release names Cloudflare, Inc., Venrock, and Pelion Venture Partners [facts 3, 17]. It does not state that any of them is a publicly listed company, and it supplies no ticker or exchange designation. Inferring a later IPO or treating a venture firm as a listed issuer would violate the no-inferred-participants rule and the §8 inclusion rule used in prior compliant reports.

**Named in the source but excluded from this table.**

- **Cloudflare, Inc.** [facts 3, 17] — named operator; listing status not established. Capture path recorded in §7 as Tier 2, Medium.
- **Venrock** [fact 17] — named investor; listing status not established; no product capture path.
- **Pelion Venture Partners** [fact 17] — named investor; same exclusion.
- **TechCrunch Disrupt** [facts 3, 16] — conference context, not a capture participant.

**Layers with no row.** All §5 operating layers lack a listed participant established by the T0 source. No participant is inferred into them.

**Displaced participants.** DIY / Internet-giant-only tooling is marked `↓` in §5 [fact 4]. The source names no company in that layer, so no displaced listed company is entered. *(Unknown)*

---

## 9. Risks

### Assumptions that could fail

1. **Stated average performance and load effects hold beyond private beta** — supports §§3–6. Figures are Cloudflare averages without methodology [fact 9]. *(Unknown at T0)*
2. **Free core plus $20/month add-ons is an economically viable operator model** — supports Tier 2. Delivery cost and paid conversion are undisclosed [facts 10, 11]. *(Unknown)*
3. **Domain-settings join creates lasting network intermediation rather than temporary trial traffic** — supports migration and Tier 2 mechanism 1 [facts 5, 8, 12]. Ease of join also eases leave. *(Hypothesis)*
4. **Ordinary website operators adopt at scale past ~1,000 private-beta sites** — supports structural claim in §4 [facts 12, 13, 16]. Public beta outcome Unknown. *(Unknown)*
5. **No durable proprietary enclosure emerges that would upgrade Cloudflare to Tier 1** — supports vacant Tier 1. If threat intelligence, network effects, or unpaid switching costs appear later, Tier 1 vacancy could be wrong. *(Hypothesis)*
6. **Origin hosting remains economically unaffected (`→`)** — supports §5. If hosts lose bandwidth revenue or gain margin from lower load, the hosting layer’s direction changes [facts 8, 9]. *(Unknown)*

### What would weaken the thesis

- Realized speed/bandwidth/load gains materially below the stated averages.
- Paid add-on attachment remaining negligible while free core dominates usage.
- Easy multi-homing or churn after domain-settings join, so intermediation does not stick.
- Similar free+paid network services appearing and competing away Cloudflare’s Tier 2 position.

### What would invalidate the thesis

- **Website operators remaining on DIY / giant-only tooling at scale**, so the migration in §6 does not occur.
- **Economic profit from the model accruing primarily to an unnamed infrastructure or transit layer**, such that Cloudflare is a pass-through rather than a Tier 2 beneficiary.
- **The free core proving unsustainable and being withdrawn without a retaining paid substitute**, collapsing both buyer surplus and operator monetization paths.
- **A single named competitor establishing exclusive control of the ordinary-site performance/security path**, replacing vacant Tier 1 / Cloudflare Tier 2 with a different capture map.

Weakening and invalidating conditions are kept separate deliberately: the first set reduces the size of the conclusion; the last set replaces it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | Public-beta site count and page-view growth vs private-beta baselines | Cloudflare official announcements and blog/docs | 2–8 quarters | Assumption 4 unresolved |
| 2 | Independent or customer-reported page-load / bandwidth / origin-load results vs stated averages | Customer disclosures; technical publications citing vendor or measured results | 1–4 quarters | Assumption 1 unresolved |
| 3 | Persistence of free core and of paid add-on menu/pricing from $20/month | Cloudflare official pricing and product pages | 2–8 quarters | Assumption 2 / free-core path untested |
| 4 | Disclosure of paid conversion, revenue, or ARPU for add-ons | Cloudflare official announcements or (if later public) filings | 4–12 quarters | Magnitude of capture stays Unknown |
| 5 | Evidence of switching costs, multi-year contracts, or multi-homing friction | Cloudflare official terms and product documentation | 2–8 quarters | Assumption 3 / Tier 1 vacancy untested |
| 6 | Named competitors offering similar domain-settings performance+security networks | Competitor official announcements | 2–12 quarters | Contestable Tier 2 path untested |
| 7 | Product expansion beyond free performance/security into programmable or broader edge services | Cloudflare official announcements | 4–28 quarters | “Content availability” disruption claim remains launch rhetoric only |
| 8 | Any listing / IPO disclosure establishing Cloudflare as a public company | Official offering documents / exchange notices | Any time | §8 remains empty on listing grounds |
| 9 | Origin-host or bandwidth-provider commentary on traffic mix with Cloudflare | Hosting-provider official statements | 4–12 quarters | Assumption 6 unresolved |
| 10 | Security-outcome claims with defined threat classes for free vs paid tiers | Cloudflare official product documentation | 2–8 quarters | Security half of customer problem stays underspecified |
| 11 | Withdrawal, gating, or severe limitation of the free core | Cloudflare official announcements | Any time | Invalidating free-core failure path may be active |
| 12 | Customer concentration or “can’t live without” retention metrics beyond anecdote | Cloudflare official metrics disclosures | 4–12 quarters | Zatlyn retention anecdote [fact 14] unverified at scale |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Network capacity scarcity (**Unknown**) | §5 | Signals 1, 6 |
| Website-operator surplus (**Hypothesis**) | §5, §7 Tier 4 | Signals 2, 3, 12 |
| Fraud/abuse intelligence layer (**Unknown**) | §5 | Signal 10 |
| VC backer economics (**Unknown**) | §5, §7 Tier 3 | Signal 4 (indirect) |
| Magnitude of capture (**Unknown**) | §1, §7 Step 4 | Signals 3, 4 |
| Performance-claim verification (**Unknown**) | §9 assumption 1 | Signal 2 |
| Operator model viability (**Unknown**) | §9 assumption 2 | Signals 3, 4, 11 |
| Lasting intermediation (**Hypothesis**) | §9 assumption 3 | Signals 5, 12 |
| Scale beyond private beta (**Unknown**) | §4, §9 assumption 4 | Signal 1 |
| Tier 1 vacancy vs later enclosure (**Hypothesis**) | §7, §9 assumption 5 | Signals 5, 7 |
| Origin-host layer direction (**Unknown**) | §9 assumption 6 | Signal 9 |
| Unnamed competitor contest (**Hypothesis**) | §7 Tier 4 | Signal 6 |
| Listing status for §8 (**Unknown**) | §8 | Signal 8 |
| Customer-problem magnitude (**Unknown**) | §3 | Signals 1, 2, 10 |
| Displaced vendor identity (**Unknown**) | §7, §8 | Signal 6 |

No open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1 (repository version; sprint attribution and confidence rules applied). Single P0 source, T0-locked to 2010-09-27. Contains no investment recommendation, no valuation or securities-price information, and no timing signal. Prices appear only as facts stated by the source. All Unknown items remain Unknown.*
