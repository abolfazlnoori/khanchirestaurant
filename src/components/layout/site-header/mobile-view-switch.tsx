import { HomeIcon, MenuIcon } from "@/components/shared/icons";

export function MobileViewSwitch() {
  return (
    <nav className="mobile-view-switch [direction:rtl]" aria-label="انتخاب نمای موبایل">
      <a
        className="flex h-full flex-1 items-center justify-center gap-2 rounded-full bg-ink px-3 text-[14px] font-semibold text-white"
        href="#top"
        aria-current="page"
      >
        <HomeIcon className="size-[18px]" />
        <span>خانه</span>
      </a>
      <button
        className="flex h-full flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full px-3 text-[14px] font-semibold text-ink/45"
        type="button"
        disabled
        title="منو به‌زودی اضافه می‌شود"
        aria-label="منو؛ به‌زودی"
      >
        <MenuIcon className="size-[18px]" />
        <span>منو</span>
      </button>
    </nav>
  );
}
