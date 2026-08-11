export function ForesightMark({ className = "journal-mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="12" />
      <text x="12" y="15.5" textAnchor="middle">
        F
      </text>
    </svg>
  );
}
