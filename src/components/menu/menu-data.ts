import menuContent from "./menu.json";

export type Diet = "vegetarian" | "spicy";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number | null;
  category: string;
  image: string | null;
  tags: string[];
  diet: Diet[];
  needsReview?: boolean;
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

type MenuContent = {
  currency: string;
  priceUnit: number;
  categories: Array<{
    id: string;
    title: string;
    kicker: string;
    note: string;
    products: Array<Omit<MenuItem, "diet">>;
  }>;
};

const content = menuContent as unknown as MenuContent;

function isDiet(tag: string): tag is Diet {
  return tag === "vegetarian" || tag === "spicy";
}

export const menuMeta = {
  currency: content.currency,
  priceUnit: content.priceUnit,
};

export const categories: MenuCategory[] = content.categories.map(
  ({ products, ...category }) => ({
    ...category,
    items: products.map((product) => ({
      ...product,
      diet: product.tags.filter(isDiet),
    })),
  }),
);

export const allItems = categories.flatMap((category) => category.items);

export const formatPrice = (price: number) =>
  (price * menuMeta.priceUnit).toLocaleString("fa-IR");
