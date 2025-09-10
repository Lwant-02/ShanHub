"use client";
import {
  Handshake,
  HeartPlus,
  Info,
  LayoutDashboard,
  MessageCircleQuestion,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useSession } from "@/lib/auth-client";
import { AccountDropdown } from "@/components/features/overview/AccountDropdown";
import { AccountSkeleton } from "@/components/features/overview/AccountSkeleton";
import { LocalSwitcher } from "@/components/features/overview/LocalSwitcher";
import { useAuthStore } from "@/store/auth.store";

export const DesktopNav = () => {
  const t = useTranslations("Navbar");
  const pathName = usePathname();
  const { data: session, isPending } = useSession();
  const { setIsLoginDialogOpen } = useAuthStore();

  const navItems = [
    {
      label: t("home"),
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: t("community"),
      href: "/community",
      icon: Handshake,
    },
    {
      label: t("support"),
      href: "/support",
      icon: HeartPlus,
    },
    {
      label: t("faq"),
      href: "/faq",
      icon: MessageCircleQuestion,
    },
    {
      label: t("about"),
      href: "/about",
      icon: Info,
    },
  ];

  const handleLogin = () => {
    setIsLoginDialogOpen(true);
  };

  return (
    <div className="xl:flex hidden justify-center items-center gap-7">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          prefetch={true}
          className={cn(
            "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300",
            pathName.endsWith(item.href) && "text-green"
          )}
        >
          <item.icon className="size-4" />
          <span className="text-base text-center">{item.label}</span>
        </Link>
      ))}
      <LocalSwitcher />
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
  );
};
