import { getLocale, getTranslations } from "next-intl/server";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureIcon } from "@/components/ui/feature-icon";
import type { AppDefinition } from "@/content/types";
import { pick } from "@/content/types";

export async function FeatureGrid({ app }: { app: AppDefinition }) {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);

  return (
    <section className="container-page py-20 md:py-24">
      <SectionHeading title={t("appPage.featuresTitle")} />
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {app.features.map((feature) => (
          <RevealItem key={feature.id}>
            <Card className="h-full transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-foreground/15">
              <CardHeader>
                <FeatureIcon icon={feature.icon} className="mb-3" />
                <CardTitle>{pick(feature.title, locale)}</CardTitle>
                <CardDescription>{pick(feature.description, locale)}</CardDescription>
              </CardHeader>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
