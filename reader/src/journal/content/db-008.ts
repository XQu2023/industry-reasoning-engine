import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-008 — Public Beta Sprint 2 editorial rewrite; facts and reasoning unchanged. */
export const db008JournalZh: JournalBrief = {
  slug: "db-008",
  locale: "zh",
  productId: "DB-008",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "稀缺的不是又一次峰值 FLOPs 竞赛。",
      "而是高 HBM3 容量，加上可用的开放软件路径。",
    ],
    title: "MI300：竞争看 HBM3 与 ROCm，不看峰值 FLOPs",
    summary:
      "2023 年 12 月 6 日，AMD 宣布 Instinct MI300X 与 MI300A 可供货——192 GB HBM3、ROCm 6，内存与软件入主标题。",
    meta: { id: "DB-008", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "若 LLM 与 HPC 受制于 HBM3 级内存与可用开放软件路径，价值迁向谁？",
  },
  story: {
    paragraphs: [
      "过去几年，如果有人问：加速器竞争看什么？",
      "答案往往是更快的芯片、更多的 FLOPs。",
      "这些都没有错。",
      "但大模型与 HPC，往往卡在内存，不卡在算完 FLOPs。",
      "需要巨大内存与带宽。",
      "买方还要软件路径，以及真实设计导入。",
      "产品叙事变了。",
      "内存与软件入主标题。",
      "MI300X：192 GB HBM3 成头条稀缺资源。",
      "MI300A：CDNA 3 与 Zen 4 合一，覆盖 HPC/AI 的 CPU–GPU 一致性。",
      "ROCm 6 是标配，不是附赠。",
      "设计导入能否变成持续放量，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: ["LLM / HPC 内存压力", "高 HBM3 Instinct 加速器", "ROCm 6 开放软件路径"],
    caption: "价值迁向：内存瓶颈 → 高 HBM3 硬件 → 配对软件栈",
  },
  keyInsight: {
    sentence: "若瓶颈在 HBM3 级内存与开放软件路径，价值就迁向 AMD 的 MI300 Instinct 组合。",
  },
  analysis: {
    paragraphs: [
      "2023 年 12 月 6 日。",
      "MI300X：192 GB HBM3、5.3 TB/s。",
      "AMD 宣称相对 H100 级在 LLM 相关内存指标上领先。",
      "MI300A：CDNA 3 GPU + Zen 4 CPU 的 APU。",
      "ROCm 6；AMD 宣称相对前代 AMD，Llama 2 文本生成约 8×（厂商宣称）。",
      "具名路径：Microsoft Azure、Oracle Cloud Infrastructure、Dell、HPE、Lenovo、Supermicro。",
      "提及 El Capitan / LLNL。",
      "工艺节点提及 5nm/6nm 级；HBM 供应商身份在所用抓取中未立为公司名。",
      "来源点名 AMD 为 Tier 1。",
      "设计导入能否变成持续放量，以及相对 HBM/晶圆厂谁留盈余，仍属 Unknown。",
      "价格、体量与份额仍属 Unknown。",
      "宣称属 AMD；他处验证前不作独立事实。",
      "方向清楚：框在高 HBM3、APU 封装与 ROCm，不是“又一个 GPU SKU”。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看谁峰值 FLOPs 更高。先问自己：谁把高容量内存与可用软件路径一起交付？",
    applyLabel: "Where else can this apply?",
    applyTo: ["生成式 AI 训练/推理", "HPC", "HBM 供应层", "云加速实例", "开放加速软件栈"],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "AMD 无法规模供货",
      "盈余主要落在 HBM 或晶圆厂供应商",
      "运营方停留在上一代或对手加速器",
      "开放/可移植软件使 MI300 成完全可互换商品，AMD 无留存",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-001", slug: "db-001", title: "英伟达把 AI 算力从芯片推进到机柜", href: "/zh/briefs/db-001" },
      { id: "DB-002", slug: "db-002", title: "CUDA：稀缺点在编程模型，不在显卡速度", href: "/zh/briefs/db-002" },
      { id: "DB-006", slug: "db-006", title: "ChatGPT：对话成大模型公共入口，Tier 1 空着", href: "/zh/briefs/db-006" },
    ],
  },
  footer: JOURNAL_FOOTER,
};

