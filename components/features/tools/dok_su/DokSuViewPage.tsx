"use client";

import { useState, useEffect, useMemo } from "react";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Pagination } from "../shan_proverbs/components/Pagination";
import { container, item } from "../../landing/components/Hero";
import { Dok_Su_Titles } from "@/constant/constant";
import { Filter } from "./components/Filter";
import { DokSuCard } from "./components/DokSuCard";
import { Header } from "./components/Header";

const ITEMS_PER_PAGE = 10;

export const DokSuViewPage = () => {
  const dok_su = Dok_Su_Titles;
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const t = useTranslations("DokSu");

  // Filter and search proverbs
  const filteredDokSu = useMemo(() => {
    if (!dok_su) return [];

    // Filter by search term
    if (searchTerm) {
      return dok_su.filter((proverb) =>
        proverb.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return dok_su;
  }, [dok_su, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredDokSu.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentDokSu = filteredDokSu.slice(startIndex, endIndex);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  if (!dok_su) {
    return (
      <div className="text-center py-12">
        <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-500">{t("no_doksu")}</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full mx-auto space-y-6 h-full "
    >
      {/* Header */}
      <Header />

      {/* Search and Filter Controls */}
      <Filter
        filter_doksu={filteredDokSu}
        startIndex={startIndex}
        endIndex={endIndex}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}

      {/* DokSu Grid */}
      <div className="grid gap-4 xl:grid-cols-2 pb-20">
        {currentDokSu.length === 0 ? (
          <motion.div variants={item} className="text-center py-12 col-span-2">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500">{t("no_doksu")}</p>
          </motion.div>
        ) : (
          currentDokSu.map((doksu, index) => (
            <DokSuCard
              key={`${doksu.id}-${index}`}
              doksu={doksu}
              index={doksu.id}
            />
          ))
        )}
      </div>
    </motion.div>
  );
};
