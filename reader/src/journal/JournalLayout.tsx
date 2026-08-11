import { Analysis } from "./Analysis";
import { ChangeMind } from "./ChangeMind";
import { ContinueThinking } from "./ContinueThinking";
import { Diagram } from "./Diagram";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { KeyInsight } from "./KeyInsight";
import { Question } from "./Question";
import { Story } from "./Story";
import { WorldModel } from "./WorldModel";
import type { JournalBrief } from "./types";
import "./journal-theme.css";

type Props = {
  brief: JournalBrief;
};

/**
 * Fixed journal page order. Do not reorder sections.
 * Hero → Question → Story → Diagram → Key Insight → Analysis →
 * World Model → Change Mind → Continue Thinking → Footer
 */
export function JournalLayout({ brief }: Props) {
  return (
    <article className="journal" data-journal-slug={brief.slug} data-journal-locale={brief.locale}>
      <Hero data={brief.hero} homeHref={brief.homeHref} />
      <Question data={brief.question} />
      <Story data={brief.story} />
      <Diagram data={brief.diagram} />
      <KeyInsight data={brief.keyInsight} />
      <Analysis data={brief.analysis} />
      <WorldModel data={brief.worldModel} />
      <ChangeMind data={brief.changeMind} />
      <ContinueThinking data={brief.continueThinking} />
      <Footer data={brief.footer} />
    </article>
  );
}
