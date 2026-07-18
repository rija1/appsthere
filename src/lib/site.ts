/** Global site configuration — single source of truth for URLs and identity. */
export const site = {
  name: "AppsThere",
  domain: "appsthere.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://appsthere.com",
  twitter: "@appsthere",
  github: "https://github.com/appsthere",
  email: "hello@appsthere.com",
  supportEmail: "support@appsthere.com",
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}
