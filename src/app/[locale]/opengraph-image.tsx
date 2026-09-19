import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { createTranslator, hasLocale } from "next-intl";
import { BrandMarkImage } from "@/components/brand/brand-mark-image";
import { routing } from "@/i18n/routing";
import { tokenHex } from "@/lib/tokens.server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function translators(requested: string | undefined) {
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  return {
    meta: createTranslator({ locale, messages, namespace: "Metadata" }),
    hero: createTranslator({ locale, messages, namespace: "Hero" }),
  };
}

export async function generateImageMetadata({ params }: { params?: { locale?: string } }) {
  const { meta } = await translators(params?.locale);
  return [{ id: "og", alt: meta("ogImageAlt"), size, contentType }];
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const { meta: t, hero } = await translators(locale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: tokenHex("background"),
        color: tokenHex("foreground"),
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <BrandMarkImage
          size={64}
          fill={tokenHex("primary")}
          stroke={tokenHex("primary-foreground")}
        />
        <span style={{ fontSize: 36, fontWeight: 600 }}>{t("siteName")}</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: -2,
          maxWidth: 960,
        }}
      >
        {hero("title")}
      </div>
      <div
        style={{
          display: "flex",
          height: 12,
          width: 160,
          borderRadius: 6,
          background: tokenHex("primary"),
        }}
      />
    </div>,
    size,
  );
}
