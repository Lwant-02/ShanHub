import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { item } from "../../landing/components/Hero";

export const JoinSection = () => {
  const t = useTranslations("AboutPage");
  return (
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
            className="px-6 py-2 flex w-44 justify-center items-center bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 font-medium"
          >
            Join Community
          </Link>
          <Link
            href="/support"
            className="px-6 py-2 flex w-44 justify-center items-center border border-emerald-500/50 text-emerald-400 rounded-lg hover:bg-emerald-500/10 transition-all duration-300 font-medium"
          >
            Support Us
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
