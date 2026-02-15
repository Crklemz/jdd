"use client";

/** Scattered star-like specs for outer-space feel (deterministic positions) */
const STAR_SPECS: { left: number; top: number; size: 1 | 2 | 3; opacity: number }[] = [
  { left: 8, top: 12, size: 2, opacity: 0.85 },
  { left: 22, top: 6, size: 1, opacity: 0.6 },
  { left: 45, top: 18, size: 2, opacity: 0.75 },
  { left: 68, top: 8, size: 1, opacity: 0.5 },
  { left: 85, top: 22, size: 3, opacity: 0.9 },
  { left: 12, top: 28, size: 1, opacity: 0.55 },
  { left: 35, top: 35, size: 2, opacity: 0.7 },
  { left: 58, top: 42, size: 1, opacity: 0.65 },
  { left: 78, top: 38, size: 2, opacity: 0.8 },
  { left: 92, top: 48, size: 1, opacity: 0.5 },
  { left: 5, top: 52, size: 2, opacity: 0.7 },
  { left: 28, top: 58, size: 1, opacity: 0.6 },
  { left: 52, top: 62, size: 3, opacity: 0.85 },
  { left: 72, top: 55, size: 1, opacity: 0.55 },
  { left: 88, top: 68, size: 2, opacity: 0.75 },
  { left: 18, top: 72, size: 1, opacity: 0.5 },
  { left: 42, top: 78, size: 2, opacity: 0.65 },
  { left: 62, top: 82, size: 1, opacity: 0.7 },
  { left: 82, top: 75, size: 2, opacity: 0.6 },
  { left: 15, top: 88, size: 1, opacity: 0.55 },
  { left: 38, top: 92, size: 2, opacity: 0.8 },
  { left: 55, top: 12, size: 1, opacity: 0.5 },
  { left: 95, top: 58, size: 2, opacity: 0.65 },
  { left: 2, top: 42, size: 1, opacity: 0.6 },
  { left: 48, top: 28, size: 2, opacity: 0.75 },
  { left: 98, top: 82, size: 1, opacity: 0.55 },
  { left: 32, top: 48, size: 1, opacity: 0.7 },
  { left: 65, top: 28, size: 2, opacity: 0.6 },
  { left: 8, top: 65, size: 2, opacity: 0.65 },
  { left: 75, top: 62, size: 1, opacity: 0.5 },
];

/**
 * Full-bleed neon background: glowing orbs, lines, and star-like specs.
 * Static (no animation) for performance.
 */
export function NeonBackground() {
  return (
    <div
      className="neon-bg-container pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Starfield specs */}
      {STAR_SPECS.map((spec, i) => (
        <div
          key={i}
          className="neon-star"
          style={{
            left: `${spec.left}%`,
            top: `${spec.top}%`,
            width: spec.size,
            height: spec.size,
            opacity: spec.opacity,
          }}
        />
      ))}

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
