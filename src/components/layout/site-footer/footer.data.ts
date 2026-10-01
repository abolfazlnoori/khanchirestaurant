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
    lines: [
      {
        label: restaurant.displayAddress,
        href: "https://neshan.org/maps/places/db47f8544ea947304d0b15631525b6ff#c35.783-51.379-20z-0p",
        external: true,
      },
    ],
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
