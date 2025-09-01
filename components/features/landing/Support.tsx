"use client";
import { ArrowRight } from "lucide-react";

import { Button } from "../../ui/button";
import AnimateOnview from "@/components/AnimateOnview";
import { useTranslations } from "next-intl";

export const Support = () => {
  const t = useTranslations("HomePage.Support");
  return (
    <section className="py-20 px-4">
      <AnimateOnview>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl p-12 border border-emerald-500/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h2>
            <p className="xl:text-2xl text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {t("content")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="ghost"
                className="flex cursor-pointer items-center gap-2  p-5 border border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <p className="text-lg">{t("btn_text")}</p>
                <ArrowRight className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </AnimateOnview>
    </section>
  );
};
