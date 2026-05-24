"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { PROFILE } from "@/lib/content";

/**
 * Hero — line-by-line cinematic stagger.
 *
 * Each line is its own <motion.span> with a 0.9s ease-out-expo entry,
 * staggered 0.12s after the previous, opened by a 0.25s delay so the
 * page settles before motion starts. The result feels deliberate and
 * confident rather than nervous.
 */
export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative z-10 mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        {/* Status pill */}
        <motion.div
          variants={item}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3.5 py-1.5 font-mono text-xs text-cyan-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <span className="tracking-[0.2em] uppercase">Open to SDE / SWE · 2026</span>
        </motion.div>

        {/* Title — two lines, each its own staggered child */}
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
          <motion.span variants={item} className="block">
            Database engineer
          </motion.span>
          <motion.span variants={item} className="block text-gradient">
            building toward SWE.
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-10 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          I&apos;m <span className="text-slate-200">Anmol Pawa</span> — Database Administrator at{" "}
          <span className="text-slate-200">Texas Instruments</span>{" "}
          <span className="text-slate-500">(~2.5 years)</span> with a production track record of HA infrastructure, automation platforms, and 12+ months zero-downtime systems.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          I&apos;m transitioning into{" "}
          <span className="text-slate-200">SDE / SWE roles at FAANG and top-tier startups</span>{" "}
          for 2026 — bringing systems thinking, deep database internals, and a portfolio of production-grade software designed and built end-to-end.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-12 flex flex-wrap gap-3">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-slate-950 shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)] transition-all hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.9)] hover:-translate-y-0.5"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-slate-200 transition-all hover:border-cyan-400/40 hover:bg-white/[0.07] hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="mt-14 flex items-center gap-4">
          {[
            { href: PROFILE.github, Icon: Github, label: "GitHub" },
            { href: PROFILE.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${PROFILE.email}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-400 hover:-translate-y-0.5"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-slate-600 pointer-events-none"
      >
        <span className="block animate-bounce">↓ scroll</span>
      </motion.div>
    </section>
  );
}
