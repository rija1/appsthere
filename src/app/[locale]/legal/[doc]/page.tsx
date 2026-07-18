import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getLocale, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/reveal";
import { getLegalDoc, legalDocs } from "@/content/legal";
import { pick } from "@/content/types";
import { routing } from "@/i18n/routing";
import { alternatesFor } from "@/lib/seo";

interface LegalPageProps {
  params: Promise<{ locale: string; doc: string }>;
}

export function generateStaticParams() {
  return legalDocs.map((doc) => ({ doc: doc.slug }));
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { locale, doc: slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const doc = getLegalDoc(slug);
  if (!doc) return {};
  return {
    title: pick(doc.title, locale),
    alternates: alternatesFor(`/legal/${doc.slug}`, locale),
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { locale, doc: slug } = await params;
  setRequestLocale(locale);

  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  const activeLocale = await getLocale();
  const dateFormatter = new Intl.DateTimeFormat(activeLocale, { dateStyle: "long" });

  return (
    <article className="container-page max-w-3xl py-16 md:py-24">
      <Reveal>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {pick(doc.title, activeLocale)}
        </h1>
        <time
          dateTime={doc.updatedAt}
          className="mt-4 block text-sm text-muted-foreground"
        >
          {dateFormatter.format(new Date(doc.updatedAt))}
        </time>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {pick(doc.intro, activeLocale)}
        </p>
      </Reveal>

      <div className="mt-12 flex flex-col gap-10 border-t border-border pt-12">
        {doc.sections.map((section, index) => (
          <Reveal key={index} className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight">
              {pick(section.heading, activeLocale)}
            </h2>
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className="leading-[1.8] text-foreground/85"
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
