import type { GalleryItem } from "./gallery.data";

type GalleryCopyCardProps = Pick<GalleryItem, "slug" | "eyebrow" | "title" | "description" | "alignDescriptionStart"> & { motionDelay?: number };

export function GalleryCopyCard({ slug, eyebrow, title, description, alignDescriptionStart = false, motionDelay = 0 }: GalleryCopyCardProps) {
  return (
    <article data-motion="reveal" data-motion-delay={String(motionDelay)} className={`mosaic-copy mosaic-copy--${slug} flex aspect-[1.38] min-w-0 flex-col justify-center overflow-hidden bg-forest-deep p-[clamp(26px,2.8vw,46px)] text-white [direction:rtl] after:mt-5 after:h-px after:w-[38px] after:bg-gold after:content-[''] max-[900px]:min-h-[220px] max-[900px]:aspect-auto max-[900px]:p-[14px_12px] max-[900px]:after:mt-3 max-[900px]:after:w-6 max-[600px]:p-4`}>
      <span className="font-serif text-[11px] leading-[1.2] tracking-[0.05em] text-gold-soft [direction:ltr] [overflow-wrap:anywhere] max-[900px]:text-[8px] max-[600px]:text-[8.5px]" lang="en">{eyebrow}</span>
      <h3 className="mt-5 mb-3 text-[clamp(25px,2.2vw,32px)] leading-[1.35] font-semibold whitespace-nowrap max-[900px]:my-[8px_6px] max-[900px]:text-[clamp(16px,4.2vw,20px)] max-[900px]:whitespace-normal max-[600px]:my-2 max-[600px]:text-[clamp(16px,4.8vw,19px)]">{title}</h3>
      <p className={`m-0 text-[clamp(12px,1.1vw,15px)] text-white/80 max-[900px]:text-[10px] max-[900px]:leading-[1.8] max-[600px]:text-[10.5px] max-[600px]:leading-[1.9]${alignDescriptionStart ? " text-start" : ""}`}>{description}</p>
    </article>
  );
}
