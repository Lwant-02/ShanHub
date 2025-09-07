import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const CommentCard = () => {
  return (
    <div className="flex gap-3">
      <Avatar className="w-8 h-8">
        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600 text-white text-xs">
          N
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium text-white text-sm">Nang Aye</span>
          <span className="text-gray-400 text-xs">2h ago</span>
        </div>
        <p className="text-gray-300 text-sm">
          Great post! Thanks for sharing this with the community. 👍
        </p>
      </div>
    </div>
  );
};
