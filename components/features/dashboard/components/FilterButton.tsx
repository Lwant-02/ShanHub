import { motion } from "framer-motion";
import { Grid, List, Filter, BookOpen, Type, Heart, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { item } from "@/components/features/landing/components/Hero";

interface FilterButtonProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const FilterButton = ({
  selectedCategory,
  setSelectedCategory,
}: FilterButtonProps) => {
  const t = useTranslations("DashboardPage");
  const categories = [
    { key: "all", label: "All Apps", icon: Grid },
    {
      key: "language_tools",
      label: t("categories.language_tools"),
      icon: BookOpen,
    },
    { key: "converters", label: t("categories.converters"), icon: Type },
    { key: "cultural", label: t("categories.cultural"), icon: Heart },
    { key: "utilities", label: t("categories.utilities"), icon: Zap },
  ];
  return (
    <motion.div variants={item} className="mb-8">
      <div className="flex justify-end items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 w-72 border "
            >
              <Filter className="w-4 h-4 mr-2" />
              {categories.find((cat) => cat.key === selectedCategory)?.label}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/90 border-emerald-500/20">
            {categories.map((category) => (
              <DropdownMenuItem
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className="text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  );
};
