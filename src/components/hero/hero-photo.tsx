"use client";

import { m } from "motion/react";
import { motionTokens } from "@/lib/motion";

export function HeroPhoto({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      initial={{ scale: 1.06 }}
      animate={{ scale: 1 }}
      transition={{ duration: motionTokens.duration.hero * 2, ease: motionTokens.ease.enter }}
    >
      {children}
    </m.div>
  );
}
