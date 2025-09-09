"use client";

import { motion } from "framer-motion";
import { Search, LayoutDashboard, Compass, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomButton } from "@/components/CustomButton";

export const NotFoundViewPage = () => {
  const t = useTranslations("NotFoundPage");
  const router = useRouter();

  const handleExploreApps = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
          <CardHeader className="text-center pb-8">
            {/* 404 Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-6"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Search className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* 404 Error Code */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-4"
            >
              <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                404
              </span>
            </motion.div>

            <CardTitle className="text-3xl font-bold text-white mb-4">
              {t("title")}
            </CardTitle>

            <CardDescription className="text-lg text-gray-300 mb-2">
              {t("subtitle")}
            </CardDescription>

            <CardDescription className="text-gray-400">
              {t("description")}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <CustomButton
                text={t("go_home")}
                icon={<LayoutDashboard className="w-4 h-4 mr-2" />}
                variant="primary"
                link="/"
              />

              <CustomButton
                text={t("explore_apps")}
                icon={<Compass className="w-4 h-4 mr-2" />}
                variant="secondary"
                onClick={handleExploreApps}
              />
            </motion.div>

            {/* Fun Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center pt-4 border-t border-white/10"
            >
              <div className="flex justify-center items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{t("footer_text")}</span>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