export const db008JournalEn: JournalBrief = {
  slug: "db-008",
  locale: "en",
  productId: "DB-008",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The scarce thing is not another peak-FLOPs race.",
      "It is high HBM3 capacity — plus a usable open software path.",
    ],
    title: "AMD Positions MI300 as High-Memory Instinct Compute for LLMs and HPC",
    summary:
      "On 6 December 2023, AMD announced Instinct MI300X and MI300A availability — 192 GB HBM3, ROCm 6; memory and software take the headline.",
    meta: { id: "DB-008", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "If LLM and HPC demand is limited by HBM3-class memory and a usable open software path, where does value migrate?",
  },
  story: {
    paragraphs: [
      "For years, the accelerator race sounded simple.",
      "Faster chips.",
      "More FLOPs.",
      "That is not wrong.",
      "But large language models and HPC often stall on memory — not on finishing FLOPs.",
      "They need huge memory and bandwidth.",
      "Buyers also need a software path and real design-ins.",
      "The product narrative changes.",
      "Memory and software take the headline.",
      "MI300X: 192 GB HBM3-class capacity as the scarce resource.",
      "MI300A: CDNA 3 with Zen 4 — CPU–GPU coherence for HPC/AI.",
      "ROCm 6 is part of the offer, not an afterthought.",
      "Whether design-ins become sustained volume is still Unknown.",
    ],
  },
  diagram: {
    nodes: ["LLM / HPC memory pressure", "High-HBM3 Instinct accelerators", "ROCm 6 open software path"],
    caption: "Value migrates: memory bottleneck → high-HBM3 hardware → paired software stack",
  },
  keyInsight: {
    sentence:
      "If the bottleneck is HBM3-class memory and a usable open software path, value migrates to AMD’s MI300 Instinct portfolio.",
  },
  analysis: {
    paragraphs: [
      "6 December 2023.",
      "MI300X: 192 GB HBM3, 5.3 TB/s.",
      "AMD claims leadership versus NVIDIA H100-class on memory metrics relevant to LLMs.",
      "MI300A: CDNA 3 GPU + Zen 4 CPU APU.",
      "ROCm 6; AMD claims about 8× improvement versus prior AMD on Llama 2 text generation (vendor claim).",
      "Named paths: Microsoft Azure, Oracle Cloud Infrastructure, Dell, HPE, Lenovo, Supermicro.",
      "El Capitan / LLNL referenced.",
      "Process nodes (5nm/6nm class); HBM supplier identity not established as a firm name in the capture used.",
      "AMD is named as Tier 1.",
      "Whether design-ins become sustained volume — and who keeps surplus versus HBM/foundry — is still Unknown.",
      "Prices, volumes, and surplus share remain Unknown.",
      "Claims are AMD’s until verified elsewhere.",
      "Direction is clear: competition framed around high HBM3, APU packaging, and ROCm — not “another GPU SKU.”",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "Don’t only ask who posts higher peak FLOPs. Ask first: who delivers high-capacity memory paired with a usable software path?",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "Generative AI training/inference",
      "HPC",
      "HBM supply layer",
      "Cloud accelerator instances",
      "Open accelerator software stacks",
    ],
  },
  changeMind: {
    prompt: "What would change today’s conclusion?",
    items: [
      "AMD failing to supply at scale",
      "Surplus accruing mainly to HBM or foundry suppliers",
      "Operators staying on prior-gen or rival accelerators",
      "Open/portable software making MI300 a fully interchangeable commodity with no AMD retention",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      {
        id: "DB-001",
        slug: "db-001",
        title: "NVIDIA Moves AI Computing From the Chip to the Rack",
        href: "/briefs/db-001",
      },
      {
        id: "DB-002",
        slug: "db-002",
        title: "NVIDIA Turns the GPU Into a Programmable Compute Platform",
        href: "/briefs/db-002",
      },
      {
        id: "DB-006",
        slug: "db-006",
        title: "ChatGPT Makes Dialogue the Public Interface to Large Language Models",
        href: "/briefs/db-006",
      },
    ],
  },
  footer: JOURNAL_FOOTER,
};
