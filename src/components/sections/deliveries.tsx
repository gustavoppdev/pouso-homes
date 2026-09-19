import { getTranslations } from "next-intl/server";
import { DeliveriesIndex } from "@/components/deliveries/deliveries-index";
import { LandingImage } from "@/components/media/landing-image";
import { deliveries } from "@/content/data";

export async function Deliveries() {
  const t = await getTranslations("Deliveries");
  const names = await getTranslations("Models.items");

  const items = deliveries.map((delivery) => {
    const model = t("model", { name: names(`${delivery.model}.name`) });
    const assembly = t("assembly", { days: delivery.assemblyDays });
    const area = t(delivery.porch ? "areaPorch" : "area", { area: delivery.area });
    return {
      key: delivery.key,
      model: delivery.model,
      title: t(`items.${delivery.key}.title`),
      meta: [model, assembly, area],
      body: t(`items.${delivery.key}.body`),
      chips: [assembly, area, model],
      image: (
        <LandingImage
          name={`delivery-${delivery.key}`}
          alt={t(`items.${delivery.key}.imageAlt`)}
          sizes="(min-width: 1024px) 44rem, 100vw"
        />
      ),
    };
  });

  return (
    <section
      id="deliveries"
      aria-labelledby="deliveries-title"
      className="mx-auto max-w-page px-gutter py-section"
    >
      <h2 id="deliveries-title" className="mb-10 text-h2 lg:mb-14">
        {t("title")}
      </h2>
      <DeliveriesIndex items={items} labelledBy="deliveries-title" />
    </section>
  );
}
