import { ImageWithSkeleton } from "@/components/shared/image-with-skeleton";
import type { MenuItem } from "./menu.data";

export function MenuCard({ image, imageAlt, eyebrow, title, description, featured = false, motionIndex = 0 }: MenuItem & { motionIndex?: number }) {
  return (
    <article data-motion="reveal" data-motion-delay={String(motionIndex * 55)} className={`menu-card group h-[425px] min-w-0 overflow-hidden border border-[#e8e6e2] bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgb(16_36_25/0.1)] max-[900px]:h-auto max-[900px]:[direction:rtl] max-[900px]:hover:translate-y-0 max-[900px]:hover:shadow-none${featured ? " menu-card--featured max-[900px]:flex max-[900px]:flex-col max-[900px]:bg-forest-deep max-[900px]:text-white" : ""}`}>
      <div className={`relative aspect-[1.63] overflow-hidden max-[900px]:aspect-[1.43] max-[560px]:aspect-[1.62]${featured ? " max-[900px]:aspect-[1.03] max-[900px]:shrink-0 max-[560px]:aspect-[1.62]" : ""}`}>
        <ImageWithSkeleton
          className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
          src={image}
          alt={imageAlt}
          fill
          sizes={
            featured
              ? "(max-width: 560px) calc(100vw - 28px), (max-width: 900px) 58vw, 334px"
              : "(max-width: 560px) calc(100vw - 28px), (max-width: 900px) 40vw, 334px"
          }
        />
      </div>
      <div className={`h-[212px] px-6 pt-5 pb-3 text-right max-[900px]:h-auto max-[900px]:min-h-0 max-[900px]:p-[12px_11px_10px] max-[560px]:p-4${featured ? " max-[900px]:flex-1 max-[900px]:p-4" : ""}`}>
        <p className="m-0 font-serif text-[11px] leading-[1.2] tracking-[0.04em] text-[#817b72] [direction:ltr] [overflow-wrap:anywhere] max-[900px]:text-[8px] max-[560px]:text-[9px]" lang="en">{eyebrow}</p>
        <h3 className={`mt-2 mb-1 text-[30px] leading-[1.3] font-semibold text-[#141a16] max-[900px]:my-1 max-[900px]:text-[clamp(17px,4.5vw,22px)] max-[560px]:mt-2 max-[560px]:text-[22px]${featured ? " max-[900px]:text-white" : ""}`}>{title}</h3>
        <div className={`my-3.5 hidden h-px w-[34px] bg-gold${featured ? " max-[900px]:block max-[560px]:my-3" : ""}`} aria-hidden="true" />
        <p className={`m-0 min-h-[56px] text-xs leading-[1.5] text-[#313530] max-[900px]:min-h-0 max-[900px]:text-[10px] max-[900px]:leading-[1.75] max-[560px]:text-[11.5px] max-[560px]:leading-[1.9]${featured ? " max-[900px]:text-white" : ""}`}>{description}</p>
        <a className={`mt-2 flex min-h-8 items-center justify-center border-t border-[#d9d4cc] text-xs text-[#7b7770] transition-colors duration-200 hover:text-gold max-[900px]:mt-2 max-[900px]:min-h-8 max-[900px]:text-[10px] max-[560px]:mt-3 max-[560px]:min-h-9 max-[560px]:text-[11px]${featured ? " max-[900px]:border-white/20 max-[900px]:text-white" : ""}`} href="/menu">منو</a>
      </div>
    </article>
  );
}
