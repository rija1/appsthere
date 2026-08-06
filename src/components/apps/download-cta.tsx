import { getTranslations } from "next-intl/server";
import { AppStoreCta } from "@/components/app-store-cta";
import { Reveal } from "@/components/motion/reveal";
import type { AppDefinition } from "@/content/types";

export async function DownloadCta({ app }: { app: AppDefinition }) {
  const t = await getTranslations();

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
              <AppStoreCta
                appStoreUrl={app.appStoreUrl}
                label={t("common.viewOnAppStore")}
                comingSoonLabel={t("appPage.appStoreComingSoon")}
                size="lg"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
