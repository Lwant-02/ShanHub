import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageCircleQuestion } from "lucide-react";
import { item } from "../../landing/components/Hero";

export const Header = () => {
  const t = useTranslations("FAQPage");
  return (
    <motion.div className="text-center mb-16" variants={item}>
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green/10 mb-6">
        <MessageCircleQuestion className="w-8 h-8 text-green" />
      </div>
      <h1 className="text-4xl py-3 md:text-5xl font-bold mb-4 bg-gradient-to-r from-green to-orange bg-clip-text text-transparent">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("subtitle")}</p>
    </motion.div>
  );
};
