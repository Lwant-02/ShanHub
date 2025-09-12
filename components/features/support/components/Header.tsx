import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "../../landing/components/Hero";
import { GradientTitle } from "@/components/GradientTitle";

export const Header = () => {
  const t = useTranslations("SupportPage");
  return (
    <motion.div variants={item} className="mb-8">
      <h1 className="text-4xl py-2 font-bold mb-4">
        <GradientTitle title={t("title")} />
      </h1>
      <p className="text-gray-400 text-xl">{t("subtitle")}</p>
    </motion.div>
  );
};
