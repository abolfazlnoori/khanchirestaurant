import { HomeIcon, MenuIcon } from "@/components/shared/icons";
import Link from "next/link";

export function MobileViewSwitch() {
  return (
    <nav className="mobile-view-switch [direction:rtl]" aria-label="انتخاب نمای موبایل">
      <Link
        className="flex h-full flex-1 items-center justify-center gap-2 rounded-full bg-ink px-3 text-[14px] font-semibold text-white"
        href="/#top"
        aria-current="page"
      >
        <HomeIcon className="size-[18px]" />
        <span>خانه</span>
      </Link>
      <a
        className="flex h-full flex-1 items-center justify-center gap-2 rounded-full px-3 text-[14px] font-semibold text-ink transition-colors hover:bg-white/65"
        href="/menu"
      >
        <MenuIcon className="size-[18px]" />
        <span>منو</span>
      </a>
    </nav>
  );
}
