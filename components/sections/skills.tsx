"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SKILLS } from "@/lib/content";
import {
  Code,
  Server,
  Database,
  Sparkles,
  Monitor,
  Cloud,
  Network,
  Cpu,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  code: Code,
  server: Server,
  database: Database,
  sparkles: Sparkles,
  monitor: Monitor,
  cloud: Cloud,
  network: Network,
  cpu: Cpu,
};

export function Skills() {
  return (
    <Section id="skills" eyebrow="What I use" title="Tech" titleAccent="Stack">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((cat, i) => {
          const Icon = ICONS[cat.icon] ?? Code;
          return (
            <Reveal key={cat.name} delay={(i % 4) * 0.08}>
              <div className="card h-full p-5">
                <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/10">
                    <Icon className="h-3.5 w-3.5 text-cyan-400" />
                  </div>
                  <h3 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white">
                    {cat.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-white/8 bg-white/[0.03] px-2 py-0.5 font-mono text-[0.68rem] text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
