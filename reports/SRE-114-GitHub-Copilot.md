# SRE-114 — GitHub Copilot

| Field | Value |
| --- | --- |
| Subject | GitHub Copilot — AI pair programmer technical preview |
| T0 (frozen date) | 2021-06-29 |
| Industry domain | Developer Tools / AI-assisted software development |
| T0 source A | GitHub Blog — Nat Friedman, “Introducing GitHub Copilot: your AI pair programmer”, June 29, 2021 (`github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/`; Internet Archive capture `20210629143307`) |
| T0 source B | GitHub Copilot product page / FAQ — `https://copilot.github.com/`, June 29, 2021 (Internet Archive capture `20210629142841`) |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1 (repository; sprint attribution / confidence / traceability rules applied as stated for this run), `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0, `MISSION.md` |

Two P0 documents, both first-party GitHub properties published on T0, cited as **[A]** and **[B]**. Nothing published after T0 is used as evidence. Third-party coverage and later OpenAI Codex API announcements are excluded.

**Source-retrieval note.** Live pages may have been edited after T0. Facts below are taken from Internet Archive captures of the official GitHub Blog post and `copilot.github.com` dated 2021-06-29. Whether any character-level difference exists versus the pages as first served that day is **Unknown**; the retrieved bodies are used as the official T0 text.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

GitHub launched a technical preview of GitHub Copilot, an “AI pair programmer” that draws context from the code a developer is working on and suggests whole lines or entire functions inside the editor [facts 1–3, 11]. GitHub states Copilot was developed in collaboration with OpenAI and is powered by OpenAI Codex, which GitHub describes as more capable than GPT-3 at code generation because of denser public source-code training data [facts 6, 7, 19, 20]. The preview is a Visual Studio Code extension (also usable with GitHub Codespaces), works especially well for Python, JavaScript, TypeScript, Ruby, and Go, sends editor context to a GitHub Copilot service that uses Codex, and is offered free to a limited number of testers because GitHub states it requires state-of-the-art AI hardware [facts 8, 13, 14, 20, 36, 39]. GitHub states that if the preview is successful its plan is to build a commercial version, and that when it launches a commercial product it will make it available as broadly as possible [facts 37, 38]. *(Evidence-supported)*

**Key conclusion.** Value migrates from search-and-docs / manual boilerplate coding toward an in-editor AI synthesis service (GitHub Copilot) powered by a Codex-class model — if developers adopt the preview path and a commercial product follows. *(Reasoned Inference, Medium)*

**Tier 1 is vacant; magnitude is not established.** GitHub operates the Copilot product and service and states a commercial-product plan; OpenAI creates the Codex system that powers suggestions [facts 6, 19, 20, 37, 38]. No commercial price, exclusive control term, switching-cost contract, or disclosed profit split appears at T0 [see the §2 Unknown list]. Under `VALUE_CAPTURE_METHODOLOGY.md`, vacant Tier 1 is a valid finding. Share of economic profit retained by any party is **Unknown**. *(Reasoned Inference for vacancy, Medium; Unknown for the share)*

**Top companies for further research — not recommendations, not ranked by attractiveness.**

- **GitHub, Inc.** — launches and operates GitHub Copilot; Tier 2 candidate in §7. Listing status not established by the T0 sources. *(Reasoned Inference, Medium)*
- **OpenAI** — creates OpenAI Codex that powers Copilot; collaborator named throughout. Capture economics Unknown. Listing status not established. *(Hypothesis / Unknown on capture; see §§7–8)*

Market blind spot: treating the news as a Visual Studio Code autocomplete novelty while underweighting the structural claim — context-conditioned code synthesis via a hosted Copilot service and OpenAI Codex, with a stated path to a commercial product constrained by AI hardware. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in one of the T0 GitHub sources without interpretation. Future-tense content appears only where GitHub states it, attributed to GitHub.

**From Source A — GitHub Blog (2021-06-29)**

1. The post is titled “Introducing GitHub Copilot: your AI pair programmer,” dated June 29, 2021, and attributed to Nat Friedman on the GitHub Blog. [A]
2. GitHub states it is launching a technical preview of GitHub Copilot, “a new AI pair programmer that helps you write better code.” [A]
3. GitHub states GitHub Copilot “draws context from the code you’re working on, suggesting whole lines or entire functions.” [A]
4. GitHub states it helps you “quickly discover alternative ways to solve problems, write tests, and explore new APIs without having to tediously tailor a search for answers on the internet.” [A]
5. GitHub states that as you type, GitHub Copilot “adapts to the way you write code—to help you complete your work faster.” [A]
6. GitHub states GitHub Copilot was “Developed in collaboration with OpenAI” and “is powered by OpenAI Codex, a new AI system created by OpenAI.” [A]
7. GitHub states OpenAI Codex “has broad knowledge of how people use code and is significantly more capable than GPT-3 in code generation, in part, because it was trained on a data set that includes a much larger concentration of public source code.” [A]
8. GitHub states GitHub Copilot “works with a broad set of frameworks and languages, but this technical preview works especially well for Python, JavaScript, TypeScript, Ruby and Go.” [A]
9. GitHub points readers to the GitHub Copilot page and states “The number of spots for the technical preview are limited,” inviting sign-up. [A]
10. The blog footer identifies “© 2021 GitHub, Inc.” [A]

**From Source B — copilot.github.com (2021-06-29)**

11. The page presents GitHub Copilot under the headline “Your AI pair programmer” and states: “With GitHub Copilot, get suggestions for whole lines or entire functions right inside your editor.” [B]
12. GitHub states: “Trained on billions of lines of public code, GitHub Copilot puts the knowledge you need at your fingertips, saving you time and helping you stay focused.” [B]
13. GitHub states GitHub Copilot “is available today as a Visual Studio Code extension,” that it “works wherever Visual Studio Code works — on your machine or in the cloud on GitHub Codespaces,” and that “it’s fast enough to use as you type.” [B]
14. GitHub states the technical preview “does especially well for Python, JavaScript, TypeScript, Ruby, and Go,” and that it “understands dozens of languages and can help you find your way around almost anything.” [B]
15. GitHub states the developer is “always in charge,” can “cycle through alternative suggestions, choose which to accept or reject, and manually edit suggested code,” and that GitHub Copilot “adapts to the edits you make, matching your coding style.” [B]
16. GitHub states GitHub Copilot “is powered by Codex, the new AI system created by OpenAI,” “understands significantly more context than most code assistants,” and uses context from a docstring, comment, function name, or the code itself to “synthesize code to match.” [B]
17. GitHub states: “Together with OpenAI, we’re designing GitHub Copilot to get smarter at producing safe and effective code as developers use it.” [B]
18. GitHub states Copilot can convert comments to code, produce boilerplate and repetitive patterns from examples, suggest tests that match implementation code, and show a list of alternative solutions. [B]
19. In FAQ, GitHub defines GitHub Copilot as “an AI pair programmer that helps you write code faster and with less work,” states it “draws context from comments and code, and suggests individual lines and whole functions instantly,” states it “is powered by OpenAI Codex, a new AI system created by OpenAI,” and states “The GitHub Copilot technical preview is available as a Visual Studio Code extension.” [B]
20. GitHub states OpenAI Codex “was trained on publicly available source code and natural language,” and that “The GitHub Copilot editor extension sends your comments and code to the GitHub Copilot service, which then uses OpenAI Codex to synthesize and suggest individual lines and whole functions.” [B]
21. GitHub states it benchmarked against Python functions with good test coverage in open-source repos by blanking function bodies: “The model got this right 43% of the time on the first try, and 57% of the time when allowed 10 attempts.” [B]
22. GitHub states GitHub Copilot does not write perfect code; suggested code “may not always work, or even make sense,” and “should be carefully tested, reviewed, and vetted, like any other code,” with the developer “always in charge.” [B]
23. GitHub states GitHub Copilot “uses the current file as context when making its suggestions” and “does not yet use other files in your project as inputs for synthesis,” and attributes to itself the statement that “This is something we will improve in the future.” [B]
24. Under “How will GitHub Copilot get better over time?”, GitHub states Copilot “doesn’t actually test the code it suggests,” “can only hold a very limited context” so longer files are clipped to immediately preceding context, and “may suggest old or deprecated uses of libraries and languages,” and that users “do so at your own risk.” [B]
25. GitHub states OpenAI Codex “has been trained on a selection of English language and source code from publicly available sources, including code in public repositories on GitHub.” [B]
26. GitHub states that “about 0.1% of the time, the suggestion may contain some snippets that are verbatim from the training set,” and that GitHub is “building an origin tracker” for rare repeated training-set code. [B]
27. GitHub states users are “responsible for the content you create with the assistance of GitHub Copilot” and recommends careful test, review, and vet. [B]
28. GitHub states users are “in no way obligated to credit GitHub Copilot.” [B]
29. GitHub states training data included public personal data in public code; from internal testing, suggestions including personal data verbatim are “extremely rare”; for the technical preview GitHub states it implemented “a rudimentary filter that blocks emails when shown in standard formats.” [B]
30. GitHub states Copilot can synthesize undesirable insecure or outdated patterns from public code, names GitHub tools “Actions, Dependabot, and CodeQL,” and attributes to itself the statement that as Copilot improves “we will work to exclude insecure or low-quality code from the training set.” [B]
31. GitHub states the technical preview includes filters to block offensive words and avoid synthesizing suggestions in sensitive contexts, and that due to “the pre-release nature of the underlying technology” Copilot “may sometimes produce undesired outputs,” with reports directed to copilot-safety@github.com. [B]
32. GitHub states it expects the technology “will enable existing engineers to be more productive, reducing manual tasks,” and that it believes Copilot “has the potential to lower barriers to entry” into software development. [B]
33. GitHub states that to generate suggestions Copilot “transmits part of the file you are editing to the service,” records whether suggestions are accepted or rejected, and uses that telemetry “to improve future versions of the AI system,” and attributes to itself the statement that “In the future we will give users the option to control how their telemetry is used.” [B]
34. GitHub states “All data is transmitted and stored securely,” with telemetry access “strictly limited to individuals on a need-to-know basis.” [B]
35. GitHub states: “We do not reference your private code when generating code for other users.” [B]
36. GitHub states “GitHub Copilot requires state-of-the-art AI hardware,” and that during the technical preview “we are offering GitHub Copilot to a limited number of testers for free.” [B]
37. GitHub attributes to itself the statement: “When we launch a commercial product, we will make it available as broadly as possible.” [B]
38. GitHub attributes to itself the statement: “If the technical preview is successful, our plan is to build a commercial version of GitHub Copilot in the future,” and that it wants to use the preview “to learn how people use GitHub Copilot and what it takes to operate it at scale.” [B]
39. GitHub states Copilot cannot yet be used in an IDE other than Visual Studio Code: “For now, we’re focused on delivering the best experience in Visual Studio Code only.” [B]
40. The page footer identifies “GitHub Inc. © 2021.” [B]
41. The page includes “Flight reports” quotes attributed to named individuals, including Harri Edwards (labeled OpenAI), Mike Krieger (labeled “Co-founder, Instagram”), and Kate Studwell (labeled GitHub). [B]
42. GitHub states users may post code suggested by GitHub Copilot to social media such as Twitter and asks them to use “#GitHubCopilot” when posting. [B]
43. Under “Why was GitHub Copilot trained on data from publicly available sources?”, GitHub states training machine learning models on publicly available data is “now common practice across the machine learning community,” and that “this is a new space” in which GitHub is “keen to engage in a discussion with developers” and to “lead the industry in setting appropriate standards for training AI models.” [B]

**Not stated in any T0 source used here, and therefore Unknown:** any commercial price, fee schedule, or revenue share for GitHub Copilot or OpenAI Codex; any exclusive or non-exclusive contract terms between GitHub and OpenAI; any named owner or publisher of Visual Studio Code beyond the product name; any public-listing or ticker status for GitHub, OpenAI, or any other named firm; any total user or revenue figures beyond “Hundreds of engineers” having used Copilot daily in the Flight reports section; cost of AI hardware or margin; geographic availability; enterprise terms; and any named competing AI pair-programmer product. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** Software developers need to write, discover, and test code faster inside the editor without assembling answers via tedious internet search. GitHub frames Copilot as helping write better/faster code with less work, suggesting lines and functions from context, converting comments to code, filling boilerplate, suggesting tests, and reducing search/docs spelunking [facts 2–5, 11, 12, 18, 19]. *(Evidence-supported)*

Three components are distinguishable:

- **Search and documentation friction.** Explore APIs and unfamiliar languages/frameworks without “tediously tailor[ing] a search” or “spelunking through the docs” [facts 4, 18]. *(Evidence-supported as GitHub’s claim)*
- **Boilerplate and repetitive coding cost.** Autofill for repetitive patterns and comment-to-code synthesis [fact 18]. *(Evidence-supported)*
- **Test-writing toil.** Suggest tests matching implementation [fact 18]. *(Evidence-supported)*

**Who is worse off without it:** developers writing code in supported editors/languages who currently rely on search, docs, and manual completion — the audience GitHub addresses [facts 2, 4, 11, 19]. How many such developers exist, what time they previously spent, or what they would pay is not disclosed. Magnitude of the customer problem is **Unknown**.

---

## 4. Industry Change

**The concrete change.** GitHub offers an AI pair-programmer technical preview that synthesizes line- and function-level suggestions inside Visual Studio Code (and GitHub Codespaces) via a hosted GitHub Copilot service powered by OpenAI Codex, trained on public code including public GitHub repositories [facts 2, 6, 13, 19, 20, 25]. *(Evidence-supported)*

**Which system requirement shifts.**

1. **From internet search / docs lookup to in-editor synthesized suggestions.** GitHub contrasts Copilot with tailored web search and docs spelunking [facts 4, 18]. *(Evidence-supported as GitHub’s claim)*
2. **From local autocomplete to hosted model synthesis.** Editor extension sends comments/code to the GitHub Copilot service, which uses OpenAI Codex [fact 20]. *(Evidence-supported)*
3. **From GPT-3-class general language models to Codex-class code generation.** GitHub states Codex is significantly more capable than GPT-3 in code generation due to denser public source-code training [fact 7]. *(Evidence-supported as GitHub’s claim)*
4. **From free unlimited access to capacity-gated preview with a stated commercial path.** Limited free testers due to state-of-the-art AI hardware; GitHub states a plan for a commercial version if the preview succeeds [facts 9, 36–38]. *(Evidence-supported as GitHub’s claim)*

**Why the prior solution becomes insufficient.** GitHub does not claim code cannot be written without Copilot; it claims Copilot helps write faster/better with less work and reduces search friction [facts 2, 4, 12, 19]. Benchmarked fill-in accuracy is partial (43% / 57%) and suggestions require human review [facts 21, 22]. *(Reasoned Inference)*

**Structural or cyclical.** Structural if in-editor AI synthesis becomes a default coding surface: context flows to a hosted service and model rather than only to search engines and local autocomplete [facts 13, 19, 20]. At T0 this is a limited free technical preview; commercial product and adoption scale are not evidenced beyond GitHub’s plan language and “hundreds of engineers” anecdote [facts 37, 38, 41]. *(Reasoned Inference)*

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows after §4. No winner is identified here.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Public source-code / natural-language training data | Training material for OpenAI Codex, including public GitHub repositories [facts 7, 12, 25] | Unknown | No | → | Unknown |
| OpenAI Codex (AI code-generation system) | Synthesizes suggestions from editor context [facts 6, 7, 16, 19, 20] | Unknown | Yes | ↑ | Reasoned Inference |
| State-of-the-art AI hardware | GitHub states Copilot requires it; cited reason for limited free preview [fact 36] | Yes | Yes | ↑ | Reasoned Inference |
| GitHub Copilot hosted service | Receives comments/code from the extension; invokes Codex; returns suggestions; records telemetry [facts 20, 33] | Unknown | Yes | ↑ | Reasoned Inference |
| Editor extension surface (Visual Studio Code; GitHub Codespaces) | Delivery surface for the technical preview [facts 13, 19, 39] | Unknown | No | ↑ | Reasoned Inference |
| Internet search / docs-driven coding assistance | Prior path GitHub contrasts [facts 4, 18] | No | No | ↓ | Reasoned Inference |
| Manual boilerplate / test authoring | Work Copilot claims to reduce [facts 12, 18] | No | No | ↓ | Reasoned Inference |
| Software developers (end users) | Accept/reject/edit suggestions; remain responsible for code [facts 15, 22, 27] | No | No | ↑ | Hypothesis |
| GitHub security/quality tools (Actions, Dependabot, CodeQL) | Named as existing quality tools alongside Copilot risk discussion [fact 30] | Unknown | No | Unknown | Unknown |

**Layers with no participant named.** AI hardware suppliers are unattributed [fact 36]. The publisher/owner of Visual Studio Code is not named beyond the product name [facts 13, 39]. No competing AI pair-programmer company is named. Per `RESEARCH_REPORT_STANDARD.md` §5, none is inferred.

**Reading notes.**

- Two layers carry `Bottleneck: Yes` as `Reasoned Inference`: OpenAI Codex (the synthesis capability GitHub says powers Copilot) and the GitHub Copilot service path that delivers it [facts 19, 20]; AI hardware is also bottlenecked at T0 by GitHub’s own capacity statement [fact 36]. Scarcity of Codex and of the Copilot service is **Unknown** (no competitor comparison).
- Layers carrying `↓`: internet search/docs-driven assistance and manual boilerplate/test authoring [facts 4, 12, 18].
- Training-data and developer-surplus directions remain `Unknown` / `Hypothesis` respectively.

No winner is identified in this section.

---

## 6. Value Migration

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| Internet search / docs-driven coding assistance | GitHub Copilot hosted service + editor extension | Facts 4, 13, 18–20 |
| Manual boilerplate / test authoring | In-editor Codex-powered synthesis | Facts 16, 18, 20 |
| General GPT-3-class code generation (as GitHub contrasts) | OpenAI Codex as Copilot’s engine | Facts 6, 7, 19 |

**Why the migration follows.**

1. GitHub states developers lose time to search, docs, and manual coding tasks that Copilot is meant to reduce [facts 4, 12, 18, 19]. *(Evidence-supported)*
2. Delivery requires a hosted Copilot service using OpenAI Codex, not only local editor features [facts 13, 20]. *(Evidence-supported)*
3. GitHub states Codex is more capable than GPT-3 at code generation due to public-code-heavy training [fact 7]. *(Evidence-supported as GitHub’s claim)*
4. Therefore value migrates toward AI pair-programmer services and Codex-class models — if the preview (and any commercial follow-on) becomes a default coding surface. *(Reasoned Inference)*

**Links not established.** Magnitude of profit migration is **Unknown** (no price). How surplus splits between GitHub and OpenAI is **Unknown**. Whether AI hardware suppliers capture most surplus is **Unknown** [fact 36]. *(Unknown)*

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* Direction is supported by GitHub’s problem/remedy structure and service architecture. Against that: free limited preview only, commercial product stated as a plan, partial benchmark accuracy, and undisclosed economics. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, undisclosed load-bearing elements cap confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture. Faster coding with less work is a *creation* claim [facts 2, 12, 19]; the question is who retains surplus. Every conclusion below carries exactly one evidence label and one confidence level.

**Step 1 — Industry bottleneck.** Delivering context-conditioned, in-editor code synthesis at interactive speed via a hosted service and Codex-class model, under state-of-the-art AI hardware constraints [facts 13, 20, 36]. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** Combination of OpenAI Codex and the GitHub Copilot product/service (extension + hosted synthesis + telemetry loop), currently capacity-gated [facts 6, 19, 20, 33, 36]. Whether that combination is narrowly held versus replicable substitutes is **Unknown** (no competitor named). *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As in §6: toward Copilot-class services and Codex-class models; away from search/docs-centric and fully manual boilerplate paths.

**Step 4 — Economic profit capture.** Preview is free for limited testers; commercial product is a stated plan only; no fee or margin disclosed [facts 36–38]. Magnitude of capture is **Unknown**. *(Unknown, Low)*

**Step 5 — Ranking.**

### Tier 1 — Direct Value Capturer

**Vacant.** *(Reasoned Inference, Medium)*

No participant is shown to control the bottleneck *and* retain a disproportionate share of economic profit under a durable, disclosed retention mechanism. GitHub operates the product and states a commercial plan [facts 19, 20, 37, 38]; OpenAI creates Codex [facts 6, 19]; AI hardware is scarce at T0 [fact 36]. None of these texts discloses pricing power, exclusivity, or retained margin. Under `VALUE_CAPTURE_METHODOLOGY.md`, absence of a Tier 1 capturer is a valid finding.

**Magnitude of capture: Unknown.** *(Unknown, Low)*

### Tier 2 — Direct Beneficiary

**GitHub, Inc.** *(Reasoned Inference, Medium)*

Retention mechanism, in three parts — each partial:

1. **Owns the product and service path.** Extension sends context to the GitHub Copilot service that returns suggestions [facts 19, 20, 40]. *(Reasoned Inference, Medium)*
2. **Stated commercialization path.** GitHub states a plan to build a commercial version if the preview succeeds and to broaden availability when a commercial product launches [facts 37, 38]. Price and take rate remain Unknown. *(Evidence-supported for the plan language; Reasoned Inference that this is a capture path, Low)*
3. **Telemetry feedback loop.** Accept/reject telemetry is used to improve future versions of the AI system [fact 33]. Durability of that advantage is not proven. *(Reasoned Inference, Low)*

**Counter-evidence recorded.** Preview is free and capacity-limited [facts 9, 36]; IDE surface is Visual Studio Code only with no named VS Code owner [facts 13, 39]; suggestions require human vetting and are imperfect [facts 21, 22]; dependence on OpenAI Codex is explicit [facts 6, 19, 20]. These keep GitHub at Tier 2, not Tier 1. *(Reasoned Inference, Medium)*

**OpenAI** *(Reasoned Inference, Medium)*

Retention mechanism: OpenAI creates Codex, the system GitHub states powers Copilot and is more capable than GPT-3 at code generation [facts 6, 7, 16, 19, 20]. Collaboration is named; commercial terms and exclusivity are **Unknown**. OpenAI’s economics may improve as a first-order consequence of Copilot demand for Codex, but retention of surplus versus GitHub is undisclosed — hence Tier 2 (partial / contested), not Tier 1. *(Reasoned Inference, Medium)*

### Tier 3 — Indirect Beneficiary

**None assigned with a closed second-order path.** Visual Studio Code is the delivery surface but its publisher is unnamed [facts 13, 39]. AI hardware suppliers are acknowledged only as a requirement class [fact 36]. Naming a firm would be an inferred participant. *(Unknown, Low)*

### Tier 4 — Potential Beneficiary

- **Software developers / end users** *(Hypothesis, Low)* May retain surplus via time saved and lower barrier to entry [facts 12, 32]; willingness to pay Unknown.
- **Unnamed AI hardware providers** *(Unknown, Low)* Required for Copilot [fact 36]; economics Unknown.
- **Unnamed Visual Studio Code publisher** *(Unknown, Low)* Product named; company not named [facts 13, 39].
- **Instagram** *(Unknown, Low)* Appears only as Mike Krieger’s title in a testimonial [fact 41]; no capture path.

**Alternative explanations.** That OpenAI retains most surplus via Codex licensing while GitHub is a distribution conduit — possible; terms Unknown *(Hypothesis, Low)*. That AI hardware suppliers capture most surplus via capacity rents — possible [fact 36] *(Hypothesis, Low)*. That the preview never becomes a durable commercial product — possible [facts 37, 38] *(Unknown, Low)*. That developers capture most surplus as unpaid productivity gains — consistent with free preview *(Hypothesis, Low)*.

---

## 8. Listed Companies

Publicly listed participants named in the T0 sources. **Not ranked; not a recommendation; no valuation.**

**Inclusion rule.** Enter only if the T0 source names the entity and establishes it as the publicly listed company.

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |

**Why this table has zero rows.** The sources name GitHub / GitHub, Inc.; OpenAI; Visual Studio Code and GitHub Codespaces as products; Actions, Dependabot, and CodeQL as GitHub tools; GPT-3 as a compared AI system; Twitter as a social-media outlet for sharing; and Instagram only in a quote attribution [facts 6, 7, 10, 13, 30, 40, 41]. None of the texts states that any named entity is publicly listed or supplies a ticker/exchange designation. Inferring listing status would violate the inclusion rule used in prior compliant reports.

**Named in the sources but excluded from this table.**

- **GitHub, Inc.** [facts 10, 40] — Tier 2 operator in §7; listing not established.
- **OpenAI** [facts 6, 16, 19, 41] — Codex creator / collaborator; listing not established.
- **Visual Studio Code / GitHub Codespaces** [facts 13, 39] — products, not established listed companies.
- **Instagram** [fact 41] — quote attribution only; omitted.
- **Twitter** [fact 42] — outlet for posting suggested code with `#GitHubCopilot`; no capture path; omitted.

