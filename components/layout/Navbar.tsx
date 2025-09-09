"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { LoginDialog } from "../features/auth/LoginDialog";
import { useAuthStore } from "@/store/auth.store";
import { DesktopNav } from "./DesktopNav";
import { MobileLocalSwitcher } from "../features/overview/MobileLocalSwitcher";

export default function Navbar() {
  const pathName = usePathname();
  const ignorePage = [
    "/shn/error",
    "/en/error",
    "/shn/not-found",
    "/en/not-found",
  ];

  const { isLoginDialogOpen, setIsLoginDialogOpen } = useAuthStore();
  const [isUserScrolled, setIsUserScrolled] = useState(false);

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
          "bg-black/50 backdrop-blur-sm ": isUserScrolled,
        })}
      >
        <div className="flex justify-between items-center h-full max-w-6xl mx-auto xl:px-0 px-3">
          <Link href="/" className=" text-2xl" prefetch={true}>
            ShanHub
          </Link>
          <DesktopNav />
          <div className="xl:hidden">
            <MobileLocalSwitcher />
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
