import { cn } from "@/lib/utils";

/**
 * Decorative macOS window chrome. Purely presentational — every mockup
 * is marked aria-hidden by its parent and never intercepts input.
 */
export function MacWindow({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "select-none overflow-hidden rounded-xl border border-border bg-card",
        "shadow-[0_24px_48px_-20px_var(--shadow-color),0_2px_6px_-2px_var(--shadow-color)]",
        className,
      )}
    >
      <div className="relative flex h-8 items-center border-b border-border bg-muted/60 px-3">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[oklch(0.68_0.16_25)]/80" />
          <span className="size-2.5 rounded-full bg-[oklch(0.8_0.14_85)]/80" />
          <span className="size-2.5 rounded-full bg-[oklch(0.72_0.16_145)]/80" />
        </div>
        <span className="absolute inset-x-0 text-center font-mono text-[10px] tracking-wide text-muted-foreground">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}
