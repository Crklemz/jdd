"use client";

const ROTATIONS = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "-rotate-1"] as const;
const Z_INDICES = ["z-0", "z-10", "z-20", "z-30", "z-40"] as const;

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
  const images = imagePaths.slice(0, 5);
  const topRow = images.slice(0, 3);
  const bottomRow = images.slice(3, 5);

  return (
    <section
      aria-label="Scrapbook"
      className={`relative flex flex-col items-center justify-center py-8 md:py-12 ${className}`}
    >
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 md:gap-4">
        {/* Top row: 3 images */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {topRow.map((src, i) => (
            <figure
              key={src + i}
              className={`relative ${Z_INDICES[i]} ${ROTATIONS[i]} w-[160px] shrink-0 overflow-hidden rounded-lg border-2 border-border bg-card p-2 shadow-lg transition-transform hover:z-50 hover:scale-105 md:w-[220px]`}
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
        {/* Bottom row: 2 images */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {bottomRow.map((src, i) => {
            const j = i + 3;
            return (
              <figure
                key={src + j}
                className={`relative ${Z_INDICES[j]} ${ROTATIONS[j]} w-[160px] shrink-0 overflow-hidden rounded-lg border-2 border-border bg-card p-2 shadow-lg transition-transform hover:z-50 hover:scale-105 md:w-[220px]`}
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
