"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useState } from "react";

type ImageWithSkeletonProps = ImageProps & {
  skeletonClassName?: string;
};

export function ImageWithSkeleton({
  alt,
  className = "",
  onError,
  onLoad,
  skeletonClassName = "",
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useCallback((image: HTMLImageElement | null) => {
    if (image?.complete && image.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <>
      <span
        aria-hidden="true"
        className={`khanchi-image-skeleton ${loaded ? "khanchi-image-skeleton--hidden" : ""} ${skeletonClassName}`}
      />
      <Image
        {...props}
        alt={alt}
        className={`khanchi-progressive-image ${className}`}
        data-loaded={loaded ? "true" : "false"}
        ref={imageRef}
        onError={(event) => {
          setLoaded(true);
          onError?.(event);
        }}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
      />
    </>
  );
}
