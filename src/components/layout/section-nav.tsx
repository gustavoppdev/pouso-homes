"use client";

import { useTranslations } from "next-intl";
import { site } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function SectionNav({
  className,
  onNavigate,
  orientation = "horizontal",
}: {
  className?: string;
  onNavigate?: () => void;
  orientation?: "horizontal" | "vertical";
}) {
  const t = useTranslations("Nav");
  const active = useActiveSection(site.sections);

  return (
    <ul
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-col gap-1" : "items-center gap-1",
        className,
      )}
    >
      {site.sections.map((id) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={onNavigate}
            aria-current={active === id ? "location" : undefined}
            className={cn(
              "relative block press rounded-control opacity-70 transition-opacity hover:opacity-100 aria-[current=location]:opacity-100",
              orientation === "vertical" ? "px-3 py-3 text-h3" : "py-2 pr-3 pl-4 text-small",
            )}
          >
            {orientation === "horizontal" && (
              <span
                aria-hidden="true"
                className="absolute top-1/2 left-1.5 size-1 -translate-y-1/2 scale-0 rounded-full bg-current transition-transform duration-(--duration-base) ease-brand [a[aria-current=location]>&]:scale-100"
              />
            )}
            {t(`links.${id}`)}
            {orientation === "horizontal" && (
              <span
                aria-hidden="true"
                className="absolute right-3 -bottom-0.5 left-4 h-px origin-left scale-x-0 bg-current transition-transform duration-(--duration-base) ease-brand [a:hover:not([aria-current=location])>&]:scale-x-100"
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
