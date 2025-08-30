import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "highlighted" | "minimal";
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  gradient = "from-emerald-500 to-blue-600",
  size = "medium",
  variant = "default",
}) => {
  const sizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8",
  };

  const iconSizes = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  const titleSizes = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "highlighted":
        return "bg-gradient-to-br from-white/20 to-white/5 border-2 border-emerald-400/30 shadow-lg shadow-emerald-500/20";
      case "minimal":
        return "bg-white/5 border border-white/10 hover:bg-white/10";
      default:
        return "bg-white/10 border border-white/20 hover:bg-white/20";
    }
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${getVariantClasses()}
        backdrop-blur-sm rounded-2xl
        transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10
        group cursor-pointer w-72
        
      `}
    >
      {/* Icon Container */}
      <div className="flex items-center justify-center mb-4">
        <div
          className={`
            ${iconSizes[size]}
            bg-gradient-to-br ${gradient}
            rounded-xl flex items-center justify-center
            group-hover:scale-110 transition-transform duration-300
            shadow-lg
          `}
        >
          <Icon className="w-1/2 h-1/2 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-3">
        {/* Title */}
        <div>
          <h3 className={`${titleSizes[size]} font-bold text-white mb-1`}>
            {title}
          </h3>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center pt-2">
          <div
            className={`w-8 h-1 bg-gradient-to-r ${gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
          />
        </div>
      </div>
    </div>
  );
};
