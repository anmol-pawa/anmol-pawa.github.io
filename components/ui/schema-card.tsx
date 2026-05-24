import type { ReactNode } from "react";

/**
 * SchemaCard — card with a CREATE-TABLE-style header. Used for structured
 * sections like internal-work and the about ER table-rows.
 */
interface SchemaCardProps {
  table: string;
  badge?: string;
  accent?: string;
  children: ReactNode;
  className?: string;
}

export function SchemaCard({
  table,
  badge,
  accent = "var(--color-pg)",
  children,
  className,
}: SchemaCardProps) {
  return (
    <div className={`card overflow-hidden ${className ?? ""}`}>
      <div
        className="flex items-center justify-between border-b border-[color:var(--color-border)] px-5 py-3"
        style={{ background: "var(--color-elevated)" }}
      >
        <div className="flex items-center gap-2 font-mono text-[0.78rem]">
          <span className="text-[color:var(--color-muted-2)]">TABLE</span>
          <span style={{ color: accent }}>{table}</span>
        </div>
        {badge && (
          <span
            className="font-mono text-[0.65rem] uppercase tracking-widest"
            style={{ color: accent }}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
