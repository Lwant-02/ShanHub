import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "ShanHub | Welcome to ShanHub",
  description: "ShanHub is a platform for shan apps.",
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2b2e31",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={` antialiased`} suppressHydrationWarning={true}>
        <div className="min-h-screen w-full bg-[#020617] relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
            }}
          />
          <NextIntlClientProvider messages={messages}>
            <main className="relative z-10 h-full w-full">
              <Navbar />
              <div className="max-w-6xl mx-auto xl:px-0 px-3 overflow-x-hidden">
                {children}
              </div>
            </main>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
