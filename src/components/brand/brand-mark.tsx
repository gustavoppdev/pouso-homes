export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="none">
      <rect width="32" height="32" rx="4" className="fill-primary" />
      <rect
        x="6"
        y="8.5"
        width="14"
        height="7"
        className="stroke-primary-foreground"
        strokeWidth="1.6"
      />
      <rect
        x="12"
        y="15.5"
        width="14"
        height="7"
        className="stroke-primary-foreground"
        strokeWidth="1.6"
      />
    </svg>
  );
}
