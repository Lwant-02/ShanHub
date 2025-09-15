"use client";

import { motion } from "framer-motion";
import { container } from "@/components/features/landing/components/Hero";
import { Header } from "./components/Header";
import { Translit } from "./components/Translit";

export const ShanTranslitViewPage = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full mx-auto space-y-6 h-full "
    >
      <Header />
      <Translit />
    </motion.div>
  );
};
