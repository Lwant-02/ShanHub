import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

// Reusable component
interface AnimateOnViewProps {
  children: ReactNode;
}

export default function AnimateOnview({ children }: AnimateOnViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
