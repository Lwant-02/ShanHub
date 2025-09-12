"use client";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Input } from "@/components/ui/input";
import { item } from "@/components/features/landing/components/Hero";

interface FilterProps {
  filter_doksu: Array<{ id: number; title: string }>;
  startIndex: number;
  endIndex: number;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Filter = ({
  filter_doksu,
  startIndex,
  endIndex,
  searchTerm,
  setSearchTerm,
}: FilterProps) => {
  const t = useTranslations("DokSu");
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
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-end text-sm text-gray-400 gap-3">
        <span>
          Showing {startIndex + 1}-{Math.min(endIndex, filter_doksu.length)} of{" "}
          {filter_doksu.length} songs
        </span>
      </div>
    </motion.div>
  );
};
