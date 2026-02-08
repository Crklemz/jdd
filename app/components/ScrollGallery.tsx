import Image from "next/image";

interface ScrollGalleryProps {
  imagePaths: string[];
  altPrefix: string;
  className?: string;
  imageClassName?: string;
  /** Duration in seconds for one full cycle (lower = faster). Top gallery typically faster than bottom. */
  scrollDurationSeconds?: number;
}

export function ScrollGallery({
  imagePaths,
  altPrefix,
  className = "",
  imageClassName = "",
  scrollDurationSeconds = 60,
}: ScrollGalleryProps) {
  const duplicatedPaths = [...imagePaths, ...imagePaths];

  return (
    <div className={`overflow-hidden py-4 ${className}`}>
      <div
        className="flex w-max gap-4"
        style={{ animation: `ticker ${scrollDurationSeconds}s linear infinite` }}
      >
        {duplicatedPaths.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-64 min-w-[280px] shrink-0 overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`${altPrefix} ${(i % imagePaths.length) + 1}`}
              fill
              className={`object-cover ${imageClassName}`}
              sizes="280px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
