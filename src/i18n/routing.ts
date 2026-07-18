import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "zh"],
  defaultLocale: "en",
  // English (default) lives at the root; other locales are prefixed
  // (/fr, /zh). "/" is served to English visitors and redirected to
  // /fr or /zh when their browser prefers those.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
