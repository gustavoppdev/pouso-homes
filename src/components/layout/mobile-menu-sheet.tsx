"use client";

import { useTranslations } from "next-intl";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { LocaleSwitcher } from "./locale-switcher";
import { SectionNav } from "./section-nav";

type MobileMenuSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnFocus: React.RefObject<HTMLButtonElement | null>;
  cta: React.ReactNode;
};

export function MobileMenuSheet({ open, onOpenChange, returnFocus, cta }: MobileMenuSheetProps) {
  const t = useTranslations("Nav");

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        closeLabel={t("closeMenu")}
        finalFocus={returnFocus}
        className="w-full gap-8 overscroll-contain px-gutter pt-16 pb-8 sm:max-w-sm"
      >
        <SheetTitle className="sr-only">{t("label")}</SheetTitle>
        <nav aria-label={t("label")}>
          <SectionNav orientation="vertical" onNavigate={() => onOpenChange(false)} />
        </nav>
        <div className="mt-auto flex flex-col gap-4">
          <LocaleSwitcher />
          {cta}
        </div>
      </SheetContent>
    </Sheet>
  );
}
