"use client";

import { motion, Variants } from "framer-motion";
import {
  Sparkles,
  Globe,
  Users,
  ChevronDown,
  Smartphone,
  BookOpen,
  DollarSign,
  MonitorSmartphone,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { NeonBadge } from "@/components/NeonBadge";
import { ParticleText } from "@/components/ParticleText";
import ShimmerButton from "@/components/ShimmerButton";

export const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
};

export const Hero = () => {
  const t = useTranslations("HomePage.Hero");

  const stats = [
    { icon: Users, value: "1K+", label: t("users") },
    {
      icon: MonitorSmartphone,
      value: "10 Apps",
      label: t("apps"),
    },
    { icon: DollarSign, value: "Free", label: t("free") },
  ];

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden py-20"
    >
      <motion.div variants={item} className="absolute inset-0">
        {/* Floating Icons */}
        <div className="absolute inset-0">
          <Smartphone
            className="absolute top-20 xl:left-20 left-0 w-8 h-8 text-emerald-400/30 animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <BookOpen
            className="absolute xl:top-52 top-60 right-32 w-6 h-6 text-blue-400/30 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <Globe
            className="absolute bottom-32 left-32 w-7 h-7 text-purple-400/30 animate-bounce"
            style={{ animationDelay: "2s" }}
          />
          <Sparkles
            className="absolute top-32 right-20 w-5 h-5 text-yellow-400/30 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center transition-all duration-1000">
        {/* Badge */}
        <motion.div variants={item}>
          <NeonBadge color="green" className="text-center">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {t("first_intro")} 👋
            </span>
          </NeonBadge>
        </motion.div>

        {/* Main Heading */}
        <div className="relative mt-4">
          <div className="absolute -top-4 -right-1 size-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>

          <motion.div variants={item} className="mb-2">
            <ParticleText text={t("main_intro")} />
          </motion.div>
          <motion.p
            variants={item}
            className="xl:text-2xl text-xl opacity-80 max-w-4xl mx-auto leading-relaxed mb-8 font-medium"
          >
            {t("sub_intro")}
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          variants={item}
          className="flex justify-center items-center mb-16"
        >
          <ShimmerButton text={t("btn_text")} color="green" link="/dashboard" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div variants={item} className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          <p className="text-gray-500 text-sm">{t("scroll")}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};
