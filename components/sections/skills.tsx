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

/**
 * Skills section — spacing redesigned after Brittany Chiang's v4 pattern:
 *   - 2-column max (8 categories = 4 rows of 2) — never 4-column cramming
 *   - Larger card padding (p-7 md:p-8) for breathing room
 *   - Larger tag padding (px-3 py-1.5) so tags don't tessellate
 *   - gap-2.5 between tags vs the old gap-1.5
 *   - gap-6 between cards vs old gap-4
 */
export function Skills() {
  return (
    <Section id="skills" index="05" eyebrow="What I use" title="Tech" titleAccent="Stack">
      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {SKILLS.map((cat, i) => {
          const Icon = ICONS[cat.icon] ?? Code;
          return (
            <Reveal key={cat.name} delay={(i % 2) * 0.08}>
              <div className="card h-full p-7 md:p-8">
                {/* Header */}
                <div className="mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/15">
                    <Icon className="h-4 w-4 text-cyan-400" />
                  </div>
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {cat.name}
                  </h3>
                </div>

                {/* Tags — generous spacing, comfortable padding */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.72rem] text-slate-300 transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
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
