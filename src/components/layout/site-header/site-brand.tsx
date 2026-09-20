import Link from "next/link";

export function SiteBrand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center [direction:ltr] ${compact ? "gap-0" : "gap-4"}`}
      href="/"
      aria-label="خانچی، صفحه اصلی"
    >
      <div className="flex flex-col items-center leading-none">
        <span className={`${compact ? "text-[24px]" : "text-[26px]"} font-extrabold [direction:rtl]`}>خانچی</span>
        <span className="mt-1.5 text-[7px] font-semibold tracking-[0.12em] text-[#69716c]" lang="en">KHANCHI RESTAURANT</span>
      </div>
      {!compact && (
        <>
          <span className="h-[46px] w-px bg-[#bdbdb9]" aria-hidden="true" />
          <span className="font-serif text-xl tracking-[0.08em]" lang="en">KH</span>
        </>
      )}
    </Link>
  );
}
