import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "../../landing/components/Hero";

export const Introduction = () => {
  const t = useTranslations("SupportPage");
  return (
    <motion.div variants={item} className="mb-12">
      <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          {t("intro_title")}
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          {t("intro_content")}
        </p>
      </div>
    </motion.div>
  );
};
