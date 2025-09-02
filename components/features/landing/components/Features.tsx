"use client";
import {
  Globe,
  Smartphone,
  Users,
  Shield,
  BookOpen,
  Music,
  MessageCircle,
  Search,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { FeatureCard } from "@/components/features/landing/components/FeatureCard";
import { Marquee } from "@/components/Marquee";
import AnimateOnview from "@/components/AnimateOnview";

export const Features = () => {
  const t = useTranslations("HomePage.Features");
  const app = useTranslations("HomePage.Features.app");

  const features = [
    {
      icon: Globe,
      title: "LikDai",
      description: app("LikDai"),
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Smartphone,
      title: "Font Converter",
      description: app("FontConverter"),
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Tai Le Converter",
      description: app("TaiLeConverter"),
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Shield,
      title: "Shan Translit",
      description: app("ShanTranslit"),
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: BookOpen,
      title: "Shan Syllable Work Break",
      description: app("ShanSyllable"),
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      icon: Music,
      title: "Tai Le Syllable Work Break",
      description: app("TaiLeSyllable"),
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: MessageCircle,
      title: "Shan Word Sorting",
      description: app("ShanWordSorting"),
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      icon: Search,
      title: "Shan Proverbs",
      description: app("ShanProverbs"),
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Search,
      title: "DokSu",
      description: app("DokSu"),
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Search,
      title: "PakPi",
      description: app("PakPi"),
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Search,
      title: "Shan Note",
      description: app("ShanNote"),
      gradient: "from-violet-500 to-purple-600",
    },
  ];

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
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
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
