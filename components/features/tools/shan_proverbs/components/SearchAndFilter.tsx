"use client";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { item } from "@/components/features/landing/components/Hero";

interface SearchAndFilterProps {
  categories: string[];
  filteredProverbs: Array<Proverb & { category: string }>;
  startIndex: number;
  endIndex: number;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchAndFilter = ({
  categories,
  filteredProverbs,
  startIndex,
  endIndex,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
}: SearchAndFilterProps) => {
  const t = useTranslations("ShanProverbs");
  return (
    <motion.div variants={item} className="space-y-4">
      <div className="flex flex-col sm:flex-row xl:gap-4 gap-3 justify-end">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder={t("search_placeholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 xl:w-96 border-blue-500/50 text-blue-400 focus:ring-1! focus:ring-blue-500/80 rounded-lg"
          />
        </div>

        {/* Category Filter */}
        <div className="xl:w-fit w-full flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-blue-500/50 text-blue-400 w-44 cursor-pointer rounded-lg"
              >
                {selectedCategory === "all" ? (
                  <span className="text-blue-400 flex justify-center items-center ">
                    {t("all_proverbs")}
                  </span>
                ) : (
                  <span className="text-blue-400">
                    {t("proverb")} - {selectedCategory}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black/90 border-blue-500/20 w-44">
              <DropdownMenuItem
                onClick={() => setSelectedCategory("all")}
                className="text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 cursor-pointer"
              >
                <span className="text-blue-400">{t("all_proverbs")}</span>
              </DropdownMenuItem>
              {categories.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onClick={() => setSelectedCategory(option)}
                  className="text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 cursor-pointer"
                >
                  {t("proverb")} -{" "}
                  <span className="text-blue-400">{option}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-end text-sm text-gray-400 gap-3">
        <span>
          Showing {startIndex + 1}-{Math.min(endIndex, filteredProverbs.length)}{" "}
          of {filteredProverbs.length} proverbs
        </span>
        {selectedCategory !== "all" && (
          <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/20 text-purple-300 px-2.5 py-0.5 text-xs font-semibold">
            {t("proverb")} : {selectedCategory}
          </span>
        )}
      </div>
    </motion.div>
  );
};
