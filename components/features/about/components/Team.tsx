import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "../../landing/components/Hero";
export const Team = () => {
  const t = useTranslations("AboutPage");
  const originDeveloper = useTranslations("AboutPage.origin_developer");
  const nextDeveloper = useTranslations("AboutPage.next_developer");
  return (
    <motion.div variants={item} className="mb-12">
      <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">
          {t("team_title")}
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          {t("team_content")}
        </p>
        <h2 className="text-2xl font-semibold text-purple-400 mb-4 mt-3">
          {t("origin_developer.title")}
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          {t("origin_developer.content_1")}{" "}
          <span className="font-bold text-purple-400">
            {originDeveloper("developer_name")}{" "}
          </span>
          {t("origin_developer.content_2")}
        </p>
        <h2 className="text-2xl font-semibold text-purple-400 mb-4 mt-3">
          {t("next_developer.title")}
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          {t("next_developer.content_1")}{" "}
          <span className="font-bold text-purple-400">
            {nextDeveloper("developer_name")}{" "}
          </span>
          {t("next_developer.content_2")}
        </p>
      </div>
    </motion.div>
  );
};
