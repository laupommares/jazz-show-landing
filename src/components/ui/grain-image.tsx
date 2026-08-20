import Image from "next/image";
import type { ReactNode } from "react";

interface GrainImageProps {
  src: string;
  alt: string;
  sizes: string;
  className: string;
  imageClassName?: string;
  priority?: boolean;
  children?: ReactNode;
}

export function GrainImage({
  src,
  alt,
  sizes,
  className,
  imageClassName = "object-cover",
  priority,
  children,
}: GrainImageProps) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={imageClassName}
      />
      <div className="grain-overlay" />
      {children}
    </div>
  );
}
