"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * ERDiagram — entity-relationship SVG for the About section. The "engineers"
 * table is the central PK; satellite tables (skills, projects, experience)
 * connect via FK arrows with cardinality crow's-feet at the many-side.
 *
 * No interaction — this is decorative + storytelling, not navigation.
 */
const TABLES = [
  {
    id: "engineers",
    title: "engineers",
    role: "primary",
    rows: [
      { col: "id", type: "uuid PK" },
      { col: "name", type: "text" },
      { col: "current_role", type: "text" },
      { col: "production_years", type: "numeric" },
      { col: "intent", type: "text" },
    ],
    x: 220,
    y: 130,
    w: 200,
  },
  {
    id: "skills",
    title: "skills",
    role: "satellite",
    rows: [
      { col: "id", type: "uuid PK" },
      { col: "engineer_id", type: "uuid FK" },
      { col: "category", type: "text" },
      { col: "value", type: "text" },
    ],
    x: 20,
    y: 30,
    w: 175,
  },
  {
    id: "projects",
    title: "projects",
    role: "satellite",
    rows: [
      { col: "id", type: "uuid PK" },
      { col: "engineer_id", type: "uuid FK" },
      { col: "slug", type: "text" },
      { col: "stack", type: "text[]" },
    ],
    x: 445,
    y: 30,
    w: 175,
  },
  {
    id: "experience",
    title: "experience",
    role: "satellite",
    rows: [
      { col: "id", type: "uuid PK" },
      { col: "engineer_id", type: "uuid FK" },
      { col: "company", type: "text" },
      { col: "period", type: "tstzrange" },
    ],
    x: 232,
    y: 320,
    w: 175,
  },
];

const ROW_H = 22;
const HEAD_H = 26;

function tableHeight(rows: number) {
  return HEAD_H + rows * ROW_H;
}

function anchor(side: "top" | "bottom" | "left" | "right", x: number, y: number, w: number, h: number) {
  switch (side) {
    case "top":    return { x: x + w / 2, y };
    case "bottom": return { x: x + w / 2, y: y + h };
    case "left":   return { x, y: y + h / 2 };
    case "right":  return { x: x + w, y: y + h / 2 };
  }
}

export function ERDiagram() {
  const reduce = useReducedMotion();

  // FK relationships from satellite → engineers
  const edges: { from: string; to: string; fromSide: "right" | "left" | "top"; toSide: "left" | "right" | "bottom" }[] = [
    { from: "skills",     to: "engineers", fromSide: "right",  toSide: "left"  },
    { from: "projects",   to: "engineers", fromSide: "left",   toSide: "right" },
    { from: "experience", to: "engineers", fromSide: "top",    toSide: "bottom" },
  ];

  const byId = Object.fromEntries(TABLES.map((t) => [t.id, t]));

  return (
    <svg viewBox="0 0 640 460" className="h-full w-full" role="img" aria-label="Self-portrait as an ER diagram">
      <defs>
        <marker id="er-arrow" viewBox="0 -5 10 10" refX="9" refY="0" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,-5L10,0L0,5" fill="#22d3ee" opacity="0.85" />
        </marker>
      </defs>

      {/* edges */}
      {edges.map((e, i) => {
        const a = byId[e.from];
        const b = byId[e.to];
        const ha = tableHeight(a.rows.length);
        const hb = tableHeight(b.rows.length);
        const A = anchor(e.fromSide, a.x, a.y, a.w, ha);
        const B = anchor(e.toSide, b.x, b.y, b.w, hb);

        // bezier control: pull horizontally between sides
        const mx = (A.x + B.x) / 2;
        const d = `M ${A.x} ${A.y} C ${mx} ${A.y}, ${mx} ${B.y}, ${B.x} ${B.y}`;

        return (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="#22d3ee"
            strokeOpacity={0.55}
            strokeWidth={1.2}
            strokeDasharray="4 3"
            markerEnd="url(#er-arrow)"
            initial={reduce ? undefined : { pathLength: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.6 + i * 0.15, ease: "easeOut" }}
          />
        );
      })}

      {/* tables */}
      {TABLES.map((t, ti) => {
        const h = tableHeight(t.rows.length);
        const isPrimary = t.role === "primary";
        const stroke = isPrimary ? "#22d3ee" : "#2a3754";
        return (
          <motion.g
            key={t.id}
            initial={reduce ? undefined : { opacity: 0, y: 6 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ti * 0.08 }}
          >
            <rect
              x={t.x}
              y={t.y}
              width={t.w}
              height={h}
              rx={6}
              fill="#0a0f1c"
              stroke={stroke}
              strokeWidth={isPrimary ? 1.5 : 1}
              strokeOpacity={isPrimary ? 0.9 : 0.6}
            />
            {/* header */}
            <rect
              x={t.x}
              y={t.y}
              width={t.w}
              height={HEAD_H}
              rx={6}
              fill={isPrimary ? "#0d1726" : "#11182a"}
            />
            <text
              x={t.x + 10}
              y={t.y + 17}
              fill={isPrimary ? "#22d3ee" : "#94a3b8"}
              style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 0.05 }}
            >
              {t.title}
            </text>
            <text
              x={t.x + t.w - 10}
              y={t.y + 17}
              textAnchor="end"
              fill="#64748b"
              style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 0.1, textTransform: "uppercase" as const }}
            >
              {isPrimary ? "PK · root" : "fk"}
            </text>
            {/* rows */}
            {t.rows.map((r, ri) => (
              <g key={r.col}>
                <text
                  x={t.x + 10}
                  y={t.y + HEAD_H + ri * ROW_H + 14}
                  fill="#cbd5e1"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                >
                  {r.col}
                </text>
                <text
                  x={t.x + t.w - 10}
                  y={t.y + HEAD_H + ri * ROW_H + 14}
                  textAnchor="end"
                  fill="#64748b"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 9.5 }}
                >
                  {r.type}
                </text>
              </g>
            ))}
          </motion.g>
        );
      })}
    </svg>
  );
}
