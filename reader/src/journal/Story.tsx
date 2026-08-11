import type { JournalBrief } from "./types";

type Props = {
  data: JournalBrief["story"];
};

export function Story({ data }: Props) {
  return (
    <section className="journal-section journal-story" aria-label="Story">
      {data.paragraphs.map((paragraph) => (
        <p className="journal-body" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
