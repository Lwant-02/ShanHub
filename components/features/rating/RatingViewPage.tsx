"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Plus } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StarRating } from "@/components/ui/star-rating";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { baseApps } from "@/config/apps.config";
import { ThanyouDialog } from "@/components/features/rating/components/ThanyouDialog";
import { NotFound } from "@/components/features/rating/components/NotFound";
import { Header } from "./components/Header";
import { calculateAverageRating } from "@/lib/utils";

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
  const router = useRouter();
  const t = useTranslations("RatingPage");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRatingForm, setShowRatingForm] = useState(false);

  const appId = params.appId as string;
  const app = baseApps.find((app) => app.id === appId);

  // Calculate average rating
  const averageRating = calculateAverageRating({ ratings: mockRatings });

  const formSchema = z.object({
    rating: z
      .number()
      .min(1, { message: t("rating_required") })
      .max(5),
    review: z
      .string()
      .min(10, { message: t("review_min_length") })
      .max(500, { message: t("review_max_length") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      review: "",
    },
  });

  const watchedRating = form.watch("rating");

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Rating submitted:", {
        appId,
        ...values,
        timestamp: new Date().toISOString(),
      });

      setIsSubmitted(true);
      setShowRatingForm(false);
    } catch (error) {
      console.error("Error submitting rating:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!app) {
    return <NotFound />;
  }

  if (isSubmitted) {
    return <ThanyouDialog />;
  }

  const ratingLabels = [
    t("rating_labels.terrible"),
    t("rating_labels.bad"),
    t("rating_labels.okay"),
    t("rating_labels.good"),
    t("rating_labels.excellent"),
  ];

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-gray-900/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white text-xl">
              {t("share_experience")}
            </CardTitle>
            <p className="text-gray-400">{t("help_improve")}</p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Star Rating */}
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem className="text-center">
                      <FormLabel className="text-white text-lg">
                        {t("overall_rating")}
                      </FormLabel>
                      <FormControl>
                        <div className="flex flex-col items-center gap-4">
                          <StarRating
                            rating={field.value}
                            onRatingChange={field.onChange}
                            size="lg"
                          />
                          {watchedRating > 0 && (
                            <motion.p
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-emerald-400 font-medium"
                            >
                              {ratingLabels[watchedRating - 1]}
                            </motion.p>
                          )}
                        </div>
                      </FormControl>
                      <FormDescription className="text-gray-400">
                        {t("click_stars")}
                      </FormDescription>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Text Review */}
                <FormField
                  control={form.control}
                  name="review"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        {t("written_review")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("review_placeholder")}
                          className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 min-h-32 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-gray-400">
                        {t("review_description")} ({field.value.length}/500)
                      </FormDescription>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {t("cancel")}
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting || watchedRating === 0}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("submitting")}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        {t("submit_rating")}
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 text-center"
      >
        <p className="text-gray-500 text-sm">{t("privacy_note")}</p>
      </motion.div>
    </div>
  );
};
