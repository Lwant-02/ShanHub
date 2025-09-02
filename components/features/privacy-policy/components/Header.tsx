import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "../../landing/components/Hero";
export const Header = () => {
  const t = useTranslations("PrivacyPolicy");
  return (
    <motion.div variants={item} className="mb-8">
      <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4">
        {t("title")}
      </h1>
      <p className="text-gray-400 text-lg">
        {t("last_updated")} - {new Date().toLocaleDateString()}
      </p>
    </motion.div>
  );
};
