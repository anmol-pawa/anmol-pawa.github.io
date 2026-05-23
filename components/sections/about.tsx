"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ABOUT_PARAGRAPHS, STATS } from "@/lib/content";

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="Engineering systems that" titleAccent="scale.">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        {/* Narrative */}
        <div className="space-y-5">
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-slate-300 leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* Stats grid */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="card group flex flex-col gap-1 p-5"
              >
                <div className="font-display text-2xl font-bold text-cyan-400 transition-transform group-hover:scale-105 md:text-3xl">
                  {s.value}
                </div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
