import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/section-heading";
import type { AppDefinition } from "@/content/types";
import { ScreenshotsGallery } from "./screenshots-gallery";

export async function Screenshots({ app }: { app: AppDefinition }) {
  const t = await getTranslations("appPage");

  return (
    <section className="container-page py-20 md:py-24" id="screenshots">
      <SectionHeading
        title={t("screenshots")}
        subtitle={t("screenshotsSubtitle")}
      />
      <ScreenshotsGallery
        screenshots={app.screenshots}
        closeLabel={t("lightboxClose")}
        openLabelTemplate={t("openScreenshot", { title: "{title}" })}
      />
    </section>
  );
}
