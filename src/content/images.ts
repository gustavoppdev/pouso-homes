import hero from "@/assets/images/hero.webp";
import deliveryCunha from "@/assets/images/delivery-cunha.webp";
import deliveryRosa from "@/assets/images/delivery-rosa.webp";
import deliverySapucai from "@/assets/images/delivery-sapucai.webp";
import modelCasulo from "@/assets/images/model-casulo.webp";
import modelRipa from "@/assets/images/model-ripa.webp";
import modelVaranda from "@/assets/images/model-varanda.webp";
import modelSerra from "@/assets/images/model-serra.webp";
import modelPatio from "@/assets/images/model-patio.webp";
import modelLonga from "@/assets/images/model-longa.webp";
import quote from "@/assets/images/quote.webp";
import type { StaticImageData } from "next/image";

export type ImageSlot = {
  ratio: `${number}/${number}`;
  role: "hero" | "full" | "primary" | "card" | "avatar";
  src: StaticImageData | null;
};

export const images = {
  hero: { ratio: "16/9", role: "hero", src: hero },
  "delivery-cunha": { ratio: "4/3", role: "primary", src: deliveryCunha },
  "delivery-rosa": { ratio: "4/3", role: "primary", src: deliveryRosa },
  "delivery-sapucai": { ratio: "4/3", role: "primary", src: deliverySapucai },
  "model-casulo": { ratio: "4/3", role: "card", src: modelCasulo },
  "model-ripa": { ratio: "4/3", role: "card", src: modelRipa },
  "model-varanda": { ratio: "4/3", role: "card", src: modelVaranda },
  "model-serra": { ratio: "4/3", role: "card", src: modelSerra },
  "model-patio": { ratio: "4/3", role: "card", src: modelPatio },
  "model-longa": { ratio: "4/3", role: "card", src: modelLonga },
  quote: { ratio: "16/9", role: "full", src: quote },
} satisfies Record<string, ImageSlot>;

export type ImageName = keyof typeof images;
