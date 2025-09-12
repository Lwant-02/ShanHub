import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  MessageCircleQuestion,
  HelpCircle,
  Settings,
  Coffee,
  HeartPlus,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { item } from "../../landing/components/Hero";
import { CustomButton } from "@/components/CustomButton";
import { GradientTitle } from "@/components/GradientTitle";

export const FAQCategory = () => {
  const t = useTranslations("FAQPage");
  const categories = [
    {
      key: "general",
      icon: HelpCircle,
      color: "text-green",
      bgColor: "bg-green/10",
      questions: ["what_is_shanhub", "who_can_use", "is_free"],
    },
    {
      key: "technical",
      icon: Settings,
      color: "text-orange",
      bgColor: "bg-orange/10",
      questions: ["supported_devices", "why_login_required", "data_privacy"],
    },
    {
      key: "apps",
      icon: MessageCircleQuestion,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      questions: ["available_apps", "new_features", "feature_requests"],
    },
    {
      key: "support",
      icon: HeartPlus,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      questions: [
        "get_help",
        "contribute",
        "report_issues",
        "support_financial",
      ],
    },
  ];
  return (
    <>
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <motion.div
            key={category.key}
            variants={item}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden mb-7"
          >
            {/* Category Header */}
            <div className="p-6 border-b border-gray-800/50">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${category.bgColor}`}>
                  <Icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h2 className="text-2xl font-semibold">
                  <GradientTitle title={t(`${category.key}.title`)} />
                </h2>
              </div>
            </div>

            {/* Questions */}
            <div className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((questionKey) => (
                  <AccordionItem
                    key={questionKey}
                    value={`${category.key}-${questionKey}`}
                    className="border border-gray-800/30 rounded-xl bg-gray-800/20 hover:bg-gray-800/40 transition-colors duration-200"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline cursor-pointer">
                      <span className="text-lg font-medium text-white pr-4">
                        {t(`${category.key}.${questionKey}.question`)}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 flex flex-col gap-3">
                      <div className="text-gray-300 leading-relaxed text-base">
                        {t(`${category.key}.${questionKey}.answer`)}
                      </div>
                      {questionKey === "support_financial" && (
                        <CustomButton
                          text={t(`${category.key}.${questionKey}.btn_text`)}
                          icon={<Coffee className="w-4 h-4 mr-2" />}
                          variant="primary"
                          link="/support"
                          className="w-40"
                        />
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};
