import { getLocale, getTranslations } from "next-intl/server";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { InitialsAvatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Stars } from "@/components/ui/stars";
import type { AppDefinition } from "@/content/types";
import { pick } from "@/content/types";

export async function Reviews({ app }: { app: AppDefinition }) {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  if (app.reviews.length === 0) return null;

  return (
    <section className="container-page py-20 md:py-24" id="reviews">
      <SectionHeading title={t("appPage.reviewsTitle")} />
      <RevealGroup className="grid gap-4 md:grid-cols-3">
        {app.reviews.map((review) => (
          <RevealItem key={review.id}>
            <Card className="h-full">
              <CardHeader className="pb-3">
                <Stars rating={review.rating} />
              </CardHeader>
              <CardContent className="flex h-[calc(100%-3.75rem)] flex-col gap-6">
                <blockquote className="flex-1 text-[15px] leading-relaxed text-foreground/90">
                  “{pick(review.quote, locale)}”
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <InitialsAvatar name={review.author} />
                  <div className="leading-tight">
                    <p className="text-sm font-medium">{review.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {pick(review.role, locale)}
                    </p>
                  </div>
                </figcaption>
              </CardContent>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
