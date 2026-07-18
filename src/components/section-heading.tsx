import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

/** Consistent section header: eyebrow, display title, optional subtitle. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex max-w-2xl flex-col gap-3 md:mb-16",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
      )}
    >
      {eyebrow ? (
        <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-[2.5rem] md:leading-[1.15]">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
