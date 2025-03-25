/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  pageExtensions: ["page.tsx", "page.jsx", "page.js", "page.ts"],
};
export default nextConfig;
