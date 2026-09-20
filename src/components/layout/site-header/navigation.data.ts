export const navigationItems = [
  { id: "home", href: "/", label: "خانه" },
  { id: "menu", href: "/menu", label: "منو" },
] as const;

export type NavigationItemId = (typeof navigationItems)[number]["id"];
