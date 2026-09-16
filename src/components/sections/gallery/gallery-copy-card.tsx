import type { GalleryItem } from "./gallery.data";

type GalleryCopyCardProps = Pick<GalleryItem, "slug" | "eyebrow" | "title" | "description" | "alignDescriptionStart">;

export function GalleryCopyCard({ slug, eyebrow, title, description, alignDescriptionStart = false }: GalleryCopyCardProps) {
  return (
    <article className={`mosaic-copy mosaic-copy--${slug} flex aspect-[1.38] min-w-0 flex-col justify-center overflow-hidden bg-forest-deep p-[clamp(26px,2.8vw,46px)] text-white [direction:rtl] after:mt-5 after:h-px after:w-[38px] after:bg-gold after:content-[''] max-[900px]:aspect-[0.9] max-[900px]:p-[13px_10px] max-[900px]:after:mt-2 max-[900px]:after:w-6`}>
      <span className="font-serif text-[11px] leading-[1.2] tracking-[0.05em] text-gold-soft [direction:ltr] max-[900px]:text-[6px]" lang="en">{eyebrow}</span>
      <h3 className="mt-5 mb-3 text-[clamp(25px,2.2vw,32px)] leading-[1.35] font-semibold whitespace-nowrap max-[900px]:my-[8px_6px] max-[900px]:text-[clamp(14px,4.4vw,21px)] max-[900px]:whitespace-normal">{title}</h3>
      <p className={`m-0 text-[clamp(12px,1.1vw,15px)] text-white/80 max-[900px]:line-clamp-3 max-[900px]:text-[8px] max-[900px]:leading-[1.65]${alignDescriptionStart ? " text-start" : ""}`}>{description}</p>
    </article>
  );
}
