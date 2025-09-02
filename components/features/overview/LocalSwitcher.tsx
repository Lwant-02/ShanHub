"use client";
import { Languages } from "lucide-react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

interface LocalSwitcherProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const LocalSwitcher = ({ open, onOpenChange }: LocalSwitcherProps) => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [engChecked, setEngChecked] = useState<Checked>(locale === "en");
  const [shChecked, setShChecked] = useState<Checked>(locale === "shn");

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return; // no change
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.replace(segments.join("/"));
  };

  const handleShanChange = (checked: boolean) => {
    setShChecked(checked);
    setEngChecked(!checked);
    if (checked) switchLocale("shn");
  };

  const handleEngChange = (checked: boolean) => {
    setEngChecked(checked);
    setShChecked(!checked);
    if (checked) switchLocale("en");
  };
  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger>
        <span
          className={cn(
            "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300 cursor-pointer"
          )}
        >
          <Languages className="size-4" />
          <span className="text-base text-center">{t("language")}</span>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/50 min-w-28 backdrop-blur-sm border border-green/20 rounded-2xl">
        <DropdownMenuCheckboxItem
          checked={engChecked}
          onCheckedChange={handleEngChange}
          className={cn(
            "hover:text-green transition-colors duration-300 cursor-pointer",
            engChecked && "text-green"
          )}
        >
          <span className="text-base text-center capitalize">English</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={shChecked}
          onCheckedChange={handleShanChange}
          className={cn(
            "hover:text-green transition-colors duration-300 cursor-pointer",
            shChecked && "text-green"
          )}
        >
          <span className="text-base text-center capitalize">Shan</span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
