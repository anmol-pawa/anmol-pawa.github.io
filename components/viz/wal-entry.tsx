import type { ExperienceItem } from "@/lib/types";
import { StackList } from "@/components/ui/stack-badge";

/**
 * WALEntry — renders one ExperienceItem as a write-ahead-log row.
 *
 * Visual style:
 *   ┌── LSN 0/1A2B3C40 · TX 4096 ───────────────────── Jul 2024 — Present
 *   │   Database Administrator · ...
 *   │   Texas Instruments · Bengaluru, India
 *   │
 *   │   * bullet
 *   │   * bullet
 *   └── stack: [ ... ]
 */
export function WALEntry({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative pl-6">
      {/* gutter line */}
      <span
        aria-hidden
        className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-[color:var(--color-pg)]/40 via-[color:var(--color-border-2)] to-transparent"
      />
      {/* commit marker */}
      <span
        aria-hidden
        className="absolute left-[3px] top-2.5 h-2.5 w-2.5 rounded-full bg-[color:var(--color-pg)] shadow-[0_0_0_3px_rgba(34,211,238,0.18)]"
      />

      <div className="card p-5 sm:p-6">
        {/* header row */}
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-dashed border-[color:var(--color-border)] pb-3">
          <div className="font-mono text-[0.72rem] text-[color:var(--color-muted-2)]">
            <span className="text-[color:var(--color-muted)]">LSN</span>{" "}
            <span className="text-[color:var(--color-pg)]">{item.lsn}</span>
            <span className="px-2 text-[color:var(--color-muted)]">·</span>
            <span className="text-[color:var(--color-muted)]">TX</span>{" "}
            <span className="text-[color:var(--color-emerald)]">{item.txid}</span>
          </div>
          <div className="font-mono text-[0.72rem] text-[color:var(--color-muted-2)]">
            {item.period}
          </div>
        </div>

        {/* role + company */}
        <div className="mt-3">
          <h3 className="text-base font-semibold text-[color:var(--color-white)] sm:text-lg">
            {item.role}
          </h3>
          <p className="mt-1 text-sm text-[color:var(--color-muted-2)]">
            <span className="text-[color:var(--color-pg-soft)]">{item.company}</span>
            <span className="px-2 text-[color:var(--color-muted)]">·</span>
            {item.location}
          </p>
        </div>

        {/* bullets */}
        <ul className="mt-4 space-y-2.5">
          {item.bullets.map((b, i) => (
            <li
              key={i}
              className="relative pl-5 text-[0.92rem] leading-relaxed text-[color:var(--color-text-2)]"
            >
              <span
                aria-hidden
                className="absolute left-0 top-[0.55rem] h-1.5 w-1.5 rounded-full bg-[color:var(--color-pg)]/60"
              />
              {b}
            </li>
          ))}
        </ul>

        {/* stack */}
        <div className="mt-5 border-t border-dashed border-[color:var(--color-border)] pt-4">
          <StackList items={item.stack} />
        </div>
      </div>
    </div>
  );
}
