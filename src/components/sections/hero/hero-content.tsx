import { ArrowLeft } from "@/components/shared/icons";
import { SectionLabel } from "@/components/shared/section-label";

export function HeroContent() {
  return (
    <div className="relative z-[2] w-[min(610px,84%)] justify-self-center py-[52px] max-[900px]:w-[calc(100%-40px)] max-[900px]:p-0 max-[900px]:text-right max-[420px]:w-[calc(100%-28px)]">
      <SectionLabel>روایت معاصر از مهمان‌نوازی ایرانی</SectionLabel>
      <h1 className="m-0 text-[clamp(54px,5.1vw,84px)] leading-[1.2] font-extrabold tracking-[-0.035em] text-ink max-[900px]:text-[clamp(34px,9.4vw,42px)] max-[900px]:leading-[1.22]" id="hero-title">
        <span className="max-[900px]:hidden">طعم اصیل،<br />با امضای خانچی</span>
        <span className="hidden max-[900px]:inline">طعم اصیل ایران، در<br />قلب امروز</span>
      </h1>
      <p className="mt-7 max-w-[520px] text-[17px] font-semibold text-[#62655f] max-[900px]:hidden">از عطر زعفران تا گرمای یک سفره ایرانی؛ تجربه‌ای آرام، دقیق و به‌یادماندنی در قلب سعادت‌آباد.</p>
      <div className="mt-[34px] flex items-center gap-[30px] max-[900px]:mt-2.5 max-[900px]:gap-5">
        <a className="inline-flex min-h-12 items-center justify-center gap-3.5 bg-ink px-6 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#174531] max-[900px]:min-h-[46px] max-[900px]:px-[18px] max-[900px]:text-[13px] [&_svg]:size-[17px]" href="tel:+982122389873">رزرو میز <ArrowLeft /></a>
        <a className="inline-flex min-h-12 items-center justify-center gap-3.5 text-[15px] font-semibold text-ink transition-colors hover:text-gold max-[900px]:hidden [&_svg]:size-[17px]" href="#menu">رفتن به صفحه منو <ArrowLeft /></a>
      </div>
    </div>
  );
}
