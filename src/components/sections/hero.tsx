import { getTranslations } from "next-intl/server";
import { HeroPhoto } from "@/components/hero/hero-photo";
import { QuoteBar } from "@/components/hero/quote-bar";
import { LandingImage } from "@/components/media/landing-image";
import { HeroItem, HeroSequence } from "@/components/motion/hero-sequence";
import { getModelOptions } from "./model-options";

export async function Hero() {
  const t = await getTranslations("Hero");
  const options = await getModelOptions();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate -mt-16 flex min-h-svh items-end overflow-hidden text-primary-foreground lg:min-h-[92svh]"
    >
      <div
        data-header-overlay
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[40svh]"
      />
      <HeroPhoto className="absolute inset-0 -z-20">
        <LandingImage name="hero" alt={t("imageAlt")} preload sizes="100vw" className="size-full" />
      </HeroPhoto>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-linear-to-t from-foreground/85 via-foreground/60 to-transparent sm:from-foreground/80 sm:via-foreground/40"
      />
      <div className="mx-auto w-full max-w-page px-gutter pt-40 pb-8 sm:pb-12 lg:pb-16">
        <HeroSequence className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div className="flex max-w-2xl flex-col gap-5">
            <HeroItem lcp>
              <h1 id="hero-title" className="text-display">
                {t("title")}
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="max-w-md text-lead text-primary-foreground/85">{t("lead")}</p>
            </HeroItem>
          </div>
          <HeroItem className="[--ring:var(--primary)]">
            <QuoteBar options={options} />
          </HeroItem>
        </HeroSequence>
      </div>
    </section>
  );
}
