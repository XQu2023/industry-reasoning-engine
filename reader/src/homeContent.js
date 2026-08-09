/** Homepage editorial copy only. Keeps UI chrome (i18n) and brief bodies separate. */

const HOME = {
  en: {
    documentTitle: "Research OS — Strategic research you can verify",
    documentDescription:
      "Research OS publishes Decision Briefs from first-party evidence—clear on what changed, where value moves, and what remains Unknown.",
    eyebrow: "Public research institution",
    brand: "Research OS",
    lede: "A discipline for reading structural change: primary sources first, evidence before judgment, Unknown left Unknown.",
    trust:
      "Every brief is derived from completed research. No investment advice. No price targets. Claims are labeled, or they are not made.",
    whyTitle: "Why Research OS exists",
    whyBody:
      "Markets and commentary reward speed. Judgment under uncertainty needs something slower: a record that can be checked, revised, and remembered.",
    whyClose:
      "Research OS exists to improve that record—so readers can see what changed, why it may matter, and where the thesis still fails.",
    principlesTitle: "Research principles",
    principlesLede: "Three rules govern every public brief.",
    principles: [
      {
        title: "Primary sources only",
        text: "A brief begins from completed first-party research. Secondhand narrative is never the foundation.",
      },
      {
        title: "Evidence, then judgment",
        text: "Observable facts are recorded before interpretation. Confidence is labeled. Unknown stays Unknown.",
      },
      {
        title: "Trust before growth",
        text: "Reader trust outranks volume and novelty. Validation over time is part of the work.",
      },
    ],
    methodTitle: "How research works",
    methodLede: "A closed loop. Each stage cites the last. Nothing is silently rewritten upstream.",
    methodSteps: [
      {
        title: "Research",
        text: "A Strategic Research Report freezes the evidence at a point in time.",
      },
      {
        title: "Brief",
        text: "A Decision Brief distills the structural thesis for readers—without inventing new facts.",
      },
      {
        title: "Validation",
        text: "Later evidence tests what held. Lessons compound into durable knowledge.",
      },
    ],
  },
  zh: {
    documentTitle: "Research OS — 可核对的战略研究",
    documentDescription:
      "Research OS 用第一方证据写决策简报：说清楚变了什么、价值往哪走、哪些事还不知道。",
    eyebrow: "公开研究机构",
    brand: "Research OS",
    lede: "看清产业变化，而不是市场噪音。",
    trust:
      "每份简报都来自已完成的研究。不做投资建议，不给目标价。有依据才下判断；没依据，就明说不知道。",
    whyTitle: "为什么需要 Research OS",
    whyBody:
      "市场喜欢快。不确定时，判断却需要慢一点：留下一份能核对、能修正、能记住的记录。",
    whyClose:
      "Research OS 就是为这份记录而存在。让读者看清发生了什么、为什么可能重要，以及论点还在哪里站不住。",
    principlesTitle: "研究原则",
    principlesLede: "公开简报，都守这三条。",
    principles: [
      {
        title: "只用第一方来源",
        text: "简报从已完成的第一方研究出发。二手故事，不能当地基。",
      },
      {
        title: "先看事实，再下判断",
        text: "先记下能核对的事实，再写解释。把握有多大，就标多大。不知道，就明确说不知道。",
      },
      {
        title: "信任，比增长更重要",
        text: "读者信任，高于产量和新鲜感。经得起时间检验，才算做完。",
      },
    ],
    methodTitle: "研究怎么做",
    methodLede: "闭环推进。后一步引用前一步。上游结论，不会被悄悄改写。",
    methodSteps: [
      {
        title: "研究",
        text: "战略研究报告先把证据冻在某一时点。",
      },
      {
        title: "简报",
        text: "决策简报只提炼结构论点，不发明新事实。",
      },
      {
        title: "验证",
        text: "用后来的证据检验哪些站得住。教训留下来，变成可复用的知识。",
      },
    ],
  },
};

export function getHomeContent(locale) {
  return HOME[locale] ?? HOME.en;
}
