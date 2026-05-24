"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { INTERNAL_WORK } from "@/lib/content";
import { Lock, TrendingUp } from "lucide-react";

export function InternalWork() {
  return (
    <Section
      id="internal-work"
      index="03"
      eyebrow="Production at TI"
      title="Internal"
      titleAccent="Systems"
    >
      <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-400">
        Production-grade platforms I designed and built end-to-end at Texas Instruments. Source is
        internal — included here for impact context and architecture details.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {INTERNAL_WORK.map((proj, i) => (
          <Reveal key={proj.name} delay={i * 0.1}>
            <div className="card flex h-full flex-col p-7">
              {/* Header */}
              <div className="mb-5 flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-white">{proj.name}</h3>
                <Lock className="h-3.5 w-3.5 flex-shrink-0 text-slate-600" aria-label="Internal" />
              </div>

              {/* Description */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">{proj.blurb}</p>

              {/* Impact callout */}
              <div className="mb-6 flex items-start gap-2.5 rounded-md border border-emerald-400/20 bg-emerald-400/5 p-4">
                <TrendingUp className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <p className="font-mono text-[0.72rem] leading-relaxed text-emerald-300">
                  {proj.impact}
                </p>
              </div>

              {/* Stack — generous tags */}
              <div className="flex flex-wrap gap-2">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.7rem] text-slate-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
