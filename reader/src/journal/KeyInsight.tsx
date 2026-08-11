import type { JournalBrief } from "./types";

type Props = {
  data: JournalBrief["keyInsight"];
};

export function KeyInsight({ data }: Props) {
  return (
    <section className="journal-key-insight" aria-label="Key Insight">
      <div className="journal-key-insight__inner">
        <p className="journal-key-insight__sentence">{data.sentence}</p>
      </div>
    </section>
  );
}
