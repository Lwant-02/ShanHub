"use client";
import { ArrowRight } from "lucide-react";

import AnimateOnview from "@/components/AnimateOnview";
import { useTranslations } from "next-intl";
import { CustomButton } from "@/components/CustomButton";
import { GradientTitle } from "@/components/GradientTitle";

export const Support = () => {
  const t = useTranslations("HomePage.Support");
  return (
    <section className="py-20 px-4">
      <AnimateOnview>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl p-12 border border-emerald-500/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <GradientTitle title={t("title")} />
            </h2>
            <p className="xl:text-2xl text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {t("content")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton
                text={t("btn_text")}
                icon={<ArrowRight className="w-5 h-5 text-red-400" />}
                variant="primary"
                link="/support"
              />
            </div>
          </div>
        </div>
      </AnimateOnview>
    </section>
  );
};
