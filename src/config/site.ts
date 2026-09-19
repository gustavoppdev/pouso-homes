export type ConversionType = "whatsapp" | "lead" | "sale";

export const site = {
  conversion: "lead" as ConversionType,
  sections: ["about", "deliveries", "models", "quote"],
} as const;

export type SectionId = (typeof site.sections)[number];
