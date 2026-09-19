"use client";

import { m } from "motion/react";
import { motionTokens } from "@/lib/motion";

export function MaskReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <m.div
      data-reveal
      className={className}
      initial={{ clipPath: "inset(12% 12% 12% 12%)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: motionTokens.viewport.margin }}
      transition={{ duration: motionTokens.duration.enter * 1.4, ease: motionTokens.ease.enter }}
    >
      {children}
    </m.div>
  );
}
