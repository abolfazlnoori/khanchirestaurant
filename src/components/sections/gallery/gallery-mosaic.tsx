import { Fragment } from "react";
import { GalleryCopyCard } from "./gallery-copy-card";
import { galleryItems } from "./gallery.data";
import { GalleryImage } from "./gallery-image";

export function GalleryMosaic() {
  return (
    <div className="mosaic relative z-[2] mx-auto mt-[61px] grid w-[min(1248px,calc(100%-64px))] grid-cols-3 grid-rows-2 [direction:ltr] max-[900px]:mt-8 max-[900px]:w-[calc(100%-44px)] max-[420px]:w-[calc(100%-44px)]">
      {galleryItems.map((item) => (
        <Fragment key={item.slug}>
          <GalleryCopyCard {...item} />
          <GalleryImage {...item} />
        </Fragment>
      ))}
    </div>
  );
}
