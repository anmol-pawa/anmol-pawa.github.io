"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { TopologyEdge, TopologyNode } from "@/lib/types";

/**
 * Topology — generic service-topology SVG. Data-driven from the project's
 * `topology` field in lib/content.ts. Nodes are placed on a unit grid (0..1);
 * this component scales them into the viewBox.
 *
 *   client    — entry edge (slate-muted)
 *   service   — compute (accent color)
 *   store     — emerald (data)
 *   queue     — amber (message bus)
 *   external  — violet (3rd-party)
 *
 * Edges are SVG paths with an arrowhead marker; data-flow dots animate along
 * each path subtly to suggest "this is alive".
 */
interface TopologyProps {
  nodes: TopologyNode[];
  edges: TopologyEdge[];
  accent: string;
  /** Width × height in px. Defaults to 560 × 240 (suits a card). */
  width?: number;
  height?: number;
}

const KIND_FILL: Record<TopologyNode["kind"], string> = {
  client: "#1f2a3f",
  service: "#0d1726",
  store: "#0c2018",
  queue: "#1a1408",
  external: "#150d22",
};

const KIND_STROKE: Record<TopologyNode["kind"], string> = {
  client: "#475569",
  service: "#22d3ee",
  store: "#34d399",
  queue: "#fbbf24",
  external: "#a855f7",
};

export function Topology({
  nodes,
  edges,
  accent,
  width = 560,
  height = 240,
}: TopologyProps) {
  const reduce = useReducedMotion();

  const NODE_W = 96;
  const NODE_H = 30;
  const PAD = 18;

  const pos = (n: TopologyNode) => ({
    cx: PAD + n.x * (width - PAD * 2),
    cy: PAD + n.y * (height - PAD * 2),
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      role="img"
      aria-label="Service topology diagram"
    >
      <defs>
        <marker
          id={`arrow-${accent.replace("#", "")}`}
          viewBox="0 -5 10 10"
          refX="8"
          refY="0"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0,-4L8,0L0,4" fill={accent} opacity="0.85" />
        </marker>
      </defs>

      {/* edges */}
      {edges.map((e, i) => {
        const a = nodes.find((n) => n.id === e.from);
        const b = nodes.find((n) => n.id === e.to);
        if (!a || !b) return null;
        const A = pos(a);
        const B = pos(b);

        // Anchor on node edge, not center
        const dx = B.cx - A.cx;
        const dy = B.cy - A.cy;
        const len = Math.hypot(dx, dy) || 1;
        const ux = dx / len;
        const uy = dy / len;
        const x1 = A.cx + ux * (NODE_W / 2);
        const y1 = A.cy + uy * (NODE_H / 2);
        const x2 = B.cx - ux * (NODE_W / 2 + 4);
        const y2 = B.cy - uy * (NODE_H / 2 + 4);

        const pathId = `edge-${i}`;
        const d = `M ${x1} ${y1} L ${x2} ${y2}`;

        return (
          <g key={i}>
            <path
              id={pathId}
              d={d}
              fill="none"
              stroke={accent}
              strokeWidth={1.1}
              strokeOpacity={0.45}
              markerEnd={`url(#arrow-${accent.replace("#", "")})`}
            />
            {!reduce && (
              <motion.circle
                r={2}
                fill={accent}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: "linear",
                }}
              >
                <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${i * 0.35}s`}>
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </motion.circle>
            )}
            {e.label && (
              <text
                x={(x1 + x2) / 2}
                y={(y1 + y2) / 2 - 5}
                textAnchor="middle"
                className="fill-[color:var(--color-muted-2)]"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 8.5,
                  letterSpacing: 0.04,
                }}
              >
                {e.label}
              </text>
            )}
          </g>
        );
      })}

      {/* nodes */}
      {nodes.map((n) => {
        const { cx, cy } = pos(n);
        return (
          <g key={n.id} transform={`translate(${cx - NODE_W / 2}, ${cy - NODE_H / 2})`}>
            <rect
              width={NODE_W}
              height={NODE_H}
              rx={6}
              fill={KIND_FILL[n.kind]}
              stroke={KIND_STROKE[n.kind]}
              strokeWidth={1}
              strokeOpacity={0.7}
            />
            <text
              x={NODE_W / 2}
              y={NODE_H / 2 + 3.5}
              textAnchor="middle"
              fill="#e2e8f0"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: 0.02,
              }}
            >
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
