import type { AppDefinition } from "@/content/types";
import { pureScribe } from "./purescribe";

/**
 * The app catalog. To publish a new app: create a definition file next to
 * `purescribe.ts` and add it here — every page (catalog, product,
 * sitemap, structured data, fulfillment) derives from this list.
 */
export const apps: AppDefinition[] = [pureScribe];

export function getApp(slug: string): AppDefinition | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAppByPaddlePriceId(
  priceId: string,
): AppDefinition | undefined {
  return apps.find(
    (app) => app.paddlePriceId !== undefined && app.paddlePriceId === priceId,
  );
}
