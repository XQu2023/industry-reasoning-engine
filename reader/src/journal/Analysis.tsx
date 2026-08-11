import type { JournalBrief } from "./types";

type Props = {
  data: JournalBrief["analysis"];
};

export function Analysis({ data }: Props) {
  return (
    <section className="journal-section journal-analysis" aria-label="Analysis">
      <h2 className="journal-title">Analysis</h2>
      {data.paragraphs.map((paragraph) => (
        <p className="journal-body" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
