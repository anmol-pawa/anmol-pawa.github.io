"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PROFILE } from "@/lib/content";
import { Mail, Github, Linkedin, Code2, FileDown, ArrowUpRight } from "lucide-react";

const LINKS = [
  { Icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { Icon: Github, label: "GitHub", value: "github.com/anmol-pawa", href: PROFILE.github },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anmolpawa", href: PROFILE.linkedin },
  { Icon: Code2, label: "LeetCode", value: "leetcode.com/u/anmolpawa", href: PROFILE.leetcode },
  { Icon: FileDown, label: "Resume", value: "Download PDF", href: PROFILE.resume },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Let's talk"
      title="Get in"
      titleAccent="Touch"
      align="center"
    >
      <Reveal>
        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400 md:text-lg">
          I'm actively looking for <span className="text-slate-200">SDE / SWE roles at FAANG and top-tier startups</span> for 2026.
          If you're building something interesting and want to talk, I'd love to hear from you.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
          {LINKS.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card group flex items-center gap-4 p-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-cyan-400/10 transition-colors group-hover:bg-cyan-400/20">
                <Icon className="h-4 w-4 text-cyan-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-slate-500">
                  {label}
                </div>
                <div className="truncate text-sm text-slate-200">{value}</div>
              </div>
              <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-600 transition-all group-hover:text-cyan-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mx-auto mt-16 max-w-md rounded-lg border border-white/5 bg-white/[0.02] p-5 text-center">
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
            ✦ Currently based in
          </div>
          <div className="mt-1 font-display text-lg font-semibold text-white">{PROFILE.location}</div>
          <div className="mt-1 font-mono text-xs text-slate-500">Open to remote / relocation</div>
        </div>
      </Reveal>
    </Section>
  );
}
