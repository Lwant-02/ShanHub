"use client";
import { useTranslations } from "next-intl";

import { FeatureCard } from "@/components/features/landing/components/FeatureCard";
import { Marquee } from "@/components/Marquee";
import AnimateOnview from "@/components/AnimateOnview";
import { baseApps } from "@/config/apps.config";

export const Features = () => {
  const t = useTranslations("HomePage.Features");
  const app = useTranslations("HomePage.Features.app");

  const apps = baseApps.map((item) => ({
    ...item,
    description: app(item.id),
  }));

  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <AnimateOnview>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("content")}
            </p>
          </div>
        </AnimateOnview>
        <AnimateOnview>
          <div className="w-full h-full">
            <Marquee className="py-6" pauseOnHover direction="right">
              {apps.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.name}
                  description={feature.description}
                  gradient={feature.gradient}
                  size="medium"
                  variant={index % 3 === 0 ? "highlighted" : "minimal"}
                />
              ))}
            </Marquee>
          </div>
        </AnimateOnview>
      </div>
    </section>
  );
};
