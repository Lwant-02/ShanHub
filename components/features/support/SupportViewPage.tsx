"use client";
import { motion } from "framer-motion";

import { container } from "@/components/features/landing/components/Hero";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Impact } from "./components/Impact";
import { WayToSupport } from "./components/WayToSupport";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function SupportViewPage() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <Header />

        {/* Introduction */}
        <Introduction />

        {/* Impact Section */}
        <Impact />

        {/* Ways to Support */}
        <WayToSupport />

        {/* Call to Action */}
        <CTA />

        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  );
}
