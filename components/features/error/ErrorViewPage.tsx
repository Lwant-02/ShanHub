"use client";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomButton } from "@/components/CustomButton";

export const ErrorViewPage = () => {
  const t = useTranslations("ErrorPage");

  return (
    <div className="h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
          <CardHeader className="text-center pb-8">
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-6"
            >
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-red-500 to-orange-500`}
              >
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Error Code */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-4"
            >
              <span
                className={`text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500`}
              >
                500
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
                text={t("try_again")}
                icon={<RefreshCw className="w-4 h-4 mr-2" />}
                variant="secondary"
                link="/"
              />
              <CustomButton
                text={t("contact_support")}
                icon={<MessageCircle className="w-4 h-4 mr-2" />}
                variant="primary"
                link="/support"
              />
            </motion.div>

            {/* Error Code Display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center pt-4 border-t border-white/10"
            >
              <p className="text-sm text-gray-500">
                Error Code: 500 - Internal Server Error
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
