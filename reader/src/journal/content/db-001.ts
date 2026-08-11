import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-001 — Public Beta Sprint 1 editorial rewrite; facts and reasoning unchanged. */
export const db001JournalZh: JournalBrief = {
  slug: "db-001",
  locale: "zh",
  productId: "DB-001",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "真正稀缺的，不是更快的单颗芯片。",
      "而是让许多芯片像一台机器那样工作的连贯整体。",
    ],
    title: "英伟达把 AI 算力从芯片推进到机柜",
    summary: "2024 年 3 月 18 日，英伟达把 Blackwell 作为完整平台推出——液冷机柜、互联与软件一起到来。",
    meta: { id: "DB-001", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "如果超大模型必须让许多加速器像一台机器那样工作，价值会迁向谁？",
  },
  story: {
    paragraphs: [
      "过去几年，如果有人问：AI 算力竞争看什么？",
      "大多数人的答案都很直接。",
      "更快的 GPU。",
      "更多的 FLOPs。",
      "这些都没有错。",
      "但当模型大到单加速器装不下时，问题就变了。",
      "许多芯片必须以买家扛得住的成本与功耗，表现得像一台机器。",
      "Blackwell 的答案，不是又一块板卡。",
      "而是一个机柜——英伟达称其可充当单一 GPU。",
      "采购单元上移。",
      "从芯片，或八 GPU 板卡，转向连贯的多 GPU 机柜。",
      "旗舰设计走液冷。",
      "芯片间互联、网络与软件，作为同一平台到来。",
    ],
  },
  diagram: {
    nodes: ["板卡级 GPU", "液冷机柜（可当一台 GPU）", "NVLink + 平台软件"],
    caption: "采购单元上移：零件 → 连贯整体 → 专有互联与软件",
  },
  keyInsight: {
    sentence: "瓶颈若在“多芯片像一台机器”，价值就迁向机柜级连贯性的拥有者。",
  },
  analysis: {
    paragraphs: [
      "2024 年 3 月 18 日。",
      "Blackwell GPU：2080 亿晶体管，定制 TSMC 4NP，两颗裸片合成一颗。",
      "第五代 NVLink：每颗最高 1.8TB/s，最多连 576 颗。",
      "旗舰 GB200 NVL72：液冷机柜，72 GPU + 36 Grace CPU；英伟达称可充当单一 GPU。",
      "厂商宣称：相较同等数量 H100，LLM 推理最高可提升 30×；成本与能耗最高可降 25×。",
      "合作伙伴“将于今年晚些时候”供货。",
      "早期云含 AWS、Google Cloud、Microsoft Azure、Oracle Cloud。",
      "要最大连贯域的买家，就得接受专有互联结构与更高密度设施设计。",
      "多数买家最终选完整机柜，还是更简单的八 GPU 板卡路径，仍属 Unknown。",
      "价值压力转向谁拥有机柜级互联结构与平台软件。",
      "英伟达被点名为该平台所有者；台积电为被点名的晶圆制造商。",
      "价格与谁留住宣称的成本节约，仍属 Unknown。",
      "方向比收益大小更清楚。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看单件谁更快。先问自己：谁拥有让许多部件像一台机器工作的连贯性？",
    applyLabel: "Where else can this apply?",
    applyTo: ["多芯片 AI 训练", "HPC", "液冷数据中心", "云加速实例", "封装与互联"],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "出现竞品或开放互联，能达到类似多 GPU 域",
      "稀缺层其实是封装、内存或冷却，定价权在英伟达之外",
      "买家大多选择八 GPU 板卡，而不是完整连贯机柜",
      "宣称的成本与能耗收益未能在真实生产中显现",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-002", slug: "db-002", title: "CUDA：稀缺点在编程模型，不在显卡速度", href: "/zh/briefs/db-002" },
      { id: "DB-011", slug: "db-011", title: "美光 HBM3E：AI 稀缺上移到高带宽内存", href: "/zh/briefs/db-011" },
      { id: "DB-008", slug: "db-008", title: "MI300：竞争看 HBM3 与 ROCm，不看峰值 FLOPs", href: "/zh/briefs/db-008" },
    ],
  },
  footer: JOURNAL_FOOTER,
};

