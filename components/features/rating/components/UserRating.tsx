import { StarRating } from "@/components/ui/star-rating";
import { formatDate } from "@/lib/utils";

interface UserRatingProps {
  rating: {
    id: number;
    userName: string;
    rating: number;
    review: string;
    date: string;
    avatar: string;
  };
}
export const UserRating = ({ rating }: UserRatingProps) => {
  return (
    <div
      id={`rating-${rating.id}`}
      className="bg-gray-900/50 border border-white/20 rounded-2xl p-6 mb-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-white font-bold">{rating.avatar}</span>
          </div>
          <div>
            <h4 className="text-white">{rating.userName}</h4>
            <p className="text-gray-400 text-sm">{formatDate(rating.date)}</p>
          </div>
        </div>
        <StarRating rating={rating.rating} readonly size="sm" />
      </div>
      <p className="text-gray-300">{rating.review}</p>
    </div>
  );
};
