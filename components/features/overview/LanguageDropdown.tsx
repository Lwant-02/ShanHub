import { Languages } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface LanguageDropdownProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LanguageDropdown = ({
  open,
  onOpenChange,
}: LanguageDropdownProps) => {
  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger>
        <span
          className={cn(
            "flex justify-center items-center gap-1 hover:text-green transition-colors duration-300 cursor-pointer"
          )}
        >
          <Languages className="size-4" />
          <span className="text-base text-center">Language</span>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/50 min-w-12 backdrop-blur-sm border border-green/50">
        {["shan", "english"].map((lang) => (
          <DropdownMenuItem
            key={lang}
            className="flex justify-start items-start gap-1 hover:text-green transition-colors duration-300 cursor-pointer"
          >
            <span className="text-base text-center capitalize">{lang}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
