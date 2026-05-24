import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { WALEntry } from "@/components/viz/wal-entry";
import { EXPERIENCE } from "@/lib/content";

/**
 * Experience — rendered as a write-ahead log. Each role is a WAL entry with
 * a synthetic LSN + txid; the visual gutter mimics pg_waldump output. Roles
 * are listed newest-first.
 */
export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="pg_waldump  --start=ti.0"
      title={<>Where I&apos;ve operated production systems.</>}
      subtitle="Two and a half years at Texas Instruments — Database Administration plus the internal full-stack tooling that surrounds it. Newest first."
    >
      <div className="space-y-7">
        {EXPERIENCE.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <WALEntry item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
