import { Check } from "lucide-react";
import { getLocale } from "next-intl/server";
import { AppMockup } from "@/components/mockups/scenes";
import { Reveal } from "@/components/motion/reveal";
import type { AppDefinition } from "@/content/types";
import { pick } from "@/content/types";
import { cn } from "@/lib/utils";

/** Alternating text / product-shot rows. */
export async function FeatureBlocks({ app }: { app: AppDefinition }) {
  const locale = await getLocale();

  return (
    <section className="border-y border-border bg-muted/30">
      <div className="container-page flex flex-col gap-24 py-20 md:gap-32 md:py-28">
        {app.featureBlocks.map((block, index) => {
          const reversed = index % 2 === 1;
          return (
            <div
              key={block.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={cn(reversed && "lg:order-2")}>
                <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
                  {pick(block.eyebrow, locale)}
                </span>
                <h3 className="text-balance pt-3 text-2xl font-semibold tracking-tight md:text-[2rem] md:leading-[1.2]">
                  {pick(block.title, locale)}
                </h3>
                <p className="pt-4 leading-relaxed text-muted-foreground">
                  {pick(block.body, locale)}
                </p>
                <ul className="flex flex-col gap-2.5 pt-6">
                  {block.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                        <Check className="size-2.5 text-brand" strokeWidth={2.6} aria-hidden />
                      </span>
                      {pick(bullet, locale)}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.12} className={cn(reversed && "lg:order-1")}>
                <AppMockup scene={block.scene} />
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
