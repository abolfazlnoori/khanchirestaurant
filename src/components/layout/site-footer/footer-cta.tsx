import { ArrowLeft } from "@/components/shared/icons";

export function FooterCta() {
  return (
    <section className="px-6 pt-[30px] pb-3 text-center max-[900px]:px-[22px] max-[900px]:pt-[65px] max-[900px]:pb-[50px]" aria-labelledby="footer-title">
      <p className="mb-[18px] text-[32px] font-extrabold max-[900px]:text-[28px]">خانچی</p>
      <h2 className="m-0 text-[clamp(40px,4.3vw,64px)] leading-[1.2] font-extrabold tracking-[-0.035em] text-ink max-[900px]:text-[clamp(32px,9vw,44px)]" id="footer-title">اصالت ایرانی، برای لحظه‌های امروزی</h2>
      <p className="mt-4 text-[17px] text-muted max-[900px]:text-sm">خانچی — رستوران اصیل ایرانی در سعادت‌آباد تهران</p>
      <div className="mt-[34px] flex items-center justify-center gap-[30px] max-[900px]:mt-5 max-[900px]:flex-col max-[900px]:gap-2">
        <a className="inline-flex min-h-12 items-center justify-center gap-3.5 bg-ink px-6 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#174531] max-[900px]:min-h-[46px] max-[900px]:px-[18px] max-[900px]:text-[13px] [&_svg]:size-[17px]" href="tel:+982122389873">رزرو میز <ArrowLeft /></a>
        <a className="inline-flex min-h-12 items-center justify-center gap-3.5 px-0 text-[15px] font-semibold max-[900px]:min-h-[46px] max-[900px]:text-[13px] [&_svg]:size-[17px]" href="/menu">رفتن به صفحه منو <ArrowLeft /></a>
      </div>
    </section>
  );
}
