import { motion } from "framer-motion";
import { Headset, Users } from "lucide-react";

import { item } from "../../landing/components/Hero";
import { CustomButton } from "@/components/CustomButton";

export const Contact = () => {
  return (
    <motion.div className="mt-16 text-center" variants={item}>
      <div className="bg-gradient-to-r from-green/10 to-orange/10 rounded-2xl border border-gray-800/50 p-8">
        <Users className="w-12 h-12 text-green mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-4">
          Still have questions?
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Can't find the answer you're looking for? Join our community or reach
          out to us directly. We're here to help you make the most of ShanHub.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CustomButton
            text="Join Community"
            icon={<Users className="w-4 h-4 mr-2" />}
            variant="primary"
            link="/community"
          />
          <CustomButton
            text="Contact Us"
            icon={<Headset className="w-4 h-4 mr-2" />}
            variant="secondary"
            className="xl:w-40"
          />
        </div>
      </div>
    </motion.div>
  );
};
