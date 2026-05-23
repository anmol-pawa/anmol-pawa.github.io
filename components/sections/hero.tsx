"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { PROFILE } from "@/lib/content";

export function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-32 pb-16 md:px-10 md:pt-40 md:pb-24"
    >
      {/* Foreground content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        {/* Status pill */}
        <motion.div variants={item} className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-mono text-cyan-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <span className="tracking-[0.2em] uppercase">Open to SDE / SWE · 2026</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[5.5rem]"
        >
          Database engineer
          <br />
          <span className="text-gradient">building toward SWE.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-base text-slate-400 md:text-lg"
        >
          I'm <span className="text-slate-200">Anmol Pawa</span> — Database Administrator at{" "}
          <span className="text-slate-200">Texas Instruments</span>{" "}
          <span className="text-slate-500">(~2.5 years)</span> with a production track record of HA infrastructure, automation platforms, and 12+ months zero-downtime systems.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-base text-slate-400 md:text-lg"
        >
          I'm transitioning into{" "}
          <span className="text-slate-200">SDE / SWE roles at FAANG and top-tier startups</span>{" "}
          for 2026 — bringing systems thinking, deep database internals, and a portfolio of production-grade software designed and built end-to-end.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
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
        <motion.div variants={item} className="mt-12 flex items-center gap-5">
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
              className="group flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-400 hover:-translate-y-0.5"
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
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-600 font-mono tracking-[0.2em] uppercase pointer-events-none"
      >
        <span className="block animate-bounce">↓ scroll</span>
      </motion.div>
    </section>
  );
}
