import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Deliveries } from "@/components/sections/deliveries";
import { Hero } from "@/components/sections/hero";
import { Models } from "@/components/sections/models";
import { Quote } from "@/components/sections/quote";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <div id="top" />
      <SiteHeader overlay />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Deliveries />
        <Models />
        <Quote />
      </main>
      <SiteFooter />
    </>
  );
}
