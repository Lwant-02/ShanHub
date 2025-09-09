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
  X,
} from "lucide-react";

import { useSession } from "@/lib/auth-client";
import { useAuthStore } from "@/store/auth.store";
import { cn } from "@/lib/utils";
import { CustomButton } from "@/components/CustomButton";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
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
          <div className="grid gap-4 grid-cols-2 mt-5 place-items-start w-80 mx-auto">
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
        <DrawerFooter>
          <CustomButton
            text="Close"
            variant="secondary"
            type="button"
            icon={<X className="w-4 h-4" />}
            onClick={() => onOpenChange(false)}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
