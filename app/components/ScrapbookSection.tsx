"use client";

const ROTATIONS = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "-rotate-1", "rotate-2"] as const;
const Z_INDICES = ["z-0", "z-10", "z-20", "z-30", "z-40", "z-10"] as const;

/** Spread-out scrapbook: mobile, md, then lg+ (laptop/desktop) for more spread and size */
const SIZE_CLASSES = [
  "min-w-[140px] max-w-[280px] flex-1 md:min-w-[200px] md:max-w-[320px] lg:min-w-[260px] lg:max-w-[400px]",
  "min-w-[140px] max-w-[280px] flex-1 md:min-w-[200px] md:max-w-[340px] lg:min-w-[260px] lg:max-w-[420px]",
  "min-w-[140px] max-w-[280px] flex-1 md:min-w-[200px] md:max-w-[320px] lg:min-w-[260px] lg:max-w-[400px]",
  "min-w-[140px] max-w-[280px] flex-1 md:min-w-[200px] md:max-w-[300px] lg:min-w-[260px] lg:max-w-[380px]",
  "min-w-[140px] max-w-[280px] flex-1 md:min-w-[200px] md:max-w-[320px] lg:min-w-[260px] lg:max-w-[400px]",
  "min-w-[140px] max-w-[280px] flex-1 md:min-w-[200px] md:max-w-[340px] lg:min-w-[260px] lg:max-w-[420px]",
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
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-stretch px-4 lg:max-w-7xl">
        {/* Top row: 3 images, spread across width */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-10">
          {topRow.map((src, i) => (
            <figure
              key={src + i}
              className={`relative ${Z_INDICES[i]} ${ROTATIONS[i]} ${SIZE_CLASSES[i]} overflow-hidden rounded-lg border-2 border-border bg-card p-2 shadow-lg`}
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
        {/* Bottom row: 3 images, spread across width */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:mt-6 md:gap-6 lg:mt-8 lg:gap-10">
          {bottomRow.map((src, i) => {
            const j = bottomRowStyleIndices[i];
            return (
              <figure
                key={src + j}
                className={`relative ${Z_INDICES[j]} ${ROTATIONS[j]} ${SIZE_CLASSES[j]} overflow-hidden rounded-lg border-2 border-border bg-card p-2 shadow-lg`}
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
