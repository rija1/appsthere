import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { AppDefinition } from "@/content/types";
import { pick } from "@/content/types";

export async function AppFaq({ app }: { app: AppDefinition }) {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);

  return (
    <section className="border-t border-border py-20 md:py-24" id="faq">
      <div className="container-page max-w-3xl">
        <SectionHeading title={t("appPage.faqTitle")} />
        <Reveal>
          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-border bg-card px-6"
          >
            {app.faq.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{pick(item.question, locale)}</AccordionTrigger>
                <AccordionContent>{pick(item.answer, locale)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
