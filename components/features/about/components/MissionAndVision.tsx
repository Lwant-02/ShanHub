import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "../../landing/components/Hero";
export const MissionAndVision = () => {
  const t = useTranslations("AboutPage");
  return (
    <>
      {/* Mission Section */}
      <motion.div variants={item} className="mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            {t("mission_title")}
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {t("mission_content")}
          </p>
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.div variants={item} className="mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            {t("vision_title")}
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {t("vision_content")}
          </p>
        </div>
      </motion.div>
    </>
  );
};
