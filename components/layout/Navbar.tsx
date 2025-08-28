"use client";

import { cn } from "@/lib/utils";
import { House, Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItem = [
  {
    label: "ၼႃႈႁိူၼ်း",
    href: "/home",
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

  return (
    <nav className="h-20 w-full top-0 sticky z-50">
      <div className="flex justify-between items-center h-full max-w-6xl mx-auto xl:px-0 px-3">
        <Link href="/" className="font-secondary text-2xl">
          ShanHub
        </Link>
        <div className="flex justify-center items-center gap-7">
          {navItem.map((item) => (
            <Link
              key={item.href}
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
        </div>
      </div>
    </nav>
  );
}
