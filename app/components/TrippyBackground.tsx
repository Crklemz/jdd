"use client";

/**
 * Full-bleed trippy animated background using CSS gradients.
 * Uses theme colors (accent, muted, background) for a cohesive look.
 */
export function TrippyBackground() {
  return (
    <div
      className="trippy-bg absolute inset-0 fade-bottom"
      aria-hidden
    />
  );
}
