import { motion } from "framer-motion";

import { item } from "../../landing/components/Hero";
export const Footer = () => {
  return (
    <motion.div variants={item} className="text-center">
      <p className="text-gray-400">
        Thank you for being part of our journey to preserve and promote the Shan
        language and culture.
      </p>
    </motion.div>
  );
};
