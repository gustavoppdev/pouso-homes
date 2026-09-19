"use client";

import { AnimatePresence, m } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { QuoteModelButton } from "@/components/models/quote-model-button";
import { motionTokens } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type Delivery = {
  key: string;
  model: string;
  image: React.ReactNode;
  title: string;
  meta: string[];
  body: string;
  chips: string[];
};

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((chip) => (
        <li key={chip} className="rounded-control border border-border px-3 py-1 text-small">
          {chip}
        </li>
      ))}
    </ul>
  );
}

export function DeliveriesIndex({ items, labelledBy }: { items: Delivery[]; labelledBy: string }) {
  const t = useTranslations("Deliveries");
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = items[active];

  const select = (index: number, focus = false) => {
    const next = (index + items.length) % items.length;
    setActive(next);
    if (focus) tabs.current[next]?.focus();
  };

  return (
    <>
      <div className="hidden gap-10 lg:grid lg:grid-cols-2 lg:gap-16">
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-labelledby={labelledBy}
          className="flex flex-col border-t border-border"
        >
          {items.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.key}
                ref={(node) => {
                  tabs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`delivery-tab-${item.key}`}
                aria-selected={selected}
                aria-controls="delivery-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(index)}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") select(index);
                }}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") select(index + 1, true);
                  else if (event.key === "ArrowUp") select(index - 1, true);
                  else if (event.key === "Home") select(0, true);
                  else if (event.key === "End") select(items.length - 1, true);
                  else return;
                  event.preventDefault();
                }}
                className="group/tab relative flex flex-col items-start gap-1 border-b border-border py-6 pl-6 text-left outline-offset-0"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-8.5 left-0 size-1.5 rounded-full bg-foreground transition-transform duration-(--duration-base) ease-brand",
                    selected ? "scale-100" : "scale-0",
                  )}
                />
                <span
                  className={cn(
                    "text-h3 transition-opacity duration-(--duration-base) ease-brand",
                    selected ? "opacity-100" : "opacity-70 group-hover/tab:opacity-100",
                  )}
                >
                  {item.title}
                </span>
                <span className="flex flex-wrap gap-x-4 text-small text-muted-foreground">
                  {item.meta.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="delivery-panel"
          role="tabpanel"
          aria-labelledby={`delivery-tab-${current.key}`}
          className="flex flex-col gap-6"
        >
          <div className="relative overflow-hidden rounded-media">
            {items.map((item, index) => (
              <div
                key={item.key}
                aria-hidden={index !== active || undefined}
                className={cn(
                  "transition-opacity duration-(--duration-base) ease-brand",
                  index === 0 ? "relative" : "absolute inset-0",
                  index === active ? "opacity-100" : "opacity-0",
                )}
              >
                {item.image}
              </div>
            ))}
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={current.key}
              initial={{ opacity: 0, y: motionTokens.distance.reveal / 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: motionTokens.duration.enter / 2,
                ease: motionTokens.ease.enter,
              }}
              className="flex flex-col items-start gap-5"
            >
              <p className="max-w-lg text-muted-foreground">{current.body}</p>
              <QuoteModelButton
                model={current.model}
                label={t("cta")}
                accessibleLabel={t("ctaLabel", { title: current.title })}
                variant="default"
              />
            </m.div>
          </AnimatePresence>
        </div>
      </div>

      <ul className="flex flex-col gap-12 lg:hidden">
        {items.map((item) => (
          <li key={item.key} className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-media">{item.image}</div>
            <h3 className="text-h3">{item.title}</h3>
            <Chips items={item.chips} />
            <p className="text-muted-foreground">{item.body}</p>
            <QuoteModelButton
              model={item.model}
              label={t("cta")}
              accessibleLabel={t("ctaLabel", { title: item.title })}
              variant="outline"
              className="self-start"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
