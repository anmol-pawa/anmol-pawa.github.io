import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { StatCard } from "@/components/ui/stat-card";
import { ERDiagram } from "@/components/viz/er-diagram";
import { ABOUT_PARAGRAPHS, STATS } from "@/lib/content";

/**
 * About — left column reads the prose; right column shows the self-portrait
 * as an ER diagram (engineers as the PK root, three FK satellites). Stats grid
 * sits below to bridge into the experience section.
 */
export function About() {
  return (
    <Section
      id="about"
      eyebrow="\\d+ engineers"
      title={<>I model myself as a relational schema.</>}
      subtitle="Database engineer first, software engineer always. Production systems thinking translates directly across stacks."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-14">
        <Reveal className="space-y-5">
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <p
              key={i}
              className="text-[1.02rem] leading-relaxed text-[color:var(--color-text-2)]"
            >
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card overflow-hidden p-5">
            <div className="mb-2 font-mono text-[0.7rem] uppercase tracking-widest text-[color:var(--color-muted-2)]">
              \d+ engineer · schema
            </div>
            <div className="aspect-[640/460] w-full">
              <ERDiagram />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((s, i) => (
            <StatCard key={i} stat={s} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
