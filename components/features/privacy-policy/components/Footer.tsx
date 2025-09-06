import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "../../landing/components/Hero";

export const Footer = () => {
  const t = useTranslations("PrivacyPolicy");
  return (
    <motion.div variants={item} className="mt-12 text-center">
      <p className="text-gray-400">{t("footer.content")}</p>
    </motion.div>
  );
};
