import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-001 — layout migration only; facts and reasoning preserved. */
export const db001JournalZh: JournalBrief = {
  slug: "db-001",
  locale: "zh",
  productId: "DB-001",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "真正稀缺的是那个连贯整体，而不是任何单颗芯片。",
      "竞争转向：谁控制多 GPU 之间的连贯性。",
    ],
    title: "英伟达把 AI 算力从芯片推进到机柜",
    summary:
      "2024 年 3 月 18 日，英伟达公布 Blackwell 完整平台：液冷机柜把多颗 GPU 连成一体，并称可整体运行，同时配上网络与软件。若超大 AI 模型需要许多芯片像一台系统那样协作，真正稀缺的是那个连贯整体。公告里没有价格，盈余如何分配仍属 Unknown。",
    meta: { id: "DB-001", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "若万亿参数实时 AI 的瓶颈在于让许多加速器像一台机器那样工作，价值会迁向谁？",
  },
  story: {
    paragraphs: [
      "实时跑超大 AI 模型，关键往往不是“把单芯片做得更快”。",
      "模型太大，单加速器装不下。许多芯片必须以买家扛得住的成本与功耗，表现得像一台机器。",
      "Blackwell 的答案是一个机柜——英伟达称其可充当单一 GPU——而不只是新的板卡。",
      "采购单元上移：从芯片或八 GPU 板卡，转向连贯的多 GPU 机柜。",
      "旗舰设计走液冷；芯片间互联、网络与软件作为同一平台到来。",
    ],
  },
  diagram: {
    nodes: [
      "板卡级 GPU / 服务器采购",
      "可充当单一 GPU 的液冷机柜",
      "英伟达专有 NVLink + 平台软件",
      "运行大模型的云与 AI 建设者",
    ],
    caption: "价值迁向机柜级互联与把机柜当一台机器用的软件",
  },
  keyInsight: {
    sentence: "若瓶颈在于让许多加速器像一台机器那样工作，价值就会迁向机柜级连贯性的拥有者。",
  },
  analysis: {
    paragraphs: [
      "2024 年 3 月 18 日：Blackwell GPU（2080 亿晶体管，定制 TSMC 4NP，两颗裸片合成一颗）；第五代 NVLink 每颗最高 1.8TB/s、最多连 576 颗；旗舰 GB200 NVL72 为液冷机柜（72 GPU + 36 Grace CPU），英伟达称可充当单一 GPU。",
      "厂商宣称：相较同等数量 H100，LLM 推理最高可提升 30×；成本与能耗最高可降 25×。合作伙伴“将于今年晚些时候”供货；早期云含 AWS、Google Cloud、Microsoft Azure、Oracle Cloud。",
      "结构性变化：要最大连贯域的买家，就得接受专有互联结构与更高密度设施设计。多数买家最终选完整机柜还是更简单的八 GPU 板卡路径，仍属 Unknown。",
      "价值压力转向谁拥有机柜级互联结构与平台软件；英伟达被点名为该平台所有者，台积电为被点名的晶圆制造商。价格与谁留住宣称的成本节约，仍属 Unknown——方向比收益大小更清楚。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "当工作负载需要许多部件表现得像一台机器时，价值迁向连贯性（互联与把整体当一台系统用的软件）的拥有者，而不只是更快的单件。",
    applyLabel: "Where else can this apply?",
    applyTo: ["多芯片 AI 训练集群", "HPC", "液冷高密度数据中心", "云加速实例", "封装与互联层"],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "出现竞品或开放互联标准，能在不依赖英伟达互联结构的情况下达到类似的多 GPU 域",
      "证明稀缺层其实是封装、内存或冷却——且定价权在英伟达之外",
      "买家大多选择八 GPU 板卡，而不是完整连贯机柜",
      "宣称的成本与能耗收益未能在真实生产中显现",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-002", slug: "db-002", title: "CUDA：稀缺点在编程模型，不在显卡速度", href: "/zh/briefs/db-002" },
      { id: "DB-008", slug: "db-008", title: "MI300：竞争看 HBM3 与 ROCm，不看峰值 FLOPs", href: "/zh/briefs/db-008" },
      { id: "DB-003", slug: "db-003", title: "ASML：T0 抓取在浸没延寿，不在 EUV 已落地", href: "/zh/briefs/db-003" },
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
      "The scarce thing is that coherent whole — not any single chip.",
      "Competition moves toward who controls coherence across many GPUs.",
    ],
    title: "NVIDIA Moves AI Computing From the Chip to the Rack",
    summary:
      "On 18 March 2024, NVIDIA announced Blackwell as a full platform: a liquid-cooled rack of linked GPUs that it says can act as one, plus the networking and software to run it. If very large AI models need many chips to work as one system, the scarce thing is that coherent whole. Price and how cost savings split remain Unknown.",
    meta: { id: "DB-001", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "If trillion-parameter real-time AI is limited by making many accelerators act as one, where does value migrate?",
  },
  story: {
    paragraphs: [
      "Serving huge AI models in real time is not mainly a “make one chip faster” problem.",
      "The model is too big for one accelerator, so many chips must behave as one — at a cost and power level buyers can live with.",
      "Blackwell answers that with a rack that NVIDIA says works as one GPU, not just a new board.",
      "The purchase unit moves up toward a coherent multi-GPU rack; the flagship design is liquid-cooled.",
      "Links between chips, networking, and software arrive as one platform.",
    ],
  },
  diagram: {
    nodes: [
      "Board-level GPU / server buy",
      "Liquid-cooled rack that acts as one GPU",
      "NVIDIA proprietary NVLink + platform software",
      "Cloud & AI builders who run large models",
    ],
    caption: "Value moves toward rack-scale link fabric and software that treats the rack as one machine",
  },
  keyInsight: {
    sentence:
      "If real-time AI is limited by making many accelerators act as one, value migrates to the owner of rack-scale coherence.",
  },
  analysis: {
    paragraphs: [
      "18 March 2024: Blackwell GPUs — 208 billion transistors on custom TSMC 4NP as two dies joined into one GPU; fifth-generation NVLink at 1.8TB/s per GPU, up to 576 GPUs; flagship GB200 NVL72 is a liquid-cooled rack with 72 Blackwell GPUs and 36 Grace CPUs that NVIDIA says acts as a single GPU.",
      "NVIDIA claims up to 30× higher LLM inference versus the same number of H100s, and up to 25× lower cost and energy versus the prior generation (vendor claims). Partners were to offer products “starting later this year.” Early clouds: AWS, Google Cloud, Microsoft Azure, Oracle Cloud.",
      "Structural change: buyers who want the largest coherent domain must accept a proprietary link fabric and denser facility design. Whether most buyers choose the full rack or a simpler eight-GPU board path is still Unknown.",
      "NVIDIA is named as platform owner; TSMC as named wafer maker. Prices and who keeps claimed cost savings are still Unknown — direction clearer than magnitude.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "When workloads require many parts to behave as one machine, value migrates to whoever owns coherence — the link fabric and the software that treats the whole as one system — not just a faster single part.",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "Multi-chip AI training clusters",
      "HPC",
      "Liquid-cooled dense data centers",
      "Cloud accelerator instances",
      "Advanced packaging & interconnect",
    ],
  },
  changeMind: {
    prompt: "What would change today’s conclusion?",
    items: [
      "A rival or open link standard that reaches a similar multi-GPU domain without NVIDIA’s fabric",
      "Proof that the scarce layer is packaging, memory, or cooling — with pricing power outside NVIDIA",
      "Buyers mostly taking eight-GPU boards instead of the full coherent rack",
      "The claimed cost and energy gains not showing up in real production use",
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
        id: "DB-003",
        slug: "db-003",
        title: "ASML Places EUV Tools While Immersion Extension Still Carries the Capture Story",
        href: "/briefs/db-003",
      },
    ],
  },
  footer: JOURNAL_FOOTER,
};
