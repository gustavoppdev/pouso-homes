"use client";

import { ArrowDown } from "lucide-react";
import { prefillLead } from "@/components/conversion/lead/lead-prefill";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function QuoteModelButton({
  model,
  label,
  accessibleLabel,
  variant = "link",
  className,
}: {
  model: string;
  label: string;
  accessibleLabel?: string;
  variant?: "link" | "default" | "outline";
  className?: string;
}) {
  return (
    <Button
      type="button"
      variant={variant}
      size={variant === "link" ? "default" : "cta"}
      aria-label={accessibleLabel}
      onClick={() => prefillLead(model)}
      className={cn(
        "group/quote",
        variant === "link" && "h-11 px-0 text-body text-foreground",
        className,
      )}
    >
      {label}
      <ArrowDown
        aria-hidden
        className="transition-transform duration-(--duration-base) ease-brand group-hover/quote:translate-y-0.5"
      />
    </Button>
  );
}
