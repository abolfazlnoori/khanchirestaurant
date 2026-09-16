import Image from "next/image";
import { ArrowLeft, StarIcon } from "@/components/icons";
import { MenuCard } from "@/components/menu-card";
import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const menuCards = [
  {
    image: "/assets/images/menu-drink.png",
    imageAlt: "نوشیدنی زرشک و مرکبات روی میز سنگی تیره",
    eyebrow: "APERITIF • NIGHT",
    title: "نوشیدنی‌ها",
    description: "با مجموعه‌ای سنجیده از نوشیدنی‌ها، لذت خود را بیشتر کنید؛ انتخاب‌هایی طراحی‌شده برای ساختن همراهی‌ای دلنشین و برجسته‌تر کردن طعم‌ها.",
  },
  {
    image: "/assets/images/menu-main.png",
    imageAlt: "بشقاب غذای اصلی گریل‌شده با کنجد",
    eyebrow: "SIGNATURE • FIRE",
    title: "غذای اصلی",
    description: "عصارهٔ هنر آشپزی؛ جایی که مواد اولیهٔ ممتاز و تکنیک‌های حرفه‌ای در کنار هم شاهکارهایی می‌آفرینند که چشم و ذائقه را مسحور می‌کنند.",
    featured: true,
  },
  {
    image: "/assets/images/menu-starter.png",
    imageAlt: "دسر شکلاتی در بشقاب سفید روی میز تیره",
    eyebrow: "STARTERS • SHARE",
    title: "پیش‌غذاها",
    description: "شب خود را با یک نوشیدنی تازه و مجموعه‌ای کوچک از میان‌وعده‌های ظریف آغاز کنید؛ ترکیبی از طعم‌های دقیق و گیاهان معطر برای بیدار کردن ذائقه و اشتها.",
  },
];

const reviews = [
  { quote: "محیط و پذیرایی بسیار دلنشین بود", name: "مهسا و نیما", occasion: "مهمان خصوصی · شام سالگرد" },
  { quote: "غذا و محیط عالی بود", name: "سارا احمدی", occasion: "مهمان خصوصی · شام دوستانه", active: true },
  { quote: "سرویس‌دهی و کیفیت فوق‌العاده بود", name: "آرمان رضایی", occasion: "مهمان خصوصی · جشن تولد" },
];

