import type { MetadataRoute } from "next";
import { apps } from "@/content/apps";
import { postLocales, posts } from "@/content/blog";
import { legalDocs } from "@/content/legal";
import { routing, type Locale } from "@/i18n/routing";
import { localizedPath } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

interface Entry {
  path: string;
  lastModified?: string;
  priority: number;
  /** Locales the page exists in; defaults to every locale. */
  locales?: readonly Locale[];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: "/", priority: 1 },
    { path: "/apps", priority: 0.9 },
    ...apps.map((app) => ({
      path: `/apps/${app.slug}`,
      lastModified: app.updatedAt,
      priority: 0.9,
    })),
    { path: "/blog", priority: 0.7 },
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastModified: post.publishedAt,
      priority: 0.6,
      locales: postLocales(post),
    })),
    { path: "/account", priority: 0.4 },
    ...legalDocs.map((doc) => ({
      path: `/legal/${doc.slug}`,
      lastModified: doc.updatedAt,
      priority: 0.2,
    })),
  ];

  return entries.flatMap((entry) => {
    const locales = entry.locales ?? routing.locales;
    return locales.map((locale) => ({
      url: absoluteUrl(localizedPath(entry.path, locale)),
      lastModified: entry.lastModified
        ? new Date(entry.lastModified)
        : undefined,
      priority: entry.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alternate) => [
            alternate,
            absoluteUrl(localizedPath(entry.path, alternate)),
          ]),
        ),
      },
    }));
  });
}
