import { motion } from "framer-motion";
import { item } from "../../landing/components/Hero";

export const Footer = () => {
  return (
    <motion.div variants={item} className="mt-12 text-center">
      <p className="text-gray-400">
        Your privacy is important to us, and we are committed to protecting your
        personal information while providing the best possible experience with
        ShanHub.
      </p>
    </motion.div>
  );
};
