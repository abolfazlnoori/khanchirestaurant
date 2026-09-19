import { ArrowLeft } from "@/components/shared/icons";
import { DesktopNavigation } from "./header-navigation";
import { MobileViewSwitch } from "./mobile-view-switch";
import { SiteBrand } from "./site-brand";

export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 h-[102px] border-b border-[var(--header-line)] bg-[var(--header-bg)] shadow-[var(--header-shadow)] backdrop-blur-xl max-[900px]:hidden">
        <div className="mx-auto grid h-full w-[min(1320px,calc(100%-64px))] grid-cols-[1fr_auto_1fr] items-center [direction:ltr]">
          <SiteBrand />
          <DesktopNavigation />

          <a className="col-start-1 row-start-1 inline-flex min-h-11 items-center justify-self-start gap-3 text-sm font-semibold [direction:rtl] [&_svg]:size-[17px] [&_svg]:transition-transform hover:[&_svg]:-translate-x-1" href="/menu">
            مشاهده منو
            <ArrowLeft />
          </a>
        </div>
      </header>

      <MobileViewSwitch />
    </>
  );
}
