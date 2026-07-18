import {
  Cpu,
  Download,
  Languages,
  Lock,
  Pencil,
  Shield,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { AppFeature } from "@/content/types";
import { cn } from "@/lib/utils";

const ICONS: Record<AppFeature["icon"], LucideIcon> = {
  zap: Zap,
  lock: Lock,
  cpu: Cpu,
  languages: Languages,
  pencil: Pencil,
  download: Download,
  waves: Waves,
  shield: Shield,
};

/** Brand-tinted rounded square around a lucide icon. */
export function FeatureIcon({
  icon,
  className,
}: {
  icon: AppFeature["icon"];
  className?: string;
}) {
  const Icon = ICONS[icon];
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-xl",
        "bg-brand-soft text-brand",
        className,
      )}
    >
      <Icon className="size-[18px]" strokeWidth={1.8} />
    </span>
  );
}
