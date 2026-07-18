"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";

/** Client-side context: theme switching and global motion settings. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
