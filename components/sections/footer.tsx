import { PROFILE } from "@/lib/content";

/**
 * Footer — build metadata + tiny credit. Uses Vercel-provided env vars when
 * available (VERCEL_GIT_COMMIT_SHA, VERCEL_GIT_COMMIT_REF). Falls back to "dev"
 * locally.
 *
 * Server component — reads env at render time.
 */
export function Footer() {
  const sha = (process.env.VERCEL_GIT_COMMIT_SHA ?? "local").slice(0, 7);
  const branch = process.env.VERCEL_GIT_COMMIT_REF ?? "dev";
  const region = process.env.VERCEL_REGION ?? "local";

  return (
    <footer className="relative z-10 border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)]/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] text-[color:var(--color-muted-2)]">
          <span className="text-[color:var(--color-muted)]">©</span>
          <span>{new Date().getFullYear()} {PROFILE.name}</span>
          <span className="text-[color:var(--color-muted)]">·</span>
          <span>built with Next.js · React 19 · Tailwind v4 · Framer Motion</span>
        </div>
        <div className="font-mono text-[0.68rem] text-[color:var(--color-muted)]">
          <span className="text-[color:var(--color-pg)]">●</span>{" "}
          deployed{" "}
          <span className="text-[color:var(--color-text-2)]">{branch}</span>
          <span className="text-[color:var(--color-muted)]">@</span>
          <span className="text-[color:var(--color-text-2)]">{sha}</span>
          <span className="px-1 text-[color:var(--color-muted)]">·</span>
          region <span className="text-[color:var(--color-text-2)]">{region}</span>
        </div>
      </div>
    </footer>
  );
}
