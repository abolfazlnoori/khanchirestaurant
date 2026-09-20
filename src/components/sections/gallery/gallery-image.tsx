import Image from "next/image";
import type { GalleryItem } from "./gallery.data";

type GalleryImageProps = Pick<GalleryItem, "slug" | "image" | "imageAlt">;

export function GalleryImage({ slug, image, imageAlt }: GalleryImageProps) {
  return (
    <div className={`mosaic-image mosaic-image--${slug} relative aspect-[1.38] min-w-0 overflow-hidden max-[900px]:min-h-[220px] max-[900px]:aspect-auto`}>
      <Image className="object-cover transition-transform duration-700 hover:scale-105" src={image} alt={imageAlt} fill sizes="(max-width: 600px) calc((100vw - 28px) / 2), (max-width: 900px) 34vw, 33vw" />
    </div>
  );
}
