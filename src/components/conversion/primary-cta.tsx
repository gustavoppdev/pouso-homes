import { ArrowDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PrimaryCtaProps = {
  size?: "cta" | "default";
  variant?: "default" | "secondary" | "outline";
  className?: string;
};

export async function PrimaryCta({
  size = "cta",
  variant = "default",
  className,
}: PrimaryCtaProps) {
  const t = await getTranslations("Conversion.lead");
  return (
    <a href="#quote" className={cn(buttonVariants({ size, variant }), "group/cta", className)}>
      {t("submit")}
      <ArrowDown
        aria-hidden
        className="transition-transform duration-(--duration-base) ease-brand group-hover/cta:translate-y-0.5"
      />
    </a>
  );
}
