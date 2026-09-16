import Image from "next/image";
import type { GalleryItem } from "./gallery.data";

type GalleryImageProps = Pick<GalleryItem, "slug" | "image" | "imageAlt">;

export function GalleryImage({ slug, image, imageAlt }: GalleryImageProps) {
  return (
    <div className={`mosaic-image mosaic-image--${slug} relative aspect-[1.38] min-w-0 overflow-hidden max-[900px]:aspect-[0.9]`}>
      <Image className="object-cover transition-transform duration-700 hover:scale-105" src={image} alt={imageAlt} fill sizes="(max-width: 640px) 34vw, 33vw" />
    </div>
  );
}
