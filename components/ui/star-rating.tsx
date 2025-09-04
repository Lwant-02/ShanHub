"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  size?: "sm" | "md" | "lg";
  readonly?: boolean;
  showLabel?: boolean;
  className?: string;
}

const StarRating = ({ 
  rating, 
  onRatingChange, 
  size = "md", 
  readonly = false,
  showLabel = false,
  className
}: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  const ratingLabels = ["Terrible", "Bad", "Okay", "Good", "Excellent"];

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={readonly}
            className={cn(
              "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded",
              !readonly && "hover:scale-110 cursor-pointer",
              readonly && "cursor-default"
            )}
            onClick={() => !readonly && onRatingChange?.(star)}
            onMouseEnter={() => !readonly && setHoverRating(star)}
            onMouseLeave={() => !readonly && setHoverRating(0)}
          >
            <Star
              className={cn(
                sizeClasses[size],
                "transition-colors duration-200",
                (hoverRating >= star || rating >= star)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-400 hover:text-yellow-300"
              )}
            />
          </button>
        ))}
      </div>
      {showLabel && rating > 0 && (
        <span className="text-sm text-emerald-400 font-medium">
          {ratingLabels[rating - 1]}
        </span>
      )}
    </div>
  );
};

export { StarRating };
