import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { AppMockup } from "@/components/mockups/scenes";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { apps } from "@/content/apps";
import { pick } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { formatUsd, paidTierOf } from "@/lib/pricing";
import { alternatesFor } from "@/lib/seo";

interface AppsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AppsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "appsPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternatesFor("/apps", locale),
  };
}

export default async function AppsPage({ params }: AppsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [t, activeLocale] = await Promise.all([getTranslations(), getLocale()]);

  return (
    <div className="container-page py-16 md:py-24">
      <Reveal className="mb-12 flex max-w-2xl flex-col gap-3 md:mb-16">
        <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
          {t("featured.eyebrow")}
        </span>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {t("appsPage.title")}
        </h1>
        <p className="text-balance text-lg leading-relaxed text-muted-foreground">
          {t("appsPage.subtitle")}
        </p>
      </Reveal>

      <RevealGroup className="grid gap-6">
        {apps.map((app) => {
          const paidTier = paidTierOf(app);
          return (
            <RevealItem key={app.slug}>
              <Link href={`/apps/${app.slug}`} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                <Card className="overflow-hidden transition-[transform,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_56px_-24px_var(--shadow-color)]">
                  <div className="grid items-center gap-8 p-6 md:grid-cols-[1.1fr_1fr] md:p-10">
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {app.platforms.map((platform) => (
                          <Badge key={platform} variant="outline">
                            {platform}
                          </Badge>
                        ))}
                        <Badge>
                          {t("common.version", { version: app.version })}
                        </Badge>
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold tracking-tight">
                          {app.name}
                        </h2>
                        <p className="pt-1 text-brand">{pick(app.tagline, activeLocale)}</p>
                      </div>
                      <p className="max-w-md leading-relaxed text-muted-foreground">
                        {pick(app.shortDescription, activeLocale)}
                      </p>
                      <div className="flex items-center gap-4 pt-1">
                        <span className={buttonVariants({ variant: "secondary" })}>
                          {t("common.learnMore")}
                          <ArrowRight
                            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </span>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">
                            {t("common.free")}
                          </span>
                          {paidTier
                            ? ` · Pro ${formatUsd(paidTier.amountUsd, activeLocale)}`
                            : null}
                        </p>
                      </div>
                    </div>
                    <AppMockup
                      scene={app.heroScene}
                      className="transition-transform duration-500 ease-out group-hover:scale-[1.02] md:translate-x-4"
                    />
                  </div>
                </Card>
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </div>
  );
}
