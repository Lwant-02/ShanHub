import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  Handshake,
  HeartPlus,
  Info,
  LayoutDashboard,
  MessageCircleQuestion,
  User,
} from "lucide-react";

import { useSession } from "@/lib/auth-client";
import { useAuthStore } from "@/store/auth.store";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { AccountDropdown } from "./AccountDropdown";
import { AccountSkeleton } from "./AccountSkeleton";

interface MobileDrawerProps {
  onOpenChange: (open: boolean) => void;
  open: boolean;
}

export const MobileDrawer = ({ onOpenChange, open }: MobileDrawerProps) => {
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
      label: t("about"),
      href: "/about",
      icon: Info,
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
  ];

  const handleLogin = () => {
    setIsLoginDialogOpen(true);
  };
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="top">
      <DrawerContent className="bg-black/50 backdrop-blur-sm border border-green/20 xl:hidden ">
        <DrawerHeader>
          <DrawerTitle className="text-2xl opacity-50">ShanHub</DrawerTitle>
          <DrawerDescription className="sr-only">
            This is the navigation for ShanHub.
          </DrawerDescription>
          <div className="grid gap-5 grid-cols-2 mt-5 place-items-start w-64 mx-auto">
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
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};
