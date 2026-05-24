import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SchemaCard } from "@/components/ui/schema-card";
import { StackList } from "@/components/ui/stack-badge";
import { INTERNAL_WORK } from "@/lib/content";

/**
 * InternalWork — production-proof grid. The three internal TI platforms with
 * measurable impact. Renders as schema-styled cards so it visually inherits
 * the DB theme without re-introducing decorative SVGs (those live on the
 * portfolio section).
 */
export function InternalWork() {
  return (
    <Section
      id="work"
      eyebrow="SELECT * FROM production"
      title={<>Three platforms running in production.</>}
      subtitle="Internal at Texas Instruments. Not public, but the impact numbers are real."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {INTERNAL_WORK.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <SchemaCard
              table={p.name.toLowerCase().replace(/\s+/g, "_")}
              badge="prod"
            >
              <h3 className="text-base font-semibold text-[color:var(--color-white)]">
                {p.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--color-text-2)]">
                {p.blurb}
              </p>
              <p className="mt-4 rounded-md border border-[color:var(--color-pg)]/30 bg-[color:var(--color-pg)]/[0.04] p-3 font-mono text-[0.74rem] leading-relaxed text-[color:var(--color-pg-soft)]">
                {p.impact}
              </p>
              <div className="mt-4">
                <StackList items={p.stack} />
              </div>
            </SchemaCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
