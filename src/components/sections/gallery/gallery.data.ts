export type GalleryItem = {
  slug: "one" | "two" | "three";
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  alignDescriptionStart?: boolean;
};

export const galleryItems: readonly GalleryItem[] = [
  {
    slug: "one",
    eyebrow: "KHANCHI / 01",
    title: "اصالت در طعم",
    description: "از انتخاب مواد اولیه و شیوه پخت تا لحظه‌ای که غذا با احترام پیش روی مهمان قرار می‌گیرد.",
    image: "/assets/images/gallery-authenticity.png",
    imageAlt: "خوراک ایرانی با نان، سبزی و مخلفات",
  },
  {
    slug: "two",
    eyebrow: "KHANCHI / 03",
    title: "ظرافت در میزبانی",
    description: "پشت هر قاب، ترکیبی از مواد تازه، رنگ‌های ایرانی و دقتی‌ست که پیش از اولین لقمه دیده می‌شود.",
    image: "/assets/images/gallery-story.png",
    imageAlt: "دلمه برگ مو با زرشک و مخلفات ایرانی",
  },
  {
    slug: "three",
    eyebrow: "KHANCHI / 02",
    title: "هر بشقاب، یک روایت کامل",
    description: "طعمی که در نگاه اول انتخاب می‌شود و برای بار دوم، به خاطر سپرده می‌شود.",
    image: "/assets/images/gallery-hosting.png",
    imageAlt: "خوراک ایرانی با تخم‌مرغ و ترشی خانگی",
    alignDescriptionStart: true,
  },
];
