import { GalleryHeading } from "./gallery-heading";
import { GalleryMosaic } from "./gallery-mosaic";

export function GallerySection() {
  return (
    <section id="gallery" className="gallery-pattern relative overflow-hidden bg-mist pt-[124px] pb-[89px] max-[900px]:pt-11 max-[900px]:pb-9 max-[600px]:pt-9 max-[600px]:pb-8" aria-labelledby="gallery-title">
      <GalleryHeading />
      <GalleryMosaic />
      <p className="relative z-[2] mx-auto mt-7 w-[min(1248px,calc(100%-64px))] text-right text-xs leading-[1.8] text-[#7d7d77] max-[900px]:mt-4 max-[900px]:w-[calc(100%-40px)] max-[900px]:text-[10px] max-[600px]:w-[calc(100%-28px)]">تصاویر برگرفته از صفحه رسمی خانچی و هماهنگ‌شده برای هویت بصری وب‌سایت</p>
    </section>
  );
}
