import type { MetadataRoute } from "next";
import { apps } from "@/content/apps";
import { posts } from "@/content/blog";
import { legalDocs } from "@/content/legal";
import { routing } from "@/i18n/routing";
import { localizedPath } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

interface Entry {
  path: string;
  lastModified?: string;
  priority: number;
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
    })),
    { path: "/account", priority: 0.4 },
    ...legalDocs.map((doc) => ({
      path: `/legal/${doc.slug}`,
      lastModified: doc.updatedAt,
      priority: 0.2,
    })),
  ];

  return entries.flatMap((entry) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(localizedPath(entry.path, locale)),
      lastModified: entry.lastModified
        ? new Date(entry.lastModified)
        : undefined,
      priority: entry.priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((alternate) => [
            alternate,
            absoluteUrl(localizedPath(entry.path, alternate)),
          ]),
        ),
      },
    })),
  );
}
