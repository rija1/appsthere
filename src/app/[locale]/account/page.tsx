import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { KeyRound, Receipt, RefreshCw, MessageCircle } from "lucide-react";
import { LicenseRecoveryForm } from "@/components/account/license-recovery-form";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { routing } from "@/i18n/routing";
import { alternatesFor } from "@/lib/seo";
import { site } from "@/lib/site";

interface AccountPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AccountPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "account" });
  return {
    title: t("metaTitle"),
    alternates: alternatesFor("/account", locale),
  };
}

export default async function AccountPage({ params }: AccountPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("account");

  return (
    <div className="container-page max-w-4xl py-16 md:py-24">
      <Reveal className="mb-12 flex max-w-2xl flex-col gap-3">
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {t("title")}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("subtitle")}
        </p>
      </Reveal>

      <RevealGroup className="grid gap-4">
        <RevealItem>
          <Card>
            <CardHeader>
              <span className="mb-2 inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <KeyRound className="size-[18px]" strokeWidth={1.8} aria-hidden />
              </span>
              <CardTitle>{t("lookupTitle")}</CardTitle>
              <CardDescription>{t("lookupSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <LicenseRecoveryForm
                placeholder={t("emailPlaceholder")}
                buttonLabel={t("lookupButton")}
                successMessage={t("lookupSuccess")}
                errorMessage={t("lookupError")}
              />
            </CardContent>
          </Card>
        </RevealItem>

        <div className="grid gap-4 md:grid-cols-3">
          <RevealItem>
            <Card className="h-full">
              <CardHeader>
                <span className="mb-2 inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Receipt className="size-[18px]" strokeWidth={1.8} aria-hidden />
                </span>
                <CardTitle>{t("billingTitle")}</CardTitle>
                <CardDescription>{t("billingBody")}</CardDescription>
              </CardHeader>
            </Card>
          </RevealItem>

          <RevealItem>
            <Card className="h-full">
              <CardHeader>
                <span className="mb-2 inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <RefreshCw className="size-[18px]" strokeWidth={1.8} aria-hidden />
                </span>
                <CardTitle>{t("updatesTitle")}</CardTitle>
                <CardDescription>{t("updatesBody")}</CardDescription>
              </CardHeader>
            </Card>
          </RevealItem>

          <RevealItem>
            <Card className="h-full">
              <CardHeader>
                <span className="mb-2 inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <MessageCircle className="size-[18px]" strokeWidth={1.8} aria-hidden />
                </span>
                <CardTitle>{t("supportTitle")}</CardTitle>
                <CardDescription>
                  {t("supportBody", { email: site.supportEmail })}
                </CardDescription>
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="pt-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
                >
                  {site.supportEmail}
                </a>
              </CardHeader>
            </Card>
          </RevealItem>
        </div>
      </RevealGroup>
    </div>
  );
}