**Layers with no row.** AI hardware supply and any VS Code publisher remain unattributed.

**Displaced participants.** Internet search / docs-driven assistance and manual boilerplate functions are marked `↓` in §5. No company is named by GitHub as the displaced incumbent. *(Unknown)*

---

## 9. Risks

### Assumptions that could fail

1. **Technical preview converts to a commercial product with paying users** — supports §§4–7. Commercial version is stated as a plan if the preview succeeds [facts 37, 38]. *(Unknown at T0)*
2. **Codex-powered suggestions are good enough that developers keep using them after review burden** — supports migration. Benchmark is 43%/57% on a Python fill-in test; suggestions may fail or be insecure [facts 21, 22, 30]. *(Hypothesis)*
3. **GitHub retains a durable product position rather than becoming a thin shell over OpenAI Codex** — supports GitHub Tier 2 [facts 6, 19, 20]. Collaboration terms Unknown. *(Hypothesis)*
4. **State-of-the-art AI hardware remains a binding constraint that favors operators who can secure it** — supports hardware scarcity/bottleneck [fact 36]. May resolve with ordinary capacity addition. *(Unknown)*
5. **No single participant later establishes exclusive control that would fill vacant Tier 1** — supports Tier 1 vacancy. If exclusive Codex rights, proprietary data moats, or paid switching costs appear later, vacancy could be wrong. *(Hypothesis)*
6. **Telemetry and public-code training remain socially and legally acceptable** — supports continued operation [facts 25, 33–35, 43]. *(Unknown)*

