import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MonoBlock } from "@/components/ui/mono-block";
import { Mail, Github, Linkedin, FileText, Code2 } from "lucide-react";
import { PROFILE } from "@/lib/content";

/**
 * Contact — rendered as a PostgreSQL connection string. Each link below is a
 * "connection role" the visitor can use (mail / github / linkedin / leetcode /
 * resume). The connection string itself is decorative; the buttons do the work.
 */
export function Contact() {
  const cstring = `postgresql://recruiter@anmol-pawa:5432/inbox?sslmode=require&intent=hire`;

  return (
    <Section
      id="contact"
      eyebrow="psql --connect"
      title={<>Open to FAANG &amp; top-tier startup SDE roles for 2026.</>}
      subtitle="The fastest connection is email. I reply within a day."
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <Reveal>
          <MonoBlock title="connection string">
            <span className="text-[color:var(--color-muted)]"># role: recruiter</span>
            {"\n"}
            <span className="text-[color:var(--color-pg)]">postgresql</span>
            <span className="text-[color:var(--color-muted)]">://</span>
            <span className="text-[color:var(--color-emerald)]">recruiter</span>
            <span className="text-[color:var(--color-muted)]">@</span>
            <span className="text-[color:var(--color-pg-soft)]">anmol-pawa</span>
            <span className="text-[color:var(--color-muted)]">:</span>
            <span className="text-[color:var(--color-amber)]">5432</span>
            <span className="text-[color:var(--color-muted)]">/</span>
            <span className="text-[color:var(--color-text)]">inbox</span>
            <span className="text-[color:var(--color-muted)]">?</span>
            <span className="text-[color:var(--color-text-2)]">sslmode=</span>
            <span className="text-[color:var(--color-emerald)]">require</span>
            <span className="text-[color:var(--color-muted)]">&amp;</span>
            <span className="text-[color:var(--color-text-2)]">intent=</span>
            <span className="text-[color:var(--color-pg)]">hire</span>
            {"\n\n"}
            <span className="text-[color:var(--color-muted)]"># or just</span>
            {"\n"}
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-[color:var(--color-pg-soft)] underline-offset-4 hover:underline"
            >
              {PROFILE.email}
            </a>
          </MonoBlock>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-2.5">
            <ContactLink href={`mailto:${PROFILE.email}`} icon={<Mail className="h-4 w-4" />} label="Email" sub="anmol.pawa.77" />
            <ContactLink href={PROFILE.github} icon={<Github className="h-4 w-4" />} label="GitHub" sub="anmol-pawa" />
            <ContactLink href={PROFILE.linkedin} icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" sub="anmolpawa" />
            <ContactLink href={PROFILE.leetcode} icon={<Code2 className="h-4 w-4" />} label="LeetCode" sub="anmolpawa" />
            <ContactLink href={PROFILE.resume} icon={<FileText className="h-4 w-4" />} label="Resume" sub="drive · view" wide />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  sub,
  wide,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
  wide?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`group flex items-center gap-3 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 transition-all hover:border-[color:var(--color-pg)] hover:bg-[color:var(--color-elevated)] ${
        wide ? "col-span-2" : ""
      }`}
    >
      <span className="text-[color:var(--color-pg)]">{icon}</span>
      <span className="flex-1">
        <span className="block text-sm font-medium text-[color:var(--color-white)]">{label}</span>
        <span className="block font-mono text-[0.7rem] text-[color:var(--color-muted-2)]">{sub}</span>
      </span>
    </a>
  );
}
