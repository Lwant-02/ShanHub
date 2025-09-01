"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Heart, Users, Globe, BookOpen, Shield, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

import { container, item } from "@/components/features/landing/Hero";

export default function AboutViewPage() {
  const t = useTranslations("AboutPage");

  const features = [
    {
      icon: BookOpen,
      title: t("features.learning_tools"),
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Zap,
      title: t("features.font_conversion"),
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Heart,
      title: t("features.cultural_content"),
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Users,
      title: t("features.community"),
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      title: t("features.preservation"),
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: Globe,
      title: t("features.accessibility"),
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft className="size-4" />
            <span>{t("btn_text")}</span>
          </Link>
          <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4">
            {t("title")}
          </h1>
          <p className="text-gray-400 text-xl">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div variants={item} className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              {t("mission_title")}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t("mission_content")}
            </p>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div variants={item} className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              {t("vision_title")}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t("vision_content")}
            </p>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div variants={item} className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {t("features_title")}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div variants={item} className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              {t("team_title")}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t("team_content")}
            </p>
          </div>
        </motion.div>

        {/* Join Section */}
        <motion.div variants={item} className="mb-12">
          <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              {t("join_title")}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              {t("join_content")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/community"
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 font-medium"
              >
                Join Community
              </Link>
              <Link
                href="/donate"
                className="px-6 py-3 border border-emerald-500/50 text-emerald-400 rounded-lg hover:bg-emerald-500/10 transition-all duration-300 font-medium"
              >
                Support Us
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={item} className="text-center">
          <p className="text-gray-400">
            Thank you for being part of our journey to preserve and promote the Shan language and culture.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
