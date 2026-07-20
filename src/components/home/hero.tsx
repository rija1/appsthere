import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { HeroMockup } from "@/components/mockups/hero-mockup";
import { Reveal } from "@/components/motion/reveal";
import { BuyButton } from "@/components/paddle/buy-button";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { lumisoTranscribe } from "@/content/apps/lumiso-transcribe";
import { Link } from "@/i18n/navigation";
import { formatUsd, paidTierOf } from "@/lib/pricing";

export async function Hero() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const paidTier = paidTierOf(lumisoTranscribe);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem]"
        style={{
          background:
            "radial-gradient(52% 44% at 50% 0%, var(--brand-soft), transparent 72%)",
        }}
      />

      <div className="container-page grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="flex max-w-xl flex-col items-start gap-6">
          <Reveal>
            <Link href="/apps/lumiso-transcribe" className="group">
              <Badge variant="brand" className="py-1 pl-1.5 pr-2.5 normal-case tracking-normal">
                <span className="rounded-full bg-brand px-1.5 py-px text-[10px] font-semibold text-brand-foreground">
                  {t("common.new")}
                </span>
                {t("hero.badge")}
                <ArrowRight
                  className="size-3 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Badge>
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.06] tracking-[-0.03em] md:text-6xl">
              {t("hero.title")}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t("hero.subtitle")}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="flex flex-wrap items-center gap-3">
            <a
              href={lumisoTranscribe.downloadUrl}
              className={buttonVariants({ size: "lg" })}
            >
              <ArrowDownToLine className="size-4" aria-hidden />
              {t("common.downloadFree")}
            </a>
            {paidTier ? (
              <BuyButton
                priceId={lumisoTranscribe.paddlePriceId}
                label={t("appPage.buyProFor", {
                  price: formatUsd(paidTier.amountUsd, locale),
                })}
                unavailableLabel={t("appPage.checkoutUnavailable")}
                variant="secondary"
                size="lg"
              />
            ) : null}
          </Reveal>

          <Reveal delay={0.32}>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {t("hero.socialProof")}
            </p>
          </Reveal>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}
