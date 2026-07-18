import { ArrowDownToLine } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { BuyButton } from "@/components/paddle/buy-button";
import { buttonVariants } from "@/components/ui/button";
import type { AppDefinition } from "@/content/types";
import { formatUsd, paidTierOf } from "@/lib/pricing";

export async function DownloadCta({ app }: { app: AppDefinition }) {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const paidTier = paidTierOf(app);

  return (
    <section className="container-page pb-24 pt-4 md:pb-32" id="download">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(48% 64% at 50% 110%, var(--brand-soft), transparent 70%)",
            }}
          />
          <div className="relative flex flex-col items-center gap-5">
            <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              {t("appPage.downloadTitle", { name: app.name })}
            </h2>
            <p className="max-w-lg text-balance leading-relaxed text-muted-foreground">
              {t("appPage.downloadSubtitle")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
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
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {t("appPage.fileInfo", { size: app.fileSizeMb })}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
