"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";
import { item } from "@/components/features/landing/components/Hero";

interface ProverbCardProps {
  proverb: string;
  category: string;
}

export const ProverbCard = ({ proverb, category }: ProverbCardProps) => {
  const t = useTranslations("ShanProverbs");
  return (
    <motion.div variants={item}>
      <Card className="bg-gray-800/30 border-gray-700 hover:border-blue-500/50 transition-colors cursor-pointer">
        <CardContent>
          <div className="flex flex-col gap-2">
            <span className="text-blue-400 text-lg font-semibold">
              {t("proverb")} - {category}
            </span>
            <p className="text-white text-lg leading-relaxed font-medium">
              {proverb}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
