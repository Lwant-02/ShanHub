import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BookOpen, Zap, Heart, Users, Shield, Globe } from "lucide-react";

import { item } from "../../landing/components/Hero";
export const Feature = () => {
  const t = useTranslations("AboutPage");
  const features = [
    {
      icon: BookOpen,
      title: t("features.learning_tools"),
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Zap,
      title: t("features.font_conversion"),
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Heart,
      title: t("features.cultural_content"),
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Users,
      title: t("features.community"),
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Shield,
      title: t("features.preservation"),
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      icon: Globe,
      title: t("features.accessibility"),
      gradient: "from-green-500 to-emerald-600",
    },
  ];
  return (
    <motion.div variants={item} className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          {t("features_title")}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white/5 cursor-pointer backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div
              className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}
            >
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-300 leading-relaxed">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
