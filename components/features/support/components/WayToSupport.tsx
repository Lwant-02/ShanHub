import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  DollarSign,
  HandHeart,
  BookOpen,
  Users,
  MessageSquare,
  Share2,
} from "lucide-react";

import { item } from "../../landing/components/Hero";
import { GradientTitle } from "@/components/GradientTitle";

export const WayToSupport = () => {
  const t = useTranslations("SupportPage");
  const supportWays = [
    {
      icon: DollarSign,
      title: t("ways_items.financial"),
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: HandHeart,
      title: t("ways_items.volunteer"),
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: BookOpen,
      title: t("ways_items.content"),
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Users,
      title: t("ways_items.community"),
      gradient: "from-orange-500 to-yellow-600",
    },
    {
      icon: MessageSquare,
      title: t("ways_items.feedback"),
      gradient: "from-pink-500 to-red-600",
    },
    {
      icon: Share2,
      title: t("ways_items.share"),
      gradient: "from-teal-500 to-green-600",
    },
  ];
  return (
    <motion.div variants={item} className="mb-12">
      <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4">
          <GradientTitle title={t("ways_title")} />
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          {t("ways_content")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supportWays.map((way, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div
                className={`w-10 h-10 bg-gradient-to-br ${way.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
              >
                <way.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-300 leading-relaxed">{way.title}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
