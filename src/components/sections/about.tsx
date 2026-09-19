import { ArrowDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Counter } from "@/components/motion/counter";
import { buttonVariants } from "@/components/ui/button";
import { stats } from "@/content/data";
import { cn } from "@/lib/utils";

export async function About() {
  const t = await getTranslations("About");

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-page px-gutter py-section"
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <h2 id="about-title" className="max-w-2xl text-h2">
          {t("title")}
        </h2>
        <div className="flex flex-col items-start gap-8 lg:pt-3">
          <p className="max-w-prose text-lead text-muted-foreground">{t("body")}</p>
          <a
            href="#models"
            className={cn(buttonVariants({ variant: "outline", size: "cta" }), "group/about")}
          >
            {t("cta")}
            <ArrowDown
              aria-hidden
              className="transition-transform duration-(--duration-base) ease-brand group-hover/about:translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <ul
        aria-label={t("statsLabel")}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-card bg-border shadow-card lg:mt-24 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <li
            key={stat.key}
            className="flex min-h-52 flex-col-reverse justify-between gap-10 bg-card p-5 sm:min-h-64 sm:p-7"
          >
            <p className="flex items-baseline gap-2">
              <Counter value={stat.value} className="font-display text-stat" />
              <span className="text-lead text-muted-foreground">{t(`stats.${stat.key}.unit`)}</span>
            </p>
            <p className="max-w-52 text-small text-muted-foreground">
              {t(`stats.${stat.key}.caption`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
