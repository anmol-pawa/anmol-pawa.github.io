"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { EXPERIENCE } from "@/lib/content";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've worked" title="Work" titleAccent="Experience">
      <div className="relative pl-7 md:pl-10">
        {/* Vertical timeline line */}
        <div className="absolute bottom-2 left-2 top-2 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent" />

        <div className="space-y-14">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[1.65rem] top-2 flex h-3 w-3 items-center justify-center md:-left-[2.05rem]">
                  <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-30" />
                  <div className="relative h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.7)]" />
                </div>

                <div className="card p-7 md:p-9">
                  {/* Header row */}
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                      {exp.role}
                    </h3>
                    <span className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono text-[0.72rem] tracking-wider text-cyan-400">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company */}
                  <div className="mb-7 flex items-center gap-2.5 font-mono text-sm text-slate-400">
                    <Briefcase className="h-3.5 w-3.5 text-purple-400" />
                    {exp.company}
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-500">{exp.location}</span>
                  </div>

                  {/* Bullets */}
                  <ul className="mb-7 space-y-3.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-4 text-sm leading-relaxed text-slate-300">
                        <span className="mt-2.5 inline-block h-px w-3 flex-shrink-0 bg-cyan-400/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags — generous spacing */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-purple-500/20 bg-purple-500/[0.07] px-2.5 py-1 font-mono text-[0.7rem] text-purple-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
