"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Code,
  Server,
  BookOpen,
  Users,
  Share2,
  MessageSquare,
  DollarSign,
  HandHeart,
  Coffee,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { container, item } from "@/components/features/landing/Hero";
import { Button } from "@/components/ui/button";

export default function DonateViewPage() {
  const t = useTranslations("DonatePage");

  const impactItems = [
    {
      icon: Code,
      title: t("impact_items.development"),
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Server,
      title: t("impact_items.maintenance"),
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: BookOpen,
      title: t("impact_items.content"),
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Users,
      title: t("impact_items.community"),
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Heart,
      title: t("impact_items.accessibility"),
      gradient: "from-indigo-500 to-blue-600",
    },
  ];

  const supportWays = [
    {
      icon: DollarSign,
      title: t("ways_items.financial"),
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: HandHeart,
      title: t("ways_items.volunteer"),
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: BookOpen,
      title: t("ways_items.content"),
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Users,
      title: t("ways_items.community"),
      gradient: "from-orange-500 to-yellow-600",
    },
    {
      icon: MessageSquare,
      title: t("ways_items.feedback"),
      gradient: "from-pink-500 to-red-600",
    },
    {
      icon: Share2,
      title: t("ways_items.share"),
      gradient: "from-teal-500 to-green-600",
    },
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
          <p className="text-gray-400 text-xl">{t("subtitle")}</p>
        </motion.div>

        {/* Introduction */}
        <motion.div variants={item} className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              {t("intro_title")}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t("intro_content")}
            </p>
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div variants={item} className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {t("impact_title")}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
            {impactItems.map((impact, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${impact.gradient} rounded-xl flex items-center justify-center mb-4`}
                >
                  <impact.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">{impact.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ways to Support */}
        <motion.div variants={item} className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              {t("ways_title")}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              {t("ways_content")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportWays.map((way, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${way.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <way.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{way.title}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={item} className="mb-12">
          <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              {t("contact_title")}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              {t("contact_content")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 font-medium">
                <Coffee className="w-4 h-4 mr-2" />
                Buy us a Coffee
              </Button>
              <Link href="/community">
                <Button
                  variant="outline"
                  className="px-8 py-3 border-emerald-500/50 text-emerald-400 rounded-lg hover:bg-emerald-500/10 transition-all duration-300 font-medium"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={item} className="text-center">
          <p className="text-gray-400 text-lg">{t("thank_you")}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
