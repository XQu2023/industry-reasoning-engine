# SRE-113 — Stripe

| Field | Value |
| --- | --- |
| Subject | Stripe — developer payments platform for accepting credit cards on the web |
| T0 (frozen date) | 2011-09-30 |
| Industry domain | Cloud Infrastructure / Payments |
| T0 source A | Stripe, Inc., official product homepage, archived capture of `https://stripe.com/` dated 2011-10-01 (Internet Archive) — “Payments for developers” |
| T0 source B | Stripe, Inc., official Pricing page (`/help/pricing`), archived 2011-10-01 / 2011-11-01 — “2.9% + 30¢” fee schedule and pricing FAQ |
| T0 source C | Stripe, Inc., official About page (`/about`), archived 2011-11-01 — company description and mission |
| T0 source D | Stripe, Inc., official Documentation index (`/docs`), archived 2011-10-01 — tutorials, API libraries, stripe.js and subscription references |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1 (repository; sprint attribution / confidence / traceability rules applied as stated for this run), `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0, `MISSION.md` |

Four P0 documents, all first-party Stripe.com pages contemporaneous with the September 30, 2011 public launch, cited as **[A]**–**[D]**. Nothing published after T0 is used as evidence, except that archived captures dated days after launch are treated as the official site text as served at public availability. Third-party launch coverage is excluded.

**Source-retrieval note.** Live stripe.com no longer serves the 2011 pages. Texts used here are Internet Archive captures of the official stripe.com host (`id_` raw captures where available). Whether any character-level difference exists versus the pages as first served on 2011-09-30 is **Unknown**; pricing, homepage claims, about copy, and docs structure are consistent across early October–November 2011 captures used below.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

Stripe presented itself as “Payments for developers,” stating it “makes it easy to start accepting credit cards on the web today” without a merchant account or gateway: Stripe “handles everything, including storing cards, subscriptions, and direct payouts to your bank account,” working with financial institutions, and offering stripe.js so cards go to Stripe’s environment and “never hit your servers” [facts 1–6]. An API with wrappers in Ruby, PHP, Python and more is documented alongside forms, payments, subscriptions, and account tutorials [facts 7, 8, 20, 21]. Pricing is stated as 2.9% + 30 cents per successful charge, with no setup, monthly, minimum, validation, or card-storage fees; payouts on a seven-day rolling basis; and a published FAQ covering Amex, international/business cards, failed payments, refunds, and chargebacks [facts 9–18]. About copy states Stripe is a ten-person Palo Alto company making it easier to accept payments on the web, and that enabling transactions is “a problem rooted in code, not finance” [facts 22–25]. *(Evidence-supported)*

**Key conclusion.** Value migrates from merchant-account-plus-gateway stacks (with complex, opaque fee structures) toward a developer-integrated, full-stack payments API and card-vault service priced as a single transparent per-successful-charge fee — if developers adopt the API as the default way to take cards online. *(Reasoned Inference, Medium)*

**Tier 1 is assigned; magnitude is not established.** Stripe occupies the position: it owns the API, stripe.js path, card storage, subscriptions, and payouts, and discloses the take rate [facts 3–6, 9, 10]. Cost to serve, net margin, and exclusivity versus other processors are not disclosed [see the §2 Unknown list]. The position is evidenced; the share of economic profit retained is **Unknown**. *(Reasoned Inference for the position, Medium; Unknown for the share)*

**Top companies for further research — not recommendations, not ranked by attractiveness.**

- **Stripe, Inc.** — operates the payments platform. Tier 1; share retained Unknown. Listing status not established by the T0 sources. *(Reasoned Inference, Medium)*

Market blind spot: treating the launch as a minor developer convenience or “cheaper PayPal clone” while underweighting the structural move — payments as a code-integrated full stack (no merchant account/gateway; cards never on merchant servers) with a single published fee. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in one of the T0 Stripe.com sources without interpretation. Future-tense content appears only where Stripe states it, attributed to Stripe.

**From Source A — homepage**

1. Stripe’s homepage headline states “Payments for developers” and that “Stripe makes it easy to start accepting credit cards on the web today.” [A]
2. Stripe invites users to “Get Started with Stripe” and to “Start accepting payments instantly.” [A]
3. Under “Full-stack payments,” Stripe states: “You don’t need a merchant account or gateway. Stripe handles everything, including storing cards, subscriptions, and direct payouts to your bank account.” [A]
4. Stripe states: “To make it all happen, we work closely with some of the best financial institutions in the world.” [A]
5. Under “Skip the sensitive stuff,” Stripe states stripe.js lets you build your own payment forms “while still avoiding most PCI requirements,” and that “Credit cards go directly to Stripe’s secure environment, and never hit your servers.” [A]
6. Under “An API that gets out of your way,” Stripe states wrappers exist “in Ruby, PHP, Python and more,” and that developers “can get started in minutes,” with embedded example API calls (charges, customers, refunds, invoices). [A]
7. Under “Pricing like it should be,” the homepage states “2.9% + 30 cents per successful charge,” with “No setup fees, no monthly fees, no card storage fees, no hidden costs: you only get charged when you earn money.” [A]
8. Stripe states “Earnings are transferred to your bank account on a 7 day rolling basis.” [A]
9. Under “We’re developers too,” Stripe states its team is “full of developers and entrepreneurs who have been there and seen the problems in this industry firsthand,” and that it is “dedicated to building the best and simplest payment solution for developers.” [A]
10. The homepage footer identifies the copyright holder as “Stripe, Inc.” [A]

**From Source B — Pricing**

11. Stripe’s Pricing page states: “When you charge money with Stripe, you pay a fee of 2.9% + 30¢ per successful charge.” [B]
12. Stripe states it has “no setup fees, no monthly fees, no minimum charges, no validation fees, and no card storage fees,” and “no charge for failed payments.” [B]
13. Stripe states: “You’ll never have to decipher a complex statement, because you know what you’re charged in advance.” [B]
14. Stripe states it automatically subtracts Stripe’s fees before payout; “Each day’s charges are paid seven days later” to the bank account specified on the account page. [B]
15. In Pricing FAQ, Stripe states most other providers charge for things Stripe does not, such as failed payments, American Express cards, international cards, and authorizations, “in addition to monthly fees and other charges,” and that “Stripe has no hidden charges.” [B]
16. Stripe states American Express charges are treated like any other: same payout schedule and the same fee of 2.9% + 30¢. [B]
17. Stripe states there is no surcharge for business or international cards: “2.9% + 30¢.” [B]
18. Stripe states refunds are free, “though the fees from the original charge can’t be returned to you.” [B]
19. Stripe states there is a chargeback fee of $15. [B]

**From Source C — About**

20. Stripe states it is “a ten-person company in Palo Alto, USA” “making it easier to start accepting payments on the web.” [C]
21. Stripe states: “Stripe is a simple, developer-friendly way to accept payments online. We believe that enabling transactions on the web is a problem rooted in code, not finance, and we want to help put more websites in business.” [C]
22. Stripe states: “Complexity and opacity have traditionally been hallmarks of online payment processing. We want to fix that.” [C]
23. Stripe lists team members including Patrick Collison and John Collison as co-starters of Stripe, and states people at Stripe previously helped start Lala, Mockingbird, Auctomatic, Cappuccino, Encyclopedia, and Observer. [C]
24. Stripe states Billy Alvarado co-founded Lala, “which was acquired by Apple in late 2009.” [C]

**From Source D — Documentation**

25. Stripe’s Documentation index lists tutorials for creating a payment form, making a payment from your server, billing users periodically, and the Stripe account, plus references for Stripe API, stripe.js, and Subscription Billing, and API libraries and example projects. [D]
26. Stripe states questions may be directed to Campfire chat or support@stripe.com. [D]

**Not stated in any T0 source used here, and therefore Unknown:** any named competing payments company; any named bank or card-network partner beyond American Express as a card brand in the fee FAQ; Stripe’s cost to serve or margin; any exclusive contract term; service level agreements; geographic availability beyond Non-US Users being a documented help topic in the nav; volume commitments; whether stripe.js avoids *all* PCI obligations; public-listing or ticker status for Stripe or any named firm; and unit volumes or developer counts. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** Website operators — especially developers — need to accept credit cards online without assembling a merchant account and gateway, without taking cards onto their own servers, and without opaque multi-fee pricing. Stripe states complexity and opacity have been hallmarks of online payment processing and positions payments as a code problem [facts 1, 3, 5, 21, 22]. *(Evidence-supported)*

Three components are distinguishable:

- **Integration friction.** No merchant account or gateway; API wrappers and tutorials for forms, charges, subscriptions [facts 3, 6, 25]. *(Evidence-supported)*
- **Security / PCI burden.** Cards go to Stripe and never hit merchant servers; stripe.js avoids most PCI requirements [fact 5]. *(Evidence-supported as Stripe’s claim)*
- **Pricing opacity.** Single published fee versus other providers’ failed-payment, Amex, international, authorization, and monthly fees [facts 7, 11–13, 15–17]. *(Evidence-supported as Stripe’s claim)*

**Who is worse off without it:** developers and websites that want to take cards but are blocked by stack complexity or fee opacity — the audience Stripe names [facts 1, 9, 20, 21]. How many such sites exist and what they previously spent is not disclosed. Magnitude of the customer problem is **Unknown**.

---

## 4. Industry Change

**The concrete change.** Online card acceptance is offered as a developer-facing full-stack API service — storage of cards, subscriptions, payouts, and client-side stripe.js — at a single published per-successful-charge price, without requiring the merchant to obtain a separate merchant account or gateway [facts 1, 3, 5–7, 11]. *(Evidence-supported)*

**Which system requirement shifts.**

1. **From merchant-account + gateway assembly to one full-stack provider.** Stripe states you don’t need a merchant account or gateway [fact 3]. *(Evidence-supported)*
2. **From cards on merchant servers to cards in the processor’s environment.** stripe.js / secure environment claim [fact 5]. *(Evidence-supported)*
3. **From opaque multi-fee schedules to a single published successful-charge fee.** 2.9% + 30¢ and “no hidden costs” [facts 7, 11–13, 15]. *(Evidence-supported)*
4. **From finance-centric procurement to code-centric integration.** “Problem rooted in code, not finance”; API libraries and tutorials [facts 6, 21, 25]. *(Evidence-supported)*

**Why the prior solution becomes insufficient.** Stripe does not claim cards cannot be accepted otherwise; it claims traditional processing is complex and opaque and that developers need a simpler path [facts 9, 22]. *(Reasoned Inference)*

**Structural or cyclical.** Structural if the API becomes the default integration surface: merchants embed Stripe’s stack and fee model rather than negotiating multi-party processor relationships [facts 3, 5, 6]. At T0 this is a live product site for a ten-person company; adoption scale is undisclosed [fact 20]. *(Reasoned Inference)*

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows after §4. No winner is identified here.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Card networks / card brands (e.g. American Express as fee-discussed brand) | Card products referenced in pricing FAQ [facts 16, 17] | Unknown | No | → | Unknown |
| Financial institutions / banking partners | Stripe works closely with “some of the best financial institutions in the world” [fact 4] | Unknown | Unknown | Unknown | Unknown |
| Traditional merchant account + gateway assembly | Prior path Stripe says is unnecessary [fact 3] | No | No | ↓ | Reasoned Inference |
| Opaque multi-fee processor pricing | Prior pricing complexity Stripe contrasts [facts 13, 15] | No | No | ↓ | Reasoned Inference |
| Developer payments API / full-stack processor (Stripe) | Charges, customers, refunds, subscriptions, payouts, stripe.js [facts 1, 3, 5, 6, 25] | Unknown | Yes | ↑ | Reasoned Inference |
| Client-side card capture (stripe.js) | Keeps cards off merchant servers [fact 5] | Unknown | No | ↑ | Reasoned Inference |
| Merchant websites / developers | Integrate API and receive payouts [facts 1, 8, 14, 21] | No | No | ↑ | Hypothesis |
| End cardholders | Pay on merchant sites using cards [facts 1, 5] | No | No | Unknown | Unknown |

**Layers with no participant named.** Financial institutions are acknowledged but unnamed [fact 4]. No competing processor company is named. Per `RESEARCH_REPORT_STANDARD.md` §5, none is inferred.

**Reading notes.**

- Exactly one layer is `Bottleneck: Yes` — the developer payments API / full-stack processor — as `Reasoned Inference`: Stripe presents the API-plus-vault-plus-payouts path as what removes merchant-account/gateway and PCI-on-server requirements [facts 3, 5, 6]. Scarcity is **Unknown**.
- Two layers carry `↓`: traditional merchant-account/gateway assembly and opaque multi-fee pricing [facts 3, 15].
- Banking partners remain fully `Unknown` on scarcity, bottleneck, and direction.

No winner is identified in this section.

---

## 6. Value Migration

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| Traditional merchant account + gateway assembly | Developer payments API / full-stack processor (Stripe) | Facts 3, 6, 25 |
| Cards and PCI burden on merchant servers | Client-side capture to Stripe’s environment (stripe.js) | Fact 5 |
| Opaque multi-fee processor pricing | Single published per-successful-charge fee | Facts 7, 11–13, 15 |
| Finance-centric payment procurement | Code-centric API integration for developers | Facts 6, 21, 22 |

**Why the migration follows.**

1. Stripe states developers need an easier way to accept cards and that traditional processing is complex and opaque [facts 1, 9, 22]. *(Evidence-supported)*
2. It removes merchant account/gateway requirements and keeps cards off merchant servers via stripe.js [facts 3, 5]. *(Evidence-supported)*
3. It publishes a single successful-charge fee and documents APIs for charges, customers, and subscriptions [facts 7, 11, 25]. *(Evidence-supported)*
4. Therefore value migrates toward developer-integrated full-stack payments platforms and away from multi-party merchant-account stacks — if the API becomes the default integration choice. *(Reasoned Inference)*

**Links not established.** Magnitude of profit migration is **Unknown** (fee known; cost unknown). Whether financial-institution partners capture most surplus is **Unknown** [fact 4]. *(Unknown)*

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* Direction is well supported by Stripe’s problem/remedy structure and fee transparency claims. Against that: unnamed bank partners, no named competitor, and undisclosed margins. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, undisclosed load-bearing elements cap confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture. Easier card acceptance is a *creation* claim [facts 1, 3]; the question is who retains surplus. Every conclusion below carries exactly one evidence label and one confidence level.

**Step 1 — Industry bottleneck.** Providing developers a full-stack way to accept cards online without assembling merchant account, gateway, and card-on-server PCI burden, at understandable prices [facts 3, 5, 13, 21, 22]. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** Stripe’s combination of API + stripe.js vault path + subscriptions + bank payouts under one published fee [facts 3, 5, 6, 11]. Whether that combination is narrowly held is **Unknown** (no competitor named). *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As in §6: toward developer full-stack payments APIs; away from merchant-account/gateway stacks and opaque multi-fee pricing.

**Step 4 — Economic profit capture.** Take rate is disclosed (2.9% + 30¢; $15 chargebacks) [facts 11, 19]; cost to serve and margin are not. Magnitude of capture is **Unknown**. *(Unknown, Low)*

**Step 5 — Ranking.**

### Tier 1 — Direct Value Capturer

**Stripe, Inc.** *(Reasoned Inference, Medium)*

Retention mechanism, in three parts:

1. **Owns the integration surface.** Developers call Stripe’s API and use stripe.js; cards and subscriptions live in Stripe’s environment [facts 3, 5, 6, 25]. *(Reasoned Inference, Medium)*
2. **Published fee attached to successful volume.** Monetisation is the per-successful-charge fee (and chargeback fee), subtracted before payout [facts 11, 14, 19]. *(Evidence-supported for the fee structure; Reasoned Inference that this is the capture path, Medium)*
3. **Switching via stored cards, customers, and subscription state on Stripe.** Homepage states Stripe stores cards and handles subscriptions [fact 3]. Durability of lock-in is not proven at T0. *(Reasoned Inference, Low)*

**Counter-evidence recorded.** Stripe works with unnamed financial institutions that may capture network/bank rents [fact 4]; fee could be competed away; “avoiding most PCI requirements” is incomplete avoidance language [fact 5]; company is ten people with undisclosed scale [fact 20]. These keep confidence at Medium and magnitude at Unknown. *(Reasoned Inference, Medium)*

**Magnitude of capture: Unknown.** *(Unknown, Low)*

### Tier 2 — Direct Beneficiary

**Vacant.** *(Reasoned Inference, Medium)* Unnamed financial institutions [fact 4] would be the natural Tier 2 candidates, but no institution is named and no split of the 2.9% + 30¢ is disclosed. Naming a bank would be an inferred participant.

### Tier 3 — Indirect Beneficiary

**None assigned.** No independent software vendor or named merchant is quoted as a beneficiary with a retention path. *(Unknown, Low)*

### Tier 4 — Potential Beneficiary

- **Unnamed financial institutions** *(Unknown, Low)* Acknowledged partners [fact 4]; economics Unknown.
- **American Express (as card brand)** *(Unknown, Low)* Appears only in fee-parity FAQ [fact 16]; no capture path.
- **Merchant developers / websites** *(Hypothesis, Low)* May retain surplus via simpler integration and clearer fees [facts 7, 15, 21].
- **End cardholders** *(Unknown, Low)* No economics disclosed.

**Alternative explanations.** That bank/network partners retain most of the fee — possible *(Hypothesis, Low)*. That competing full-stack APIs erase Stripe’s position — possible; none named *(Hypothesis, Low)*. That merchants remain on gateway stacks — possible *(Unknown, Low)*.

---

## 8. Listed Companies

Publicly listed participants named in the T0 sources. **Not ranked; not a recommendation; no valuation.**

**Inclusion rule.** Enter only if the T0 source names the entity and establishes it as the publicly listed company.

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |

**Why this table has zero rows.** The sources name Stripe, Inc.; American Express (card brand in FAQ); Apple (as acquirer of Lala in a team bio); and prior startups (Lala, Mockingbird, Auctomatic, etc.) [facts 10, 16, 23, 24]. None of the texts states that any named entity is publicly listed or supplies a ticker/exchange. Inferring listing would violate the inclusion rule used in prior compliant reports.

**Named in the sources but excluded from this table.**

- **Stripe, Inc.** [facts 10, 20] — Tier 1 operator in §7; listing not established.
- **American Express** [fact 16] — fee FAQ only; omitted.
- **Apple** [fact 24] — appears only as acquirer of a team member’s prior company; thin thesis omitted.
- **Bridgewater, Lehman Brothers, Nomura, NSA, Ksplice, 280 North, Harvard, MIT, etc.** [fact 23 / About bios] — employment/education context only; omitted.

**Layers with no row.** Financial-institution partners and competing processors remain unattributed.

**Displaced participants.** Merchant-account/gateway assembly and opaque multi-fee pricing are marked `↓` in §5. No company is named in those layers. *(Unknown)*

---

## 9. Risks

### Assumptions that could fail

1. **Developers adopt the API at material scale** — supports §§4–7. No developer count is disclosed [see §2 Unknown list]. *(Unknown at T0)*
2. **2.9% + 30¢ covers costs and leaves economic profit** — supports Tier 1 monetisation [facts 11, 14]. Cost Unknown. *(Unknown)*
3. **Card vault + subscriptions create durable switching costs** — supports Tier 1 mechanism 3 [fact 3]. *(Hypothesis)*
4. **“Avoiding most PCI requirements” remains sufficient for merchant risk tolerance** — supports §4 shift 2 [fact 5]. *(Hypothesis)*
5. **Unnamed financial-institution partners do not capture the scarce rent** — supports Stripe vs bank Tier placement [fact 4]. *(Unknown)*
6. **Transparent single fee remains differentiating** — supports migration from opaque pricing [facts 13, 15]. Competitors could match. *(Hypothesis)*

### What would weaken the thesis

- Adoption remaining niche among hobby projects.
- Fee compression without cost reduction, eliminating retained surplus.
- Banks or networks forcing Stripe into pass-through economics.
- Merchants continuing to prefer traditional gateway stacks for compliance or brand reasons.

### What would invalidate the thesis

- **Stripe failing to operate as a full-stack path** (still requiring merchants to obtain separate merchant accounts/gateways), contradicting fact 3.
- **Economic profit from the fee accruing primarily to unnamed financial institutions**, such that Stripe is a thin software veneer.
- **A portable standard making processor APIs interchangeable with no vault/subscription lock-in**, removing retention.
- **Developers rejecting API-integrated card acceptance**, so the migration in §6 does not occur.

Weakening and invalidating conditions are kept separate deliberately: the first set reduces the size of the conclusion; the last set replaces it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | Disclosure of merchant/developer counts or payment volume | Stripe official blog/docs or announcements | 2–8 quarters | Assumption 1 unresolved |
| 2 | Pricing changes vs 2.9% + 30¢ / $15 chargeback | Stripe official Pricing page | 1–4 quarters | Fee differentiation path untested |
| 3 | Named bank, network, or sponsor-bank partners | Stripe official announcements | 2–8 quarters | Assumption 5 / Tier 2 vacancy untested |
| 4 | Geographic expansion beyond initial Non-US help posture | Stripe official docs (“Non-US Users”) and announcements | 2–12 quarters | Reach of platform Unknown |
| 5 | Competing developer full-stack payment APIs with similar no-merchant-account claims | Competitor official sites/announcements | 2–12 quarters | Bottleneck uniqueness untested |
| 6 | PCI / security documentation updates clarifying merchant obligations | Stripe official Security/SSL/docs | 1–4 quarters | Assumption 4 unresolved |
| 7 | Subscription billing adoption metrics or product expansion | Stripe official docs/announcements | 2–8 quarters | Mechanism 3 untested at scale |
| 8 | Any disclosure of gross margin or payment economics | Stripe official announcements or (if later public) filings | 4–12 quarters | Magnitude of capture stays Unknown |
| 9 | Chargeback / fraud loss disclosures | Stripe official help/announcements | 2–8 quarters | $15 fee adequacy Unknown |
| 10 | Any listing / IPO disclosure establishing Stripe as public | Official offering documents / exchange notices | Any time | §8 remains empty on listing grounds |
| 11 | Merchant migration case studies from gateway stacks to Stripe | Stripe and merchant official posts | 2–8 quarters | Migration verification thin |
| 12 | API library / language expansion beyond Ruby, PHP, Python | Stripe official docs | 2–8 quarters | Developer-reach claim static |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Card-network layer direction (**Unknown**) | §5 | Signals 3, 5 |
| Financial-institution economics (**Unknown**) | §5, §7 Tier 2 vacant / Tier 4 | Signals 3, 8 |
| Merchant/developer surplus (**Hypothesis**) | §5, §7 Tier 4 | Signals 1, 2, 11 |
| End-cardholder effects (**Unknown**) | §5 | Signal 11 (indirect) |
| Magnitude of capture / margin (**Unknown**) | §1, §7 Step 4 | Signals 2, 8 |
| Adoption scale (**Unknown**) | §4, §9 assumption 1 | Signals 1, 7, 11 |
| Fee viability (**Unknown**) | §9 assumption 2 | Signals 2, 8, 9 |
| Vault/subscription lock-in (**Hypothesis**) | §9 assumption 3 | Signals 7, 11 |
| PCI claim adequacy (**Hypothesis**) | §9 assumption 4 | Signal 6 |
| Fee differentiation (**Hypothesis**) | §9 assumption 6 | Signals 2, 5 |
| Listing status for §8 (**Unknown**) | §8 | Signal 10 |
| Displaced processor identity (**Unknown**) | §5, §8 | Signal 5 |
| Customer-problem magnitude (**Unknown**) | §3 | Signals 1, 11 |

No open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1 (repository version; sprint attribution and confidence rules applied) and `MISSION.md`. Four P0 Stripe.com sources, T0-locked to 2011-09-30 public launch (archived official pages). Contains no investment recommendation, no valuation or securities-price information, and no timing signal. Fees appear only as facts stated by Stripe. All Unknown items remain Unknown.*
