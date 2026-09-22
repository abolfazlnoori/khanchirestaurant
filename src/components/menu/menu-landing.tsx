import { ImageWithSkeleton } from "@/components/shared/image-with-skeleton";
import { IconChevronLeft } from "./menu-icons";
import { menuLandingImages } from "./menu-assets";
import { Eyebrow, GirihPattern } from "./menu-primitives";

export function MenuHero({ onBrowse }: { onBrowse: () => void }) {
  return (
    <section className="relative overflow-hidden border-b border-[#f0ebe1] bg-[#f0eff0]">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[28px] h-[calc(100%-56px)] w-[calc(100%-48px)] -translate-x-1/2 overflow-hidden rounded-[2px] border border-[#f0ebe1] bg-[#f6f2ec] lg:top-[36px] lg:h-[calc(100%-72px)] lg:w-[calc(100%-72px)]">
          <GirihPattern className="absolute -right-16 -top-4" />
          <GirihPattern className="absolute -left-20 -top-24 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f6f2ec]/70 to-[#f6f2ec]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f6f2ec]/80" />
        </div>
      </div>
      <div className="relative mx-auto max-w-[1440px] px-8 py-20 lg:px-32 lg:py-32">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <Eyebrow label="منوی خانچی" className="justify-center" />
          <h1
            className="mt-6 text-[clamp(40px,7vw,80px)] leading-[1.2] text-[#10231c]"
            style={{ fontFamily: "'Abar High:Bold'" }}
          >
            سفرهٔ خانچی،
            <br />
            بشقاب به بشقاب
          </h1>
          <p
            className="mt-6 max-w-[560px] text-[15px] leading-[2.1] text-[#647069] lg:text-[16px]"
            style={{ fontFamily: "'IRANSansX:Regular'" }}
          >
            از عطر زعفران تا گرمای یک سفرهٔ ایرانی؛ هر بخش از منو با همان دقت و
            احترامی چیده شده که میهمان در قلب سعادت‌آباد تجربه می‌کند.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onBrowse}
              className="group inline-flex h-[48px] items-center gap-2 rounded-[1px] border border-[#10231c] bg-[#10231c] px-6 text-[16px] text-[#f8f7f5] transition-colors hover:bg-[#173328]"
              style={{ fontFamily: "'IRANSansX:DemiBold'" }}
            >
              مشاهدهٔ منو
              <IconChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedStrip({ onBrowse }: { onBrowse: () => void }) {
  const cards = [
    { kicker: "STARTERS • SHARE", title: "پیش‌غذا", description: "شروعی آرام با طعم‌های دقیق و گیاهان معطر.", image: menuLandingImages.starters, imageAlt: "پیش‌غذای ایرانی رستوران خانچی با سبزیجات تازه" },
    { kicker: "SIGNATURE • FIRE", title: "غذای اصلی", description: "جایی که مواد ممتاز و تکنیک حرفه‌ای شاهکار می‌آفرینند.", image: menuLandingImages.main, imageAlt: "غذای اصلی گریل‌شده از منوی رستوران خانچی" },
    { kicker: "APERITIF • NIGHT", title: "نوشیدنی", description: "مجموعه‌ای سنجیده برای همراهی‌ای دلنشین با طعم‌ها.", image: menuLandingImages.drinks, imageAlt: "نوشیدنی زرشک و مرکبات از منوی خانچی" },
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-16 lg:py-20">
      <div className="mb-10 flex flex-col items-center gap-5 text-center">
        <Eyebrow label="امضای خانچی" className="justify-center" />
        <h2
          className="max-w-[640px] text-[clamp(28px,4vw,48px)] leading-[1.25] text-[#17231c]"
          style={{ fontFamily: "'Abar High:Bold'" }}
        >
          هر بشقاب، یک روایت کامل
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <button
            key={card.title}
            type="button"
            onClick={onBrowse}
            className="group flex flex-col overflow-hidden rounded-[2px] border border-[#eae4d9] bg-[#f0eff0] text-right"
          >
            <div className="relative h-[210px] overflow-hidden bg-[#e6e2da]">
              <ImageWithSkeleton
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col items-end gap-2 px-6 pb-5 pt-6">
              <p className="text-[11px] uppercase tracking-wide text-[#8c857a]" style={{ fontFamily: "'Inter:Medium'" }}>
                {card.kicker}
              </p>
              <p className="text-[26px] text-[#252520]" style={{ fontFamily: "'Abar High:SemiBold'" }}>
                {card.title}
              </p>
              <p className="text-[12px] leading-[1.9] text-[#252520]" style={{ fontFamily: "'IRANSansX:Medium'" }}>
                {card.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
