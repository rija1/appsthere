import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { AppMockup } from "@/components/mockups/scenes";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { apps } from "@/content/apps";
import { pick } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { formatUsd, paidTierOf } from "@/lib/pricing";

export async function FeaturedApps() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);

  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={t("featured.eyebrow")}
          title={t("featured.title")}
          subtitle={t("featured.subtitle")}
        />

        <RevealGroup className="grid gap-6">
          {apps.map((app) => {
            const paidTier = paidTierOf(app);
            return (
              <RevealItem key={app.slug}>
                <Card className="group overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-24px_var(--shadow-color)]">
                  <div className="grid items-center gap-8 p-6 md:grid-cols-[1.1fr_1fr] md:p-10">
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {app.platforms.map((platform) => (
                          <Badge key={platform} variant="outline">
                            {platform}
                          </Badge>
                        ))}
                        <Badge>{t("common.version", { version: app.version })}</Badge>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight">
                          {app.name}
                        </h3>
                        <p className="pt-1 text-base text-brand">
                          {pick(app.tagline, locale)}
                        </p>
                      </div>

                      <p className="max-w-md leading-relaxed text-muted-foreground">
                        {pick(app.shortDescription, locale)}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 pt-1">
                        <Link
                          href={`/apps/${app.slug}`}
                          className={buttonVariants({})}
                        >
                          {t("common.learnMore")}
                          <ArrowRight
                            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">
                            {t("common.free")}
                          </span>
                          {paidTier ? (
                            <>
                              {" · "}Pro {formatUsd(paidTier.amountUsd, locale)}{" "}
                              <span className="text-muted-foreground">
                                ({t("common.oneTime")})
                              </span>
                            </>
                          ) : null}
                        </p>
                      </div>
                    </div>

                    <AppMockup
                      scene={app.heroScene}
                      className="transition-transform duration-500 ease-out group-hover:scale-[1.02] md:translate-x-4"
                    />
                  </div>
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
