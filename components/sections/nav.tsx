"use client";

import { useEffect, useState } from "react";
import { Database, Github } from "lucide-react";

/**
 * Nav — sticky top bar with section anchors. Uses scroll position to set the
 * active anchor (no IntersectionObserver — we just compare offsets, since the
 * page is a single-route single-pager).
 */
const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "work", label: "production" },
  { id: "portfolio", label: "portfolio" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const offsets = NAV_ITEMS.map((n) => {
        const el = document.getElementById(n.id);
        return { id: n.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const inView = offsets.filter((o) => o.top <= 160);
      const current = inView.length ? inView[inView.length - 1].id : NAV_ITEMS[0].id;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all"
      style={{
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        background: scrolled ? "rgba(5,8,16,0.72)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      {/* desktop bar (sm+): logo · anchors · github */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-6 py-3.5 sm:flex sm:px-10">
        <Brand />

        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map((n) => {
            const isActive = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-md px-2.5 py-1.5 font-mono text-[0.72rem] transition-colors"
                style={{
                  color: isActive ? "var(--color-pg)" : "var(--color-muted-2)",
                  background: isActive ? "rgba(34, 211, 238, 0.07)" : "transparent",
                }}
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        <a
          href="https://github.com/anmol-pawa"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-[color:var(--color-border)] px-3 py-1.5 font-mono text-[0.72rem] text-[color:var(--color-text-2)] transition-colors hover:border-[color:var(--color-pg)] hover:text-[color:var(--color-white)]"
        >
          github →
        </a>
      </div>

      {/*
        mobile bar (<sm): logo on row 1, horizontally-scrolling anchor row
        below. Pills are tab-able; the row scrolls so all sections stay
        reachable from any device width. Scrollbar hidden for cleanliness.
      */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between px-5 pt-3 pb-1.5">
          <Brand compact />
          <a
            href="https://github.com/anmol-pawa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md border border-[color:var(--color-border)] p-1.5 text-[color:var(--color-text-2)] transition-colors hover:border-[color:var(--color-pg)] hover:text-[color:var(--color-white)]"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
        <nav
          className="flex items-center gap-1 overflow-x-auto px-5 pb-2.5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" as const }}
        >
          {NAV_ITEMS.map((n) => {
            const isActive = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="flex-shrink-0 rounded-md px-2.5 py-1 font-mono text-[0.7rem] transition-colors"
                style={{
                  color: isActive ? "var(--color-pg)" : "var(--color-muted-2)",
                  background: isActive ? "rgba(34, 211, 238, 0.07)" : "transparent",
                }}
              >
                {n.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

/** Logo lockup — reused across desktop and mobile bars. */
function Brand({ compact }: { compact?: boolean }) {
  return (
    <a
      href="#top"
      className={`group flex items-center gap-2.5 font-mono text-[color:var(--color-white)] ${
        compact ? "text-[0.8rem]" : "text-[0.85rem]"
      }`}
    >
      <Database className="h-4 w-4 text-[color:var(--color-pg)]" aria-hidden />
      <span>
        <span className="text-[color:var(--color-pg)]">anmol</span>
        <span className="text-[color:var(--color-muted)]">@</span>
        <span>portfolio</span>
        <span className="text-[color:var(--color-muted)]">:~$</span>
      </span>
    </a>
  );
}
