"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PORTFOLIO } from "@/lib/content";
import { Sparkles } from "lucide-react";

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      eyebrow="Proof of SWE breadth"
      title="Personal"
      titleAccent="Portfolio"
    >
      <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-400">
        Six production-grade projects I designed and built end-to-end to demonstrate the depth and
        breadth expected of a senior SDE at FAANG/startups. Each one targets a different
        production concern.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {PORTFOLIO.map((proj, i) => (
          <Reveal key={proj.name} delay={(i % 2) * 0.1}>
            <article className="card group h-full overflow-hidden">
              {/* Top accent bar */}
              <div
                className="h-1"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${proj.accent} 50%, transparent 100%)`,
                }}
              />

              <div className="p-7 md:p-8">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-white">{proj.name}</h3>
                  <p
                    className="mt-1.5 font-mono text-xs tracking-wide"
                    style={{ color: proj.accent }}
                  >
                    {proj.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-slate-400">{proj.description}</p>

                {/* Highlights */}
                <div className="mb-6 space-y-2">
                  {proj.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-sm">
                      <Sparkles
                        className="h-3 w-3 flex-shrink-0"
                        style={{ color: proj.accent }}
                      />
                      <span className="text-slate-300">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stack — generous tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.7rem] text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