export default function Home() {
  return (
    <>
      <a className="fixed top-3 start-3 z-[100] -translate-y-[160%] bg-forest px-4 py-2.5 text-white transition-transform focus:translate-y-0" href="#main-content">رفتن به محتوای اصلی</a>
      <SiteHeader />

      <main id="main-content">
        <section id="top" className="relative bg-[#F6F2EC]" aria-labelledby="hero-title">
          <div className="hero-pattern relative grid min-h-[620px] grid-cols-[1.05fr_0.95fr] items-center overflow-hidden max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:pt-[18px] max-[900px]:pb-2">
            <div className="relative z-[2] w-[min(610px,84%)] justify-self-center py-[72px] max-[900px]:w-[calc(100%-40px)] max-[900px]:p-0 max-[900px]:text-right max-[420px]:w-[calc(100%-28px)]">
              <SectionLabel>روایت معاصر از مهمان‌نوازی ایرانی</SectionLabel>
              <h1 className="m-0 text-[clamp(54px,5.1vw,84px)] leading-[1.2] font-extrabold tracking-[-0.035em] text-ink max-[900px]:text-[clamp(34px,9.4vw,42px)] max-[900px]:leading-[1.22]" id="hero-title">
                <span className="max-[900px]:hidden">طعم اصیل،<br />با امضای خانچی</span>
                <span className="hidden max-[900px]:inline">طعم اصیل ایران، در<br />قلب امروز</span>
              </h1>
              <p className="mt-7 max-w-[590px] text-[17px] text-[#555a56] max-[900px]:hidden">از عطر زعفران تا گرمای یک سفره ایرانی؛ تجربه‌ای آرام، دقیق و به‌یادماندنی در قلب سعادت‌آباد.</p>
              <div className="mt-[34px] flex items-center gap-[30px] max-[900px]:mt-2.5 max-[900px]:gap-5">
                <a className="inline-flex min-h-12 items-center justify-center gap-3.5 bg-ink px-6 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#174531] max-[900px]:min-h-[46px] max-[900px]:px-[18px] max-[900px]:text-[13px] [&_svg]:size-[17px]" href="#contact">رفتن به صفحه منو <ArrowLeft /></a>
              </div>
            </div>

            <div className="relative z-[1] aspect-square w-[min(540px,44vw)] justify-self-center drop-shadow-[0_26px_20px_rgb(9_32_21/0.2)] max-[900px]:row-start-2 max-[900px]:mt-[-5px] max-[900px]:w-[min(356px,92vw)] max-[420px]:w-[92vw]">
              <p
                  className="absolute top-[18%] end-[92%] z-[2] rotate-[-8deg]
                    font-serif text-[10px] leading-[1.2] tracking-[0.05em] text-[#73776f]
                    [direction:ltr]
                    max-[900px]:top-[16%] max-[900px]:right-auto max-[900px]:left-[3%] max-[900px]:text-[8px]
                    w-[105px] h-[105px] flex items-center justify-center text-center rounded-full
                    bg-white/20 backdrop-blur-md
                    border border-white/40
                    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    ring-1 ring-white/20"
                  lang="en"
              >
                KHANCHI
                <br />
                RESTAURANT
              </p>
              <Image
                className="object-contain"
                src="/assets/images/hero-kebab.png"
                alt="چلوکباب ایرانی با برنج زعفرانی و گوجه کبابی"
                fill
                priority
                sizes="(max-width: 767px) 90vw, 48vw"
              />
            </div>
          </div>

          <div className="grid min-h-[125px] grid-cols-3 items-center bg-mist px-[max(5vw,64px)] text-[13px] text-[#5d635f] [direction:ltr] max-[900px]:min-h-[73px] max-[900px]:grid-cols-1 max-[900px]:px-5 max-[900px]:pb-2.5">
            <div className="grid justify-self-start text-left font-serif text-[11px] leading-tight [direction:ltr] max-[900px]:hidden"><span lang="en">@KHANCHI.RESTAURANT</span><a href="tel:+982122389873" lang="en">021-22389873</a></div>
            <p className="m-0 justify-self-center font-semibold text-ink [direction:rtl] max-[900px]:text-xs">پایین بروید <span className="me-2.5" aria-hidden="true">↓</span></p>
            <div className="grid justify-self-end text-right [direction:rtl] max-[900px]:hidden"><span>همه‌روزه</span><span>۱۱:۳۰ — ۲۴:۰۰</span></div>
          </div>
        </section>

        <section id="menu" className="bg-paper pt-[110px] pb-[57px] max-[900px]:pt-[50px] max-[900px]:pb-[30px]" aria-labelledby="menu-title">
          <div className="mx-auto grid w-[min(1248px,calc(100%-64px))] grid-cols-[0.7fr_1.3fr] items-center gap-24 [direction:ltr] max-[900px]:block max-[900px]:w-[min(calc(100%-40px),720px)] max-[900px]:text-center max-[900px]:[direction:rtl] max-[420px]:w-[calc(100%-28px)]">
            <blockquote className="relative text-end m-0 max-w-80 border-r border-gold-soft pe-[46px] text-[23px] leading-[1.9] text-[#696a64] before:absolute before:-top-10 before:right-[18px] before:font-serif before:text-[42px] before:text-gold before:content-['“'] max-[900px]:hidden">«طعمی که در نگاه اول انتخاب می‌شود و برای بار دوم، به خاطر سپرده می‌شود.»</blockquote>
            <div className="text-right [direction:rtl] max-[900px]:text-center [&>p:first-child]:max-[900px]:justify-center">
              <SectionLabel>امضای خانچی</SectionLabel>
              <h2 className="m-0 text-[clamp(40px,4.3vw,64px)] leading-[1.2] font-extrabold tracking-[-0.035em] text-ink max-[900px]:text-[clamp(32px,9vw,44px)]" id="menu-title">هر بشقاب، یک روایت کامل</h2>
              <p className="mt-[18px] text-[17px] text-muted max-[900px]:mx-auto max-[900px]:mt-3.5 max-[900px]:max-w-[330px] max-[900px]:text-sm">جهان طعم خانچی؛ از لطافت شیرین و عطر آتش تا عطر زعفران و آرامش یک نوشیدنی ایرانی.</p>
            </div>
          </div>

          <div className="menu-grid mx-auto mt-[72px] grid w-[min(1080px,calc(100%-64px))] grid-cols-3 gap-8 max-[900px]:mt-[26px] max-[900px]:w-[min(calc(100%-40px),720px)] max-[900px]:grid-cols-[1.45fr_1fr] max-[900px]:grid-rows-2 max-[900px]:gap-2.5 max-[900px]:[direction:ltr] max-[420px]:h-[470px] max-[420px]:w-[calc(100%-20px)]">
            {menuCards.map((card) => <MenuCard key={card.title} {...card} />)}
          </div>
        </section>

        <section id="story" className="bg-mist pt-[220px] pb-5 max-[900px]:pt-16 max-[900px]:pb-6" aria-labelledby="story-title">
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

          <div id="experience" className="video-placeholder mx-auto mt-[92px] aspect-[3.2] w-[min(1248px,calc(100%-64px))] overflow-hidden border border-[#214b34] max-[900px]:mt-[34px] max-[900px]:aspect-[1.66] max-[900px]:w-[calc(100%-48px)] max-[420px]:w-[calc(100%-44px)]" role="img" aria-label="جایگاه ویدیوی معرفی رستوران؛ ویدیو به‌زودی اضافه می‌شود">
            <div className="video-placeholder__frame" aria-hidden="true" />
            <span className="video-placeholder__play" aria-hidden="true" />
          </div>
          <div className="mx-auto mt-3.5 flex w-[min(1248px,calc(100%-64px))] justify-between text-xs text-[#6d726d] [direction:ltr] max-[900px]:mt-2.5 max-[900px]:w-[calc(100%-48px)] max-[900px]:text-[10px] max-[420px]:w-[calc(100%-44px)] [&>span:first-child]:max-[900px]:hidden [&>span:last-child]:max-[900px]:ml-auto">
            <span lang="en">THE ART OF PERSIAN HOSPITALITY</span>
            <span>اصالت در طعم، ظرافت در میزبانی</span>
          </div>
        </section>

        <section id="gallery" className="gallery-pattern relative overflow-hidden bg-mist pt-[75px] pb-2 max-[900px]:pt-11 max-[900px]:pb-[30px]" aria-labelledby="gallery-title">
          <div className="mx-auto grid w-[min(1248px,calc(100%-64px))] grid-cols-[1fr_1.05fr] items-center gap-[100px] [direction:ltr] max-[900px]:block max-[900px]:w-[min(calc(100%-40px),720px)] max-[900px]:text-right max-[900px]:[direction:rtl] max-[420px]:w-[calc(100%-28px)]">
            <div className="[direction:rtl] max-[900px]:hidden">
              <p className="m-0 max-w-[520px] text-[17px] leading-[1.9] text-muted">پشت هر قاب، ترکیبی از مواد تازه، رنگ‌های ایرانی و دقتی‌ست که پیش از اولین لقمه دیده می‌شود.</p>
              <span className="mt-3 block font-serif text-xs tracking-[0.03em] text-gold" lang="en">THE ART OF PERSIAN HOSPITALITY</span>
            </div>
            <div className="[direction:rtl] [&>p:first-child]:max-[900px]:justify-start">
              <SectionLabel>لحظه‌های خانچی</SectionLabel>
              <h2 className="m-0 text-[clamp(40px,4.3vw,64px)] leading-[1.2] font-extrabold tracking-[-0.035em] text-ink max-[900px]:text-[clamp(32px,9vw,44px)]" id="gallery-title">جزئیاتی که اشتها را بیدار<br />می‌کنند</h2>
            </div>
          </div>

          <div className="mosaic relative z-[2] mx-auto mt-[55px] grid w-[min(1248px,calc(100%-64px))] grid-cols-3 grid-rows-2 [direction:ltr] max-[900px]:mt-8 max-[900px]:w-[calc(100%-44px)] max-[420px]:w-[calc(100%-44px)]">
            <article className="mosaic-copy mosaic-copy--one flex aspect-[1.38] min-w-0 flex-col justify-center bg-forest-deep p-[clamp(26px,3.2vw,54px)] text-white [direction:rtl] after:mt-6 after:h-px after:w-[38px] after:bg-gold after:content-[''] max-[900px]:aspect-[0.9] max-[900px]:p-[13px_10px] max-[900px]:after:mt-2 max-[900px]:after:w-6">
              <span className="font-serif text-[11px] leading-[1.2] tracking-[0.05em] text-gold-soft [direction:ltr] max-[900px]:text-[6px]" lang="en">KHANCHI / 01</span>
              <h3 className="mt-6 mb-3.5 text-[clamp(25px,2.5vw,39px)] leading-[1.35] font-semibold max-[900px]:my-[8px_6px] max-[900px]:text-[clamp(14px,4.4vw,21px)]">اصالت در طعم</h3>
              <p className="m-0 text-[clamp(12px,1.1vw,15px)] text-white/80 max-[900px]:line-clamp-3 max-[900px]:text-[8px] max-[900px]:leading-[1.65]">از انتخاب مواد اولیه و شیوه پخت تا لحظه‌ای که غذا با احترام پیش روی مهمان قرار می‌گیرد.</p>
            </article>
            <div className="mosaic-image mosaic-image--one relative aspect-[1.38] min-w-0 overflow-hidden max-[900px]:aspect-[0.9]"><Image className="object-cover transition-transform duration-700 hover:scale-105" src="/assets/images/gallery-authenticity.png" alt="خوراک ایرانی با نان، سبزی و مخلفات" fill sizes="(max-width: 640px) 34vw, 33vw" /></div>
            <article className="mosaic-copy mosaic-copy--two flex aspect-[1.38] min-w-0 flex-col justify-center bg-forest-deep p-[clamp(26px,3.2vw,54px)] text-white [direction:rtl] after:mt-6 after:h-px after:w-[38px] after:bg-gold after:content-[''] max-[900px]:aspect-[0.9] max-[900px]:p-[13px_10px] max-[900px]:after:mt-2 max-[900px]:after:w-6">
              <span className="font-serif text-[11px] leading-[1.2] tracking-[0.05em] text-gold-soft [direction:ltr] max-[900px]:text-[6px]" lang="en">KHANCHI / 03</span>
              <h3 className="mt-6 mb-3.5 text-[clamp(25px,2.5vw,39px)] leading-[1.35] font-semibold max-[900px]:my-[8px_6px] max-[900px]:text-[clamp(14px,4.4vw,21px)]">ظرافت در میزبانی</h3>
              <p className="m-0 text-[clamp(12px,1.1vw,15px)] text-white/80 max-[900px]:line-clamp-3 max-[900px]:text-[8px] max-[900px]:leading-[1.65]">پشت هر قاب، ترکیبی از مواد تازه، رنگ‌های ایرانی و دقتی‌ست که پیش از اولین لقمه دیده می‌شود.</p>
            </article>
            <div className="mosaic-image mosaic-image--two relative aspect-[1.38] min-w-0 overflow-hidden max-[900px]:aspect-[0.9]"><Image className="object-cover transition-transform duration-700 hover:scale-105" src="/assets/images/gallery-story.png" alt="دلمه برگ مو با زرشک و مخلفات ایرانی" fill sizes="(max-width: 640px) 34vw, 33vw" /></div>
            <article className="mosaic-copy mosaic-copy--three flex aspect-[1.38] min-w-0 flex-col justify-center bg-forest-deep p-[clamp(26px,3.2vw,54px)] text-white [direction:rtl] after:mt-6 after:h-px after:w-[38px] after:bg-gold after:content-[''] max-[900px]:aspect-[0.9] max-[900px]:p-[13px_10px] max-[900px]:after:mt-2 max-[900px]:after:w-6">
              <span className="font-serif text-[11px] leading-[1.2] tracking-[0.05em] text-gold-soft [direction:ltr] max-[900px]:text-[6px]" lang="en">KHANCHI / 02</span>
              <h3 className="mt-6 mb-3.5 text-[clamp(25px,2.5vw,39px)] leading-[1.35] font-semibold max-[900px]:my-[8px_6px] max-[900px]:text-[clamp(14px,4.4vw,21px)]">هر بشقاب، یک روایت کامل</h3>
              <p className="m-0 text-[clamp(12px,1.1vw,15px)] text-white/80 max-[900px]:line-clamp-3 max-[900px]:text-[8px] max-[900px]:leading-[1.65] text-start">طعمی که در نگاه اول انتخاب می‌شود و برای بار دوم، به خاطر سپرده می‌شود.</p>
            </article>
            <div className="mosaic-image mosaic-image--three relative aspect-[1.38] min-w-0 overflow-hidden max-[900px]:aspect-[0.9]"><Image className="object-cover transition-transform duration-700 hover:scale-105" src="/assets/images/gallery-hosting.png" alt="خوراک ایرانی با تخم‌مرغ و ترشی خانگی" fill sizes="(max-width: 640px) 34vw, 33vw" /></div>
          </div>
          <p className="relative z-[2] mx-auto mt-7 w-[min(1248px,calc(100%-64px))] text-left text-xs text-[#8a8983] max-[900px]:mt-2.5 max-[900px]:w-[calc(100%-44px)] max-[900px]:text-right max-[900px]:text-[7px] max-[420px]:w-[calc(100%-44px)]">تصاویر برگرفته از صفحه رسمی خانچی و هماهنگ‌شده برای هویت بصری وب‌سایت</p>
        </section>

        <section className="bg-paper pt-[115px] pb-[105px] max-[900px]:pt-[58px] max-[900px]:pb-[42px]" aria-labelledby="reviews-title">
          <div className="mx-auto w-[min(1248px,calc(100%-64px))] text-center max-[900px]:w-[min(calc(100%-40px),720px)] max-[420px]:w-[calc(100%-28px)] [&>p:first-child]:justify-center">
            <SectionLabel>نظرات مهمانان</SectionLabel>
            <h2 className="m-0 text-[clamp(40px,4.3vw,64px)] leading-[1.2] font-extrabold tracking-[-0.035em] text-ink max-[900px]:text-[clamp(32px,9vw,44px)]" id="reviews-title">خانچی، از نگاه شما</h2>
            <p className="mt-5 text-[17px] text-muted max-[900px]:hidden">نظرات شما مهمانان عزیز، مسیر خانچی را شفاف‌تر می‌کند.</p>
          </div>

          <div className="mx-auto mt-[52px] grid w-[min(1248px,calc(100%-64px))] grid-cols-3 max-[900px]:mt-[26px] max-[900px]:block max-[900px]:w-[calc(100%-48px)] max-[420px]:w-[calc(100%-24px)]">
            {reviews.map((review) => (
              <article key={review.quote} className={`min-h-[240px] flex-col items-center px-11 pt-1.5 text-center [&+article]:border-r [&+article]:border-line max-[900px]:hidden${review.active ? " flex max-[900px]:!flex max-[900px]:min-h-[250px] max-[900px]:justify-center max-[900px]:border max-[900px]:border-line max-[900px]:p-[34px_24px_24px]" : " flex"}`}>
                <span className="font-serif text-[50px] leading-none text-gold" aria-hidden="true">“</span>
                <blockquote className="mt-[18px] min-h-[58px] text-lg font-semibold text-[#65655f] max-[900px]:mt-3 max-[900px]:min-h-0 max-[900px]:text-[19px]">{review.quote}</blockquote>
                <div className="my-[14px_18px] h-px w-[180px] bg-line" aria-hidden="true" />
                <h3 className="m-0 text-lg font-semibold text-gold">{review.name}</h3>
                <p className="mt-1 mb-3.5 text-[13px] text-[#7a7973]">{review.occasion}</p>
                <div className="flex gap-0.5 text-gold [direction:ltr] [&_svg]:size-[11px]" aria-label="امتیاز پنج از پنج">
                  {Array.from({ length: 5 }, (_, index) => <StarIcon key={index} />)}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-[22px] hidden items-center justify-center gap-[9px] [direction:ltr] max-[900px]:flex" aria-hidden="true"><span className="h-0.5 w-11 bg-gold" /><i className="size-[5px] rounded-full bg-[#d7d2c9]" /><i className="size-[5px] rounded-full bg-[#d7d2c9]" /></div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
