import type { BenchmarkCase } from "../types.ts";

/**
 * Fidelity: PASS
 * T0 source: arXiv preprint 1706.03762, submitted 2017-06-12
 *   https://arxiv.org/abs/1706.03762
 * Later ground-truth source: Google AI Blog, 2018-11-02
 *   https://research.google/blog/open-sourcing-bert-state-of-the-art-pre-training-for-natural-language-processing/
 *   (BERT: Bidirectional Encoder Representations from Transformers open-sourced)
 */
export const irb012Fidelity = "PASS" as const;

export const irb012: BenchmarkCase = {
  id: "IRB-012",
  title: 'Transformer ("Attention Is All You Need")',
  frozenDate: "2017-06-12",
  input: {
    text: "arXiv preprint 1706.03762 “Attention Is All You Need” (submitted 2017-06-12): The authors propose the Transformer, a sequence transduction architecture based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. They report 28.4 BLEU on WMT 2014 English-to-German and a new single-model state-of-the-art 41.8 BLEU on WMT 2014 English-to-French after training 3.5 days on eight GPUs, and state the model is more parallelizable and requires significantly less time to train than prior dominant recurrent/convolutional encoder-decoder approaches.",
  },
  groundTruth: {
    facts: [
      "T0: Paper proposes Transformer architecture based solely on attention (no recurrence/convolutions).",
      "T0: Authors report strong WMT 2014 En-De / En-Fr BLEU results with faster, more parallelizable training.",
      "T0: Dominant prior sequence models are described as recurrent or convolutional encoder-decoders with attention.",
    ],
    customerProblem:
      "T0: Sequence transduction (e.g. translation) needs high quality without the sequential-training bottlenecks of RNNs.",
    leadingSignal:
      "T0: Transformer paper introduces an attention-only architecture that is highly parallelizable.",
    change:
      "T0: Sequence modeling research is offered a non-recurrent attention-only alternative to RNN/CNN encoder-decoders.",
    reasoning:
      "T0 chain: RNNs limit parallel training → Transformer uses self-attention only → if quality holds, modeling/compute value can shift toward attention-based architectures and hardware that accelerates them.",
    valueReallocation:
      "T0 thesis: value shifts toward attention-only Transformer architectures versus RNN/CNN sequence models. LATER verified outcome: Google open-sources BERT (Transformer-based pretraining) as SOTA NLP method (2018-11-02), confirming broad Transformer adoption beyond the original MT setting.",
    winner: "Transformer attention architecture lineage (later verified via BERT).",
    evidence: [
      "T0: arXiv 1706.03762 abstract/claims — attention-only Transformer; WMT BLEU; parallelizability/training-time claims.",
    ],
    verification:
      "LATER (not T0): Google AI Blog 2018-11-02 — open-sourcing BERT (Bidirectional Encoder Representations from Transformers) with SOTA NLP task results.",
    marketBlindSpot:
      "T0 risk: treating the paper as a narrow MT improvement while underweighting a general architecture shift.",
  },
  scoringCriteria: {
    facts: "Only 2017-06-12 arXiv paper statements; no post-2017 LLM outcomes in facts.",
    customerProblem: "Sequence transduction quality vs sequential RNN training cost.",
    leadingSignal: "Attention-only Transformer proposal.",
    reasoning: "RNN bottleneck → Transformer attention → architecture value shift.",
    valueReallocation:
      "Toward Transformer/attention; BERT open-source only as later verification.",
    evidence: "T0 arXiv only; BERT stays in verification.",
  },
};

export default irb012;
