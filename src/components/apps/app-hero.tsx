import { ArrowDownToLine } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { HeroMockup } from "@/components/mockups/hero-mockup";
import { Reveal } from "@/components/motion/reveal";
import { BuyButton } from "@/components/paddle/buy-button";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { AppDefinition } from "@/content/types";
import { pick } from "@/content/types";
import { formatUsd, paidTierOf } from "@/lib/pricing";

export async function AppHero({ app }: { app: AppDefinition }) {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const paidTier = paidTierOf(app);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]"
        style={{
          background:
            "radial-gradient(52% 44% at 50% 0%, var(--brand-soft), transparent 72%)",
        }}
      />

      <div className="container-page grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="flex max-w-xl flex-col items-start gap-6">
          <Reveal className="flex flex-wrap items-center gap-2">
            {app.platforms.map((platform) => (
              <Badge key={platform} variant="brand">
                {platform}
              </Badge>
            ))}
            <Badge>{t("common.version", { version: app.version })}</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-[3.4rem]">
              {app.name}
            </h1>
            <p className="pt-3 text-xl font-medium text-brand md:text-2xl">
              {pick(app.tagline, locale)}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-balance text-lg leading-relaxed text-muted-foreground">
              {pick(app.longDescription, locale)}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="flex flex-wrap items-center gap-3">
            <a href={app.downloadUrl} className={buttonVariants({ size: "lg" })}>
              <ArrowDownToLine className="size-4" aria-hidden />
              {t("common.downloadFree")}
            </a>
            {paidTier ? (
              <BuyButton
                priceId={app.paddlePriceId}
                label={t("appPage.buyProFor", {
                  price: formatUsd(paidTier.amountUsd, locale),
                })}
                unavailableLabel={t("appPage.checkoutUnavailable")}
                variant="secondary"
                size="lg"
              />
            ) : null}
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {t("appPage.fileInfo", { size: app.fileSizeMb })}
            </p>
          </Reveal>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}
