"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { TrendingUp, Clock } from "lucide-react";

import { container, item } from "@/components/features/landing/components/Hero";
import { AppCard } from "./components/AppCard";
import { Header } from "./components/Header";
import { baseApps } from "@/config/apps.config";

export default function DashboardViewPage() {
  const t = useTranslations("DashboardPage");
  const app = useTranslations("HomePage.Features.app");
  const router = useRouter();

  const apps = baseApps.map((item) => ({
    ...item,
    description: app(item.id),
  }));

  const recentlyUsed = apps.slice(0, 3);

  const handleLaunchApp = (appId: string) => {
    // In a real app, this would navigate to the specific app
    console.log(`Launching app: ${appId}`);
  };

  const handleRateApp = (appId: string) => {
    router.push(`/dashboard/rating/${appId}`);
  };

  return (
    <div className="min-h-screen py-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <Header apps={apps.length} activeUsers={2500} />

        {/* Recently Used */}
        <motion.div variants={item} className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">
              {t("recently_used")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentlyUsed.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onLaunch={handleLaunchApp}
                onRate={handleRateApp}
                t={t}
              />
            ))}
          </div>
        </motion.div>

        {/* All Apps */}
        <motion.div variants={item}>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-semibold text-white">
              {t("all_apps")}
            </h2>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onLaunch={handleLaunchApp}
                onRate={handleRateApp}
                t={t}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
