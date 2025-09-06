import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Coffee, Users } from "lucide-react";

import { item } from "../../landing/components/Hero";
import { CustomButton } from "@/components/CustomButton";
import { useState } from "react";
import { SupportDialog } from "./SupportDialog";

export const CTA = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const t = useTranslations("SupportPage");
  return (
    <motion.div variants={item} className="mb-12">
      <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          {t("contact_title")}
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          {t("contact_content")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CustomButton
            onClick={() => setIsDialogOpen(true)}
            text={t("buy_coffee")}
            icon={<Coffee className="w-4 h-4 mr-2" />}
            variant="primary"
          />
          <CustomButton
            text={t("join_community")}
            icon={<Users className="w-4 h-4 mr-2" />}
            variant="secondary"
            link="/community"
          />
        </div>
      </div>
      <SupportDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </motion.div>
  );
};
