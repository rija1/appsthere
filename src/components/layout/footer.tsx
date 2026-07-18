import { Mail, Rss } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { LogoMark, Wordmark } from "@/components/brand/logo";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { NewsletterForm } from "./newsletter-form";

export async function Footer() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t("footer.product"),
      links: [
        { label: t("footer.allApps"), href: "/apps" },
        { label: "Lumiso Transcribe", href: "/apps/lumiso-transcribe" },
        { label: t("footer.changelog"), href: "/apps/lumiso-transcribe#changelog" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("nav.blog"), href: "/blog" },
        { label: t("nav.account"), href: "/account" },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { label: t("footer.privacy"), href: "/legal/privacy" },
        { label: t("footer.terms"), href: "/legal/terms" },
        { label: t("footer.refunds"), href: "/legal/refunds" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_2fr]">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark />
            <Wordmark />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t("footer.tagline")}
          </p>
          <div className="mt-2">
            <p className="pb-1 text-sm font-medium">{t("footer.newsletter.title")}</p>
            <p className="pb-3 text-sm text-muted-foreground">
              {t("footer.newsletter.subtitle")}
            </p>
            <NewsletterForm
              placeholder={t("footer.newsletter.placeholder")}
              buttonLabel={t("footer.newsletter.button")}
              successMessage={t("footer.newsletter.success")}
              errorMessage={t("footer.newsletter.error")}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="pb-3 text-sm font-medium">{column.title}</p>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col-reverse items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {t("footer.rights", { year })}
          </p>
          <div className="flex items-center gap-1">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {/* lucide dropped brand icons; GitHub's official mark, inlined. */}
              <svg viewBox="0 0 16 16" className="size-4 fill-current" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Mail className="size-4" strokeWidth={1.8} aria-hidden />
            </a>
            <a
              href="/rss.xml"
              aria-label="RSS"
              className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Rss className="size-4" strokeWidth={1.8} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
