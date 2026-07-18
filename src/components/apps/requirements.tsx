import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import type { AppDefinition } from "@/content/types";
import { pick } from "@/content/types";

export async function Requirements({ app }: { app: AppDefinition }) {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const dateFormatter = new Intl.DateTimeFormat(locale, { dateStyle: "long" });

  return (
    <section className="container-page grid gap-10 py-20 md:grid-cols-2 md:py-24" id="requirements">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {t("appPage.requirementsTitle")}
        </h2>
        <dl className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
          {app.requirements.map((requirement) => (
            <div
              key={requirement.id}
              className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <dt className="shrink-0 text-sm text-muted-foreground">
                {pick(requirement.label, locale)}
              </dt>
              <dd className="text-sm font-medium sm:text-right">
                {pick(requirement.value, locale)}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {t("appPage.overview")}
        </h2>
        <dl className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
          {[
            {
              label: t("appPage.category"),
              value: t(
                app.category === "productivity"
                  ? "appPage.categoryProductivity"
                  : app.category === "media"
                    ? "appPage.categoryMedia"
                    : "appPage.categoryUtilities",
              ),
            },
            {
              label: t("common.version", { version: "" }).replace(/\s+$/, ""),
              value: app.version,
            },
            {
              label: t("appPage.released"),
              value: dateFormatter.format(new Date(app.releasedAt)),
            },
            {
              label: t("appPage.updated"),
              value: dateFormatter.format(new Date(app.updatedAt)),
            },
          ].map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <dt className="shrink-0 text-sm text-muted-foreground">{row.label}</dt>
              <dd className="text-sm font-medium sm:text-right">{row.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
