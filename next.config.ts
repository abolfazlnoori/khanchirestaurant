import type { NextConfig } from "next";

const allowIndexing = process.env.SITE_ALLOW_INDEXING !== "false";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24,
  },
  async headers() {
    const headers = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
    ];

    if (!allowIndexing) {
      headers.push({
        key: "X-Robots-Tag",
        value: "noindex, nofollow, noarchive, nosnippet",
      });
    }

    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
