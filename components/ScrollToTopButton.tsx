"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const [isUserScrolled, setIsUserScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsUserScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isUserScrolled) {
    return null;
  }

  return (
    <div className="flex fixed bottom-36 right-3 xl:right-24 z-50">
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={handleScrollToTop}
        className="bg-black border border-blue-400/50 rounded-full p-2.5 cursor-pointer"
      >
        <ArrowUp className="size-5 text-white" />
      </motion.span>
    </div>
  );
};
