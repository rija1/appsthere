"use client";

import { motion } from "framer-motion";
import { Captions, Lock } from "lucide-react";
import { EASE_OUT, useRevealDisabled } from "@/components/motion/reveal";
import { AppMockup } from "./scenes";

function Glow() {
  return (
    <div
      className="absolute -inset-x-8 -inset-y-6 -z-10 rounded-[2.5rem] opacity-60 blur-3xl"
      style={{
        background:
          "radial-gradient(60% 60% at 60% 40%, var(--brand-soft), transparent 70%)",
      }}
    />
  );
}

function UploadsChip() {
  return (
    <>
      <span className="flex size-7 items-center justify-center rounded-lg bg-brand-soft text-brand">
        <Lock className="size-3.5" strokeWidth={1.8} aria-hidden />
      </span>
      <div className="leading-tight">
        <p className="text-xs font-semibold">0 uploads</p>
        <p className="text-[10px] text-muted-foreground">Processed on-device</p>
      </div>
    </>
  );
}

function ExportChip() {
  return (
    <>
      <span className="flex size-7 items-center justify-center rounded-lg bg-brand-soft text-brand">
        <Captions className="size-3.5" strokeWidth={1.8} aria-hidden />
      </span>
      <div className="leading-tight">
        <p className="text-xs font-semibold">interview.srt</p>
        <p className="text-[10px] text-muted-foreground">Exported in 0.2s</p>
      </div>
    </>
  );
}

const CHIP_CLASS =
  "absolute hidden items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-[0_12px_32px_-12px_var(--shadow-color)] sm:flex";

/**
 * The hero's animated product shot: the editor window drifting gently,
 * flanked by two floating status chips. Renders statically when motion
 * is reduced or disabled.
 */
export function HeroMockup() {
  const disabled = useRevealDisabled();

  if (disabled) {
    return (
      <div className="relative" aria-hidden>
        <Glow />
        <AppMockup scene="editor" />
        <div className={`${CHIP_CLASS} -left-4 -bottom-5`}>
          <UploadsChip />
        </div>
        <div className={`${CHIP_CLASS} -right-3 -top-4`}>
          <ExportChip />
        </div>
      </div>
    );
  }

  return (
    <div className="relative" aria-hidden>
      <Glow />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.15 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <AppMockup scene="editor" animate />
        </motion.div>
      </motion.div>

      <motion.div
        className={`${CHIP_CLASS} -left-4 -bottom-5`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.55 }}
      >
        <UploadsChip />
      </motion.div>

      <motion.div
        className={`${CHIP_CLASS} -right-3 -top-4`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.7 }}
      >
        <ExportChip />
      </motion.div>
    </div>
  );
}
