import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-008 — layout migration only; facts and reasoning preserved. */
export const db008JournalZh: JournalBrief = {
  slug: "db-008",
  locale: "zh",
  productId: "DB-008",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "稀缺点在高 HBM3 Instinct 栈，不在算术单元竞赛。",
      "卖点不只是峰值芯片 FLOPs。",
    ],
    title: "MI300：竞争看 HBM3 与 ROCm，不看峰值 FLOPs",
    summary:
      "2023 年 12 月 6 日，AMD 宣布 Instinct MI300X 与 MI300A 可供货：MI300X 配 192 GB HBM3、5.3 TB/s 带宽，MI300A 将 CDNA 3 与 Zen 4 合一，外加 ROCm 6。若 LLM 与 HPC 受制于内存容量与开放软件路径，价值迁向该高 HBM3 Instinct 栈。价格、出货量与留存份额仍属 Unknown。",
    meta: { id: "DB-008", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "若 LLM 与 HPC 受制于 HBM3 级内存与可用开放软件路径，价值迁向谁？",
  },
  story: {
    paragraphs: [
      "变的是产品叙事：内存与软件入主标题。",
      "大模型与 HPC 卡在内存，不卡在算完 FLOPs——需要巨大内存与带宽，不只更多算术单元。",
      "买方还要软件路径（ROCm）与真实设计导入。",
      "MI300X 上 192 GB HBM3 级容量成头条稀缺资源；MI300A 覆盖 HPC/AI 的 CPU–GPU 一致性。",
      "ROCm 6 作为与硬件配对的开放栈，是标配而非附赠。",
    ],
  },
  diagram: {
    nodes: [
      "LLM / HPC 内存容量压力",
      "CDNA 3 MI300X 高 HBM3 加速器",
      "MI300A APU + ROCm 6 软件路径",
      "云、OEM 与 HPC 买方",
    ],
    caption: "价值迁向高 HBM3 Instinct 系统加 ROCm（若设计导入变成持续部署）",
  },
  keyInsight: {
    sentence:
      "LLM 与 HPC 需求若受制于 HBM3 级内存与可用开放软件路径，价值迁向 AMD 的 MI300 Instinct 组合。",
  },
  analysis: {
    paragraphs: [
      "2023 年 12 月 6 日：MI300X — 192 GB HBM3、5.3 TB/s；AMD 宣称相对 H100 级在 LLM 相关内存指标上领先。MI300A — CDNA 3 GPU + Zen 4 CPU 的 APU。ROCm 6；AMD 宣称相对前代 AMD，Llama 2 文本生成约 8×（厂商宣称）。",
      "具名路径：Microsoft Azure、Oracle Cloud Infrastructure、Dell、HPE、Lenovo、Supermicro；提及 El Capitan / LLNL。工艺节点提及（5nm/6nm 级）；HBM 供应商身份在所用抓取中未立为公司名。",
      "设计导入能否变成持续放量，以及相对 HBM/晶圆厂谁留盈余，仍属 Unknown。来源点名 AMD 为 Tier 1。",
      "方向清楚：加速器竞争框在高 HBM3、APU 封装与 ROCm，不是“又一个 GPU SKU”。价格、体量与份额仍属 Unknown；宣称属 AMD，他处验证前不作独立事实。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "当工作负载卡在内存容量/带宽与可用软件路径，而不卡在峰值 FLOPs 时，价值迁向把高容量内存与软件栈一起交付的加速器组合所有者。",
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
      "Competition around very large HBM3 memory and ROCm 6 — not only peak chip FLOPs.",
      "Memory becomes the headline scarce resource.",
    ],
    title: "AMD Positions MI300 as High-Memory Instinct Compute for LLMs and HPC",
    summary:
      "On 6 December 2023, AMD announced availability of Instinct MI300X and MI300A: MI300X with 192 GB HBM3 and 5.3 TB/s bandwidth, MI300A combining CDNA 3 with Zen 4, plus ROCm 6. If LLM and HPC workloads are limited by memory capacity and an open software path, value migrates toward that high-HBM3 Instinct stack. Price, shipments, and retained share remain Unknown.",
    meta: { id: "DB-008", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "If LLM and HPC demand is limited by HBM3-class memory and a usable open software path, where does value migrate?",
  },
  story: {
    paragraphs: [
      "Large language models and HPC workloads need huge memory and bandwidth, not only more arithmetic units.",
      "Buyers also need a software path (ROCm) and real design-ins.",
      "MI300 answers with a portfolio move: 192 GB HBM3-class capacity on MI300X as the headline scarce resource.",
      "Packaging spans discrete and APU — MI300X for accelerator nodes; MI300A for CPU–GPU coherence in HPC/AI.",
      "Software is part of the offer: ROCm 6 as the open stack AMD pairs with the hardware.",
    ],
  },
  diagram: {
    nodes: [
      "LLM / HPC memory-capacity pressure",
      "CDNA 3 MI300X high-HBM3 accelerators",
      "MI300A APU + ROCm 6 software path",
      "Cloud, OEM, and HPC buyers",
    ],
    caption:
      "Value moves toward high-HBM3 Instinct systems plus ROCm if design-ins become sustained deployments",
  },
  keyInsight: {
    sentence:
      "If LLM and HPC demand is limited by HBM3-class memory and a usable open software path, value migrates to AMD’s MI300 Instinct portfolio.",
  },
  analysis: {
    paragraphs: [
      "6 December 2023: MI300X — 192 GB HBM3, 5.3 TB/s; AMD claims leadership versus NVIDIA H100-class on memory metrics relevant to LLMs. MI300A — CDNA 3 GPU + Zen 4 CPU APU. ROCm 6; AMD claims about 8× improvement versus prior AMD on Llama 2 text generation (vendor claim).",
      "Named paths: Microsoft Azure, Oracle Cloud Infrastructure, Dell, HPE, Lenovo, Supermicro; El Capitan / LLNL referenced. Process nodes (5nm/6nm class); HBM supplier identity not established as a firm name in the capture used.",
      "Whether design-ins become sustained volume — and who keeps surplus versus HBM/foundry — is still Unknown. AMD is named as Tier 1.",
      "MI300 is less “another GPU SKU” than accelerator competition framed around high HBM3, APU packaging, and ROCm. Prices, volumes, and surplus share remain Unknown. Claims are AMD’s until verified elsewhere.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "When workloads are limited by memory capacity/bandwidth and a usable software path rather than peak FLOPs, value migrates to whoever delivers the high-memory accelerator stack paired with that software path.",
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