### What would weaken the thesis

- Preview stalling without a launched commercial product or broad availability.
- Realized suggestion quality remaining too low after human review cost.
- OpenAI (or another model provider) capturing nearly all surplus while GitHub’s product take is competed away.
- AI hardware capacity becoming abundant and undifferentiated, removing the scarcity GitHub cites.
- Developers remaining on search/docs/manual workflows at scale.

### What would invalidate the thesis

- **GitHub withdrawing Copilot without a retaining commercial substitute**, so the migration destination does not persist.
- **Economic profit from AI pair programming accruing primarily to an unnamed hardware or model layer**, such that neither GitHub nor OpenAI retains Tier 2 surplus as framed.
- **In-editor AI synthesis failing to become a default coding surface**, reversing the migration in §6.
- **A portable open standard or interchangeable model API making Copilot a zero-switching-cost conduit**, removing residual retention mechanisms.

Weakening and invalidating conditions are kept separate deliberately: the first set reduces the size of the conclusion; the last set replaces it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | Commercial-product launch announcement for GitHub Copilot | GitHub official announcements / blog | 2–8 quarters | Assumption 1 unresolved; remains preview-only |
| 2 | Published pricing / subscription or seat terms | GitHub official product/pricing pages | 1–8 quarters | Magnitude of capture stays Unknown |
| 3 | Disclosure of OpenAI–GitHub commercial terms or exclusivity | GitHub and/or OpenAI official announcements | 2–12 quarters | Assumption 3 / surplus split unresolved |
| 4 | Expansion beyond Visual Studio Code to other named IDEs | GitHub official product docs/announcements | 2–8 quarters | Editor-surface concentration unchanged [fact 39] |
| 5 | Updated quality benchmarks vs the 43%/57% Python fill-in baseline | GitHub official technical posts | 2–8 quarters | Assumption 2 unresolved |
| 6 | User / seat / adoption metrics beyond “hundreds of engineers” | GitHub official announcements or (if later public) filings | 2–12 quarters | Structural adoption claim unverified |
| 7 | Competing AI pair-programmer products from named vendors | Competitor official announcements | 2–12 quarters | Contestability of Tier 2 positions untested |
| 8 | AI hardware capacity / availability statements affecting Copilot access | GitHub official announcements | 1–8 quarters | Assumption 4 unresolved |
| 9 | Origin-tracker / IP / training-set policy updates | GitHub official docs and safety posts | 2–8 quarters | Verbatim-snippet and training concerns [fact 26] unclosed |
| 10 | Any listing / IPO / ownership disclosure establishing GitHub or OpenAI as public | Official offering documents / exchange notices / parent filings | Any time | §8 remains empty on listing grounds |
| 11 | Telemetry-control options as GitHub stated it will provide | GitHub official product settings/docs | 2–8 quarters | Attributed future telemetry-control claim [fact 33] unmet |
| 12 | Evidence of switching costs, enterprise contracts, or multi-year seats | GitHub official terms and enterprise docs | 4–12 quarters | Retention durability / Tier 1 vacancy untested |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Training-data layer direction (**Unknown**) | §5 | Signals 9, 7 |
| Codex / Copilot service scarcity (**Unknown**) | §5 | Signals 3, 7 |
| Developer surplus (**Hypothesis**) | §5, §7 Tier 4 | Signals 2, 6 |
| Security-tools layer direction (**Unknown**) | §5 | Signal 9 (indirect) |
| Magnitude of capture (**Unknown**) | §1, §7 Step 4 | Signals 2, 3, 6 |
| Preview → commercial adoption (**Unknown**) | §4, §9 assumption 1 | Signals 1, 2, 6 |
| Suggestion quality adequacy (**Hypothesis**) | §9 assumption 2 | Signal 5 |
| GitHub vs OpenAI surplus split (**Hypothesis**) | §7 Tier 2, §9 assumption 3 | Signal 3 |
| Hardware scarcity durability (**Unknown**) | §5, §9 assumption 4 | Signal 8 |
| Tier 1 vacancy vs later enclosure (**Hypothesis**) | §7, §9 assumption 5 | Signals 2, 3, 12 |
| Training/telemetry acceptability (**Unknown**) | §9 assumption 6 | Signals 9, 11 |
| Unnamed hardware / VS Code publisher paths (**Unknown**) | §7 Tier 3–4 | Signals 4, 8 |
| Listing status for §8 (**Unknown**) | §8 | Signal 10 |
| Customer-problem magnitude (**Unknown**) | §3 | Signals 2, 6 |
| Displaced incumbent identity (**Unknown**) | §5, §8 | Signal 7 |
| Instagram adjacency (**Unknown**) | §7 Tier 4 | No capture path expected; Signal 10 irrelevant |

No open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1 (repository version; sprint attribution and confidence rules applied) and `MISSION.md`. Two P0 GitHub sources, T0-locked to 2021-06-29. Contains no investment recommendation, no valuation or securities-price information, and no timing signal. Commercial-product language appears only as facts attributed to GitHub. All Unknown items remain Unknown.*
