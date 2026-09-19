import type { Locale } from "@/i18n/routing";

type Rect = readonly [x: number, y: number, width: number, height: number];

export const models = [
  { key: "casulo", plan: [[0, 0, 2, 1]], area: 18, bedrooms: 0, bathrooms: 1 },
  {
    key: "ripa",
    plan: [
      [0, 0, 2, 1],
      [2, 0, 2, 1],
    ],
    area: 36,
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    key: "varanda",
    plan: [
      [0, 0, 2, 1],
      [0, 1, 2, 1],
    ],
    area: 36,
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    key: "serra",
    plan: [
      [0, 0, 2, 1],
      [2, 0, 2, 1],
      [0, 1, 2, 1],
    ],
    area: 54,
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    key: "patio",
    plan: [
      [0, 0, 2, 1],
      [2, 0, 2, 1],
      [0, 1, 1, 2],
      [3, 1, 1, 2],
    ],
    area: 72,
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    key: "longa",
    plan: [
      [0, 0, 2, 1],
      [2, 0, 2, 1],
      [0, 1, 2, 1],
      [2, 1, 2, 1],
    ],
    area: 72,
    bedrooms: 3,
    bathrooms: 2,
  },
] as const satisfies ReadonlyArray<{
  key: string;
  plan: readonly Rect[];
  area: number;
  bedrooms: number;
  bathrooms: number;
}>;

export type ModelKey = (typeof models)[number]["key"];

export const modelPrices: Record<Locale, { currency: string; from: Record<ModelKey, number> }> = {
  "pt-BR": {
    currency: "BRL",
    from: {
      casulo: 139000,
      ripa: 229000,
      varanda: 259000,
      serra: 329000,
      patio: 419000,
      longa: 449000,
    },
  },
  en: {
    currency: "USD",
    from: {
      casulo: 38000,
      ripa: 62000,
      varanda: 69000,
      serra: 88000,
      patio: 112000,
      longa: 119000,
    },
  },
};

export const popularModel: ModelKey = "serra";

export const deliveries = [
  { key: "cunha", model: "serra", assemblyDays: 3, area: 54, porch: false },
  { key: "rosa", model: "ripa", assemblyDays: 2, area: 36, porch: false },
  { key: "sapucai", model: "varanda", assemblyDays: 3, area: 36, porch: true },
] as const satisfies ReadonlyArray<{
  key: string;
  model: ModelKey;
  assemblyDays: number;
  area: number;
  porch: boolean;
}>;

export const stats = [
  { key: "delivery", value: 90 },
  { key: "homes", value: 312 },
  { key: "assembly", value: 3 },
  { key: "warranty", value: 10 },
] as const;
