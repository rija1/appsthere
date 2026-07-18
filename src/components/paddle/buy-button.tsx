"use client";

import type { Paddle } from "@paddle/paddle-js";
import { Loader2 } from "lucide-react";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/routing";
import { localizedPath } from "@/lib/seo";
import { cn } from "@/lib/utils";

/**
 * Paddle.js is ~50 KB we don't want in the critical path, so it loads on
 * the first click and the instance is cached for the rest of the session.
 */
let paddlePromise: Promise<Paddle | undefined> | null = null;

function loadPaddle(): Promise<Paddle | undefined> {
  paddlePromise ??= import("@paddle/paddle-js").then(({ initializePaddle }) => {
    const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
    if (!token) return undefined;
    return initializePaddle({
      environment:
        process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
          ? "production"
          : "sandbox",
      token,
    });
  });
  return paddlePromise;
}

interface BuyButtonProps {
  priceId: string | undefined;
  label: string;
  unavailableLabel: string;
  className?: string;
  size?: "md" | "lg";
  variant?: "primary" | "secondary";
}

/** Opens the Paddle overlay checkout for the given price. */
export function BuyButton({
  priceId,
  label,
  unavailableLabel,
  className,
  size = "lg",
  variant = "primary",
}: BuyButtonProps) {
  const locale = useLocale() as Locale;
  const { resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(false);

  const configured =
    Boolean(priceId) && Boolean(process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN);

  if (!configured) {
    return (
      <Button variant="secondary" size={size} disabled className={className}>
        {unavailableLabel}
      </Button>
    );
  }

  async function openCheckout() {
    if (!priceId) return;
    setLoading(true);
    try {
      const paddle = await loadPaddle();
      paddle?.Checkout.open({
        items: [{ priceId, quantity: 1 }],
        settings: {
          displayMode: "overlay",
          theme: resolvedTheme === "dark" ? "dark" : "light",
          locale,
          successUrl: new URL(
            localizedPath("/checkout/success", locale),
            window.location.origin,
          ).toString(),
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      size={size}
      variant={variant}
      onClick={openCheckout}
      disabled={loading}
      className={cn(className)}
    >
      {loading && <Loader2 className="size-4 animate-spin" aria-hidden />}
      {label}
    </Button>
  );
}
