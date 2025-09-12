"use client";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "@/components/features/landing/components/Hero";
import { GradientTitle } from "@/components/GradientTitle";

export const Header = () => {
  const t = useTranslations("DokSu");
  return (
    <motion.div variants={item} className="text-center space-y-4">
      <div className="flex items-center justify-center gap-3">
        <Heart className="h-8 w-8 text-pink-500" />
        <h1 className="text-3xl font-bold text-white">
          <GradientTitle title={t("title")} />
        </h1>
      </div>
      <p className="text-gray-300 max-w-2xl mx-auto">{t("content")}</p>
    </motion.div>
  );
};
