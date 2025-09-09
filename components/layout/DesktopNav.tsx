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

  const handleLogin = () => {
    setIsLoginDialogOpen(true);
  };

  return (
    <div className="xl:flex hidden justify-center items-center gap-7">
      <Link
        href="/dashboard"
        className={cn(
          "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300",
          pathName.endsWith("/dashboard") && "text-green"
        )}
      >
        <LayoutDashboard className="size-4" />
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
