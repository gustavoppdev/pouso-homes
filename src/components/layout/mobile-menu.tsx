"use client";

import { Menu } from "lucide-react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const MobileMenuSheet = dynamic(
  () => import("./mobile-menu-sheet").then((m) => m.MobileMenuSheet),
  {
    ssr: false,
  },
);

export function MobileMenu({ cta }: { cta: React.ReactNode }) {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={triggerRef}
        variant="ghost"
        size="icon-lg"
        className="size-11 lg:hidden"
        aria-expanded={open}
        aria-haspopup="dialog"
        onPointerEnter={() => void import("./mobile-menu-sheet")}
        onClick={() => {
          setLoaded(true);
          setOpen(true);
        }}
      >
        <Menu aria-hidden className="size-5" />
        <span className="sr-only">{t("openMenu")}</span>
      </Button>
      {loaded && (
        <MobileMenuSheet open={open} onOpenChange={setOpen} returnFocus={triggerRef} cta={cta} />
      )}
    </>
  );
}
