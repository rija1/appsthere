"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

/** False during SSR and the hydration pass, true afterwards. */
function useHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useHydrated();

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "flex size-9 items-center justify-center rounded-lg",
        "text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
      )}
    >
      {/* Render both icons until mounted to avoid a hydration mismatch. */}
      {mounted && resolvedTheme === "dark" ? (
        <Sun className="size-4" strokeWidth={1.8} aria-hidden />
      ) : (
        <Moon className="size-4" strokeWidth={1.8} aria-hidden />
      )}
    </button>
  );
}
