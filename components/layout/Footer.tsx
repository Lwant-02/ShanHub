"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import AnimateOnview from "../AnimateOnview";

export const Footer = () => {
  const t = useTranslations("HomePage.Footer");
  const year = new Date().getFullYear();

  const links = [
    { label: t("dashboard"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("donate"), href: "/donate" },
    { label: t("community"), href: "/community" },
  ];
  const terms_policy = [
    { label: t("terms_of_service"), href: "/terms-of-service" },
    { label: t("privacy_policy"), href: "/privacy-policy" },
  ];
  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <AnimateOnview>
          <div className="grid xl:grid-cols-3 gap-4">
            <div className="text-start">
              <h3 className="text-3xl py-1 font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                ShanHub
              </h3>
              <p className="text-gray-400 mb-4 max-w-lg text-lg">
                {t("content")}
              </p>
              <p className="text-gray-400 mb-4 max-w-lg text-lg">
                {t("love_text")}
              </p>
            </div>
            <div className="text-start">
              <h3 className="text-3xl py-1 font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                {t("quick_links")}
              </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-green">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-start">
              <h3 className="text-3xl py-1 leading-snug font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                {t("terms_and_conditions")}
              </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                {terms_policy.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-green">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateOnview>
        <AnimateOnview>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p className="text-lg">
              &copy; {year} ShanHub. All rights reserved.
            </p>
          </div>
        </AnimateOnview>
      </div>
    </footer>
  );
};
