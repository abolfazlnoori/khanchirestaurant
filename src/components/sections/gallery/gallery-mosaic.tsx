import { Fragment } from "react";
import { GalleryCopyCard } from "./gallery-copy-card";
import { galleryItems } from "./gallery.data";
import { GalleryImage } from "./gallery-image";

export function GalleryMosaic() {
  return (
    <div className="mosaic relative z-[2] mx-auto mt-[61px] grid w-[min(1248px,calc(100%-64px))] grid-cols-3 grid-rows-2 [direction:ltr] max-[900px]:mt-7 max-[900px]:w-[calc(100%-40px)] max-[600px]:mt-6 max-[600px]:w-[calc(100%-28px)] max-[600px]:grid-cols-2 max-[600px]:grid-rows-none">
      {galleryItems.map((item, index) => (
        <Fragment key={item.slug}>
          <GalleryCopyCard {...item} motionDelay={index * 80} />
          <GalleryImage {...item} motionDelay={index * 80 + 40} />
        </Fragment>
      ))}
    </div>
  );
}
