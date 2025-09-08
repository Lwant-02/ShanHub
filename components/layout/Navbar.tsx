"use client";

import {
  Handshake,
  HeartPlus,
  House,
  Info,
  MessageCircleQuestion,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { LoginDialog } from "../features/auth/LoginDialog";
import { LocalSwitcher } from "../features/overview/LocalSwitcher";
import { useSession } from "@/lib/auth-client";
import { AccountSkeleton } from "../features/overview/AccountSkeleton";
import { AccountDropdown } from "../features/overview/AccountDropdown";
import { useAuthStore } from "@/store/auth.store";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const t = useTranslations("Navbar");
  const pathName = usePathname();
  const ignorePage = [
    "/shn/error",
    "/eng/error",
    "/shn/not-found",
    "/eng/not-found",
  ];

  const { isLoginDialogOpen, setIsLoginDialogOpen } = useAuthStore();
  const [isUserScrolled, setIsUserScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleLogin = () => {
    setIsLoginDialogOpen(true);
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

  if (ignorePage.includes(pathName)) {
    return null;
  }

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
            <Link
              href="/community"
              className={cn(
                "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300",
                pathName.endsWith("/community") && "text-green"
              )}
            >
              <Handshake className="size-4" />
              <span className="text-base text-center">{t("community")}</span>
            </Link>
            <Link
              href="/support"
              className={cn(
                "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300",
                pathName.endsWith("/support") && "text-green"
              )}
            >
              <HeartPlus className="size-4" />
              <span className="text-base text-center">{t("support")}</span>
            </Link>
            <Link
              href="/faq"
              className={cn(
                "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300",
                pathName.endsWith("/faq") && "text-green"
              )}
            >
              <MessageCircleQuestion className="size-4" />
              <span className="text-base text-center">{t("faq")}</span>
            </Link>
            <LocalSwitcher
              onOpenChange={setIsLanguageDropdownOpen}
              open={isLanguageDropdownOpen}
            />
            {isPending ? (
              <AccountSkeleton />
            ) : session?.user && !isPending ? (
              <AccountDropdown />
            ) : (
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
            )}
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

      <LoginDialog
        open={isLoginDialogOpen}
        onOpenChange={setIsLoginDialogOpen}
      />
    </>
  );
}
