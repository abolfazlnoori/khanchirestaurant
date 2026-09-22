import { categories } from "@/components/menu/menu-data";
import { absoluteUrl, restaurant } from "@/lib/site";

const restaurantId = `${absoluteUrl("/")}#restaurant`;
const websiteId = `${absoluteUrl("/")}#website`;
const menuId = `${absoluteUrl("/menu")}#menu`;

export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": restaurantId,
      name: restaurant.name,
      alternateName: restaurant.latinName,
      description: restaurant.description,
      url: absoluteUrl("/"),
      image: absoluteUrl(restaurant.heroImage),
      telephone: restaurant.telephone,
      priceRange: "۲۱۰٬۰۰۰ تا ۶٬۸۰۰٬۰۰۰ تومان",
      servesCuisine: restaurant.cuisine,
      address: {
        "@type": "PostalAddress",
        ...restaurant.address,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "11:30",
          closes: "24:00",
        },
      ],
      hasMenu: { "@id": menuId },
      sameAs: [restaurant.instagram],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: absoluteUrl("/"),
      name: `${restaurant.name} | ${restaurant.latinName}`,
      inLanguage: "fa-IR",
      publisher: { "@id": restaurantId },
    },
  ],
} as const;

export const menuJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "خانه",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "منوی رستوران خانچی",
          item: absoluteUrl("/menu"),
        },
      ],
    },
    {
      "@type": "Menu",
      "@id": menuId,
      name: "منوی رستوران خانچی",
      description:
        "منوی غذاهای ایرانی رستوران خانچی شامل کباب، خورشت، پلو، غذای سنتی، پیش‌غذا، سالاد، چاشنی و دمنوش.",
      url: absoluteUrl("/menu"),
      inLanguage: "fa-IR",
      mainEntityOfPage: absoluteUrl("/menu"),
      provider: {
        "@type": "Restaurant",
        "@id": restaurantId,
        name: restaurant.name,
        url: absoluteUrl("/"),
      },
      hasMenuSection: categories.map((category) => ({
        "@type": "MenuSection",
        name: category.title,
        description: category.note,
        hasMenuItem: category.items.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          ...(item.description ? { description: item.description } : {}),
          ...(item.image ? { image: absoluteUrl(item.image) } : {}),
          ...(item.price !== null
            ? {
                offers: {
                  "@type": "Offer",
                  price: item.price * 10,
                  priceCurrency: "IRR",
                  availability: item.unavailable
                    ? "https://schema.org/OutOfStock"
                    : "https://schema.org/InStock",
                },
              }
            : {}),
        })),
      })),
    },
  ],
} as const;
