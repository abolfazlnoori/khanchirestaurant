import Image from "next/image";
import { SectionLabel } from "@/components/shared/section-label";

export function StoryIntro() {
  return (
    <div className="mx-auto grid w-[min(1248px,calc(100%-64px))] grid-cols-[256px_1fr_256px] items-center gap-[82px] [direction:ltr] max-[900px]:w-[min(calc(100%-40px),720px)] max-[900px]:grid-cols-2 max-[900px]:gap-x-5 max-[900px]:gap-y-9 max-[420px]:w-[calc(100%-28px)]">
      <Image className="size-64 object-contain max-[900px]:col-start-1 max-[900px]:w-[min(170px,100%)] max-[900px]:h-auto max-[900px]:justify-self-center" src="/assets/patterns/khanchi-seal.png" alt="نشان هندسی خانچی با الهام از گره‌چینی ایرانی" width={256} height={256} />
      <div className="text-center [direction:rtl] max-[900px]:col-span-full max-[900px]:row-start-1 [&>p:first-child]:justify-center">
        <SectionLabel>داستان خانچی</SectionLabel>
        <h2 className="m-0 text-[clamp(40px,4.3vw,64px)] leading-[1.2] font-extrabold tracking-[-0.035em] text-ink max-[900px]:text-[clamp(32px,9vw,44px)]" id="story-title">از سفره ایرانی،<br />تا یک تجربه ماندگار</h2>
        <p className="mx-auto mt-[26px] max-w-[680px] text-[17px] leading-[1.9] text-muted max-[900px]:mt-[18px] max-[900px]:max-w-[350px] max-[900px]:text-sm">خانچی جایی‌ست که اصالت، در جزئیات امروز دوباره روایت می‌شود؛ از انتخاب مواد اولیه و شیوه پخت تا لحظه‌ای که غذا با احترام پیش روی مهمان قرار می‌گیرد.</p>
        <strong className="mt-[22px] block text-[15px] font-medium text-gold max-[900px]:mt-4 max-[900px]:text-xs">اصالت در طعم، ظرافت در میزبانی</strong>
      </div>
      <div className="relative aspect-[0.78] w-64 rounded-t-[128px] border border-gold max-[900px]:col-start-2 max-[900px]:w-[min(170px,100%)] max-[900px]:justify-self-center">
        <Image className="rounded-t-[128px] object-cover pt-2.5 pr-2.5" src="/assets/images/restaurant-interior.png" alt="فضای داخلی رستوران خانچی" fill sizes="(max-width: 767px) 45vw, 256px" />
      </div>
    </div>
  );
}