export const db001JournalEn: JournalBrief = {
  slug: "db-001",
  locale: "en",
  productId: "DB-001",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The scarce thing is not a faster single chip.",
      "It is the coherent whole that makes many chips act as one machine.",
    ],
    title: "NVIDIA Moves AI Computing From the Chip to the Rack",
    summary:
      "On 18 March 2024, NVIDIA shipped Blackwell as a full platform — liquid-cooled rack, links, and software together.",
    meta: { id: "DB-001", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "If huge models need many accelerators to act as one machine, where does value migrate?",
  },
  story: {
    paragraphs: [
      "For years, the AI compute race sounded simple.",
      "Faster GPUs.",
      "More FLOPs.",
      "That is not wrong.",
      "But when the model no longer fits one accelerator, the problem changes.",
      "Many chips must behave as one — at a cost and power level buyers can live with.",
      "Blackwell’s answer is not just a new board.",
      "It is a rack that NVIDIA says can act as one GPU.",
      "The purchase unit moves up.",
      "From a chip, or an eight-GPU board, toward a coherent multi-GPU rack.",
      "The flagship design is liquid-cooled.",
      "Links, networking, and software arrive as one platform.",
    ],
  },
  diagram: {
    nodes: ["Board-level GPU", "Liquid-cooled rack (acts as one GPU)", "NVLink + platform software"],
    caption: "Purchase unit moves up: part → coherent whole → proprietary fabric and software",
  },
  keyInsight: {
    sentence:
      "If the bottleneck is many accelerators acting as one, value migrates to the owner of rack-scale coherence.",
  },
  analysis: {
    paragraphs: [
      "18 March 2024.",
      "Blackwell GPUs: 208 billion transistors on custom TSMC 4NP; two dies joined into one GPU.",
      "Fifth-generation NVLink: 1.8TB/s per GPU; up to 576 GPUs.",
      "Flagship GB200 NVL72: liquid-cooled rack with 72 Blackwell GPUs and 36 Grace CPUs; NVIDIA says it acts as a single GPU.",
      "NVIDIA claims up to 30× higher LLM inference versus the same number of H100s, and up to 25× lower cost and energy versus the prior generation (vendor claims).",
      "Partners were to offer products “starting later this year.”",
      "Early clouds: AWS, Google Cloud, Microsoft Azure, Oracle Cloud.",
      "Buyers who want the largest coherent domain must accept a proprietary link fabric and denser facility design.",
      "Whether most buyers choose the full rack or a simpler eight-GPU board path is still Unknown.",
      "Value pressure moves to whoever owns the rack-scale fabric and platform software.",
      "NVIDIA is named as platform owner; TSMC as named wafer maker.",
      "Prices and who keeps claimed cost savings are still Unknown.",
      "Direction is clearer than magnitude.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "Don’t only ask which part is faster. Ask first: who owns the coherence that makes many parts act as one machine?",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "Multi-chip AI training",
      "HPC",
      "Liquid-cooled data centers",
      "Cloud accelerator instances",
      "Packaging & interconnect",
    ],
  },
  changeMind: {
    prompt: "What would change today’s conclusion?",
    items: [
      "A rival or open link standard reaches a similar multi-GPU domain",
      "The scarce layer is packaging, memory, or cooling — with pricing power outside NVIDIA",
      "Buyers mostly take eight-GPU boards instead of the full coherent rack",
      "Claimed cost and energy gains do not show up in real production",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      {
        id: "DB-002",
        slug: "db-002",
        title: "NVIDIA Turns the GPU Into a Programmable Compute Platform",
        href: "/briefs/db-002",
      },
      {
        id: "DB-008",
        slug: "db-008",
        title: "AMD Positions MI300 as High-Memory Instinct Compute for LLMs and HPC",
        href: "/briefs/db-008",
      },
      {
        id: "DB-011",
        slug: "db-011",
        title: "Micron HBM3E: AI Scarcity Moves to High-Bandwidth Memory",
        href: "/zh/briefs/db-011",
      },
    ],
  },
  footer: JOURNAL_FOOTER,
};
