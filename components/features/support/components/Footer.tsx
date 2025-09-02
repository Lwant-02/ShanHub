import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "../../landing/components/Hero";

export const Footer = () => {
  const t = useTranslations("DonatePage");
  return (
    <motion.div variants={item} className="text-center">
      <p className="text-gray-400 text-lg">{t("thank_you")}</p>
    </motion.div>
  );
};
