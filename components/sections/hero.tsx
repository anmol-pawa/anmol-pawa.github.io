"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import { GlowOrb } from "@/components/ui/glow-orb";
import { MonoBlock } from "@/components/ui/mono-block";
import { QueryPlan } from "@/components/viz/query-plan";
import { HERO_PLAN, HERO_QUERY, PROFILE } from "@/lib/content";

/**
 * Hero — the signature visual.
 *
 *   left:  identity + the SQL query that "selects" me
 *   right: the live EXPLAIN ANALYZE plan animating to a result
 *
 * On mobile they stack. The query is rendered with inline syntax tokens so it
 * reads like a real psql output rather than a screenshot.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <GlowOrb color="#22d3ee" size={620} className="-top-40 -left-20" />
      <GlowOrb color="#a855f7" size={520} className="bottom-0 right-0" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* identity */}
          <div>
            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              {PROFILE.handle} · {PROFILE.location}
            </motion.p>

            <motion.h1
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-white)] sm:text-6xl md:text-[4.5rem]"
            >
              {PROFILE.name}
            </motion.h1>

            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 max-w-xl text-lg text-[color:var(--color-text-2)] sm:text-xl"
            >
              {PROFILE.tagline} — 2.5 years operating production PostgreSQL HA at
              Texas Instruments, building toward FAANG &amp; top-tier startups.
              <span className="text-[color:var(--color-pg)]"> Production-grade portfolio inside.</span>
            </motion.p>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-md bg-[color:var(--color-pg)] px-4 py-2.5 text-sm font-medium text-[#03101a] transition-all hover:bg-[color:var(--color-pg-soft)]"
              >
                See the projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[color:var(--color-border-2)] px-4 py-2.5 text-sm text-[color:var(--color-text-2)] transition-colors hover:border-[color:var(--color-pg)] hover:text-[color:var(--color-white)]"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-md border border-[color:var(--color-border-2)] p-2.5 text-[color:var(--color-text-2)] transition-colors hover:border-[color:var(--color-pg)] hover:text-[color:var(--color-white)]"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-md border border-[color:var(--color-border-2)] p-2.5 text-[color:var(--color-text-2)] transition-colors hover:border-[color:var(--color-pg)] hover:text-[color:var(--color-white)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </motion.div>

            {/* the query */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <MonoBlock title="psql > SELECT engineer">
                <SqlQuery query={HERO_QUERY} />
              </MonoBlock>
            </motion.div>
          </div>

          {/* explain plan */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:mt-10"
          >
            <MonoBlock title="EXPLAIN ANALYZE — executing…">
              <QueryPlan steps={HERO_PLAN} />
            </MonoBlock>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Tiny regex-based SQL tokeniser. Good enough for the static hero query —
 * no need to import a 50KB highlighter for one block.
 */
function SqlQuery({ query }: { query: string }) {
  const KEYWORDS = new Set([
    "SELECT", "FROM", "WHERE", "AND", "OR", "ORDER", "BY", "LIMIT", "DESC", "ASC",
  ]);
  return (
    <>
      {query.split(/(\s+|[(),;])/).map((tok, i) => {
        if (!tok) return null;
        const u = tok.toUpperCase();
        if (KEYWORDS.has(u)) return <span key={i} className="sql-kw">{tok}</span>;
        if (/^'.*'$/.test(tok)) return <span key={i} className="sql-str">{tok}</span>;
        if (/^[0-9]+$/.test(tok)) return <span key={i} className="sql-num">{tok}</span>;
        if (/^(@>|>=|<=|=|<>)$/.test(tok)) return <span key={i} className="sql-op">{tok}</span>;
        if (/^[a-zA-Z_]+\.[a-zA-Z_]+$/.test(tok)) return <span key={i} className="sql-tbl">{tok}</span>;
        return <span key={i} className="sql-id">{tok}</span>;
      })}
    </>
  );
}
