import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Users, MessageCircle } from "lucide-react";

import { item } from "../../landing/components/Hero";
import { GradientTitle } from "@/components/GradientTitle";

export const Header = () => {
  const t = useTranslations("CommunityPage");
  return (
    <motion.div variants={item} className="mb-8 text-center">
      <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4">
        <GradientTitle title={t("title")} />
      </h1>
      <p className="text-gray-400 text-xl mb-6">{t("subtitle")}</p>

      {/* Community Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Users className="w-5 h-5 text-emerald-400" />
            <span className="text-2xl font-bold text-white">1200K</span>
          </div>
          <p className="text-gray-400 text-sm">{t("active_members")}</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-2xl font-bold text-white">4</span>
          </div>
          <p className="text-gray-400 text-sm">{t("total_posts")}</p>
        </div>
      </div>
    </motion.div>
  );
};
