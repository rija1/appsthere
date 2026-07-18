import { cn } from "@/lib/utils";

const HUES = [22, 42, 152, 212, 262, 322] as const;

/**
 * Round initials avatar with a deterministic tint per name —
 * intentionally no stock photos anywhere on the site.
 */
export function InitialsAvatar({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) % 997;
  const hue = HUES[hash % HUES.length];

  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-full",
        "text-xs font-semibold text-foreground/80",
        "border border-border",
        className,
      )}
      style={{
        background: `linear-gradient(135deg, oklch(0.92 0.035 ${hue}), oklch(0.85 0.055 ${hue + 40}))`,
      }}
    >
      {initials}
    </span>
  );
}
