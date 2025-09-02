import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "../../landing/components/Hero";
export const Team = () => {
  const t = useTranslations("AboutPage");
  return (
    <motion.div variants={item} className="mb-12">
      <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">
          {t("team_title")}
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          {t("team_content")}
        </p>
      </div>
    </motion.div>
  );
};
