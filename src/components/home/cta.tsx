import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export async function Cta() {
  const t = await getTranslations("cta");

  return (
    <section className="container-page pb-24 pt-4 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(48% 64% at 50% 110%, var(--brand-soft), transparent 70%)",
            }}
          />
          <div className="relative flex flex-col items-center gap-5">
            <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              {t("title")}
            </h2>
            <p className="max-w-lg text-balance leading-relaxed text-muted-foreground">
              {t("subtitle")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/apps/lumiso-transcribe"
                className={buttonVariants({ size: "lg" })}
              >
                {t("primary")}
              </Link>
              <Link
                href="/apps/lumiso-transcribe"
                className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
              >
                {t("secondary")}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
