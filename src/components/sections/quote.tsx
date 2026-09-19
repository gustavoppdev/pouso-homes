import { getTranslations } from "next-intl/server";
import { LeadForm } from "@/components/conversion/lead/lead-form";
import { LandingImage } from "@/components/media/landing-image";
import { getModelOptions } from "./model-options";

export async function Quote() {
  const t = await getTranslations("Quote");
  const options = await getModelOptions();

  return (
    <section
      id="quote"
      aria-labelledby="quote-title"
      className="relative isolate pb-section lg:py-28"
    >
      <div className="lg:absolute lg:inset-0 lg:-z-10">
        <LandingImage name="quote" alt={t("imageAlt")} sizes="100vw" className="lg:size-full" />
      </div>
      <div className="relative mx-gutter -mt-16 max-w-xl rounded-card bg-card p-6 shadow-overlay sm:mx-auto sm:-mt-24 sm:p-10 lg:mt-0">
        <h2 id="quote-title" className="text-h2">
          {t("title")}
        </h2>
        <p className="mt-4 text-muted-foreground">{t("lead")}</p>
        <LeadForm
          options={options}
          className="mt-8 border-0 bg-transparent p-0 shadow-none sm:p-0"
        />
      </div>
    </section>
  );
}
