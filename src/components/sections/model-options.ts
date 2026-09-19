import { getTranslations } from "next-intl/server";
import type { LeadOption } from "@/components/conversion/lead/lead-form";
import { models } from "@/content/data";

export async function getModelOptions(): Promise<LeadOption[]> {
  const names = await getTranslations("Models.items");
  const lead = await getTranslations("Conversion.lead");
  return [
    ...models.map((model) => ({ value: model.key, label: names(`${model.key}.name`) })),
    { value: "undecided", label: lead("fields.choice.undecided") },
  ];
}
