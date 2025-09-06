import { motion } from "framer-motion";

import { item } from "../../landing/components/Hero";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("TermsOfService");
  return (
    <motion.div variants={item} className="mt-12 text-center">
      <p className="text-gray-400">{t("footer.content")}</p>
    </motion.div>
  );
};
