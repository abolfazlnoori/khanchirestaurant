// Khanchi menu — content model for the refined menu page.
// Prices are in thousands of Toman (e.g. 240 → ۲۴۰٬۰۰۰ تومان) so totals stay simple.

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&h=680&fit=crop&auto=format&q=80`;

export type Diet = 'vegetarian' | 'spicy';

export type MenuItem = {
  id: string;
  name: string;
  latin: string;
  description: string;
  price: number;
  image: string;
  diet: Diet[];
  popular?: boolean;
  unavailable?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  kicker: string;
  note: string;
  items: MenuItem[];
};

export const categories: MenuCategory[] = [
  {
    id: 'starters',
    title: 'پیش‌غذا',
    kicker: 'STARTERS • SHARE',
    note: 'برای بیدار کردن ذائقه',
    items: [
      {
        id: 'kashk-bademjan',
        name: 'کشک بادمجان دودی',
        latin: 'Smoked Kashk-e Bademjan',
        description: 'بادمجان کبابی روی زغال، کشک محلی، پیازداغ و نعنای داغ.',
        price: 240,
        image: U('1591120583691-49d2741e55da'),
        diet: ['vegetarian'],
        popular: true,
      },
      {
        id: 'mirza-ghasemi',
        name: 'میرزاقاسمی',
        latin: 'Mirza Ghasemi',
        description: 'بادمجان دودی، سیر تازه، گوجه و تخم‌مرغ محلی گیلانی.',
        price: 260,
        image: U('1604741333810-0ef6017256da'),
        diet: ['vegetarian'],
      },
      {
        id: 'shirazi',
        name: 'سالاد شیرازی',
        latin: 'Shirazi Salad',
        description: 'خیار، گوجه و پیاز خردشده با آبغوره و سماق کوهی.',
        price: 190,
        image: U('1532091710512-26fd3b2dcf16'),
        diet: ['vegetarian'],
      },
      {
        id: 'olives',
        name: 'زیتون پرورده',
        latin: 'Marinated Olives',
        description: 'زیتون با گردو، انار، رب انار و گیاهان معطر تازه.',
        price: 210,
        image: U('1584500122594-823a867f1a56'),
        diet: ['vegetarian'],
      },
    ],
  },
  {
    id: 'mains',
    title: 'غذای اصلی',
    kicker: 'SIGNATURE • FIRE',
    note: 'روی آتش زغال و برنج دم‌کشیده',
    items: [
      {
        id: 'soltani',
        name: 'چلوکباب سلطانی',
        latin: 'Soltani Platter',
        description: 'یک سیخ کوبیده و یک سیخ برگ ممتاز، کره و زعفران.',
        price: 680,
        image: U('1719670712556-638018bd8238'),
        diet: [],
        popular: true,
      },
      {
        id: 'joojeh',
        name: 'جوجه‌کباب زعفرانی',
        latin: 'Saffron Chicken Kebab',
        description: 'سینهٔ مرغ خوابانده در زعفران و لیمو، کبابی و آبدار.',
        price: 490,
        image: U('1643381360653-0eb1506da051'),
        diet: [],
      },
      {
        id: 'ghormeh',
        name: 'قورمه‌سبزی خانگی',
        latin: 'Ghormeh Sabzi',
        description: 'سبزی معطر سرخ‌شده، لوبیا، لیمو عمانی و گوشت گوسفند.',
        price: 430,
        image: U('1645619247262-561da2f5b986'),
        diet: [],
      },
      {
        id: 'baghali',
        name: 'باقالی‌پلو با ماهیچه',
        latin: 'Baghali Polo & Lamb Shank',
        description: 'باقلا و شوید تازه، ماهیچهٔ آرام‌پخته با زعفران.',
        price: 610,
        image: U('1643381362115-3c2336d7f2c0'),
        diet: [],
        popular: true,
      },
    ],
  },
  {
    id: 'burger',
    title: 'برگر',
    kicker: 'GRILL • SMASH',
    note: 'گوشت تازهٔ چرخ‌شده، نان بریوش',
    items: [
      {
        id: 'khanchi-burger',
        name: 'برگر ذغالی خانچی',
        latin: 'Khanchi Charcoal Burger',
        description: 'برگر گوشت ۲۰۰ گرمی، پنیر چدار، سس مخصوص خانه.',
        price: 380,
        image: U('1651993841930-946a700c1524'),
        diet: [],
        popular: true,
      },
      {
        id: 'double-cheese',
        name: 'چیزبرگر دوبل',
        latin: 'Double Cheeseburger',
        description: 'دو لایه گوشت اسمش، پنیر دوبل، خیارشور و پیاز کاراملی.',
        price: 420,
        image: U('1585238341710-4d3ff484184d'),
        diet: [],
      },
      {
        id: 'spicy-burger',
        name: 'برگر تند مکزیکی',
        latin: 'Spicy Mexican Burger',
        description: 'گوشت گریل، فلفل خالاپینو، سس چیپوتله و پنیر پپرجک.',
        price: 390,
        image: U('1611309454921-16cef3438ee0'),
        diet: ['spicy'],
      },
      {
        id: 'mushroom-burger',
        name: 'برگر قارچ و پنیر',
        latin: 'Mushroom Swiss',
        description: 'برگر گیاهی قارچ، پنیر سوئیسی و سس سیر گریل‌شده.',
        price: 350,
        image: U('1687764628150-1dc8afa7ba52'),
        diet: ['vegetarian'],
        unavailable: true,
      },
    ],
  },
  {
    id: 'pizza',
    title: 'پیتزا',
    kicker: 'STONE • BAKED',
    note: 'خمیر تخمیر طولانی، فر سنگی',
    items: [
      {
        id: 'margherita',
        name: 'پیتزا مارگاریتا',
        latin: 'Margherita',
        description: 'سس گوجهٔ تازه، موزارلای بوفالو و ریحان معطر.',
        price: 320,
        image: U('1587085416963-22efba033dd5'),
        diet: ['vegetarian'],
      },
      {
        id: 'prosciutto',
        name: 'پیتزا پروشوتو',
        latin: 'Prosciutto & Rocket',
        description: 'ژامبون خشک‌شده، موزارلا، روکولا و پارمزان رنده‌شده.',
        price: 410,
        image: U('1762922425226-9411194abb68'),
        diet: [],
        popular: true,
      },
      {
        id: 'khanchi-pizza',
        name: 'پیتزا مخصوص خانچی',
        latin: 'Khanchi Special',
        description: 'ترکیب گوشت و قارچ، فلفل دلمه‌ای و پنیر دودی.',
        price: 440,
        image: U('1717883235373-ef10b2a745a3'),
        diet: [],
      },
    ],
  },
  {
    id: 'drinks',
    title: 'نوشیدنی',
    kicker: 'APERITIF • NIGHT',
    note: 'همراهی‌ای دلنشین برای طعم‌ها',
    items: [
      {
        id: 'beh-limu',
        name: 'شربت به‌لیمو',
        latin: 'Quince & Lime Cooler',
        description: 'شربت خانگی به و لیموی تازه با یخ خردشده.',
        price: 140,
        image: U('1695490454828-f8df9109da43'),
        diet: ['vegetarian'],
      },
      {
        id: 'mint-lemonade',
        name: 'لیموناد نعنا',
        latin: 'Mint Lemonade',
        description: 'لیموی تازه، نعنای کوهی و کمی عرق بیدمشک.',
        price: 130,
        image: U('1651993737174-6890c1daef5b'),
        diet: ['vegetarian'],
        popular: true,
      },
      {
        id: 'saffron-tea',
        name: 'دمنوش زعفران و هل',
        latin: 'Saffron Cardamom Infusion',
        description: 'دمنوش گرم زعفران، هل سبز و کمی عسل طبیعی.',
        price: 120,
        image: U('1575596510825-f748919a2bf7'),
        diet: ['vegetarian'],
      },
      {
        id: 'sekanjabin',
        name: 'شربت سکنجبین',
        latin: 'Sekanjabin',
        description: 'ترکیب کهن سرکه و عسل، با خیار و نعنای تازه.',
        price: 130,
        image: U('1513558003720-343f3a99d97b'),
        diet: ['vegetarian'],
      },
    ],
  },
  {
    id: 'dessert',
    title: 'دسر',
    kicker: 'SWEET • CLOSE',
    note: 'پایانی آرام برای یک سفرهٔ کامل',
    items: [
      {
        id: 'bastani',
        name: 'بستنی سنتی زعفرانی',
        latin: 'Saffron Bastani',
        description: 'بستنی زعفران و گلاب با خلال پسته و تکه‌های خامه.',
        price: 180,
        image: '/assets/menu/b4852.png',
        diet: ['vegetarian'],
        popular: true,
      },
      {
        id: 'shole-zard',
        name: 'شله‌زرد گلاب',
        latin: 'Shole Zard',
        description: 'دسر برنج و زعفران با گلاب، دارچین و خلال بادام.',
        price: 150,
        image: U('1631054235886-c40c45b03f01'),
        diet: ['vegetarian'],
      },
      {
        id: 'ferni',
        name: 'پروفیترول پسته',
        latin: 'Pistachio Profiterole',
        description: 'نان خامه‌ای با سس شکلات و پستهٔ خردشدهٔ اکبری.',
        price: 190,
        image: U('1787385974171-41c7f247e8ab'),
        diet: ['vegetarian'],
      },
    ],
  },
];

export const allItems: MenuItem[] = categories.flatMap((c) =>
  c.items.map((i) => ({ ...i, categoryId: c.id } as MenuItem & { categoryId: string })),
) as MenuItem[];

// Persian-digit currency formatter.
export const formatPrice = (n: number) =>
  (n * 1000).toLocaleString('fa-IR');
