"use client";

import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { LeadOption } from "@/components/conversion/lead/lead-form";
import { prefillLead } from "@/components/conversion/lead/lead-prefill";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function QuoteBar({ options }: { options: LeadOption[] }) {
  const t = useTranslations("Hero");
  const [value, setValue] = useState<string | null>(null);

  return (
    <form
      aria-label={t("barLabel")}
      onSubmit={(event) => {
        event.preventDefault();
        prefillLead(value ?? "");
      }}
      className="flex flex-col gap-2 rounded-card bg-card p-2 text-card-foreground shadow-overlay sm:flex-row sm:items-center sm:rounded-control sm:p-1.5 sm:pl-6"
    >
      <div className="flex min-w-0 flex-1 flex-col px-3 pt-1 sm:min-w-56 sm:px-0 sm:pt-0">
        <label htmlFor="hero-model" className="text-small text-muted-foreground">
          {t("modelLabel")}
        </label>
        <Select items={options} value={value} onValueChange={setValue}>
          <SelectTrigger
            id="hero-model"
            className="h-auto w-full rounded-none border-0 p-0 pb-1 text-body font-medium focus-visible:ring-0 data-placeholder:text-card-foreground"
          >
            <SelectValue placeholder={t("modelPlaceholder")} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" size="cta" className="group/cta w-full sm:w-auto">
        {t("cta")}
        <ArrowDown
          aria-hidden
          className="transition-transform duration-(--duration-base) ease-brand group-hover/cta:translate-y-0.5"
        />
      </Button>
    </form>
  );
}
