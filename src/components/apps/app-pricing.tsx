import { ArrowDownToLine, Check, ShieldCheck } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { BuyButton } from "@/components/paddle/buy-button";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { AppDefinition } from "@/content/types";
import { pick } from "@/content/types";
import { formatUsd } from "@/lib/pricing";
import { cn } from "@/lib/utils";

export async function AppPricing({ app }: { app: AppDefinition }) {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);

  return (
    <section className="container-page py-20 md:py-24" id="pricing">
      <SectionHeading
        title={t("appPage.pricingTitle")}
        subtitle={t("appPage.pricingSubtitle")}
      />

      <RevealGroup className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
        {app.pricing.map((tier) => (
          <RevealItem key={tier.id}>
            <Card
              className={cn(
                "flex h-full flex-col gap-6 p-7",
                tier.highlighted &&
                  "border-brand/40 shadow-[0_16px_48px_-20px_var(--brand)]",
              )}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {pick(tier.name, locale)}
                  </h3>
                  {tier.highlighted && (
                    <span className="rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-foreground">
                      {app.name.split(" ")[0]} Pro
                    </span>
                  )}
                </div>
                <p className="pt-3 font-mono text-4xl font-medium tracking-tight">
                  {formatUsd(tier.amountUsd, locale)}
                  {tier.amountUsd > 0 && (
                    <span className="pl-2 font-sans text-sm font-normal text-muted-foreground">
                      {t("common.oneTime")}
                    </span>
                  )}
                </p>
                <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
                  {pick(tier.description, locale)}
                </p>
              </div>

              <ul className="flex flex-1 flex-col gap-2.5">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                      <Check className="size-2.5 text-brand" strokeWidth={2.6} aria-hidden />
                    </span>
                    {pick(feature, locale)}
                  </li>
                ))}
              </ul>

              {tier.cta === "buy" ? (
                <BuyButton
                  priceId={app.paddlePriceId}
                  label={t("common.buyPro")}
                  unavailableLabel={t("appPage.checkoutUnavailable")}
                  size="md"
                  className="w-full"
                />
              ) : (
                <a
                  href={app.downloadUrl}
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "w-full",
                  )}
                >
                  <ArrowDownToLine className="size-4" aria-hidden />
                  {t("common.downloadFree")}
                </a>
              )}
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>

      <p className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
        <ShieldCheck className="size-3.5 shrink-0" aria-hidden />
        {t("appPage.paddleDisclosure")}
      </p>
    </section>
  );
}
