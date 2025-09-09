"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MobileDrawer } from "../features/overview/MobileDrawer";

export const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="xl:hidden flex fixed bottom-24 right-3 z-50">
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={() => setIsDrawerOpen(true)}
        className="bg-black border border-green/50 rounded-full p-2.5"
      >
        {isDrawerOpen ? (
          <X className="size-5 text-white" />
        ) : (
          <Menu className="size-5 text-white" />
        )}
      </motion.span>
      <MobileDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
    </div>
  );
};
