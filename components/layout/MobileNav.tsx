"use client";
import { House, Info, Languages, Menu, User, X } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

interface MobileNavItem {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  handleLogin: () => void;
}

export const MobileNav = ({
  open,
  onOpenChange,
  handleLogin,
}: MobileNavItem) => {
  const pathName = usePathname();

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger>
        <span className="border-none outline-none">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit bg-black/50 backdrop-blur-sm border border-green/50">
        {navItem.map((item, index) => (
          <DropdownMenuItem key={index}>
            <Link
              href={item.href}
              className={cn(
                "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300",
                pathName.endsWith(item.href) && "text-green"
              )}
            >
              {item.icon}
              <span className="text-base text-center">{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <span
            className={cn(
              "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300 cursor-pointer"
            )}
          >
            <Languages className="size-4" />
            <span className="text-base text-center">Language</span>
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span
            onClick={handleLogin}
            className={cn(
              "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300 cursor-pointer"
            )}
          >
            <User className="size-4" />
            <span className="text-base text-center">Login</span>
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
