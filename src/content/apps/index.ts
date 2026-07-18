import type { AppDefinition } from "@/content/types";
import { lumisoTranscribe } from "./lumiso-transcribe";

/**
 * The app catalog. To publish a new app: create a definition file next to
 * `lumiso-transcribe.ts` and add it here — every page (catalog, product,
 * sitemap, structured data, fulfillment) derives from this list.
 */
export const apps: AppDefinition[] = [lumisoTranscribe];

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
