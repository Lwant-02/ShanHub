import type { Metadata } from "next";
import { Noto_Serif_Myanmar } from "next/font/google";
import "./globals.css";

const notoSerifMyanmar = Noto_Serif_Myanmar({
  variable: "--font-noto-serif-myanmar",
  subsets: ["myanmar"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ShanHub | Welcome to ShanHub",
  description: "ShanHub is a platform for shan apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerifMyanmar.variable} antialiased`}>
        <div className="min-h-screen w-full bg-[#020617] relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
            }}
          />
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
