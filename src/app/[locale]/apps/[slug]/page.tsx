import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { AppFaq } from "@/components/apps/app-faq";
import { AppHero } from "@/components/apps/app-hero";
import { AppPricing } from "@/components/apps/app-pricing";
import { Changelog } from "@/components/apps/changelog";
import { DownloadCta } from "@/components/apps/download-cta";
import { FeatureBlocks } from "@/components/apps/feature-blocks";
import { FeatureGrid } from "@/components/apps/feature-grid";
import { Requirements } from "@/components/apps/requirements";
import { Reviews } from "@/components/apps/reviews";
import { Screenshots } from "@/components/apps/screenshots";
import { apps, getApp } from "@/content/apps";
import { pick } from "@/content/types";
import { routing, type Locale } from "@/i18n/routing";
import { paidTierOf } from "@/lib/pricing";
import { alternatesFor } from "@/lib/seo";
import { site } from "@/lib/site";

interface AppPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: AppPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const app = getApp(slug);
  if (!app) return {};

  const description = pick(app.shortDescription, locale);
  return {
    title: `${app.name} — ${pick(app.tagline, locale)}`,
    description,
    alternates: alternatesFor(`/apps/${app.slug}`, locale),
    openGraph: {
      title: app.name,
      description,
      type: "website",
    },
  };
}

export default async function AppDetailPage({ params }: AppPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const app = getApp(slug);
  if (!app) notFound();

  const paidTier = paidTierOf(app);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    operatingSystem: app.platforms.join(", "),
    applicationCategory: "ProductivityApplication",
    description: pick(app.shortDescription, locale as Locale),
    softwareVersion: app.version,
    datePublished: app.releasedAt,
    url: `${site.url}/apps/${app.slug}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        category: "Free",
      },
      ...(paidTier
        ? [
            {
              "@type": "Offer",
              price: String(paidTier.amountUsd),
              priceCurrency: "USD",
              category: "Pro",
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AppHero app={app} />
      <FeatureGrid app={app} />
      <FeatureBlocks app={app} />
      <Screenshots app={app} />
      <AppPricing app={app} />
      <Reviews app={app} />
      <Requirements app={app} />
      <AppFaq app={app} />
      <Changelog app={app} />
      <DownloadCta app={app} />
    </>
  );
}
