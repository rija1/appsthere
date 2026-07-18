import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import type { AppDefinition } from "@/content/types";
import { pick } from "@/content/types";

export async function Changelog({ app }: { app: AppDefinition }) {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const dateFormatter = new Intl.DateTimeFormat(locale, { dateStyle: "long" });

  return (
    <section className="border-t border-border py-20 md:py-24" id="changelog">
      <div className="container-page max-w-3xl">
        <SectionHeading title={t("appPage.changelogTitle")} align="left" />
        <div className="flex flex-col gap-10">
          {app.changelog.map((entry) => (
            <Reveal key={entry.version}>
              <article className="relative border-l border-border pl-8">
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-brand"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="brand">v{entry.version}</Badge>
                  <time
                    dateTime={entry.date}
                    className="text-sm text-muted-foreground"
                  >
                    {dateFormatter.format(new Date(entry.date))}
                  </time>
                </div>
                <h3 className="pt-3 text-lg font-semibold tracking-tight">
                  {pick(entry.title, locale)}
                </h3>
                <ul className="flex flex-col gap-2 pt-3">
                  {entry.changes.map((change, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span aria-hidden className="mt-[9px] size-1 shrink-0 rounded-full bg-border" />
                      {pick(change, locale)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
