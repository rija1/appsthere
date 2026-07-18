"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useSyncExternalStore } from "react";
import { LogoMark, Wordmark } from "@/components/brand/logo";
import { EASE_OUT, useRevealDisabled } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { href: "/apps", key: "apps" },
  { href: "/blog", key: "blog" },
  { href: "/account", key: "account" },
] as const;

function subscribeToScroll(callback: () => void): () => void {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function useScrolled(): boolean {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 8,
    () => false,
  );
}

export function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const scrolled = useScrolled();
  const instantMenu = useRevealDisabled();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || menuOpen
          ? "border-b border-border bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label={t("common.brand")}>
          <LogoMark />
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label={t("nav.menu")}>
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === pathname || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <LocaleSwitcher label={t("localeSwitcher.label")} />
          <ThemeToggle label={t("theme.toggle")} />
          <Link
            href="/apps/lumiso-transcribe"
            className={cn(buttonVariants({ size: "sm" }), "ml-1 hidden sm:inline-flex")}
          >
            {t("common.download")}
          </Link>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.menu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="size-4" aria-hidden />
            ) : (
              <Menu className="size-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label={t("nav.menu")}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
            initial={instantMenu ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={instantMenu ? undefined : { height: 0, opacity: 0 }}
            transition={
              instantMenu
                ? { duration: 0 }
                : { duration: 0.3, ease: EASE_OUT }
            }
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              <Link
                href="/apps/lumiso-transcribe"
                onClick={closeMenu}
                className={cn(buttonVariants({ size: "lg" }), "mt-2")}
              >
                {t("common.download")}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
