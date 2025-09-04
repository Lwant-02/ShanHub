import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { CustomButton } from "@/components/CustomButton";
export const ThanyouDialog = () => {
  const t = useTranslations("RatingPage");
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gray-900/50 border-gray-700 max-w-md w-full">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
            </motion.div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {t("thank_you")}
            </h1>
            <p className="text-gray-300 mb-6">{t("rating_submitted")}</p>
            <div className="space-y-3">
              <CustomButton text="Close & Back To Rating" variant="secondary" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
