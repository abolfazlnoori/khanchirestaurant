import type { MetadataRoute } from "next";
import { absoluteUrl, allowIndexing, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return {
      rules: { userAgent: "*", disallow: "/" },
      host: siteUrl.origin,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl.origin,
  };
}
