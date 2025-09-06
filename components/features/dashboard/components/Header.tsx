import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Zap, Users, Star } from "lucide-react";

import { item } from "@/components/features/landing/components/Hero";

export const Header = ({
  apps,
  activeUsers,
}: {
  apps: number;
  activeUsers: number;
}) => {
  const t = useTranslations("DashboardPage");
  return (
    <motion.div variants={item} className="mb-8">
      <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4">
        {t("title")}
      </h1>
      <p className="text-gray-400 text-xl mb-6">{t("subtitle")}</p>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">{apps}</span>
          </div>
          <p className="text-gray-400 text-sm">{t("stats.total_apps")}</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">{activeUsers}</span>
          </div>
          <p className="text-gray-400 text-sm">{t("stats.active_users")}</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">4.5</span>
          </div>
          <p className="text-gray-400 text-sm">{t("stats.ratings")}</p>
        </div>
      </div>
    </motion.div>
  );
};
