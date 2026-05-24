"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * GlowOrb — decorative blurred radial blob. Drops behind hero / dramatic
 * sections to give the scene depth without competing with content.
 */
interface GlowOrbProps {
  color: string;
  size?: number;
  className?: string;
}

export function GlowOrb({ color, size = 520, className }: GlowOrbProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}55 0%, ${color}00 65%)`,
      }}
      initial={{ opacity: 0.6, scale: 1 }}
      animate={
        reduce
          ? undefined
          : { opacity: [0.55, 0.85, 0.55], scale: [1, 1.07, 1] }
      }
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
