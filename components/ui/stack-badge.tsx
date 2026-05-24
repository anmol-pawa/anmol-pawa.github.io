/**
 * StackBadge — a single tech-stack pill. Renders as a monospace chip.
 */
interface StackBadgeProps {
  label: string;
  /** Optional accent color override (defaults to pg-cyan). */
  accent?: string;
}

export function StackBadge({ label, accent }: StackBadgeProps) {
  const style = accent
    ? {
        background: `${accent}10`,
        borderColor: `${accent}38`,
        color: "var(--color-text-2)",
      }
    : undefined;

  return (
    <span className="pill" style={style}>
      {label}
    </span>
  );
}

export function StackList({ items, accent }: { items: string[]; accent?: string }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <StackBadge key={s} label={s} accent={accent} />
      ))}
    </div>
  );
}
