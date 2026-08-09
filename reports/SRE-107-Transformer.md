# SRE-107 — Transformer

| Field | Value |
| --- | --- |
| Subject | The Transformer — sequence transduction architecture based solely on attention |
| T0 (frozen date) | 2017-06-12 |
| Industry domain | AI Computing |
| T0 source | Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, and Polosukhin — "Attention Is All You Need", arXiv:1706.03762v1, submitted 12 June 2017; Google-authored research publication (Google Brain / Google Research affiliations), also recorded on Google Research Publications |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1 (repository; sprint attribution / confidence / traceability rules applied as stated for this run), `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0 |

Single-source report. All content derives from the one P0 document above, cited throughout as **[Vaswani et al., arXiv:1706.03762v1, 2017-06-12]**. Nothing published after T0 is used. Later arXiv versions (including prose and table changes, and a later statement that training code is available at a named repository) are excluded.

**Source-retrieval note.** The frozen text is arXiv version 1, dated 12 June 2017. Google Research Publications lists the same work under Google authorship. Author affiliations on the T0 document are Google Brain, Google Research, and University of Toronto; one author footnote states work performed while at Google Brain. Whether any commercial term, patent, or product roadmap accompanied the publication outside this document is **Unknown**.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

Google-affiliated authors published the Transformer: a sequence transduction architecture that replaces the recurrent and convolutional layers then dominant in encoder-decoder models with multi-head self-attention, and that the paper states is the first transduction model to rely entirely on self-attention without sequence-aligned RNNs or convolution [facts 1, 4, 5, 11]. On WMT 2014 English-to-German the big model reaches 28.4 BLEU, stated to improve over prior best results including ensembles by more than 2 BLEU; on WMT 2014 English-to-French it reaches a single-model 41.0 BLEU after 3.5 days on eight GPUs, stated as a small fraction of prior training cost [facts 2, 3, 19, 20, 23]. The paper discloses the full architecture, training regime, and hyperparameters, and states only an intention to make training and evaluation code available soon — not that code is already released [facts 8–13, 17–19, 24, 30]. *(Evidence-supported)*

**Key conclusion.** Value migrates from sequential recurrent computation, and from convolutional alternatives whose path length to distant positions grows with distance, toward attention-based sequence transduction that reduces sequential operations to a constant and shortens maximum path length between positions — while at T0 no participant is shown to own a durable retention mechanism over that migration, because the architecture is published in full and no exclusive implementation path is disclosed. *(Reasoned Inference, Medium)*

**Tier 1 is vacant.** This is a finding, not a gap. The source publishes the model, compares it openly to named prior architectures, and withholds only the not-yet-released training code [facts 4, 5, 8–13, 30]. Nothing in the document establishes a switching cost, proprietary interface, gated SDK, scarce input, standard ownership, or installed base that would let one party retain a disproportionate share of the value created. Under `VALUE_CAPTURE_METHODOLOGY.md`, surplus that accrues to implementers or is competed away is a legitimate answer, and it is the answer this source supports. *(Reasoned Inference, Medium)*

**Top companies for further research — not recommendations, not ranked by attractiveness.** This list identifies where the reasoning in §§6–7 lands. It contains no view on valuation or timing.

- **Google** — employer of the majority of named authors (Google Brain / Google Research); prior Google neural machine translation is cited as a compared system. Tier 4 Potential Beneficiary; durable capture not established. *(Hypothesis, Low)*
- **NVIDIA** — named only as the maker of the P100 GPUs used to train the models. Tier 4 Potential Beneficiary; no retention mechanism disclosed. *(Hypothesis, Low)*

Neither entity's public-listing status is established by the T0 source, so neither appears in §8. See §8.

Market blind spot: attention attaches to the BLEU scores and the slogan that attention is "all you need," while the structurally decisive disclosure is that the entire architecture is published and the only deferred item is code the authors "intend" to release soon. Performance claims get re-contested; an openly specified architecture does not concentrate capture by itself. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in the T0 source without interpretation. Author performance claims are recorded as claims the paper makes, which is what the source establishes. Future-tense content appears only where the source states it, attributed to the authors.

1. The paper proposes "a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
2. The paper states the model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, "improving over the existing best results, including ensembles by over 2 BLEU." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
3. The paper states that on the WMT 2014 English-to-French translation task the model "establishes a new single-model state-of-the-art BLEU score of 41.0 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
4. The paper states that to the best of the authors' knowledge, "the Transformer is the first transduction model relying entirely on self-attention to compute representations of its input and output without using sequence-aligned RNNs or convolution." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
5. The paper states that recurrent models' "inherently sequential nature precludes parallelization within training examples, which becomes critical at longer sequence lengths, as memory constraints limit batching across examples." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
6. The paper states: "The Transformer allows for significantly more parallelization and can reach a new state of the art in translation quality after being trained for as little as twelve hours on eight P100 GPUs." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
7. Authors and affiliations stated on the paper: Ashish Vaswani, Noam Shazeer, and Łukasz Kaiser — Google Brain; Niki Parmar, Jakob Uszkoreit, and Llion Jones — Google Research; Aidan N. Gomez — University of Toronto; Illia Polosukhin — email listed without institutional affiliation on the author line, with a footnote that work was performed while at Google Brain. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
8. The paper states the Transformer follows an encoder-decoder architecture using stacked self-attention and point-wise fully connected layers for both encoder and decoder. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
9. The encoder is stated to be a stack of N=6 identical layers, each with multi-head self-attention and a position-wise feed-forward network, with residual connections and layer normalization; sub-layers and embeddings produce outputs of dimension d_model=512. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
10. The decoder is stated to be a stack of N=6 identical layers, with an additional multi-head attention sub-layer over the encoder stack, and with masking so that predictions for position i depend only on outputs at positions less than i. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
11. The paper describes Scaled Dot-Product Attention and Multi-Head Attention, stating that in this work the authors employ h=8 parallel attention heads with d_k=d_v=d_model/h=64. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
12. The paper states that multi-head attention is used in three ways: encoder-decoder attention, encoder self-attention, and masked decoder self-attention. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
13. The paper states that because the model contains no recurrence and no convolution, positional encodings are added to input embeddings; the authors use sine and cosine functions of different frequencies, and state they chose the sinusoidal version because it may allow the model to extrapolate to sequence lengths longer than those encountered during training. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
14. Table 1 in the paper states per-layer complexity, sequential operations, and maximum path length: self-attention O(n²·d) complexity, O(1) sequential operations, O(1) maximum path length; recurrent O(n·d²), O(n) sequential, O(n) path length; convolutional O(k·n·d²), O(1) sequential, O(log_k(n)) path length. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
15. The paper states that self-attention layers "are faster than recurrent layers when the sequence length n is smaller than the representation dimensionality d, which is most often the case with sentence representations used by state-of-the-art models in machine translations." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
16. The paper states that in models such as ConvS2S and ByteNet, "the number of operations required to relate signals from two arbitrary input or output positions grows in the distance between positions," whereas "in the Transformer this is reduced to a constant number of operations." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
17. The paper states the authors trained on the WMT 2014 English-German dataset of about 4.5 million sentence pairs with a shared byte-pair vocabulary of about 37,000 tokens, and on WMT 2014 English-French with 36 million sentences and a 32,000 word-piece vocabulary. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
18. The paper states: "We trained our models on one machine with 8 NVIDIA P100 GPUs." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
19. The paper states that for base models each training step took about 0.4 seconds, trained for 100,000 steps or 12 hours; for big models step time was 1.0 seconds, trained for 300,000 steps or 3.5 days. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
20. Table 2 reports Transformer (base) at 27.3 BLEU EN-DE and 38.1 BLEU EN-FR, and Transformer (big) at 28.4 BLEU EN-DE and 41.0 BLEU EN-FR, with estimated training cost for the big EN-DE model of 2.3·10^19 FLOPs. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
21. Table 2 reports compared prior systems including ByteNet, Deep-Att + PosUnk, GNMT + RL, ConvS2S, MoE, and ensembles of Deep-Att, GNMT + RL, and ConvS2S, with their BLEU scores and estimated training FLOPs. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
22. The paper states that even the base model "surpasses all previously published models and ensembles, at a fraction of the training cost of any of the previous best models." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
23. The paper states that on English-to-French the big model outperforms all previously published single models "at less than 1/4 the training cost of the previous state-of-the-art model." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
24. Table 3 reports the big model configuration: N=6, d_model=1024, d_ff=4096, h=16, P_drop=0.3, 300K training steps, approximately 213 million parameters. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
25. The paper reports English constituency parsing experiments with a 4-layer Transformer, including WSJ-only and semi-supervised settings, and states the model outperforms the BerkeleyParser even when training only on the WSJ training set of 40K sentences. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
26. The paper states: "In this work, we presented the Transformer, the first sequence transduction model based entirely on attention, replacing the recurrent layers most commonly used in encoder-decoder architectures with multi-headed self-attention." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
27. The paper states: "For translation tasks, the Transformer can be trained significantly faster than architectures based on recurrent or convolutional layers." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
28. The authors state they "plan to apply them to other tasks," "plan to extend the Transformer to problems involving input and output modalities other than text," and "plan to investigate local, restricted attention mechanisms to efficiently handle large inputs and outputs such as images, audio and video." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
29. The authors state: "Making generation less sequential is another research goals of ours." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
30. The paper states: "We intend to make the code we used to train and evaluate our models available soon." [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
31. The paper cites "Google's neural machine translation system" (Wu et al.) among compared and related prior work. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]
32. The paper estimates GPU sustained single-precision capacity using values including 9.5 TFLOPS for P100, and also lists K80, K40, and M40 capacity values used in FLOPs estimates. [Vaswani et al., arXiv:1706.03762v1, 2017-06-12]

**Not stated in the T0 source, and therefore Unknown:** any price, licence, patent, or commercial term for the Transformer; any statement that the architecture is proprietary or exclusive to Google; any productized Google service that uses the Transformer at T0; public-listing status or ticker for Google, NVIDIA, or any other named entity; whether training code has been released as of T0 (the source states only an intention to release it soon); any competing commercial product built on the Transformer; any revenue, cost, or margin figure; any customer or deployment outside the reported academic benchmarks; and any hardware-supplier commercial relationship beyond the statement that training used NVIDIA P100 GPUs. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** Sequence transduction users — at T0, primarily machine-translation and parsing researchers and system builders — faced a training-time and parallelization constraint imposed by sequential recurrence. The paper states that recurrent models preclude parallelization within training examples, and that this becomes critical at longer sequence lengths [fact 5]. Convolutional alternatives reduce sequential depth but still require path lengths that grow with distance between positions [facts 14, 16]. *(Evidence-supported)*

Two components of the problem are distinguishable in the source:

- **Training cost and wall-clock time.** The paper's central empirical claim is higher BLEU at a fraction of prior training cost — base models in about 12 hours on eight P100 GPUs; big models in 3.5 days — versus prior systems whose estimated FLOPs are materially higher in Table 2 [facts 3, 6, 19, 20, 22, 23]. *(Evidence-supported)*
- **Long-range dependency learning.** The paper treats path length between positions as a key factor in learning long-range dependencies, and states that self-attention reduces maximum path length to O(1) versus O(n) for recurrence [facts 14, 16]. *(Evidence-supported)*

**Who is worse off without it:** parties training competitive neural sequence transduction models under sequential architectures — evidenced by the paper's comparison set of prior MT systems and by the parsing experiment where RNN sequence-to-sequence models are stated not to have attained state-of-the-art in small-data regimes [facts 21, 25]. *(Evidence-supported)*

The source does not disclose what any commercial user previously spent, how many production systems faced this constraint, or what workloads were forgone. The magnitude of the customer problem in economic terms is therefore **Unknown**.

---

## 4. Industry Change

**The concrete change.** The unit of sequence transduction modeling is specified as an attention-only encoder-decoder — multi-head self-attention plus position-wise feed-forward layers, with positional encodings replacing recurrence — published as a complete architecture with training details [facts 1, 8–13, 26]. *(Evidence-supported)*

**Which system requirement shifts.** Three requirements move together in the source:

1. **From sequential to parallelizable training within examples.** Self-attention is stated to require O(1) sequential operations per layer versus O(n) for recurrence [facts 5, 14, 15]. *(Evidence-supported)*
2. **From distance-dependent to constant-cost relating of positions.** Relating arbitrary positions drops from linear or logarithmic growth in distance to a constant number of operations [facts 14, 16]. *(Evidence-supported)*
3. **From architecture-as-crafted-system to architecture-as-published-specification.** The paper discloses layer counts, dimensions, attention formulae, optimizer schedule, and regularization, and states an intention to release code soon [facts 9–13, 19, 24, 30]. The means of reproduction are the publication itself plus forthcoming code, not a gated product. *(Reasoned Inference)*

**Why the prior solution becomes insufficient.** The paper does not claim recurrence cannot translate; it claims recurrence is slower to train and harder to parallelize, and that convolutional alternatives still lengthen paths between distant positions [facts 5, 14, 16, 27]. Where training cost and long-range path length bind, an attention-only stack removes both constraints on the paper's stated terms. *(Reasoned Inference)*

**Structural or cyclical.** Structural. The change alters what model builders must do — replace recurrent (or convolutional) encoder-decoder stacks with multi-head self-attention and positional encodings [facts 1, 8, 26] — rather than altering volumes at constant architecture. *(Reasoned Inference)*

**What the source does not settle.** Whether the architecture becomes an industry standard, a Google-internal method, or one of several coexisting approaches is **Unknown** at T0. The authors state plans to extend it to other modalities [fact 28], which is attributed forward-looking intent, not an established industry change.

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows through the value chain after the change described in §4. This section is a map, not a conclusion: it identifies no winner and names no capturer. Layer existence and role are drawn from §2 facts; scarcity, bottleneck, and direction of value change are reasoning, labeled per row.

Granularity is one functional layer per row, ordered from compute through end demand.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Training accelerators (GPUs) | Execute the matrix-multiplication-heavy training workload; models trained on 8 NVIDIA P100 GPUs [facts 6, 18, 32] | Unknown | Unknown | ↑ | Hypothesis |
| Deep-learning software frameworks and tooling | Host training and evaluation implementations; code is stated only as intended to be made available soon [fact 30] | Unknown | No | Unknown | Unknown |
| Sequence-model architecture design | Specifies the Transformer: attention-only encoder-decoder, multi-head attention, positional encoding [facts 1, 8–13, 26] | No | No | ↑ | Reasoned Inference |
| Recurrent sequence architectures (LSTM/GRU encoder-decoders) | Prior dominant approach for sequence modeling and transduction [facts 5, 26] | No | No | ↓ | Reasoned Inference |
| Convolutional sequence architectures (e.g. ConvS2S, ByteNet) | Parallel alternatives whose path length still grows with distance [facts 14, 16, 21] | No | No | ↓ | Reasoned Inference |
| Attention mechanisms used with recurrence | Prior pattern of attention as an add-on to recurrent networks [facts 1, 4] | No | No | ↓ | Reasoned Inference |
| Machine-translation systems / benchmarks | Consume architectures to produce BLEU on WMT tasks; Transformer (big) stated at 28.4 / 41.0 [facts 2, 3, 20–23] | No | No | ↑ | Reasoned Inference |
| Broader NLP sequence tasks (e.g. constituency parsing) | Additional transduction workloads; paper reports parsing results [fact 25] | No | No | ↑ | Hypothesis |
| Research institutions publishing architectures | Produce and disclose model designs; Google Brain / Google Research / University of Toronto affiliations [fact 7] | No | No | Unknown | Unknown |
| End users of translation and language technology | Downstream demand for higher quality / lower training cost MT [facts 2, 3, 27] | No | No | Unknown | Unknown |

**Layers with no participant named as a commercial beneficiary.** Training accelerators name NVIDIA only as the GPU used [fact 18]; frameworks name no vendor because code is not yet released [fact 30]; architecture design names no exclusive owner beyond author affiliations [fact 7]. Per `RESEARCH_REPORT_STANDARD.md` §5, these layers are recorded and left without inferred corporate participants beyond what the source names.

**Reading notes, held separate from the table.**

- No layer is marked `Bottleneck: Yes`. Unlike product launches in this series where a scarce tool or interface constrains the system, this source's binding constraint before the change is sequential computation in the model itself [fact 5], and after publication the architecture is not scarce — it is written down [facts 1, 8–13]. Marking architecture design `Bottleneck: Yes` would contradict open disclosure. Marking GPUs `Bottleneck: Yes` would require evidence the paper does not supply.
- Three layers carry `↓`: recurrent architectures, convolutional sequence architectures, and attention-as-recurrent-add-on. Directions are `Reasoned Inference` from the paper's own replacement claim [facts 4, 26] and from Table 1 / background comparisons [facts 14, 16].
- `Training accelerators` is `↑` on `Hypothesis` only: greater parallelization and large matrix multiplications are consistent with more useful GPU work [facts 14, 15, 18], but the paper also claims *lower* training cost and wall-clock time [facts 3, 22, 23], which could mean less total compute purchased per trained model. Net demand direction is not settled.
- `Deep-learning software frameworks` is fully `Unknown` because at T0 the authors only intend to release code soon [fact 30]; no framework vendor capture path is established.

No winner is identified in this section. Which participants capture value from the layers marked `↑` is addressed in §§7–8.

---

## 6. Value Migration

**Purpose.** State where value moves, and why it must. Origins and destinations use the layers established in §5.

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| Recurrent sequence architectures, which factor computation along positions and require O(n) sequential operations | Sequence-model architecture design centered on multi-head self-attention with O(1) sequential operations | Facts 1, 5, 14, 26 |
| Convolutional sequence architectures whose path length grows with distance | Attention-only stacks with constant-cost relating of positions | Facts 14, 16, 21 |
| Attention used only in conjunction with recurrent networks | Self-attention as the sole mechanism for input/output representations | Facts 1, 4 |
| Training budgets consumed by high-FLOP recurrent/conv ensembles | Lower-FLOP Transformer training schedules achieving higher BLEU on the reported tasks | Facts 20–23, 27 |

**Why the migration follows.** Step by step, so any single link can be attacked:

1. Competitive sequence transduction was dominated by recurrent encoder-decoders, with attention typically added on top, and by convolutional alternatives [facts 1, 4, 5, 21]. *(Evidence-supported that the source describes this prior state)*
2. The binding costs of that prior state, as stated, are sequential training and long path lengths for distant dependencies [facts 5, 14, 16]. *(Evidence-supported)*
3. The Transformer removes recurrence and convolution from the representation stack and replaces them with multi-head self-attention and positional encodings [facts 1, 8–13, 26]. *(Evidence-supported)*
4. Empirically, on the reported WMT tasks, the paper states higher quality at a fraction of prior training cost [facts 2, 3, 20–23]. *(Evidence-supported that the source claims this)*
5. Therefore modeling effort and training spend migrate toward attention-only architectures and away from recurrent and convolutional sequence stacks. *(Reasoned Inference)*

**One link is explicitly not established.** Step 5 does not establish *who* retains the surplus from lower training cost or higher quality. The architecture is fully disclosed [facts 8–13], and code is not yet released [fact 30], so implementation can in principle be replicated by any party that can reimplement the paper. Migration of technique is not migration of economic profit to the authors' employer. *(Reasoned Inference)*

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* Direction of architectural migration is well supported by the paper's own comparisons and results. Magnitude of industry-wide spend shift, and identity of capturers, are not established. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, undisclosed load-bearing elements cap confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture, revenue growth is not value capture, and technology leadership is not value capture. That BLEU rises at lower training cost is a *creation* claim [facts 2, 3, 22, 23]; the question here is who retains it. Every conclusion below carries exactly one evidence label and one confidence level.

**Step 1 — Industry bottleneck.** At T0, before adoption of the new architecture, sequential computation inside recurrent sequence models constrains parallel training [fact 5]. After publication, the paper does not establish a remaining scarce industrial bottleneck owned by one party. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** The paper does not identify a scarce capability that is narrowly held. The architecture is published in full [facts 8–13]. Training used widely sold GPUs [fact 18]. Code is not released, but the authors state intent to release it soon [fact 30], which points away from indefinite withholding. *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As traced in §6: toward attention-only sequence architectures; away from recurrent and convolutional sequence stacks.

**Step 4 — Economic profit capture.** No price, licence, revenue, cost, or margin appears in the T0 source [see the §2 Unknown list]. Economic profit capture is **not measurable**. *(Unknown, Low)*

**Step 5 — Ranking by sustainable capture.**

### Tier 1 — Direct Value Capturer: vacant at T0

**Vacant.** *(Reasoned Inference, Medium)*

No participant qualifies. Tier 1 requires a named, durable retention mechanism. Applying `VALUE_CAPTURE_METHODOLOGY.md` §4 Step 2:

- The architecture is fully specified in a public research paper [facts 1, 8–13, 26].
- No proprietary runtime, driver, or gated developer program is disclosed.
- No switching cost, standard ownership, or installed base is claimed for the Transformer itself.
- The only deferred artifact is training code the authors "intend" to make available soon [fact 30] — an intention to open, not to enclose.

Recording a Tier 1 participant here would require a retention mechanism the source does not provide. Under `VALUE_CAPTURE_METHODOLOGY.md` §3, vacant Tier 1 is a valid finding: on this evidence the surplus may accrue to any implementer or to end users of cheaper/better translation systems. *(Reasoned Inference, Medium)*

### Tier 2 — Direct Beneficiary

**Vacant.** *(Reasoned Inference, Medium)* No participant other than the authoring organizations is positioned for first-order economic improvement with a disclosed retention mechanism, and even the authoring organizations lack a disclosed retention mechanism. Google Brain / Google Research are research units of Google [fact 7], not separate capturers. Naming Google as Tier 2 would require evidence that Google uniquely retains value from the publication; the publication's openness cuts against that. *(Reasoned Inference, Medium)*

### Tier 3 — Indirect Beneficiary

**None named with a second-order retention path.** Compared systems (GNMT, ConvS2S, ByteNet, MoE, etc.) appear as benchmarks [fact 21], not as beneficiaries of the Transformer. University of Toronto appears only as an author affiliation [fact 7]. No Tier 3 company is entered. *(Unknown, Low)*

### Tier 4 — Potential Beneficiary

- **Google** *(Hypothesis, Low)* Employer of most authors; Google Brain / Google Research affiliations [fact 7]; prior Google NMT system cited [fact 31]. Possible paths: internal use in translation or other sequence products; eventual code release that draws activity toward Google-hosted tooling. None of these paths is established in the T0 document. Resolving condition, routed to §10: official disclosure that Google productizes the Transformer or captures economics from related tooling.
- **NVIDIA** *(Hypothesis, Low)* Named solely as supplier of the P100 GPUs used for training [facts 6, 18, 32]. Parallelizable attention workloads may increase usefulness of GPUs, but the paper's own cost claims also imply less compute per trained model [facts 22, 23]. No commercial relationship or retention mechanism is disclosed. Net effect **Unknown**.
- **Implementers of machine-translation and NLP systems, unattributed** *(Hypothesis, Low)* If the architecture is free to reimplement from the paper, parties that ship translation or parsing systems could capture the quality/cost gain. No such company is named as adopting the Transformer at T0.
- **End users of translation quality improvements, unattributed** *(Hypothesis, Low)* `VALUE_CAPTURE_METHODOLOGY.md` §4 Step 4 requires considering buyers. Lower training cost and higher BLEU could pass through as better or cheaper translation. No end-user economics are disclosed. *(Hypothesis, Low)*

**Alternative explanations considered.** That Google retains know-how not written in the paper — not supported by P0 text beyond ordinary research practice *(Unknown, Low)*. That deferred code release is a temporary enclosure — contradicted in direction by the stated intent to release soon [fact 30] *(Reasoned Inference, Medium)*. That GPU suppliers capture the parallelization gain — possible but unmeasured and possibly offset by lower training FLOPs *(Hypothesis, Low)*.

---

## 8. Listed Companies

Publicly listed participants named in the T0 source. The role carries the §5 layer and the tier assigned in §7. **This table is not ranked by attractiveness, contains no valuation information, and is not a recommendation.**

**Inclusion rule applied.** A company is entered only if the T0 source names it and the named entity is established by the T0 source as the publicly listed entity. Where the source names an organization without establishing listed status, the entry is omitted and no parent ticker is inferred.

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |

**Why this table has zero rows.** The T0 paper names Google Brain, Google Research, Google (via citation to Google's neural machine translation system), NVIDIA (as GPU brand), and University of Toronto [facts 7, 18, 31]. It does not state that any of these is a publicly listed company, and it supplies no ticker or exchange designation. Inferring a listed parent entity, or treating the GPU brand name as establishing a listed issuer, would violate the no-inferred-participants rule and the §8 inclusion rule used in prior compliant reports.

**Named in the source but excluded from this table.**

- **Google / Google Brain / Google Research** [facts 7, 31] — named; listing status not established by the T0 source. Capture path recorded in §7 as Tier 4 Hypothesis, Low.
- **NVIDIA** [fact 18] — named as maker of P100 GPUs used in training; listing status not established. Capture path recorded in §7 as Tier 4 Hypothesis, Low.
- **University of Toronto** [fact 7] — academic affiliation; not a listed commercial participant.

**Layers with no row in this table.** All §5 layers lack a listed participant established by the T0 source. No participant is inferred into any of them.

**Displaced participants.** Recurrent and convolutional sequence-architecture layers carry `↓` in §5 [facts 14, 16, 26]. The source names prior *models* (GNMT, ConvS2S, ByteNet, MoE, etc.) as benchmarks [fact 21], not as companies losing value. Which listed companies, if any, are displaced is **Unknown**.

---

## 9. Risks

### Assumptions that could fail

1. **Open publication prevents durable enclosure of the architecture** — supports vacant Tier 1 in §7. If critical implementation details, data, or tooling remain unpublished despite the paper, a party could still retain practical scarcity. The source states intent to release code soon [fact 30], which is forward-looking and unverified at T0. *(Unknown at T0)*
2. **Reported BLEU and cost advantages hold under replication** — supports §§3–6. All quality and FLOPs figures are author-reported [facts 2, 3, 20–23]. If independent replication fails to match, the migration's magnitude shrinks. *(Reasoned Inference)*
3. **Attention-only architectures remain advantageous beyond the reported tasks** — supports §4 structural claim and §5 `↑` on broader NLP. Parsing results are limited [fact 25]; modality extensions are plans only [fact 28]. *(Hypothesis)*
4. **Lower training FLOPs reduce, rather than merely reshuffle, industry spend** — supports migration row on training budgets. Parallelization could also induce larger models and more experiments, raising GPU demand even if cost per trained baseline model falls [facts 14, 15, 18, 22]. *(Unknown)*
5. **No hidden commercial restriction accompanies the paper** — supports vacant Tier 1. The T0 document discloses no licence or patent term [see the §2 Unknown list]. A separate restriction would change capture analysis and is not visible here. *(Unknown)*
6. **Author affiliations imply organizational interest without proving capture** — supports keeping Google at Tier 4 rather than Tier 1 or 2 [fact 7]. If Google alone can operationalize the results at scale in production MT, capture could concentrate despite open publication. The source does not show that. *(Hypothesis)*

### What would weaken the thesis

- Independent replications matching architecture but not matching training cost or BLEU, leaving direction intact while magnitude is overstated.
- Rapid proliferation of incompatible attention variants, so that "the Transformer" does not become a shared locus of migration.
- GPU spend rising with larger attention models, offsetting the paper's lower-FLOPs narrative for industry totals.
- Google productizing a closed stack around the ideas while the paper remains a partial disclosure.

### What would invalidate the thesis

- **A single party establishing exclusive practical control over usable Transformer implementations** (for example through essential unpublished components or exclusive tooling), which would replace vacant Tier 1 with an assigned capturer and falsify the openness premise.
- **Recurrent or convolutional sequence models reclaiming state-of-the-art quality at comparable or better training cost**, which would invalidate the migration in §6 rather than merely reduce it.
- **Demonstration that the paper's results depend on resources or methods unavailable from the written disclosure**, such that the published architecture is not the scarce object and not freely reproducible.
- **Economic profit demonstrably accruing to a named layer the source leaves empty** — for example sustained premium pricing by a tooling or accelerator vendor tied to this architecture — which would mean Step 4 can be completed and Tier assignment must be revisited.

Weakening and invalidating conditions are kept separate deliberately: the first four reduce the size of the conclusion, the last four replace it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | Release of the training and evaluation code the authors state they intend to make available soon | Author / Google official code or research announcements | 1–4 quarters | Assumption 1 unresolved; enclosure-by-withholding remains possible |
| 2 | Independent third-party replications of WMT BLEU and training-time claims | Official research publications and technical reports | 2–8 quarters | Author-only results; assumption 2 unresolved |
| 3 | Adoption of Transformer (or clear derivatives) in production MT or other sequence products by named organizations | Official product documentation and research blogs of any vendor | 2–8 quarters | Migration confined to benchmarks; §6 standing unverified |
| 4 | Disclosure by Google of product use of the Transformer architecture | Google official announcements and documentation | 2–8 quarters | Google Tier 4 path unsupported; closes or weakens §7 Google Hypothesis |
| 5 | Licence, patent, or terms accompanying code or follow-on releases | Official code repositories and legal notices | 1–4 quarters | Assumption 5 unresolved; openness premise untested in legal form |
| 6 | Competing attention-only or hybrid architectures claiming equal or better cost/quality | Official research publications | 2–8 quarters | Whether migration concentrates on this design vs. a class of designs |
| 7 | GPU-vendor disclosures tying demand to attention / Transformer training workloads | NVIDIA or other accelerator-vendor filings and official announcements | 4–12 quarters | NVIDIA Tier 4 Hypothesis unsupported; assumption 4 unresolved |
| 8 | Extensions to images, audio, or video as the authors plan | Author follow-on official publications | 4–12 quarters | Assumption 3 unresolved; modality `↑` stays plan-only |
| 9 | Constituency parsing or other non-MT tasks showing sustained gains beyond the paper's limited tuning | Official research publications | 2–8 quarters | Broader-NLP `↑` Hypothesis unsupported |
| 10 | Framework-level standard implementations (any vendor) of multi-head attention Transformer stacks | Official framework documentation | 2–8 quarters | Tooling-layer direction stays Unknown |
| 11 | Whether recurrent/conv sequence models continue to lead on major MT leaderboards | Official shared-task results and publications | 2–8 quarters | Invalidating condition on migration if they reclaim SOTA at comparable cost |
| 12 | Any disclosure establishing listed-company status inside a P0 update that also ties the entity to Transformer economics | Official filings and announcements | 4–12 quarters | §8 remains empty; listed-company mapping stays impossible from T0 alone |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Whether code release occurs as intended (**Unknown**) | §2 Unknown list, §7, §9 assumption 1 | Signal 1 |
| Replication of BLEU / cost claims (**Unknown**) | §9 assumption 2 | Signal 2 |
| Training-accelerator value direction (**Hypothesis**) | §5 GPU row, §7 NVIDIA | Signals 7, 4 |
| Framework / tooling layer direction (**Unknown**) | §5 tooling row | Signals 1, 5, 10 |
| Broader NLP task direction (**Hypothesis**) | §5 broader-NLP row | Signals 8, 9 |
| Research-institution and end-user layer directions (**Unknown**) | §5 | Signals 3, 4 |
| Magnitude of customer problem (**Unknown**) | §3 | Signals 2, 3 |
| Vacant Tier 1 durability (**Reasoned Inference**) | §7 | Signals 1, 5, 6 |
| Google as capturer (**Hypothesis**) | §7, §8 exclusion | Signals 4, 5 |
| NVIDIA as capturer (**Hypothesis**) | §7, §8 exclusion | Signal 7 |
| Implementers / end users as capturers (**Hypothesis**) | §7 | Signals 3, 11 |
| Economic profit magnitude (**Unknown**) | §7 Step 4 | Signals 4, 7 |
| Listed companies for §8 (**Unknown**) | §8 | Signal 12 |
| Displaced corporate participants (**Unknown**) | §8 | Signals 3, 11 |
| Hidden commercial restriction (**Unknown**) | §9 assumption 5 | Signal 5 |
| Advantage beyond reported tasks (**Hypothesis**) | §9 assumption 3 | Signals 8, 9 |

No open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1 (repository version; sprint attribution and confidence rules applied). Single P0 source, T0-locked to arXiv:1706.03762v1 dated 2017-06-12. Contains no investment recommendation, no valuation or securities-price information, and no timing signal. All Unknown items remain Unknown.*
