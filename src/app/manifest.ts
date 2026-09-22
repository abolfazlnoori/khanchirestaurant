import type { MetadataRoute } from "next";
import { restaurant } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${restaurant.name} | ${restaurant.latinName}`,
    short_name: restaurant.name,
    description: restaurant.shortDescription,
    lang: "fa-IR",
    dir: "rtl",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#002b17",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
