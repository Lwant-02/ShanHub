"use client";

import { House, Info, Languages, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { LoginModal } from "../features/auth/LoginModal";

export const navItem = [
  {
    label: "ၼႃႈႁိူၼ်း",
    href: "/dashboard",
    icon: <House className="size-4" />,
  },
  {
    label: "လွင်ႈႁဝ်းၶႃႈ",
    href: "/about",
    icon: <Info className="size-4" />,
  },
];

export default function Navbar() {
  const pathName = usePathname();
  const [isUserScrolled, setIsUserScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
            {navItem.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300",
                  pathName.endsWith(item.href) && "text-green"
                )}
              >
                {item.icon}
                <span className="text-base text-center">{item.label}</span>
              </Link>
            ))}
            <button
              type="button"
              className={cn(
                "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300 cursor-pointer"
              )}
            >
              <Languages className="size-4" />
              <span className="text-base text-center">Language</span>
            </button>
            <button
              type="button"
              onClick={handleLogin}
              className={cn(
                "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300 cursor-pointer"
              )}
            >
              <User className="size-4" />
              <span className="text-base text-center">Login</span>
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
