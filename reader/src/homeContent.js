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
    documentTitle: "Research OS — 可核验的战略研究",
    documentDescription:
      "Research OS 把第一方证据写成决策简报——说清楚发生了什么、价值向何处迁移，以及哪些仍属未知。",
    eyebrow: "公开研究机构",
    brand: "Research OS",
    lede: "一套阅读结构性变化的纪律：第一方来源优先，先证据后判断，未知即保持未知。",
    trust:
      "每一份简报均派生自已完成的研究。不构成投资建议，无目标价。主张须有标注，否则不作主张。",
    whyTitle: "为何需要 Research OS",
    whyBody:
      "市场与评论奖励速度。不确定条件下的判断需要更慢的东西：一份可核对、可修正、可被记住的记录。",
    whyClose:
      "Research OS 存在的目的，是改进这份记录——让读者看清发生了什么、为何可能重要，以及命题仍在何处站不住。",
    principlesTitle: "研究原则",
    principlesLede: "每一份公开简报，都受三条规则约束。",
    principles: [
      {
        title: "仅用第一方来源",
        text: "简报始于已完成的第一方研究。二手叙事从不是基础。",
      },
      {
        title: "先证据，后判断",
        text: "可观察事实先于解释被记录。置信度有标注。未知即保持未知。",
      },
      {
        title: "信任先于增长",
        text: "读者信任高于产量与新鲜感。随时间验证是工作本身的一部分。",
      },
    ],
    methodTitle: "研究如何进行",
    methodLede: "闭环运行。每一阶段引用上一阶段。上游产物不会被静默改写。",
    methodSteps: [
      {
        title: "研究",
        text: "战略研究报告在某一时点冻结证据。",
      },
      {
        title: "简报",
        text: "决策简报提炼结构性命题，供读者阅读——不发明新事实。",
      },
      {
        title: "验证",
        text: "后续证据检验何者成立。教训沉淀为可复用的知识。",
      },
    ],
  },
};

export function getHomeContent(locale) {
  return HOME[locale] ?? HOME.en;
}
