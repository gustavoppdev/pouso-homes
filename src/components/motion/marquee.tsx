"use client";

import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  pauseLabel: string;
  resumeLabel: string;
  className?: string;
  duration?: number;
};

export function Marquee({
  children,
  pauseLabel,
  resumeLabel,
  className,
  duration = 40,
}: MarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div className={cn("group/marquee relative", className)}>
      <div className="flex overflow-hidden motion-reduce:overflow-x-auto">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 || undefined}
            inert={copy === 1 || undefined}
            className={cn(
              "flex shrink-0 animate-[marquee_var(--marquee-duration)_linear_infinite] gap-6 pr-6 group-focus-within/marquee:[animation-play-state:paused] group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none",
              copy === 1 && "motion-reduce:hidden",
              paused && "[animation-play-state:paused]",
            )}
            style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
          >
            {children}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        className="mt-6 inline-flex size-11 press items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-(--duration-base) ease-brand hover:bg-accent motion-reduce:hidden"
      >
        {paused ? (
          <Play className="size-4" aria-hidden />
        ) : (
          <Pause className="size-4" aria-hidden />
        )}
        <span className="sr-only">{paused ? resumeLabel : pauseLabel}</span>
      </button>
    </div>
  );
}
