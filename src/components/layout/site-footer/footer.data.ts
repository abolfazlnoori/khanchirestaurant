import { restaurant } from "@/lib/site";

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
    lines: [{ label: restaurant.displayAddress }],
  },
  {
    title: "ساعات فعالیت",
    lines: [{ label: restaurant.openingHours }],
  },
  {
    title: "تماس",
    lines: [
      { label: restaurant.displayTelephone, href: `tel:${restaurant.telephone}` },
      { label: restaurant.displayMobile, href: `tel:${restaurant.mobile}` },
    ],
  },
  {
    title: "اینستاگرام",
    lines: [
      {
        label: restaurant.instagramHandle,
        href: restaurant.instagram,
        className: "[direction:ltr]",
        external: true,
      },
    ],
  },
] as const;
