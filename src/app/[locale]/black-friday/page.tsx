import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Apple, ArrowRight } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  blackFriday,
  blackFridayCopy,
  blackFridayDeals,
  blackFridayLocales,
  type BlackFridayLocale,
} from "@/content/black-friday";
import { Link } from "@/i18n/navigation";
import { alternatesFor, OG_LOCALES } from "@/lib/seo";
import { site } from "@/lib/site";

interface BlackFridayPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return blackFridayLocales.map((locale) => ({ locale }));
}

function isDealLocale(locale: string): locale is BlackFridayLocale {
  return (blackFridayLocales as readonly string[]).includes(locale);
}

function formatUsd(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export async function generateMetadata({
  params,
}: BlackFridayPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isDealLocale(locale)) return {};
  const copy = blackFridayCopy[locale];
  return {
    // Absolute: the site template adds an em dash, which deal-list moderators flag.
    title: { absolute: `${copy.metaTitle} | ${site.name}` },
    description: copy.metaDescription,
    alternates: alternatesFor("/black-friday", locale, blackFridayLocales),
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: OG_LOCALES[locale],
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: [
        { url: blackFriday.ogImage, width: 512, height: 512, alt: site.name },
      ],
    },
    twitter: {
      card: "summary",
      site: site.twitter,
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: [blackFriday.ogImage],
    },
  };
}

export default async function BlackFridayPage({
  params,
}: BlackFridayPageProps) {
  const { locale } = await params;
  if (!isDealLocale(locale)) notFound();
  setRequestLocale(locale);
  const copy = blackFridayCopy[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.metaTitle,
    itemListElement: blackFridayDeals.map((deal, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: deal.name[locale],
        operatingSystem: "macOS, iOS, iPadOS",
        applicationCategory: "ProductivityApplication",
        url: `${site.url}/apps/${deal.slug}`,
        offers: {
          "@type": "Offer",
          price: deal.dealUsd.toFixed(2),
          priceCurrency: "USD",
          category: "Pro",
          validFrom: blackFriday.startsAt,
          priceValidUntil: blackFriday.endsAt,
          url: deal.appStoreUrl,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem]"
          style={{
            background:
              "radial-gradient(52% 44% at 50% 0%, var(--brand-soft), transparent 72%)",
          }}
        />
        <div className="container-page max-w-4xl py-16 md:py-24">
          <Reveal className="mb-12 flex max-w-2xl flex-col items-start gap-4 md:mb-16">
            <Badge variant="brand">{copy.eyebrow}</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {copy.title}
            </h1>
            <p className="text-xl font-medium text-brand">{copy.dates}</p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {copy.intro}
            </p>
          </Reveal>

          <RevealGroup className="grid gap-6 md:grid-cols-2">
            {blackFridayDeals.map((deal) => (
              <RevealItem key={deal.slug} className="h-full">
                <div id={deal.anchor} className="h-full scroll-mt-24">
                  <Card className="flex h-full flex-col gap-5 p-6 md:p-8">
                    <div className="flex items-center gap-4">
                      <Image
                        src={deal.icon}
                        alt=""
                        width={64}
                        height={64}
                        unoptimized
                        className="size-16 shrink-0"
                      />
                      <div className="flex flex-col items-start gap-1.5">
                        <h2 className="text-xl font-semibold tracking-tight">
                          {deal.name[locale]}
                        </h2>
                        <Badge variant="brand">
                          {copy.off(deal.percentOff)}
                        </Badge>
                      </div>
                    </div>

                    <p className="leading-relaxed text-muted-foreground">
                      {deal.description[locale]}
                    </p>

                    <div className="mt-auto flex flex-col gap-1">
                      <span className="text-sm text-muted-foreground">
                        {copy.pro}
                      </span>
                      <div className="flex items-baseline gap-3">
                        <span className="sr-only">{copy.was}:</span>
                        <s className="text-lg text-muted-foreground">
                          {formatUsd(deal.regularUsd)}
                        </s>
                        <span className="sr-only">{copy.now}:</span>
                        <span className="text-3xl font-semibold tracking-tight">
                          {formatUsd(deal.dealUsd)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={deal.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({})}
                      >
                        <Apple className="size-4" aria-hidden />
                        {copy.appStore}
                      </a>
                      <Link
                        href={`/apps/${deal.slug}`}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {copy.appPage}
                        <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    </div>
                  </Card>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-14 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              {copy.howTitle}
            </h2>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 leading-relaxed text-muted-foreground">
              {copy.how.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
