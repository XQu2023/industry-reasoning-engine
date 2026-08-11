import { ForesightMark } from "./ForesightMark";
import type { JournalBrief } from "./types";

type Props = {
  data: JournalBrief["hero"];
  homeHref: string;
};

export function Hero({ data, homeHref }: Props) {
  return (
    <header className="journal-hero">
      <div className="journal-hero__inner">
        <a className="journal-hero__brand" href={homeHref}>
          <ForesightMark />
          <span className="journal-hero__brand-text">FORESIGHT</span>
        </a>
        <p className="journal-hero__quote">
          {data.quoteLines.map((line) => (
            <span className="journal-hero__quote-line" key={line}>
              {line}
            </span>
          ))}
        </p>
        <h1 className="journal-hero__title">{data.title}</h1>
        <p className="journal-hero__summary">{data.summary}</p>
        <ul className="journal-hero__meta" aria-label="Metadata">
          <li>{data.meta.id}</li>
          <li>{data.meta.readingTime}</li>
          <li>{data.meta.industry}</li>
        </ul>
      </div>
    </header>
  );
}
