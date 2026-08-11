import type { JournalBrief } from "./types";

type Props = {
  data: JournalBrief["question"];
};

export function Question({ data }: Props) {
  return (
    <section className="journal-section journal-question" aria-label="Question">
      <p className="journal-question__text">{data.text}</p>
    </section>
  );
}
