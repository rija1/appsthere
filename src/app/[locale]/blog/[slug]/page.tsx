import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { getApp } from "@/content/apps";
import { getPost, postLocales, posts } from "@/content/blog";
import { pick, type BlogPost } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { alternatesFor, localizedPath } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  return posts
    .filter((post) => postLocales(post).includes(params.locale as Locale))
    .map((post) => ({ slug: post.slug }));
}

/** The post, if it exists and is published in this locale. */
function postFor(slug: string, locale: string): BlogPost | undefined {
  const post = getPost(slug);
  if (!post || !postLocales(post).includes(locale as Locale)) return undefined;
  return post;
}

const INLINE_LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Render `[label](href)` links inside a paragraph; internal hrefs stay locale-aware. */
function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(INLINE_LINK)) {
    const [whole, label, href] = match;
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    const className =
      "font-medium text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:decoration-brand";
    nodes.push(
      href.startsWith("/") ? (
        <Link key={index} href={href} className={className}>
          {label}
        </Link>
      ) : (
        <a key={index} href={href} className={className} rel="noopener" target="_blank">
          {label}
        </a>
      ),
    );
    last = index + whole.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Plain text of a paragraph, links reduced to their labels (for JSON-LD). */
function plainText(text: string): string {
  return text.replace(INLINE_LINK, "$1");
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const post = postFor(slug, locale);
  if (!post) return {};

  return {
    title: pick(post.title, locale),
    description: pick(post.excerpt, locale),
    alternates: alternatesFor(`/blog/${post.slug}`, locale, postLocales(post)),
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

  const post = postFor(slug, locale);
  if (!post) notFound();
  const relatedApp = post.relatedApp ? getApp(post.relatedApp) : undefined;

  const [t, activeLocale] = await Promise.all([getTranslations("blog"), getLocale()]);
  const dateFormatter = new Intl.DateTimeFormat(activeLocale, { dateStyle: "long" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: pick(post.title, locale as Locale),
    description: pick(post.excerpt, locale as Locale),
    datePublished: post.publishedAt,
    inLanguage: locale,
    url: absoluteUrl(localizedPath(`/blog/${post.slug}`, locale as Locale)),
    author: { "@type": "Organization", name: site.name },
    ...(post.sources?.length
      ? { citation: post.sources.map((source) => source.url) }
      : {}),
    ...(relatedApp
      ? { about: { "@type": "SoftwareApplication", name: plainText(pick(relatedApp.name, locale)) } }
      : {}),
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
                {renderInline(pick(paragraph, activeLocale))}
              </p>
            ))}
            {section.list ? (
              <ul className="flex list-disc flex-col gap-2 pl-6 text-[17px] leading-[1.7] text-foreground/85 marker:text-brand">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{renderInline(pick(item, activeLocale))}</li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        ))}

        {relatedApp ? (
          <Reveal>
            <Link
              href={`/apps/${relatedApp.slug}`}
              className="group block rounded-2xl border border-border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-foreground/15 md:p-8"
            >
              <span className="text-sm text-muted-foreground">{t("relatedApp")}</span>
              <span className="mt-1 flex items-center gap-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-brand">
                {pick(relatedApp.name, activeLocale)}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
              </span>
              <span className="mt-2 block leading-relaxed text-muted-foreground">
                {pick(relatedApp.tagline, activeLocale)}
              </span>
            </Link>
          </Reveal>
        ) : null}

        {post.sources?.length ? (
          <Reveal className="flex flex-col gap-4 border-t border-border pt-10">
            <h2 className="text-lg font-semibold tracking-tight">{t("sources")}</h2>
            <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    rel="noopener"
                    target="_blank"
                    className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </div>
    </article>
  );
}
