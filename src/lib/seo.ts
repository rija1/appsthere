import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { site } from "@/lib/site";

/** Path for a locale under `as-needed` prefixing (default locale unprefixed). */
export function localizedPath(path: string, locale: Locale): string {
  const normalized = path === "/" ? "" : path;
  return locale === routing.defaultLocale
    ? normalized || "/"
    : `/${locale}${normalized}`;
}

/** Canonical + hreflang alternates for a route, for use in `generateMetadata`. */
export function alternatesFor(
  path: string,
  locale: Locale,
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {
    "x-default": localizedPath(path, routing.defaultLocale),
  };
  for (const candidate of routing.locales) {
    languages[candidate] = localizedPath(path, candidate);
  }
  return {
    canonical: localizedPath(path, locale),
    languages,
  };
}

export const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  zh: "zh_CN",
};

export { site };
