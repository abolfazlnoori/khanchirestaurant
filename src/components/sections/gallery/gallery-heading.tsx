import { SectionLabel } from "@/components/shared/section-label";

export function GalleryHeading() {
  return (
    <div className="mx-auto grid w-[min(1248px,calc(100%-64px))] grid-cols-[1fr_560px] items-center gap-[128px] [direction:ltr] max-[900px]:block max-[900px]:w-[min(calc(100%-40px),720px)] max-[900px]:text-right max-[900px]:[direction:rtl] max-[420px]:w-[calc(100%-28px)]">
      <div className="[direction:rtl] min-[1200px]:-translate-x-[50px] max-[900px]:hidden">
        <p className="m-0 max-w-[520px] text-[17px] leading-[1.9] text-muted">پشت هر قاب، ترکیبی از مواد تازه، رنگ‌های ایرانی و دقتی‌ست که پیش از اولین لقمه دیده می‌شود.</p>
        <span className="mt-3 block font-serif text-xs tracking-[0.03em] text-gold" lang="en">THE ART OF PERSIAN HOSPITALITY</span>
      </div>
      <div className="[direction:rtl] [&>p:first-child]:max-[900px]:justify-start">
        <SectionLabel>لحظه‌های خانچی</SectionLabel>
        <h2 className="m-0 text-[clamp(40px,3.6vw,52px)] leading-[1.2] font-extrabold tracking-[-0.035em] whitespace-nowrap text-ink max-[900px]:text-[clamp(32px,9vw,44px)] max-[900px]:whitespace-normal" id="gallery-title">جزئیاتی که اشتها را بیدار<br />می‌کنند</h2>
      </div>
    </div>
  );
}
