import { Bath, BedDouble, Ruler } from "lucide-react";
import { getFormatter, getLocale, getTranslations } from "next-intl/server";
import { PrimaryCta } from "@/components/conversion/primary-cta";
import { LandingImage } from "@/components/media/landing-image";
import { ModulePlan } from "@/components/models/module-plan";
import { QuoteModelButton } from "@/components/models/quote-model-button";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { modelPrices, models, popularModel } from "@/content/data";
import type { Locale } from "@/i18n/routing";

export async function Models() {
  const t = await getTranslations("Models");
  const format = await getFormatter();
  const market = modelPrices[(await getLocale()) as Locale];

  return (
    <section
      id="models"
      aria-labelledby="models-title"
      className="mx-auto max-w-page px-gutter py-section"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 id="models-title" className="text-h2">
            {t("title")}
          </h2>
          <p className="text-lead text-muted-foreground">{t("lead")}</p>
        </div>
        <PrimaryCta className="self-start lg:self-auto" />
      </div>

      <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {models.map((model) => {
          const price = format.number(market.from[model.key], {
            style: "currency",
            currency: market.currency,
            maximumFractionDigits: 0,
          });
          const chips = [
            { icon: Ruler, text: t("area", { area: model.area }) },
            { icon: BedDouble, text: t("bedrooms", { count: model.bedrooms }) },
            { icon: Bath, text: t("bathrooms", { count: model.bathrooms }) },
          ];
          return (
            <StaggerItem key={model.key} as="li">
              <article className="group/model flex h-full flex-col overflow-hidden rounded-card bg-card shadow-card">
                <div className="relative overflow-hidden">
                  <LandingImage
                    name={`model-${model.key}`}
                    alt={t(`items.${model.key}.imageAlt`)}
                    sizes="(min-width: 1024px) 26rem, (min-width: 640px) 50vw, 100vw"
                    className="transition-transform duration-(--duration-base) ease-brand group-hover/model:scale-103"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="rounded-control bg-card/90 px-3 py-1 text-small text-card-foreground backdrop-blur-sm">
                      {t("price", { price })}
                    </span>
                    {model.key === popularModel && (
                      <span className="rounded-control bg-primary px-3 py-1 text-small text-primary-foreground">
                        {t("badge")}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-h3">{t(`items.${model.key}.name`)}</h3>
                    <ModulePlan
                      plan={model.plan}
                      label={t("plan", { count: model.plan.length })}
                      className="text-muted-foreground"
                    />
                  </div>
                  <p className="text-muted-foreground">{t(`items.${model.key}.description`)}</p>
                  <ul className="mt-auto flex flex-wrap gap-2">
                    {chips.map(({ icon: Icon, text }) => (
                      <li
                        key={text}
                        className="flex items-center gap-1.5 rounded-control border border-border px-3 py-1 text-small"
                      >
                        <Icon aria-hidden className="size-3.5 text-muted-foreground" />
                        {text}
                      </li>
                    ))}
                  </ul>
                  <QuoteModelButton
                    model={model.key}
                    label={t("quote")}
                    accessibleLabel={t("quoteLabel", { name: t(`items.${model.key}.name`) })}
                    className="self-start"
                  />
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
