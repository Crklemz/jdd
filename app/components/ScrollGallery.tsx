import Image from "next/image";

interface ScrollGalleryProps {
  imagePaths: string[];
  altPrefix: string;
  className?: string;
  imageClassName?: string;
}

export function ScrollGallery({
  imagePaths,
  altPrefix,
  className = "",
  imageClassName = "",
}: ScrollGalleryProps) {
  return (
    <div
      className={`scroll-gallery flex gap-4 overflow-x-auto py-4 ${className}`}
      style={{ scrollSnapType: "x mandatory" }}
    >
      {imagePaths.map((src, i) => (
        <div
          key={src}
          className="relative h-64 min-w-[280px] shrink-0 snap-center overflow-hidden rounded-lg"
          style={{ scrollSnapAlign: "center" }}
        >
          <Image
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            fill
            className={`object-cover ${imageClassName}`}
            sizes="280px"
          />
        </div>
      ))}
    </div>
  );
}
