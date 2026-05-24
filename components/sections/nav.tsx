"use client";

import { useEffect, useState } from "react";
import { Database } from "lucide-react";

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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 sm:px-10">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-[0.85rem] text-[color:var(--color-white)]"
        >
          <Database className="h-4 w-4 text-[color:var(--color-pg)]" aria-hidden />
          <span>
            <span className="text-[color:var(--color-pg)]">anmol</span>
            <span className="text-[color:var(--color-muted)]">@</span>
            <span>portfolio</span>
            <span className="text-[color:var(--color-muted)]">:~$</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
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
          className="hidden rounded-md border border-[color:var(--color-border)] px-3 py-1.5 font-mono text-[0.72rem] text-[color:var(--color-text-2)] transition-colors hover:border-[color:var(--color-pg)] hover:text-[color:var(--color-white)] sm:inline-flex"
        >
          github →
        </a>
      </div>
    </header>
  );
}
