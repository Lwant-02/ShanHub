import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { item } from "@/components/features/landing/components/Hero";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <motion.div
      variants={item}
      className="flex items-center justify-center gap-2"
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700 disabled:opacity-50 cursor-pointer"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex items-center gap-1">
        {Array.from({ length: Math.min(4, totalPages) }, (_, i) => {
          const pageNum =
            Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
          if (pageNum > totalPages) return null;

          return (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(pageNum)}
              className={cn(
                currentPage === pageNum
                  ? "bg-blue-500 hover:bg-blue-700 text-white"
                  : "bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700",
                "cursor-pointer w-10"
              )}
            >
              {pageNum}
            </Button>
          );
        })}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700 disabled:opacity-50 cursor-pointer"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </motion.div>
  );
};
