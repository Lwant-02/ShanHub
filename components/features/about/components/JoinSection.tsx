import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { HeartPlus, Users } from "lucide-react";

import { item } from "../../landing/components/Hero";
import { CustomButton } from "@/components/CustomButton";
import { GradientTitle } from "@/components/GradientTitle";

export const JoinSection = () => {
  const t = useTranslations("AboutPage");
  return (
    <motion.div variants={item} className="mb-12">
      <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold  mb-4">
          <GradientTitle title={t("join_title")} />
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          {t("join_content")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CustomButton
            text={t("join_community")}
            icon={<Users className="w-4 h-4 mr-2" />}
            variant="primary"
            link="/community"
          />
          <CustomButton
            text={t("support_us")}
            icon={<HeartPlus className="w-4 h-4 mr-2" />}
            variant="secondary"
            link="/support"
            className="xl:w-40"
          />
        </div>
      </div>
    </motion.div>
  );
};
