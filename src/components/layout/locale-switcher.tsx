"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  zh: "简体中文",
};

export function LocaleSwitcher({ label }: { label: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (
    <label className="relative flex items-center">
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        onChange={(event) => {
          const nextLocale = event.target.value as Locale;
          // @ts-expect-error — params match the current pathname's dynamic segments.
          router.replace({ pathname, params }, { locale: nextLocale });
        }}
        className={cn(
          "h-9 cursor-pointer appearance-none rounded-lg border-none bg-transparent",
          "pl-2 pr-6 font-mono text-xs uppercase tracking-wider",
          "text-muted-foreground transition-colors hover:text-foreground",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        )}
      >
        {routing.locales.map((option) => (
          <option key={option} value={option}>
            {LOCALE_LABELS[option]}
          </option>
        ))}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 8 5"
        className="pointer-events-none absolute right-1.5 size-2 fill-none stroke-muted-foreground"
      >
        <path d="M1 1l3 3 3-3" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </label>
  );
}
