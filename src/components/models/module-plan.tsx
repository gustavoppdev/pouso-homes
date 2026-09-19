import { cn } from "@/lib/utils";

type Rect = readonly [x: number, y: number, width: number, height: number];

const UNIT = 10;

export function ModulePlan({
  plan,
  label,
  className,
}: {
  plan: readonly Rect[];
  label: string;
  className?: string;
}) {
  const width = Math.max(...plan.map(([x, , w]) => x + w)) * UNIT;
  const height = Math.max(...plan.map(([, y, , h]) => y + h)) * UNIT;

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`-1 -1 ${width + 2} ${height + 2}`}
      className={cn("h-6 w-auto overflow-visible", className)}
    >
      {plan.map(([x, y, w, h]) => (
        <rect
          key={`${x}-${y}`}
          x={x * UNIT}
          y={y * UNIT}
          width={w * UNIT}
          height={h * UNIT}
          vectorEffect="non-scaling-stroke"
          className="fill-transparent stroke-current transition-colors duration-(--duration-base) ease-brand group-hover/model:fill-primary/15"
          strokeWidth="1.25"
        />
      ))}
    </svg>
  );
}
