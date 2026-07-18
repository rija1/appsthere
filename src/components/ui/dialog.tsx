"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

interface DialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content> {
  closeLabel: string;
}

/** Full-bleed content surface used for the screenshot lightbox. */
export function DialogContent({
  className,
  children,
  closeLabel,
  ...props
}: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md" />
      <DialogPrimitive.Content
        className={cn(
          "fixed inset-x-4 top-1/2 z-50 -translate-y-1/2 outline-none",
          "mx-auto max-w-4xl",
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          aria-label={closeLabel}
          className={cn(
            "absolute -top-12 right-0 rounded-full border border-border bg-card p-2",
            "text-muted-foreground transition-colors hover:text-foreground",
          )}
        >
          <X className="size-4" aria-hidden />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
