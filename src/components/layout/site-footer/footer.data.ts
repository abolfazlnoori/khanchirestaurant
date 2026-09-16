export type FooterLink = {
  label: string;
  href?: string;
  className?: string;
  external?: boolean;
};

export type FooterInfoItem = {
  title: string;
  lines: readonly FooterLink[];
};

export const footerInfoItems: readonly FooterInfoItem[] = [
  {
    title: "موقعیت",
    lines: [{ label: "سعادت‌آباد، تهران" }],
  },
  {
    title: "ساعات فعالیت",
    lines: [{ label: "همه‌روزه ۱۱:۳۰ تا ۲۴:۰۰" }],
  },
  {
    title: "تماس",
    lines: [
      { label: "۰۲۱-۲۲۳۸ ۹۸۷۳", href: "tel:+982122389873" },
      { label: "۰۹۰۳ ۲۸۰ ۵۱۴۷", href: "tel:+989032805147" },
    ],
  },
  {
    title: "اینستاگرام",
    lines: [
      {
        label: "@khanchi.restaurant",
        href: "https://instagram.com/khanchi.restaurant",
        className: "[direction:ltr]",
        external: true,
      },
    ],
  },
] as const;
