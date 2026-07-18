import { Laptop, ShieldCheck, Wallet, Zap, type LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PILLARS: Array<{ key: "fast" | "native" | "private" | "affordable"; icon: LucideIcon }> = [
  { key: "fast", icon: Zap },
  { key: "native", icon: Laptop },
  { key: "private", icon: ShieldCheck },
  { key: "affordable", icon: Wallet },
];

export async function WhyUs() {
  const t = await getTranslations("why");

  return (
    <section className="container-page py-20 md:py-28">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map(({ key, icon: Icon }) => (
          <RevealItem key={key}>
            <Card className="group h-full transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_16px_40px_-20px_var(--shadow-color)]">
              <CardHeader>
                <span className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-[18px]" strokeWidth={1.8} aria-hidden />
                </span>
                <CardTitle>{t(`${key}.title`)}</CardTitle>
                <CardDescription>{t(`${key}.description`)}</CardDescription>
              </CardHeader>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
