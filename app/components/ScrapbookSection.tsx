"use client";

const ROTATIONS = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "-rotate-1", "rotate-2"] as const;
const Z_INDICES = ["z-0", "z-10", "z-20", "z-30", "z-40", "z-10"] as const;

/** Varied scrapbook sizes: small, medium, large (mobile, then md:) */
const SIZE_CLASSES = [
  "w-[200px] md:w-[265px]",
  "w-[210px] md:w-[280px]",
  "w-[205px] md:w-[275px]",
  "w-[200px] md:w-[270px]",
  "w-[185px] md:w-[250px]",
  "w-[205px] md:w-[290px]",
] as const;

export interface ScrapbookSectionProps {
  imagePaths: string[];
  altPrefix: string;
  className?: string;
}

export function ScrapbookSection({
  imagePaths,
  altPrefix,
  className = "",
}: ScrapbookSectionProps) {
  const images = imagePaths.slice(0, 6);
  const topRow = images.slice(0, 3);
  // Bottom row: swap left and middle (indices 3 and 4)
  const bottomRow = [images[4], images[3], images[5]];
  const bottomRowStyleIndices = [4, 3, 5];

  return (
    <section
      aria-label="Scrapbook"
      className={`relative flex flex-col items-center justify-center py-8 md:py-12 ${className}`}
    >
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4">
        {/* Top row: 3 images, overlapping */}
        <div className="flex flex-wrap items-center justify-center gap-0 md:-space-x-3 md:gap-0">
          {topRow.map((src, i) => (
            <figure
              key={src + i}
              className={`relative ${Z_INDICES[i]} ${ROTATIONS[i]} ${SIZE_CLASSES[i]} shrink-0 overflow-hidden rounded-lg border-2 border-border bg-card p-2 shadow-lg transition-transform hover:z-50 hover:scale-105 md:mt-0`}
              style={i > 0 ? { marginLeft: "clamp(-0.5rem, -1.5vw, -0.4rem)" } : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${altPrefix} scrapbook image ${i + 1}`}
                className="h-auto w-full rounded-md object-contain"
              />
            </figure>
          ))}
        </div>
        {/* Bottom row: 3 images, overlapping and slightly overlapping top */}
        <div
          className="flex flex-wrap items-center justify-center gap-0 md:-space-x-3 md:gap-0"
          style={{ marginTop: "clamp(-0.4rem, -1vw, -0.25rem)" }}
        >
          {bottomRow.map((src, i) => {
            const j = bottomRowStyleIndices[i];
            return (
              <figure
                key={src + j}
                className={`relative ${Z_INDICES[j]} ${ROTATIONS[j]} ${SIZE_CLASSES[j]} shrink-0 overflow-hidden rounded-lg border-2 border-border bg-card p-2 shadow-lg transition-transform hover:z-50 hover:scale-105`}
                style={i > 0 ? { marginLeft: "clamp(-0.5rem, -1.5vw, -0.4rem)" } : undefined}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${altPrefix} scrapbook image ${j + 1}`}
                  className="h-auto w-full rounded-md object-contain"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
