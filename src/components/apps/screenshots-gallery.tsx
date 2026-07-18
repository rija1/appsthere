"use client";

import { useLocale } from "next-intl";
import { useState } from "react";
import { AppMockup } from "@/components/mockups/scenes";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { AppScreenshot } from "@/content/types";
import { pick } from "@/content/types";

interface ScreenshotsGalleryProps {
  screenshots: AppScreenshot[];
  closeLabel: string;
  openLabelTemplate: string;
}

/** Screenshot grid with a zoomed lightbox on click. */
export function ScreenshotsGallery({
  screenshots,
  closeLabel,
  openLabelTemplate,
}: ScreenshotsGalleryProps) {
  const locale = useLocale();
  const [openId, setOpenId] = useState<string | null>(null);
  const open = screenshots.find((screenshot) => screenshot.id === openId);

  return (
    <>
      <RevealGroup className="grid gap-6 sm:grid-cols-2">
        {screenshots.map((screenshot) => (
          <RevealItem key={screenshot.id}>
            <figure className="group">
              <button
                type="button"
                onClick={() => setOpenId(screenshot.id)}
                aria-label={openLabelTemplate.replace(
                  "{title}",
                  pick(screenshot.title, locale),
                )}
                className="block w-full cursor-zoom-in rounded-xl transition-transform duration-300 ease-out hover:scale-[1.015] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <AppMockup scene={screenshot.scene} />
              </button>
              <figcaption className="flex flex-col gap-0.5 px-1 pt-3">
                <p className="text-sm font-medium">{pick(screenshot.title, locale)}</p>
                <p className="text-sm text-muted-foreground">
                  {pick(screenshot.description, locale)}
                </p>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>

      <Dialog open={open !== undefined && openId !== null} onOpenChange={(next) => !next && setOpenId(null)}>
        {open ? (
          <DialogContent closeLabel={closeLabel}>
            <DialogTitle className="sr-only">{pick(open.title, locale)}</DialogTitle>
            <DialogDescription className="sr-only">
              {pick(open.description, locale)}
            </DialogDescription>
            <AppMockup scene={open.scene} className="drop-shadow-2xl" />
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
}
