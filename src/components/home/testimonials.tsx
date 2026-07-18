import { getLocale, getTranslations } from "next-intl/server";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { InitialsAvatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Stars } from "@/components/ui/stars";
import { testimonials } from "@/content/testimonials";
import { pick } from "@/content/types";

export async function Testimonials() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);

  return (
    <section className="container-page py-20 md:py-28">
      <SectionHeading
        eyebrow={t("testimonials.eyebrow")}
        title={t("testimonials.title")}
      />
      <RevealGroup className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <RevealItem key={testimonial.id}>
            <Card className="h-full">
              <CardHeader className="pb-3">
                <Stars rating={testimonial.rating} />
              </CardHeader>
              <CardContent className="flex h-[calc(100%-3.75rem)] flex-col gap-6">
                <blockquote className="flex-1 text-[15px] leading-relaxed text-foreground/90">
                  “{pick(testimonial.quote, locale)}”
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <InitialsAvatar name={testimonial.author} />
                  <div className="leading-tight">
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {pick(testimonial.role, locale)}
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
