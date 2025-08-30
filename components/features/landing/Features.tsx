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

import { FeatureCard } from "@/components/features/landing/FeatureCard";
import { Marquee } from "@/components/Marquee";
import AnimateOnview from "@/components/AnimateOnview";

const features = [
  {
    icon: Globe,
    title: "LikDai",
    description: "Shan typing web app",

    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "Font Converter",

    description: "Convert Shan fonts to any font",

    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Users,
    title: "Tai Le Converter",
    description: "Convert Shan script to Tai Le script",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Shield,
    title: "Shan Translit",
    description: "Convert Shan script to Latin script",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: BookOpen,
    title: "Shan Syllable Work Break",
    description: "Convert Shan script to syllable work break",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: Music,
    title: "Tai Le Syllable Work Break",
    description: "Convert Shan script to Tai Le script",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: MessageCircle,
    title: "Shan Word Sorting",
    description: "Sort Shan words by syllable work break",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    icon: Search,
    title: "Shan Proverbs",
    description: "Learn Shan proverbs and their meanings",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Search,
    title: "DokSu",
    description: "Shan Traditional Songs",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Search,
    title: "PakPi",
    description: "Shan Calandar",
    gradient: "from-violet-500 to-purple-600",
  },
];

export const Features = () => {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <AnimateOnview>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to learn, create, and connect with the Shan
              community
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
                  variant={index % 2 === 0 ? "highlighted" : "minimal"}
                />
              ))}
            </Marquee>
          </div>
        </AnimateOnview>
      </div>
    </section>
  );
};
