import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    content: string;
    avatar: string;
  };
  index: number;
}
export const TestimonialCard = ({
  testimonial,
  index,
}: TestimonialCardProps) => {
  return (
    <div
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 w-72"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center mb-4 gap-2">
        <Avatar>
          <AvatarImage
            src={testimonial.avatar || "https://github.com/shadcn.png"}
          />
          <AvatarFallback>{testimonial.name}</AvatarFallback>
        </Avatar>
        <h4 className="font-bold text-white">{testimonial.name}</h4>
      </div>
      <p className="text-gray-300 mb-3 leading-relaxed">
        {testimonial.content}
      </p>
      <div className="flex text-yellow-400 mt-4 gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
    </div>
  );
};
