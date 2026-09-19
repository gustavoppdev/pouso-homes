import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export async function JsonLd({ locale, url }: { locale: Locale; url: string }) {
  const meta = await getTranslations({ locale, namespace: "Metadata" });
  const base = {
    "@context": "https://schema.org",
    name: meta("siteName"),
    description: meta("description"),
    url,
  };

  const data = {
    ...base,
    "@type": "Organization",
    makesOffer: { "@type": "Offer", itemOffered: { "@type": "Service", name: meta("title") } },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
