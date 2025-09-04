import { motion } from "framer-motion";
import { ArrowLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { StarRating } from "@/components/ui/star-rating";
import { CustomButton } from "@/components/CustomButton";

interface HeaderProps {
  name: string;
  gradient: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  averageRating: number;
  mockRatings: number;
  showRatingForm: boolean;
  setShowRatingForm: (show: boolean) => void;
}

export const Header = ({
  name,
  gradient,
  icon: IconComponent,
  averageRating,
  mockRatings,
  showRatingForm,
  setShowRatingForm,
}: HeaderProps) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <button
        onClick={() => router.back()}
        className="text-green/80 hover:text-green cursor-pointer mb-4 text-base flex gap-2 justify-center items-center"
      >
        <ArrowLeft className="size-5" />
        Back to Dashboard
      </button>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
          >
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{name}</h1>
            <div className="flex items-center gap-3 mt-2">
              <StarRating rating={averageRating} readonly size="sm" />
              <span className="text-yellow-400 font-semibold">
                {averageRating.toFixed(1)}
              </span>
              <span className="text-gray-400">({mockRatings} rating)</span>
            </div>
          </div>
        </div>

        {!showRatingForm && (
          <CustomButton
            text="Give Rating"
            icon={<Plus className="w-4 h-4 mr-2" />}
            variant="primary"
            onClick={() => setShowRatingForm(true)}
          />
        )}
      </div>
    </motion.div>
  );
};
