"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { container } from "@/components/features/landing/components/Hero";
import { Header } from "./components/Header";
import { Sort } from "./components/Sort";
import { PostFeed } from "./components/PostFeed";
import { PostFormDialog } from "./components/PostFormDialog";

export default function CommunityViewPage() {
  const [sortBy, setSortBy] = useState("latest");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen py-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <Header />

        {/*  Sort */}
        <Sort
          sortBy={sortBy}
          setSortBy={setSortBy}
          setIsDialogOpen={setIsDialogOpen}
        />

        {/* Posts Feed */}
        <PostFeed />

        {/* Create Post dialog */}
        <PostFormDialog
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      </motion.div>
    </div>
  );
}
