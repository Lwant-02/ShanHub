import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Coffee, Users } from "lucide-react";
import Link from "next/link";

import { item } from "../../landing/components/Hero";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  const t = useTranslations("DonatePage");
  return (
    <motion.div variants={item} className="mb-12">
      <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          {t("contact_title")}
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          {t("contact_content")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="px-8 py-3 bg-gradient-to-r cursor-pointer from-emerald-500 to-blue-600 text-white rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 font-medium">
            <Coffee className="w-4 h-4 mr-2" />
            Buy us a Coffee
          </Button>
          <Link href="/community">
            <Button
              variant="outline"
              className="px-8 py-3 border-emerald-500/50 cursor-pointer text-emerald-400 rounded-lg hover:bg-emerald-500/10 transition-all duration-300 font-medium"
            >
              <Users className="w-4 h-4 mr-2" />
              Join Community
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
