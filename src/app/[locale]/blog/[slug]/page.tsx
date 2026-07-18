import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { getPost, posts } from "@/content/blog";
import { pick } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { alternatesFor } from "@/lib/seo";
import { site } from "@/lib/site";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: pick(post.title, locale),
    description: pick(post.excerpt, locale),
    alternates: alternatesFor(`/blog/${post.slug}`, locale),
    openGraph: {
      type: "article",
      title: pick(post.title, locale),
      description: pick(post.excerpt, locale),
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPost(slug);
  if (!post) notFound();

  const [t, activeLocale] = await Promise.all([getTranslations("blog"), getLocale()]);
  const dateFormatter = new Intl.DateTimeFormat(activeLocale, { dateStyle: "long" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: pick(post.title, locale as Locale),
    description: pick(post.excerpt, locale as Locale),
    datePublished: post.publishedAt,
    url: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: site.name },
  };

  return (
    <article className="container-page max-w-3xl py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Reveal>
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {t("backToBlog")}
        </Link>

        <header className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="brand">{t(`categories.${post.category}`)}</Badge>
            <time dateTime={post.publishedAt} className="text-sm text-muted-foreground">
              {dateFormatter.format(new Date(post.publishedAt))}
            </time>
            <span className="text-sm text-muted-foreground">
              {t("readingTime", { minutes: post.readingMinutes })}
            </span>
          </div>
          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-[2.75rem] md:leading-[1.15]">
            {pick(post.title, activeLocale)}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {pick(post.excerpt, activeLocale)}
          </p>
        </header>
      </Reveal>

      <div className="mt-12 flex flex-col gap-10 border-t border-border pt-12">
        {post.sections.map((section, index) => (
          <Reveal key={index} className="flex flex-col gap-5">
            {section.heading ? (
              <h2 className="text-2xl font-semibold tracking-tight">
                {pick(section.heading, activeLocale)}
              </h2>
            ) : null}
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className="text-[17px] leading-[1.8] text-foreground/85"
              >
                {pick(paragraph, activeLocale)}
              </p>
            ))}
          </Reveal>
        ))}
      </div>
    </article>
  );
}
