"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * <Section> — brutalist-minimalist spacing.
 *
 *   - max-w-5xl (1024px) — narrower than the default 6xl for a calmer read
 *   - py-28 md:py-40 — generous vertical separation between sections
 *   - mb-16 md:mb-20 between header and content
 *   - mb-5 between eyebrow and title
 *   - optional `index` prop renders a "(01)" muted prefix before the eyebrow
 *     so each section reads as a deliberate numbered chapter
 */
export function Section({
  id,
  index,
  eyebrow,
  title,
  titleAccent,
  children,
  className = "",
  align = "left",
}: {
  id?: string;
  /** Two-digit chapter number rendered in muted ink before the eyebrow */
  index?: string;
  eyebrow?: string;
  title?: string;
  /** Accent half of title rendered with text-gradient class */
  titleAccent?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  const reduce = useReducedMotion();

  return (
    <section
      id={id}
      className={`relative z-10 mx-auto w-full max-w-5xl px-6 py-28 md:px-10 md:py-40 ${className}`}
    >
      {(eyebrow || title) && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : ""}`}
        >
          {eyebrow && (
            <p className="eyebrow mb-5">
              {index && <span className="mr-2 text-slate-600">({index})</span>}
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
              {title}{" "}
              {titleAccent && <span className="text-gradient">{titleAccent}</span>}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
