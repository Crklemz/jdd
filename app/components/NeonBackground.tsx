"use client";

/**
 * Full-bleed neon background: glowing orbs and lines with slow movement
 * and alternating colors. Subtle so content stays readable.
 */
export function NeonBackground() {
  return (
    <div
      className="neon-bg-container pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="neon-orb neon-orb-1" />
      <div className="neon-orb neon-orb-2" />
      <div className="neon-orb neon-orb-3" />
      <div className="neon-orb neon-orb-4" />

      <div className="neon-line neon-line-1" />
      <div className="neon-line neon-line-2" />
      <div className="neon-line neon-line-3" />
      <div className="neon-line neon-line-4" />
    </div>
  );
}
