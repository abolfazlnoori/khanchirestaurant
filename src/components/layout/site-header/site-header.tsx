import { ArrowLeft } from "@/components/shared/icons";
import { DesktopNavigation, MobileNavigation } from "./header-navigation";
import { SiteBrand } from "./site-brand";

export function SiteHeader() {
  return (
    <header className="relative z-20 h-[102px] bg-mist max-[900px]:h-[60px] max-[900px]:bg-white">
      <div className="mx-auto grid h-full w-[min(1320px,calc(100%-64px))] grid-cols-[1fr_auto_1fr] items-center [direction:ltr] max-[900px]:w-[calc(100%-32px)] max-[900px]:grid-cols-2">
        <SiteBrand />
        <DesktopNavigation />

        <a className="col-start-1 row-start-1 inline-flex min-h-11 items-center justify-self-start gap-3 text-sm font-semibold [direction:rtl] max-[900px]:hidden [&_svg]:size-[17px] [&_svg]:transition-transform hover:[&_svg]:-translate-x-1" href="#menu">
          مشاهده منو
          <ArrowLeft />
        </a>

        <MobileNavigation />
      </div>
    </header>
  );
}
