import { motion } from "framer-motion";

import { item } from "../../landing/components/Hero";
import { useTranslations } from "next-intl";
export const Footer = () => {
  const t = useTranslations("AboutPage");
  return (
    <motion.div variants={item} className="text-center">
      <p className="text-gray-400">{t("footer_text")}</p>
    </motion.div>
  );
};
