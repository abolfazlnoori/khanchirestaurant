export type MenuItem = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  featured?: boolean;
};

export const menuItems: readonly MenuItem[] = [
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
