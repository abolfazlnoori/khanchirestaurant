import { SectionLabel } from "@/components/shared/section-label";
import { MenuCard } from "./menu-card";
import { menuItems } from "./menu.data";

export function MenuSection() {
  return (
    <section id="menu" className="bg-paper pt-[110px] pb-[57px] max-[900px]:pt-[50px] max-[900px]:pb-[30px]" aria-labelledby="menu-title">
      <div className="mx-auto grid w-[min(1248px,calc(100%-64px))] grid-cols-[0.7fr_1.3fr] items-center gap-24 [direction:ltr] max-[900px]:block max-[900px]:w-[min(calc(100%-40px),720px)] max-[900px]:text-center max-[900px]:[direction:rtl] max-[420px]:w-[calc(100%-28px)]">
        <blockquote className="relative text-end m-0 max-w-80 border-r border-gold-soft pe-[46px] text-[23px] leading-[1.9] text-[#696a64] before:absolute before:-top-10 before:right-[18px] before:font-serif before:text-[42px] before:text-gold before:content-['“'] max-[900px]:hidden">«طعمی که در نگاه اول انتخاب می‌شود و برای بار دوم، به خاطر سپرده می‌شود.»</blockquote>
        <div className="text-right [direction:rtl] max-[900px]:text-center [&>p:first-child]:max-[900px]:justify-center">
          <SectionLabel>امضای خانچی</SectionLabel>
          <h2 className="m-0 text-[clamp(40px,4.3vw,64px)] leading-[1.2] font-extrabold tracking-[-0.035em] text-ink max-[900px]:text-[clamp(32px,9vw,44px)]" id="menu-title">هر بشقاب، یک روایت کامل</h2>
          <p className="mt-[18px] text-[17px] text-muted max-[900px]:mx-auto max-[900px]:mt-3.5 max-[900px]:max-w-[330px] max-[900px]:text-sm">جهان طعم خانچی؛ از لطافت شیرین و عطر آتش تا عطر زعفران و آرامش یک نوشیدنی ایرانی.</p>
        </div>
      </div>

      <div className="menu-grid mx-auto mt-[70px] grid w-[min(1080px,calc(100%-64px))] grid-cols-3 gap-8 max-[900px]:mt-[26px] max-[900px]:w-[min(calc(100%-40px),720px)] max-[900px]:grid-cols-[1.45fr_1fr] max-[900px]:grid-rows-2 max-[900px]:gap-2.5 max-[900px]:[direction:ltr] max-[420px]:h-[470px] max-[420px]:w-[calc(100%-20px)]">
        {menuItems.map((item) => <MenuCard key={item.title} {...item} />)}
      </div>
    </section>
  );
}
