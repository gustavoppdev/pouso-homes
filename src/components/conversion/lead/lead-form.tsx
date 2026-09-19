"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, Loader2 } from "lucide-react";
import { m } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod/mini";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { DemoNotice } from "../demo-notice";
import { simulate } from "../simulate";
import { onLeadPrefill } from "./lead-prefill";

export type LeadOption = { value: string; label: string };

export function LeadForm({ options, className }: { options: LeadOption[]; className?: string }) {
  const t = useTranslations("Conversion.lead");
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().check(z.trim(), z.minLength(1, t("errors.required"))),
        email: z.pipe(
          z.string().check(z.trim(), z.minLength(1, t("errors.required"))),
          z.email(t("errors.email")),
        ),
        phone: z.string().check(
          z.trim(),
          z.minLength(1, t("errors.required")),
          z.refine((value) => {
            const digits = value.replace(/\D/g, "").length;
            return digits >= 10 && digits <= 15;
          }, t("errors.phone")),
        ),
        choice: z.string().check(z.minLength(1, t("errors.choice"))),
      }),
    [t],
  );

  type Values = z.infer<typeof schema>;

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", phone: "", choice: "" },
  });
  const { errors, isSubmitting } = form.formState;

  const onSubmit = async (values: Values) => {
    await simulate(1100);
    setSubmittedName(values.name.split(" ")[0] ?? values.name);
  };

  useEffect(() => {
    if (submittedName) successRef.current?.focus();
  }, [submittedName]);

  useEffect(
    () =>
      onLeadPrefill((value) => {
        setSubmittedName(null);
        form.setValue("choice", value, { shouldValidate: form.formState.isSubmitted });
      }),
    [form],
  );

  if (submittedName) {
    return (
      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "flex flex-col items-start gap-4 rounded-card border border-border bg-card p-6 shadow-card sm:p-8",
          className,
        )}
        aria-live="polite"
      >
        <CircleCheck aria-hidden className="size-10 text-success" />
        <h3 ref={successRef} tabIndex={-1} className="text-h3 outline-none">
          {t("successTitle")}
        </h3>
        <p className="text-muted-foreground">{t("successBody", { name: submittedName })}</p>
        <DemoNotice />
        <Button
          type="button"
          variant="outline"
          size="cta"
          onClick={() => {
            form.reset();
            setSubmittedName(null);
          }}
        >
          {t("reset")}
        </Button>
      </m.div>
    );
  }

  const fields = [
    { name: "name", type: "text", autoComplete: "name", inputMode: "text" },
    { name: "email", type: "email", autoComplete: "email", inputMode: "email" },
    { name: "phone", type: "tel", autoComplete: "tel", inputMode: "tel" },
  ] as const;

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      aria-busy={isSubmitting || undefined}
      className={cn(
        "flex flex-col gap-6 rounded-card border border-border bg-card p-6 shadow-card sm:p-8",
        className,
      )}
    >
      <FieldGroup className="gap-5">
        {fields.map((field) => {
          const error = errors[field.name];
          const id = `lead-${field.name}`;
          return (
            <Field key={field.name} data-invalid={!!error || undefined}>
              <FieldLabel htmlFor={id}>{t(`fields.${field.name}.label`)}</FieldLabel>
              <Input
                id={id}
                type={field.type}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                placeholder={t(`fields.${field.name}.placeholder`)}
                aria-invalid={!!error || undefined}
                aria-describedby={error ? `${id}-error` : undefined}
                className="h-11 px-4 text-body"
                {...form.register(field.name)}
              />
              <FieldError id={`${id}-error`} errors={[error]} />
            </Field>
          );
        })}
        <Field data-invalid={!!errors.choice || undefined}>
          <FieldLabel htmlFor="lead-choice">{t("fields.choice.label")}</FieldLabel>
          <Controller
            control={form.control}
            name="choice"
            render={({ field }) => (
              <Select
                items={options}
                value={field.value || null}
                onValueChange={(value) => field.onChange(value ?? "")}
                onOpenChange={(open) => {
                  if (!open) field.onBlur();
                }}
              >
                <SelectTrigger
                  id="lead-choice"
                  ref={field.ref}
                  aria-invalid={!!errors.choice || undefined}
                  aria-describedby={errors.choice ? "lead-choice-error" : undefined}
                  className="w-full text-body data-[size=default]:h-11 data-[size=default]:px-4"
                >
                  <SelectValue placeholder={t("fields.choice.placeholder")} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError id="lead-choice-error" errors={[errors.choice]} />
        </Field>
      </FieldGroup>
      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          size="cta"
          disabled={isSubmitting}
          className="group/cta w-full sm:w-auto sm:self-start"
        >
          {isSubmitting && <Loader2 aria-hidden className="animate-spin" />}
          <span aria-live="polite">{isSubmitting ? t("submitting") : t("submit")}</span>
        </Button>
        <p className="text-small text-muted-foreground">
          {t.rich("consent", {
            link: (chunks) => (
              <Link
                href="/privacy"
                className="font-medium text-foreground underline underline-offset-4"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </div>
    </form>
  );
}
