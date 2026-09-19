import Link from "next/link";

export function SiteBrand() {
  return (
    <Link className="col-start-3 inline-flex min-h-12 items-center justify-self-end gap-4 [direction:ltr] max-[900px]:col-start-2" href="/#top" aria-label="خانچی، صفحه اصلی">
      <div className="flex flex-col">
        <span className="text-[22px] font-extrabold [direction:rtl]">خانچی</span>
        <p className="text-[8px] text-[#59615D] [direction:rtl]">KHANCHI RESTAURANT</p>
      </div>
      <span className="h-[46px] w-px bg-[#bdbdb9] max-[900px]:hidden" aria-hidden="true" />
      <span className="font-serif text-xl tracking-[0.08em] max-[900px]:hidden" lang="en">KH</span>
    </Link>
  );
}
