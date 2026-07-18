"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { animationsDisabled } from "@/lib/flags";
import { cn } from "@/lib/utils";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

/**
 * True when entrance animations should be skipped entirely — either the
 * user asked for reduced motion or the E2E flag is set. Content then
 * renders in its final state, which also keeps it visible when
 * requestAnimationFrame is throttled.
 */
export function useRevealDisabled(): boolean {
  const reducedMotion = useReducedMotion();
  return animationsDisabled || reducedMotion === true;
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before animating in. */
  delay?: number;
}

/** Fade-and-rise once, when the element first scrolls into view. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const disabled = useRevealDisabled();
  if (disabled) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers its `RevealItem` children into view. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const disabled = useRevealDisabled();
  if (disabled) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const disabled = useRevealDisabled();
  if (disabled) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div className={className} variants={revealVariants}>
      {children}
    </motion.div>
  );
}
