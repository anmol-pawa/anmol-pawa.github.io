import type { Stat } from "@/lib/types";

/**
 * StatCard — single statistic block (large number + caption).
 */
export function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="card group p-5 transition-all">
      <div className="flex items-baseline gap-1.5">
        <span className="stat-num">{stat.value}</span>
        {stat.unit && (
          <span className="font-mono text-xs text-[color:var(--color-muted-2)]">
            {stat.unit}
          </span>
        )}
      </div>
      <p className="mt-1.5 text-sm text-[color:var(--color-muted-2)]">
        {stat.label}
      </p>
    </div>
  );
}
