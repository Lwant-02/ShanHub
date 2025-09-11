"use client";

import { useState, useEffect, useMemo } from "react";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Spinner } from "@/components/Spinner";
import { Header } from "./components/Header";
import { SearchAndFilter } from "./components/SearchAndFilter";
import { ProverbCard } from "./components/ProverbCard";
import { Pagination } from "./components/Pagination";
import { container, item } from "../../landing/components/Hero";

const ITEMS_PER_PAGE = 10;

export const ShanProverbsViewPage = () => {
  const [proverbsData, setProverbsData] = useState<ProverbsData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("ShanProverbs");

  // Load proverbs data
  useEffect(() => {
    const loadProverbs = async () => {
      try {
        const response = await fetch("/shan_proverbs.json");
        const data = await response.json();
        setProverbsData(data);
      } catch (error) {
        console.error("Error loading proverbs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProverbs();
  }, []);

  // Get all categories (proverb keys)
  const categories = useMemo(() => {
    if (!proverbsData) return [];
    return proverbsData.all_proverbs.map((group) => group.proverb_key);
  }, [proverbsData]);

  // Filter and search proverbs
  const filteredProverbs = useMemo(() => {
    if (!proverbsData) return [];

    let allProverbs: Array<Proverb & { category: string }> = [];

    proverbsData.all_proverbs.forEach((group) => {
      group.proverb_list.forEach((proverb) => {
        allProverbs.push({
          ...proverb,
          category: group.proverb_key,
        });
      });
    });

    // Filter by category
    if (selectedCategory !== "all") {
      allProverbs = allProverbs.filter(
        (proverb) => proverb.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      allProverbs = allProverbs.filter((proverb) =>
        proverb.proverb.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return allProverbs;
  }, [proverbsData, searchTerm, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredProverbs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProverbs = filteredProverbs.slice(startIndex, endIndex);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  if (isLoading || !t) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner size="12" />
      </div>
    );
  }

  if (!proverbsData) {
    return (
      <div className="text-center py-12">
        <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-500">{t("failed_to_load")}</p>
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
      <SearchAndFilter
        categories={categories}
        filteredProverbs={filteredProverbs}
        startIndex={startIndex}
        endIndex={endIndex}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
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

      {/* Proverbs Grid */}
      <div className="grid gap-4 xl:grid-cols-2 pb-20">
        {currentProverbs.length === 0 ? (
          <motion.div variants={item} className="text-center py-12 col-span-2">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500">{t("no_proverbs")}</p>
          </motion.div>
        ) : (
          currentProverbs.map((proverb, index) => (
            <ProverbCard
              key={`${proverb.category}-${index}`}
              proverb={proverb.proverb}
              category={proverb.category}
            />
          ))
        )}
      </div>
    </motion.div>
  );
};
