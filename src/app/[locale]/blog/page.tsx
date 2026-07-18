import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { posts } from "@/content/blog";
import { pick } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { alternatesFor } from "@/lib/seo";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternatesFor("/blog", locale),
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [t, activeLocale] = await Promise.all([getTranslations("blog"), getLocale()]);
  const dateFormatter = new Intl.DateTimeFormat(activeLocale, { dateStyle: "long" });

  return (
    <div className="container-page max-w-4xl py-16 md:py-24">
      <Reveal className="mb-12 flex max-w-2xl flex-col gap-3 md:mb-16">
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {t("title")}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("subtitle")}
        </p>
      </Reveal>

      <RevealGroup className="flex flex-col gap-4">
        {posts.map((post) => (
          <RevealItem key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <Card className="transition-[transform,border-color] duration-300 group-hover:-translate-y-0.5 group-hover:border-foreground/15">
                <CardContent className="flex flex-col gap-3 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="brand">{t(`categories.${post.category}`)}</Badge>
                    <time
                      dateTime={post.publishedAt}
                      className="text-sm text-muted-foreground"
                    >
                      {dateFormatter.format(new Date(post.publishedAt))}
                    </time>
                    <span className="text-sm text-muted-foreground">
                      {t("readingTime", { minutes: post.readingMinutes })}
                    </span>
                  </div>
                  <h2 className="text-balance text-xl font-semibold tracking-tight transition-colors group-hover:text-brand md:text-2xl">
                    {pick(post.title, activeLocale)}
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {pick(post.excerpt, activeLocale)}
                  </p>
                  <span aria-hidden className="pt-1 text-brand">
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
