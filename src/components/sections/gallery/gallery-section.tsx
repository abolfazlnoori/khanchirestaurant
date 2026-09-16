import { GalleryHeading } from "./gallery-heading";
import { GalleryMosaic } from "./gallery-mosaic";

export function GallerySection() {
  return (
    <section id="gallery" className="gallery-pattern relative overflow-hidden bg-mist pt-[124px] pb-[89px] max-[900px]:pt-11 max-[900px]:pb-[30px]" aria-labelledby="gallery-title">
      <GalleryHeading />
      <GalleryMosaic />
      <p className="relative z-[2] mx-auto mt-7 w-[min(1248px,calc(100%-64px))] text-right text-xs text-[#8a8983] max-[900px]:mt-2.5 max-[900px]:w-[calc(100%-44px)] max-[900px]:text-[7px] max-[420px]:w-[calc(100%-44px)]">تصاویر برگرفته از صفحه رسمی خانچی و هماهنگ‌شده برای هویت بصری وب‌سایت</p>
    </section>
  );
}
