import { motion } from "framer-motion";
import { item } from "../../landing/components/Hero";
export const Footer = () => {
  return (
    <motion.div variants={item} className="mt-12 text-center">
      <p className="text-gray-400">
        Thank you for being part of the ShanHub community and helping preserve
        the Shan language and culture.
      </p>
    </motion.div>
  );
};
