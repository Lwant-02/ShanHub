import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Code, Server, BookOpen, Users, Heart } from "lucide-react";

import { item } from "../../landing/components/Hero";
import { GradientTitle } from "@/components/GradientTitle";

export const Impact = () => {
  const t = useTranslations("SupportPage");
  const impactItems = [
    {
      icon: Code,
      title: t("impact_items.development"),
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: BookOpen,
      title: t("impact_items.content"),
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Users,
      title: t("impact_items.community"),
      gradient: "from-pink-500 to-rose-600",
    },
  ];
  return (
    <motion.div variants={item} className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        <GradientTitle title={t("impact_title")} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {impactItems.map((impact, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white/5 cursor-pointer backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div
              className={`w-12 h-12 bg-gradient-to-br ${impact.gradient} rounded-xl flex items-center justify-center mb-4`}
            >
              <impact.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-300 leading-relaxed">{impact.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
