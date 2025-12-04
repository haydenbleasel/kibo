import { withLogtail } from "@logtail/next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.logo.dev",
      },
    ],
  },

  // biome-ignore lint/suspicious/useAwait: "headers is async"
  async headers() {
    return [
      {
        source: "/r/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET" },
        ],
      },
    ];
  },

  // biome-ignore lint/suspicious/useAwait: "redirects is async"
  async redirects() {
    return [
      {
        source: "/overview",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/setup",
        destination: "/docs/setup",
        permanent: true,
      },
      {
        source: "/sponsors",
        destination: "/docs/sponsors",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/components/avatar-stack",
        permanent: false,
      },
      {
        source: "/blocks",
        destination: "/blocks/collaborative-canvas",
        permanent: false,
      },
      {
        source: "/ai",
        destination: "https://ai-sdk.dev/elements/components?ref=kibo",
        permanent: true,
      },
      {
        source: "/ai/:slug*",
        destination: "https://ai-sdk.dev/elements/components?ref=kibo",
        permanent: true,
      },
      {
        source: "/components/ai/:slug*",
        destination: "https://ai-sdk.dev/elements/components?ref=kibo",
        permanent: true,
      },
      {
        source: "/components/ai-:slug(.*)",
        destination: "https://ai-sdk.dev/elements/components?ref=kibo",
        permanent: true,
      },
      {
        source: "/announcement",
        destination: "/components/announcement",
        permanent: true,
      },
      {
        source: "/avatar-stack",
        destination: "/components/avatar-stack",
        permanent: true,
      },
      { source: "/banner", destination: "/components/banner", permanent: true },
      {
        source: "/calendar",
        destination: "/components/calendar",
        permanent: true,
      },
      {
        source: "/code-block",
        destination: "/components/code-block",
        permanent: true,
      },
      {
        source: "/color-picker",
        destination: "/components/color-picker",
        permanent: true,
      },
      { source: "/cursor", destination: "/components/cursor", permanent: true },
      {
        source: "/dialog-stack",
        destination: "/components/dialog-stack",
        permanent: true,
      },
      {
        source: "/dropzone",
        destination: "/components/dropzone",
        permanent: true,
      },
      { source: "/editor", destination: "/components/editor", permanent: true },
      { source: "/gantt", destination: "/components/gantt", permanent: true },
      { source: "/kanban", destination: "/components/kanban", permanent: true },
      { source: "/list", destination: "/components/list", permanent: true },
      {
        source: "/marquee",
        destination: "/components/marquee",
        permanent: true,
      },
      { source: "/pill", destination: "/components/pill", permanent: true },
      { source: "/rating", destination: "/components/rating", permanent: true },
      {
        source: "/sandbox",
        destination: "/components/sandbox",
        permanent: true,
      },
      {
        source: "/snippet",
        destination: "/components/snippet",
        permanent: true,
      },
      {
        source: "/spinner",
        destination: "/components/spinner",
        permanent: true,
      },
      { source: "/table", destination: "/components/table", permanent: true },
      { source: "/tags", destination: "/components/tags", permanent: true },
      {
        source: "/theme-switcher",
        destination: "/components/theme-switcher",
        permanent: true,
      },
      {
        source: "/components/kbd",
        destination: "https://ui.shadcn.com/docs/components/kbd",
        permanent: true,
      },
      {
        source: "/patterns",
        destination: "/patterns/accordion/form/accordion-form-1",
        permanent: false,
      },
    ];
  },
};

let nextConfig = withMDX(withLogtail({ ...config }));

if (process.env.ANALYZE === "true") {
  nextConfig = withBundleAnalyzer()(nextConfig);
}

export default nextConfig;
