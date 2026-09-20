import type { ReactElement, SVGProps } from 'react';

// Fine-line iconography drawn to match the landing page's restrained, editorial tone.
// All icons inherit currentColor and use a 1.5 hairline stroke.

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...props,
  };
}

/* ---------- Category icons ---------- */

export function IconStarters(p: IconProps) {
  // sprig of herbs
  return (
    <svg {...base(p)}>
      <path d="M12 21V9" />
      <path d="M12 9c0-3 2-5 5-5 0 3-2 5-5 5Z" />
      <path d="M12 13c0-2.5-1.8-4.2-4.2-4.2C7.8 11.2 9.6 13 12 13Z" />
      <path d="M12 17c0-2 1.6-3.4 3.6-3.4C15.6 15.6 14 17 12 17Z" />
    </svg>
  );
}

export function IconMains(p: IconProps) {
  // flame
  return (
    <svg {...base(p)}>
      <path d="M12 3c1 3 4 4.5 4 8.5A4 4 0 0 1 8 12c0-1.4.6-2.3 1.2-3 .2 1 .9 1.6 1.6 1.6C10.8 8.6 10 6 12 3Z" />
      <path d="M12 21a5 5 0 0 0 5-5c0-1-.2-1.8-.5-2.6" />
      <path d="M7.5 13.4A5 5 0 0 0 12 21" />
    </svg>
  );
}

export function IconBurger(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 9c0-2.8 3.6-5 8-5s8 2.2 8 5" />
      <path d="M4 9h16" />
      <path d="M4 13.5h16M5 13.5c1 1.2 2.2 1.2 3.4 0 1.2 1.2 2.4 1.2 3.6 0 1.2 1.2 2.4 1.2 3.6 0 .8.8 1.6 1 2.4.6" />
      <path d="M5 17.5h14a0 0 0 0 1 0 0 2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 17.5Z" />
    </svg>
  );
}

export function IconPizza(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 3.5c4.7 0 8.5 3.4 8.5 3.4L12 20.5 3.5 6.9S7.3 3.5 12 3.5Z" />
      <path d="M5.4 8.2C7.2 7 9.5 6.2 12 6.2s4.8.8 6.6 2" />
      <circle cx="10" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="13.6" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="15" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconDrinks(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M6 4h12l-1.6 5.4A5 5 0 0 1 12 13a5 5 0 0 1-4.4-3.6Z" />
      <path d="M12 13v6M8.5 20h7" />
      <path d="M9 7.5h6" />
    </svg>
  );
}

export function IconDessert(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M8 10a4 4 0 0 1 8 0" />
      <path d="M7.5 10h9L12 20.5 7.5 10Z" />
      <path d="M9.5 14h5" />
    </svg>
  );
}

export const categoryIcon: Record<string, (p: IconProps) => ReactElement> = {
  'stews-without-rice': IconMains,
  rice: IconDessert,
  'rice-and-stews': IconMains,
  traditional: IconStarters,
  kebabs: IconMains,
  starters: IconStarters,
  salads: IconStarters,
  condiments: IconDessert,
  'tea-and-herbal': IconDrinks,
  mains: IconMains,
  burger: IconBurger,
  pizza: IconPizza,
  drinks: IconDrinks,
  dessert: IconDessert,
};

/* ---------- UI icons ---------- */

export function IconSearch(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.6-3.6" />
    </svg>
  );
}

export function IconSliders(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="8" cy="17" r="2" />
    </svg>
  );
}

export function IconPlus(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconCartPlus(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M3 4h2l1.6 10.2a2 2 0 0 0 2 1.7h7.9a2 2 0 0 0 1.9-1.4L20 8H7" />
      <path d="M13 8V4M11 6h4" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </svg>
  );
}

export function IconMinus(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconTrash(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13" />
    </svg>
  );
}

export function IconClose(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconHome(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
    </svg>
  );
}

export function IconMenuBook(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 5c2.5-1 5.5-1 8 .5 2.5-1.5 5.5-1.5 8-.5v13c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5V5Z" />
      <path d="M12 5.5V19" />
    </svg>
  );
}

export function IconReceipt(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M6 3v18l2-1.2L10 21l2-1.2L14 21l2-1.2L18 21V3l-2 1.2L14 3l-2 1.2L10 3 8 4.2 6 3Z" />
      <path d="M9 8h6M9 12h6" />
    </svg>
  );
}

export function IconLeaf(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M20 4C10 4 5 9 5 16c0 1.5.4 2.8 1 4C7 13 12 9 18 8c-4 2-7 5-8 11" />
    </svg>
  );
}

export function IconChili(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M6 18c6 1 11-3 12-10" />
      <path d="M18 8c0-2 .5-3 2-4-2.2-.3-3.4.6-4 2" />
      <path d="M6 18c-1.5 0-2.5-1-2.5-2.5S5 13 6 14s2 .5 2 2-1 2-2 2Z" />
    </svg>
  );
}

export function IconStar(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor" stroke="none">
      <path d="M12 3.5l2.4 5 5.5.7-4 3.8 1 5.4L12 15.8 7.1 18.4l1-5.4-4-3.8 5.5-.7 2.4-5Z" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M5 12.5 10 17l9-10" />
    </svg>
  );
}

export function IconChevronLeft(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function IconNote(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M5 4h14v11l-4 5H5V4Z" />
      <path d="M15 20v-5h4M8 9h8M8 13h5" />
    </svg>
  );
}
