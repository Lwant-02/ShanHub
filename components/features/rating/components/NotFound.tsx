import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { CustomButton } from "@/components/CustomButton";
export const NotFound = () => {
  const t = useTranslations("RatingPage");
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="bg-gray-900/50 border-gray-700">
        <CardContent className="p-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            {t("app_not_found")}
          </h1>
          <CustomButton
            text={t("go_back")}
            icon={<ArrowLeft className="w-4 h-4 mr-2" />}
            variant="secondary"
            link="/dashboard"
          />
        </CardContent>
      </Card>
    </div>
  );
};
