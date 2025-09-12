"use client";
import { motion } from "framer-motion";
import { Headset, Users } from "lucide-react";
import { useState } from "react";

import { item } from "../../landing/components/Hero";
import { CustomButton } from "@/components/CustomButton";
import { FAQDialog } from "./FAQDialog";
import { useTranslations } from "next-intl";
import { GradientTitle } from "@/components/GradientTitle";

export const Contact = () => {
  const t = useTranslations("FAQPage.contact");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <motion.div className="mt-16 text-center" variants={item}>
      <div className="bg-gradient-to-r from-green/10 to-orange/10 rounded-2xl border border-gray-800/50 p-8">
        <Users className="w-12 h-12 text-green mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-4">
          <GradientTitle title={t("title")} />
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t("subtitle")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CustomButton
            text={t("join_community")}
            icon={<Users className="w-4 h-4 mr-2" />}
            variant="primary"
            link="/community"
          />
          <CustomButton
            text={t("contact_us")}
            icon={<Headset className="w-4 h-4 mr-2" />}
            variant="secondary"
            className="xl:w-40"
            onClick={() => setIsDialogOpen(true)}
          />
        </div>
      </div>
      <FAQDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </motion.div>
  );
};
