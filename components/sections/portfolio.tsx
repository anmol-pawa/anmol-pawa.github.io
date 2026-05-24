import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { StackList } from "@/components/ui/stack-badge";
import { Topology } from "@/components/viz/topology";
import { PORTFOLIO } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

/**
 * Portfolio — the centerpiece. Each project gets:
 *   - title + tagline + concept
 *   - mini service-topology SVG (data-driven from content.ts)
 *   - description
 *   - metric row (3 callouts)
 *   - stack badges
 *
 * Cards alternate topology-left / topology-right on lg+ for visual rhythm.
 */
export function Portfolio() {
  return (
    <Section
      id="portfolio"
      eyebrow="EXPLAIN portfolio"
      title={<>Six production-grade builds. Each demonstrates a distinct concern.</>}
      subtitle="Architecture diagrams are live SVG — every node and edge maps to an actual service in the repo. Hover for dataflow direction; the small circles trace it."
    >
      <div className="space-y-6">
        {PORTFOLIO.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i, 3) * 0.08}>
            <article className="card overflow-hidden">
              <div
                className={`grid gap-0 lg:grid-cols-[1.1fr_1fr] ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* topology */}
                <div
                  className="border-b border-[color:var(--color-border)] lg:border-b-0 lg:border-r"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-bg) 0%, var(--color-surface) 100%)",
                  }}
                >
                  <div className="flex items-center justify-between border-b border-[color:var(--color-border)] px-5 py-3">
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[color:var(--color-muted-2)]">
                      architecture · {p.slug}
                    </span>
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: p.accent, boxShadow: `0 0 12px ${p.accent}88` }}
                    />
                  </div>
                  <div className="aspect-[560/240] w-full">
                    <Topology
                      nodes={p.topology.nodes}
                      edges={p.topology.edges}
                      accent={p.accent}
                    />
                  </div>
                </div>

                {/* details */}
                <div className="p-6 sm:p-7">
                  <div className="mb-2 flex items-baseline gap-2">
                    <h3 className="text-xl font-semibold text-[color:var(--color-white)]">
                      {p.name}
                    </h3>
                    <span
                      className="font-mono text-[0.72rem]"
                      style={{ color: p.accent }}
                    >
                      v1
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[color:var(--color-text-2)]">
                    {p.tagline}
                  </p>
                  <p
                    className="mt-2 font-mono text-[0.72rem] uppercase tracking-widest"
                    style={{ color: p.accent }}
                  >
                    concept · {p.concept}
                  </p>

                  <p className="mt-4 text-[0.94rem] leading-relaxed text-[color:var(--color-text-2)]">
                    {p.description}
                  </p>

                  {/* metrics */}
                  <div className="mt-5 grid grid-cols-3 gap-2.5 border-y border-dashed border-[color:var(--color-border)] py-4">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          className="font-mono text-[0.78rem] font-medium"
                          style={{ color: p.accent }}
                        >
                          {m.value}
                        </div>
                        <div className="mt-0.5 font-mono text-[0.66rem] uppercase tracking-wider text-[color:var(--color-muted)]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* highlights */}
                  <ul className="mt-4 space-y-1.5">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[0.85rem] text-[color:var(--color-text-2)]"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ background: p.accent }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <StackList items={p.stack} accent={p.accent} />
                  </div>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 font-mono text-[0.8rem] text-[color:var(--color-text-2)] transition-colors hover:text-[color:var(--color-white)]"
                      style={{ color: p.accent }}
                    >
                      explore →
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
