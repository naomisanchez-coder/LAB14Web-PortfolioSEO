import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [48, 96, 192, 256, 384],
    remotePatterns: [
      new URL("https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80&fit=crop&auto=format"),
      new URL("https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=1200&q=80&fit=crop&auto=format"),
      new URL("https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200&q=80&fit=crop&auto=format"),
    ],
  },
  turbopack: { rules: { "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" } } },
};
export default nextConfig;
