"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { baseApps } from "@/config/apps.config";
import { ThanyouDialog } from "@/components/features/rating/components/ThanyouDialog";
import { NotFound } from "@/components/features/rating/components/NotFound";
import { Header } from "./components/Header";
import { calculateAverageRating } from "@/lib/utils";
import { RatingForm } from "./components/RatingForm";
import { UserRating } from "./components/UserRating";

// Mock data for existing ratings
const mockRatings = [
  {
    id: 1,
    userName: "Sai Nang",
    rating: 5,
    review:
      "This app is absolutely amazing! It has helped me learn Shan typing so much faster. The interface is intuitive and the lessons are well-structured. Highly recommend to anyone wanting to learn Shan typing.",
    date: "2024-01-15",
    avatar: "SN",
  },
  {
    id: 2,
    userName: "Khun Myat",
    rating: 4,
    review:
      "Great app overall. The typing exercises are very helpful and I love the progress tracking feature. Could use more advanced lessons though.",
    date: "2024-01-10",
    avatar: "KM",
  },
  {
    id: 3,
    userName: "Nang Aye",
    rating: 5,
    review:
      "Perfect for beginners! The step-by-step approach makes learning Shan typing enjoyable. The app is fast and responsive.",
    date: "2024-01-08",
    avatar: "NA",
  },
  {
    id: 4,
    userName: "Sao Lung",
    rating: 4,
    review:
      "Very useful app. Helped me improve my Shan typing speed significantly. The practice sessions are well designed.",
    date: "2024-01-05",
    avatar: "SL",
  },
  {
    id: 5,
    userName: "Nang Kham",
    rating: 3,
    review:
      "Good app but could be better. Sometimes it's a bit slow to load. The content is good though.",
    date: "2024-01-03",
    avatar: "NK",
  },
];

export const RatingViewPage = () => {
  const params = useParams();
  const t = useTranslations("RatingPage");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showRatingForm, setShowRatingForm] = useState(false);

  const appId = params.appId as string;
  const app = baseApps.find((app) => app.id === appId);

  // Calculate average rating
  const averageRating = calculateAverageRating({ ratings: mockRatings });

  if (!app) {
    return <NotFound />;
  }

  return (
    <div className="w-full mx-auto min-h-screen py-10">
      {/* Header */}
      <Header
        name={app.name}
        gradient={app.gradient}
        icon={app.icon}
        averageRating={averageRating}
        mockRatings={mockRatings.length}
        showRatingForm={showRatingForm}
        setShowRatingForm={setShowRatingForm}
      />

      {/* Rating Form */}
      {showRatingForm && (
        <RatingForm
          setIsSubmitted={setIsSubmitted}
          setShowRatingForm={setShowRatingForm}
        />
      )}

      {/* Users Ratings */}
      {!showRatingForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6"
        >
          {mockRatings.map((rating) => (
            <UserRating key={rating.id} rating={rating} />
          ))}
          {!mockRatings.length ||
            (mockRatings.length < 1 && (
              <p className="text-gray-400 text-center">
                {t("no_ratings_found")}
              </p>
            ))}
        </motion.div>
      )}

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 text-center"
      >
        <p className="text-gray-500 text-sm">{t("privacy_note")}</p>
      </motion.div>

      <ThanyouDialog onOpenChange={setIsSubmitted} open={isSubmitted} />
    </div>
  );
};
