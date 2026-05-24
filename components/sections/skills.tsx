import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { BTreeIndex } from "@/components/viz/btree";
import { SKILLS } from "@/lib/content";

/**
 * Skills — rendered as a B-tree index. Root → category nodes → leaf skills.
 * Hover a leaf and the lookup path renders below ("skills_idx → DB → pgvector").
 */
export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="CREATE INDEX skills_idx"
      title={<>The toolchain, indexed by category.</>}
      subtitle="Hover any leaf to trace the lookup path. Categories ordered roughly by depth-of-use; DBs and AI infra first because they're where the production scars live."
    >
      <Reveal>
        <div className="card p-6 sm:p-8">
          <BTreeIndex categories={SKILLS} />
        </div>
      </Reveal>
    </Section>
  );
}
