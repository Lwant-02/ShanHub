"use client";
import { motion } from "framer-motion";

import { container } from "@/components/features/landing/components/Hero";
import { useTranslations } from "next-intl";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

export default function TermsOfServiceViewPage() {
  const t = useTranslations("TermsOfService");
  return (
    <div className="min-h-screen py-12 ">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <Header />

        {/* Content */}
        <Content />

        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  );
}
