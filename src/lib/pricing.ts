import type { AppDefinition, PricingTier } from "@/content/types";

/** The paid tier of an app, if it has one. */
export function paidTierOf(app: AppDefinition): PricingTier | undefined {
  return app.pricing.find((tier) => tier.amountUsd > 0);
}

/** Format a USD amount for the given locale (whole dollars, e.g. "$29"). */
export function formatUsd(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
