"use client";

/**
 * Predefined scattered positions (left %, top %) so layout is deterministic,
 * quotes are well spread horizontally, and none stack vertically (no two
 * with similar left are too close in top). Add more positions if you add more quotes.
 */
// Left % alternates big, small, med (all unique); top % spread evenly 5–95
const SCATTER_POSITIONS: Array<{ left: number; top: number }> = [
  { left: 72, top: 5 },
  { left: 6, top: 15 },
  { left: 38, top: 25 },
  { left: 78, top: 35 },
  { left: 14, top: 45 },
  { left: 46, top: 55 },
  { left: 85, top: 65 },
  { left: 22, top: 75 },
  { left: 54, top: 85 },
  { left: 92, top: 95 },
];

interface ScatteredTestimonialsProps {
  quotes: string[];
  className?: string;
}

export function ScatteredTestimonials({
  quotes,
  className = "",
}: ScatteredTestimonialsProps) {
  if (quotes.length === 0) return null;

  const positions = SCATTER_POSITIONS.slice(0, quotes.length);

  return (
    <div
      className={`relative mx-auto min-h-[180px] w-full max-w-2xl px-4 py-5 sm:min-h-[220px] md:min-h-[260px] ${className}`}
      aria-label="Testimonials"
    >
      {quotes.map((quote, i) => {
        const pos = positions[i];
        if (!pos) return null;
        return (
          <p
            key={`${i}-${quote.slice(0, 20)}`}
            className="absolute max-w-[85%] font-display text-sm italic text-accent whitespace-normal sm:max-w-none sm:whitespace-nowrap sm:text-base md:text-lg"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            -&ldquo;{quote}&rdquo;
          </p>
        );
      })}
    </div>
  );
}
