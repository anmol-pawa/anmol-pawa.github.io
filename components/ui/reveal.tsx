"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * <Reveal> — slow, cinematic scroll-triggered entry.
 *
 *   - ease-out-expo curve [0.16, 1, 0.3, 1] for a premium decel
 *   - 0.8s duration (slow enough to feel deliberate, not nervous)
 *   - 32px initial Y offset for visible motion
 *   - viewport margin -50px so things start animating as soon as they
 *     crest the fold (not after they're fully on-screen)
 *
 * Honors prefers-reduced-motion via useReducedMotion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
