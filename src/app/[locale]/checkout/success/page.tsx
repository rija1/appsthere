import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowDownToLine, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { lumisoTranscribe } from "@/content/apps/lumiso-transcribe";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";

interface CheckoutSuccessPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CheckoutSuccessPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "checkout" });
  return {
    title: t("successTitle"),
    robots: { index: false },
  };
}

export default async function CheckoutSuccessPage({
  params,
}: CheckoutSuccessPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("checkout");

  const steps = [t("step1"), t("step2"), t("step3")];

  return (
    <div className="container-page flex max-w-2xl flex-col items-center py-20 text-center md:py-28">
      <Reveal className="flex flex-col items-center gap-5">
        <span className="flex size-14 items-center justify-center rounded-full bg-brand-soft text-brand">
          <CheckCircle2 className="size-7" strokeWidth={1.6} aria-hidden />
        </span>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {t("successTitle")}
        </h1>
        <p className="max-w-lg text-balance text-lg leading-relaxed text-muted-foreground">
          {t("successSubtitle")}
        </p>
      </Reveal>

      <Reveal delay={0.12} className="w-full pt-10">
        <Card className="text-left">
          <CardContent className="p-6 md:p-8">
            <h2 className="pb-4 text-sm font-mono uppercase tracking-[0.16em] text-muted-foreground">
              {t("stepsTitle")}
            </h2>
            <ol className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-brand-foreground">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </Reveal>

      <Reveal delay={0.2} className="flex flex-col items-center gap-4 pt-10">
        <a href={lumisoTranscribe.downloadUrl} className={buttonVariants({ size: "lg" })}>
          <ArrowDownToLine className="size-4" aria-hidden />
          {t("downloadApp")}
        </a>
        <p className="text-sm text-muted-foreground">
          {t("noEmail", { email: site.supportEmail })}
        </p>
      </Reveal>
    </div>
  );
}
