import { getTranslations } from "next-intl/server";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { site } from "@/config/site";
import { Link } from "@/i18n/navigation";

const link =
  "rounded-control underline-offset-4 decoration-background/50 hover:underline focus-visible:outline-offset-2";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const nav = await getTranslations("Nav");
  const meta = await getTranslations("Metadata");
  const demo = await getTranslations("Demo");
  const tagline = t.raw("tagline") as string[];

  return (
    <footer
      aria-label={t("label")}
      className="bg-foreground text-background [--ring:var(--background)]"
    >
      <div className="mx-auto flex max-w-page flex-col gap-14 px-gutter pt-16 pb-8 lg:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.6fr]">
          <p className="text-lead">
            {tagline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <address className="flex flex-col gap-1 text-body not-italic">
            <span className="mb-2 text-small text-background/70">{t("contactTitle")}</span>
            <a href={`mailto:${t("email")}`} className={`self-start ${link}`}>
              {t("email")}
            </a>
            <a href={`tel:${t("phoneHref")}`} className={`self-start ${link}`}>
              {t("phone")}
            </a>
            <span>{t("address")}</span>
          </address>
          <nav aria-label={t("sectionsTitle")} className="flex flex-col gap-1 text-body">
            <span className="mb-2 text-small text-background/70">{t("sectionsTitle")}</span>
            {site.sections.map((id) => (
              <a key={id} href={`#${id}`} className={`self-start ${link}`}>
                {nav(`links.${id}`)}
              </a>
            ))}
          </nav>
        </div>

        <MaskReveal className="text-background">
          <div translate="no">
            <svg
              viewBox="0 -186 1000 266"
              aria-hidden="true"
              className="block w-full overflow-visible"
            >
              <text
                x="0"
                y="0"
                textLength="1000"
                lengthAdjust="spacing"
                className="fill-current font-display lowercase"
                fontSize="344"
                fontWeight="300"
              >
                {meta("siteName")}
              </text>
            </svg>
          </div>
        </MaskReveal>

        <div className="flex flex-col gap-3 border-t border-background/15 pt-6 text-small text-background/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("rights", { year: new Date().getFullYear() })}</p>
          <p>{demo("footerNotice")}</p>
          <Link href="/privacy" className={`self-start text-background sm:self-auto ${link}`}>
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
