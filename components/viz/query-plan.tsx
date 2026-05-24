"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PlanStep } from "@/lib/types";

/**
 * QueryPlan — animated EXPLAIN ANALYZE tree.
 *
 * Renders plan steps from outermost (Limit) at the top to innermost (Index Scan)
 * at the bottom. Animation reverses that order — leaves resolve first, then the
 * result bubbles up — so the viewer reads it as the plan *executing*.
 *
 * Below the tree, a Result row prints once the execution sweep completes.
 */
interface QueryPlanProps {
  steps: PlanStep[];
}

export function QueryPlan({ steps }: QueryPlanProps) {
  const reduce = useReducedMotion();
  const n = steps.length;

  return (
    <div className="font-mono text-[0.78rem] leading-[1.55]">
      {steps.map((s, i) => {
        const reverseIdx = n - 1 - i;
        const delay = reduce ? 0 : reverseIdx * 0.45 + 0.4;
        return (
          <motion.div
            key={i}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ paddingLeft: `${s.depth * 1.4}rem` }}
          >
            {/* tree connector */}
            {s.depth > 0 && (
              <span
                aria-hidden
                className="absolute top-0 bottom-0 border-l border-[color:var(--color-border-2)]"
                style={{ left: `${(s.depth - 1) * 1.4 + 0.7}rem` }}
              />
            )}
            <span className="text-[color:var(--color-muted)]">
              {s.depth > 0 ? "→  " : ""}
            </span>
            <span className="text-[color:var(--color-pg)] font-medium">{s.op}</span>
            {s.target && (
              <>
                {" on "}
                <span className="text-[color:var(--color-emerald)]">{s.target}</span>
              </>
            )}
            <span className="text-[color:var(--color-muted)]">
              {"  (cost="}
              <span className="text-[color:var(--color-text-2)]">{s.cost}</span>
              {" rows="}
              <span className="text-[color:var(--color-text-2)]">{s.rows}</span>
              {")"}
            </span>
            {s.filter && (
              <div
                className="text-[color:var(--color-muted-2)]"
                style={{ paddingLeft: "1.4rem" }}
              >
                {s.filter}
              </div>
            )}
          </motion.div>
        );
      })}

      {/* Result row */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: reduce ? 0 : n * 0.45 + 0.6,
        }}
        className="mt-4 border-t border-dashed border-[color:var(--color-border)] pt-3"
      >
        <span className="text-[color:var(--color-muted)]">Result:  </span>
        <span className="text-[color:var(--color-text)]">
          <span className="text-[color:var(--color-pg-soft)]">1</span> row returned
          {"  →  "}
          <span className="text-[color:var(--color-white)] font-medium">Anmol Pawa</span>
        </span>
        <span className="caret" />
      </motion.div>
    </div>
  );
}
