import { posts } from "@/content/blog";
import { pick } from "@/content/types";
import { absoluteUrl, site } from "@/lib/site";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** English-language RSS feed of the blog. */
export function GET(): Response {
  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      return [
        "<item>",
        `<title>${escapeXml(pick(post.title, "en"))}</title>`,
        `<link>${url}</link>`,
        `<guid>${url}</guid>`,
        `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>`,
        `<description>${escapeXml(pick(post.excerpt, "en"))}</description>`,
        "</item>",
      ].join("");
    })
    .join("");

  const feed =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<rss version="2.0"><channel>` +
    `<title>${escapeXml(site.name)} Blog</title>` +
    `<link>${site.url}</link>` +
    `<description>Updates, development notes, and tips from ${escapeXml(site.name)}.</description>` +
    `<language>en</language>` +
    items +
    `</channel></rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
