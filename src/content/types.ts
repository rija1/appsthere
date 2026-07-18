import type { Locale } from "@/i18n/routing";

/** A string translated into every supported locale. */
export type Localized = Record<Locale, string>;

/** Build a Localized value; keeps content files compact and readable. */
export function l(en: string, fr: string, zh: string): Localized {
  return { en, fr, zh };
}

/** Resolve a Localized value for the active locale. */
export function pick(text: Localized, locale: string): string {
  return text[locale as Locale] ?? text.en;
}

/** Vector scenes rendered by `@/components/mockups`. */
export type MockupScene = "editor" | "models" | "export" | "dropzone";

export interface AppFeature {
  id: string;
  /** Name of a lucide icon rendered by `FeatureIcon`. */
  icon:
    | "zap"
    | "lock"
    | "cpu"
    | "languages"
    | "pencil"
    | "download"
    | "waves"
    | "shield";
  title: Localized;
  description: Localized;
}

export interface FeatureBlock {
  id: string;
  eyebrow: Localized;
  title: Localized;
  body: Localized;
  bullets: Localized[];
  scene: MockupScene;
}

export interface AppScreenshot {
  id: string;
  scene: MockupScene;
  title: Localized;
  description: Localized;
}

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
}

export interface PricingTier {
  id: "free" | "pro";
  name: Localized;
  /** Display price in USD; 0 renders as "Free". */
  amountUsd: number;
  billing: "one-time" | "free";
  description: Localized;
  features: Localized[];
  cta: "download" | "buy";
  highlighted: boolean;
}

export interface ChangelogEntry {
  version: string;
  /** ISO date, e.g. "2026-07-17". */
  date: string;
  title: Localized;
  changes: Localized[];
}

export interface Review {
  id: string;
  author: string;
  role: Localized;
  /** 1–5. */
  rating: number;
  quote: Localized;
}

export interface Requirement {
  id: string;
  label: Localized;
  value: Localized;
}

export interface AppDefinition {
  slug: string;
  name: string;
  category: "productivity" | "media" | "utilities";
  tagline: Localized;
  shortDescription: Localized;
  longDescription: Localized;
  platforms: string[];
  version: string;
  releasedAt: string;
  updatedAt: string;
  status: "available" | "coming-soon";
  heroScene: MockupScene;
  /** Product ID embedded in signed license payloads (must match the app). */
  licenseProductID: string;
  /** Paddle price ID for the paid tier; undefined until configured. */
  paddlePriceId: string | undefined;
  /** Direct-download URL for the free build. */
  downloadUrl: string;
  fileSizeMb: number;
  features: AppFeature[];
  featureBlocks: FeatureBlock[];
  screenshots: AppScreenshot[];
  pricing: PricingTier[];
  faq: FaqItem[];
  requirements: Requirement[];
  changelog: ChangelogEntry[];
  reviews: Review[];
}

export interface BlogPostSection {
  heading?: Localized;
  paragraphs: Localized[];
}

export interface BlogPost {
  slug: string;
  category: "updates" | "development" | "tips" | "ai" | "windows";
  title: Localized;
  excerpt: Localized;
  publishedAt: string;
  readingMinutes: number;
  sections: BlogPostSection[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: Localized;
  quote: Localized;
  rating: number;
}
