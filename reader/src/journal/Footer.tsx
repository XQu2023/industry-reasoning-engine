import { ForesightMark } from "./ForesightMark";
import type { JournalBrief } from "./types";

type Props = {
  data: JournalBrief["footer"];
};

export function Footer({ data }: Props) {
  return (
    <footer className="journal-footer">
      <div className="journal-footer__inner">
        <p className="journal-footer__mark">
          <ForesightMark />
          <span className="journal-footer__brand">{data.brand}</span>
        </p>
        <div className="journal-footer__lines">
          {data.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
