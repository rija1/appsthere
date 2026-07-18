/**
 * Build-time flags.
 *
 * NEXT_PUBLIC_DISABLE_ANIMATIONS=1 renders all entrance animations in
 * their final state. Used by screenshot/E2E tooling where headless tabs
 * throttle requestAnimationFrame; never set it in production.
 */
export const animationsDisabled =
  process.env.NEXT_PUBLIC_DISABLE_ANIMATIONS === "1";
