"use client";
import { motion } from "framer-motion";

import { Header } from "./components/Header";
import { FAQCategory } from "./components/FAQCategory";
import { Contact } from "./components/Contact";
import { container } from "../landing/components/Hero";

export const FAQViewPage = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen py-12"
    >
      {/* Heder Section */}
      <Header />

      {/* FAQ Categories */}
      <FAQCategory />

      {/* Contact Section */}
      <Contact />
    </motion.div>
  );
};
