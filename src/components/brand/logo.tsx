import Image from "next/image";
import mark from "@/assets/brand/appsthere-mark.png";
import { cn } from "@/lib/utils";

/** The AppsThere "A" monogram (from the official logo, white unmixed to alpha). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={mark}
      alt=""
      aria-hidden
      priority
      className={cn("size-8 select-none", className)}
    />
  );
}

/**
 * Single-line rendition of the logo's two-tone wordmark — "apps" in ink,
 * "there" in the lockup's steel blue. The full lockup image lives in
 * `@/assets/brand/appsthere-logo.png` for print/social use.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "text-[17px] font-semibold leading-none tracking-tight",
        className,
      )}
    >
      <span className="text-foreground">apps</span>
      <span className="font-medium text-[oklch(0.55_0.09_255)] dark:text-[oklch(0.72_0.08_255)]">
        there
      </span>
    </span>
  );
}
