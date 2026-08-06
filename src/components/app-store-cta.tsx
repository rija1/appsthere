import { Apple } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AppStoreCtaProps {
  /** The app's App Store listing URL; undefined while still in review. */
  appStoreUrl: string | undefined;
  label: string;
  comingSoonLabel: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
}

/**
 * A plain link to the app's App Store listing — no checkout overlay, no
 * client JS, since Apple handles the entire purchase inside the App Store
 * and in-app. Falls back to a disabled "coming soon" state while the app
 * is still in review and has no live listing yet.
 */
export function AppStoreCta({
  appStoreUrl,
  label,
  comingSoonLabel,
  className,
  size = "lg",
  variant = "primary",
}: AppStoreCtaProps) {
  if (!appStoreUrl) {
    return (
      <span
        aria-disabled
        className={cn(buttonVariants({ variant: "secondary", size }), "opacity-50", className)}
      >
        <Apple className="size-4" aria-hidden />
        {comingSoonLabel}
      </span>
    );
  }

  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <Apple className="size-4" aria-hidden />
      {label}
    </a>
  );
}
