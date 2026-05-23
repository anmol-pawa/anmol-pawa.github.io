"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { INTERNAL_WORK } from "@/lib/content";
import { Lock, TrendingUp } from "lucide-react";

export function InternalWork() {
  return (
    <Section
      id="internal-work"
      eyebrow="Production at TI"
      title="Internal"
      titleAccent="Systems"
    >
      <p className="mb-12 max-w-3xl text-slate-400">
        Production-grade platforms I designed and built end-to-end at Texas Instruments. Source is
        internal — included here for impact context and architecture details.
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        {INTERNAL_WORK.map((proj, i) => (
          <Reveal key={proj.name} delay={i * 0.1}>
            <div className="card flex h-full flex-col p-6">
              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <h3 className="font-display text-lg font-bold text-white">{proj.name}</h3>
                <Lock className="h-3.5 w-3.5 flex-shrink-0 text-slate-600" aria-label="Internal" />
              </div>

              {/* Description */}
              <p className="mb-5 flex-1 text-sm text-slate-400 leading-relaxed">{proj.blurb}</p>

              {/* Impact callout */}
              <div className="mb-5 flex items-start gap-2 rounded-md border border-emerald-400/20 bg-emerald-400/5 p-3">
                <TrendingUp className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <p className="font-mono text-[0.72rem] leading-relaxed text-emerald-300">
                  {proj.impact}
                </p>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-white/8 bg-white/[0.03] px-2 py-0.5 font-mono text-[0.68rem] text-slate-400"
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
