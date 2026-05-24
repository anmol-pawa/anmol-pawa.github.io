/**
 * Domain types for the portfolio site.
 *
 * Treat lib/content.ts as the database; this file is the schema. Components
 * import from here so renaming a field shows up as a type error everywhere it's
 * read — same discipline as adding a NOT NULL constraint.
 */

export interface Profile {
  name: string;
  handle: string;
  tagline: string;
  intent: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resume: string;
}

export interface Stat {
  value: string;
  label: string;
  /** Optional sub-label for the unit (e.g. "/ year"). */
  unit?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  /** Synthetic monotonic id used to render the WAL-timeline LSN. */
  lsn: string;
  /** Synthetic transaction id, displayed in the row header. */
  txid: number;
  bullets: string[];
  stack: string[];
}

// ── Portfolio project schema ─────────────────────────────────────────────────
/**
 * Each project ships with a topology description used by the architecture-card
 * SVG. Nodes are placed on a unit grid (0..1) — the SVG renderer maps to px.
 */
export interface TopologyNode {
  id: string;
  label: string;
  kind: "service" | "store" | "queue" | "client" | "external";
  x: number;
  y: number;
}

export interface TopologyEdge {
  from: string;
  to: string;
  /** Optional animated dataflow label (e.g. "RRF", "AMQP"). */
  label?: string;
  /** Render as bidirectional. */
  bidi?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface PortfolioProject {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  metrics: ProjectMetric[];
  /** Accent hex; drives the card glow + edge color in the topology SVG. */
  accent: string;
  topology: {
    nodes: TopologyNode[];
    edges: TopologyEdge[];
  };
  /** Repos are private; link points to a demo / doc if shareable. */
  link?: string;
  /** "Concept demonstrated" — the one-line teaching for the project. */
  concept: string;
}

// ── Skills: B-tree-style nested categories ───────────────────────────────────
export interface SkillCategory {
  name: string;
  /** Short uppercase code shown as the index page header (e.g. "PG", "AI"). */
  code: string;
  icon: string;
  skills: string[];
}

// ── Internal (TI) work ───────────────────────────────────────────────────────
export interface InternalProject {
  name: string;
  blurb: string;
  impact: string;
  stack: string[];
}

// ── Hero query-plan animation script ────────────────────────────────────────
export interface PlanStep {
  /** Operator name, e.g. "Seq Scan", "Index Scan". */
  op: string;
  /** Object scanned, e.g. "engineers". */
  target: string;
  /** Predicate string. */
  filter?: string;
  /** Estimated row count (for the EXPLAIN aesthetic). */
  rows: number;
  /** Cost ranges (also pure aesthetic). */
  cost: string;
  /** Width in chars of the connecting branch — drives the SVG depth. */
  depth: number;
}
