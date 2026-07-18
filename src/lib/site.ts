/** Global site configuration — single source of truth for URLs and identity. */
export const site = {
  name: "TheAppsThere",
  domain: "theappsthere.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://theappsthere.com",
  twitter: "@theappsthere",
  github: "https://github.com/theappsthere",
  email: "hello@theappsthere.com",
  supportEmail: "support@theappsthere.com",
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}
