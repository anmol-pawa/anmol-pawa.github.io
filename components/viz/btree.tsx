"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SkillCategory } from "@/lib/types";

/**
 * BTreeIndex — renders skills as a 2-level B-tree.
 *
 *   root (skills_idx)
 *     └─ category nodes (one per SkillCategory)
 *           └─ leaf entries (skills)
 *
 * Hover/focus a leaf and the path root → category → leaf highlights —
 * mimics an index lookup. Tooltip-free; purely visual storytelling.
 */
interface BTreeIndexProps {
  categories: SkillCategory[];
}

export function BTreeIndex({ categories }: BTreeIndexProps) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<{ cat: string; skill: string } | null>(null);

  return (
    <div className="space-y-7">
      {/* root */}
      <div className="flex items-center justify-center">
        <RootNode active={!!active} />
      </div>

      {/* spokes */}
      <div className="relative" aria-hidden>
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="absolute inset-x-0 -top-7 h-16 w-full"
        >
          {categories.map((_, i) => {
            const x = ((i + 0.5) / categories.length) * 1200;
            return (
              <line
                key={i}
                x1={600}
                y1={0}
                x2={x}
                y2={80}
                stroke="#22d3ee"
                strokeOpacity={active ? 0.18 : 0.32}
                strokeWidth={1}
              />
            );
          })}
        </svg>
      </div>

      {/* category nodes */}
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${Math.min(categories.length, 4)}, minmax(0, 1fr))` }}
      >
        {categories.map((c, i) => {
          const catActive = active?.cat === c.code;
          return (
            <motion.div
              key={c.code}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-lg border bg-[color:var(--color-surface)] p-3.5 transition-colors"
              style={{
                borderColor: catActive ? "#22d3ee" : "var(--color-border)",
                boxShadow: catActive ? "0 0 0 1px #22d3ee44" : undefined,
              }}
            >
              {/* category header */}
              <div className="mb-2.5 flex items-baseline justify-between">
                <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[color:var(--color-pg)]">
                  {c.code}
                </span>
                <span className="text-[0.75rem] font-medium text-[color:var(--color-text-2)]">
                  {c.name}
                </span>
              </div>
              {/* leaves */}
              <ul className="space-y-1">
                {c.skills.map((s) => {
                  const isActive = active?.cat === c.code && active.skill === s;
                  return (
                    <li
                      key={s}
                      onMouseEnter={() => setActive({ cat: c.code, skill: s })}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive({ cat: c.code, skill: s })}
                      onBlur={() => setActive(null)}
                      tabIndex={0}
                      className="cursor-default rounded px-1.5 py-0.5 font-mono text-[0.72rem] text-[color:var(--color-muted-2)] transition-colors hover:text-[color:var(--color-white)] focus:text-[color:var(--color-white)] focus:outline-none"
                      style={{
                        background: isActive ? "rgba(34, 211, 238, 0.10)" : undefined,
                        color: isActive ? "#f8fafc" : undefined,
                      }}
                    >
                      <span className="mr-1.5 text-[color:var(--color-muted)]">↳</span>
                      {s}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* lookup output */}
      <div className="mt-2 font-mono text-[0.72rem] text-[color:var(--color-muted-2)]">
        {active ? (
          <>
            <span className="text-[color:var(--color-muted)]">lookup_path:</span>{" "}
            <span className="text-[color:var(--color-pg)]">skills_idx</span>{" → "}
            <span className="text-[color:var(--color-emerald)]">{active.cat}</span>{" → "}
            <span className="text-[color:var(--color-white)]">{active.skill}</span>
          </>
        ) : (
          <>
            <span className="text-[color:var(--color-muted)]">lookup_path:</span>{" "}
            <span className="text-[color:var(--color-muted-2)]">hover any leaf</span>
            <span className="caret" />
          </>
        )}
      </div>
    </div>
  );
}

function RootNode({ active }: { active: boolean }) {
  return (
    <div
      className="rounded-lg border px-4 py-2 font-mono text-[0.75rem] transition-colors"
      style={{
        background: "var(--color-elevated)",
        borderColor: active ? "#22d3ee" : "var(--color-border-2)",
        boxShadow: active ? "0 0 0 1px #22d3ee44" : undefined,
        color: "#e2e8f0",
      }}
    >
      <span className="text-[color:var(--color-muted)]">B-Tree:</span>{" "}
      <span className="text-[color:var(--color-pg)]">skills_idx</span>
      <span className="ml-2 text-[color:var(--color-muted)]">(root)</span>
    </div>
  );
}
