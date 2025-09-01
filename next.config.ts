import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withPWAInit from "next-pwa";

const withNextIntl = createNextIntlPlugin();

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  fallbacks: {
    document: "/offline.html",
    image: "/offline.html",
    audio: "/offline.html",
    video: "/offline.html",
    font: "/offline.html",
  },
});

const baseConfig: NextConfig = {
  reactStrictMode: true,
};

// @ts-expect-error – next-pwa uses mismatched Next.js types
export default withPWA(withNextIntl(baseConfig));
