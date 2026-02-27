import Image from "next/image";

interface ScrollGalleryProps {
  imagePaths: string[];
  altPrefix: string;
  className?: string;
  imageClassName?: string;
  /** Indices of images to crop slightly lower (e.g. so faces aren't cut off). */
  lowerCropIndices?: number[];
  /** Indices of images to anchor at top (so the top of the image isn't cut off). */
  topCropIndices?: number[];
  /** Override object-position per image index (e.g. { 9: "center 25%" }). Takes precedence over lower/top crop. */
  positionByIndex?: Partial<Record<number, string>>;
  /** Duration in seconds for one full cycle (lower = faster). Top gallery typically faster than bottom. */
  scrollDurationSeconds?: number;
  /** Scroll direction: "rtl" = right-to-left (default), "ltr" = left-to-right */
  direction?: "ltr" | "rtl";
}

export function ScrollGallery({
  imagePaths,
  altPrefix,
  className = "",
  imageClassName = "",
  lowerCropIndices,
  topCropIndices,
  positionByIndex,
  scrollDurationSeconds = 60,
  direction = "rtl",
}: ScrollGalleryProps) {
  const duplicatedPaths = [...imagePaths, ...imagePaths];

  return (
    <div className={`overflow-hidden py-4 ${className}`}>
      <div
        className="flex w-max gap-4"
        style={{
          animation: `ticker ${scrollDurationSeconds}s linear infinite`,
          animationDirection: direction === "ltr" ? "reverse" : "normal",
        }}
      >
        {duplicatedPaths.map((src, i) => {
          const pathIndex = i % imagePaths.length;
          const customPos = positionByIndex?.[pathIndex];
          const shiftDown = lowerCropIndices?.includes(pathIndex);
          const anchorTop = topCropIndices?.includes(pathIndex);
          const objectPosition = customPos
            ? customPos
            : shiftDown
              ? "center 20%"
              : anchorTop
                ? "center top"
                : undefined;
          return (
            <div
              key={`${src}-${i}`}
              className="relative h-48 min-w-[220px] shrink-0 overflow-hidden rounded-lg sm:h-64 sm:min-w-[280px]"
            >
              <Image
                src={src}
                alt={`${altPrefix} ${pathIndex + 1}`}
                fill
                className={`object-cover ${imageClassName}`}
                style={objectPosition ? { objectPosition } : undefined}
                sizes="(max-width: 640px) 220px, 280px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
