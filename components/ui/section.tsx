"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * <Section> wrapper — standard spacing, optional eyebrow + title, scroll reveal.
 */
export function Section({
  id,
  eyebrow,
  title,
  titleAccent,
  children,
  className = "",
  align = "left",
}: {
  id?: string;
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
      className={`relative z-10 mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28 ${className}`}
    >
      {(eyebrow || title) && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={`mb-10 ${align === "center" ? "text-center" : ""}`}
        >
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          {title && (
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              {title} {titleAccent && <span className="text-gradient">{titleAccent}</span>}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
