"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("LocaleSwitcher");
  const current = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (event: React.MouseEvent<HTMLAnchorElement>, locale: Locale) => {
    event.preventDefault();
    if (locale === current) return;
    router.replace(`${pathname}${window.location.hash}`, { locale, scroll: false });
  };

  return (
    <nav aria-label={t("label")} className={cn("flex items-center gap-0.5 text-small", className)}>
      {routing.locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-0.5">
          {index > 0 && (
            <span aria-hidden="true" className="opacity-40">
              /
            </span>
          )}
          <a
            href={`/${locale}${pathname === "/" ? "" : pathname}`}
            hrefLang={locale}
            lang={locale}
            aria-current={locale === current ? "true" : undefined}
            onClick={(event) => switchTo(event, locale)}
            className="press rounded-control px-1.5 py-2 opacity-70 transition-opacity hover:opacity-100 aria-[current=true]:font-medium aria-[current=true]:opacity-100"
          >
            <span aria-hidden="true">{locale === "pt-BR" ? "PT" : "EN"}</span>
            <span className="sr-only">{t(`locales.${locale}`)}</span>
          </a>
        </span>
      ))}
    </nav>
  );
}
