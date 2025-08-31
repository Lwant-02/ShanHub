"use client";

import { House, Info, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { LoginModal } from "../features/auth/LoginModal";
import { LocalSwitcher } from "../features/overview/LocalSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathName = usePathname();

  const [isUserScrolled, setIsUserScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsUserScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn("h-20 w-full top-0 sticky z-50", {
          "bg-black/50 backdrop-blur-sm": isUserScrolled,
        })}
      >
        <div className="flex justify-between items-center h-full max-w-6xl mx-auto xl:px-0 px-3">
          <Link href="/" className="condary text-2xl">
            ShanHub
          </Link>
          <div className="xl:flex hidden justify-center items-center gap-7">
            <Link
              href="/dashboard"
              className={cn(
                "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300",
                pathName.endsWith("/dashboard") && "text-green"
              )}
            >
              <House className="size-4" />
              <span className="text-base text-center">{t("home")}</span>
            </Link>
            <Link
              href="/about"
              className={cn(
                "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300",
                pathName.endsWith("/about") && "text-green"
              )}
            >
              <Info className="size-4" />
              <span className="text-base text-center">{t("about")}</span>
            </Link>
            <LocalSwitcher
              onOpenChange={setIsLanguageDropdownOpen}
              open={isLanguageDropdownOpen}
            />
            <button
              type="button"
              onClick={handleLogin}
              className={cn(
                "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300 cursor-pointer"
              )}
            >
              <User className="size-4" />
              <span className="text-base text-center">{t("login")}</span>
            </button>
          </div>
          <div className="xl:hidden flex justify-center items-center">
            <MobileNav
              handleLogin={handleLogin}
              open={isMobileNavOpen}
              onOpenChange={setIsMobileNavOpen}
            />
          </div>
        </div>
      </motion.nav>

      <LoginModal open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
    </>
  );
}
