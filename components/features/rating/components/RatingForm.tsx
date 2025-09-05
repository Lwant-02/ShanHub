"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Send } from "lucide-react";
import { CustomButton } from "@/components/CustomButton";

interface RatingFormProps {
  setIsSubmitted: (isSubmitted: boolean) => void;
  setShowRatingForm: (show: boolean) => void;
}
export const RatingForm = ({
  setIsSubmitted,
  setShowRatingForm,
}: RatingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations("RatingPage");

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
  const ratingLabels = [
    t("rating_labels.terrible"),
    t("rating_labels.bad"),
    t("rating_labels.okay"),
    t("rating_labels.good"),
    t("rating_labels.excellent"),
  ];

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      setShowRatingForm(false);
    } catch (error) {
      console.error("Error submitting rating:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    form.reset();
  };
  return (
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        {...field}
                        className="border border-green/50 focus:ring-1! focus:ring-green/80 rounded-lg h-40 resize-none"
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
              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 pt-4">
                <CustomButton
                  text={t("cancel")}
                  variant="secondary"
                  onClick={resetForm}
                />
                <CustomButton
                  text={t("submit_rating")}
                  variant="primary"
                  type="submit"
                  icon={<Send className="w-4 h-4" />}
                  disabled={isSubmitting || watchedRating === 0}
                />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};
