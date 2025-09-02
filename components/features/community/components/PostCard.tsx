import { useState } from "react";
import { Heart, MessageCircle, Reply } from "lucide-react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface PostCardProps {
  post: any;
  onLike: (postId: number) => void;
  formatTimeAgo: (timestamp: Date) => string;
  t: any;
  isLoggedIn: boolean;
}

export const PostCard = ({
  post,
  onLike,
  formatTimeAgo,
  t,
  isLoggedIn,
}: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleComment = () => {
    if (!newComment.trim()) return;
    // In a real app, you'd send this to your backend
    console.log("New comment:", newComment);
    setNewComment("");
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      apps: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      culture: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      discussion: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      language: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      question: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      announcement: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return colors[category as keyof typeof colors] || colors.discussion;
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
              {post.author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-white">{post.author.name}</h3>
              {post.author.verified && (
                <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
              <span className="text-gray-400 text-sm">
                @{post.author.username}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-sm">
                {formatTimeAgo(post.timestamp)}
              </p>
              <span
                className={`px-2 py-1 rounded-full text-xs border ${getCategoryColor(
                  post.category
                )}`}
              >
                {t(`categories.${post.category}`)}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-300 leading-relaxed mb-4">{post.content}</p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full border border-white/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Post Actions */}
        <div className="flex items-center gap-6 pt-4 border-t border-white/10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLike(post.id)}
            className={`gap-2 ${
              post.liked
                ? "text-red-400 hover:text-red-300"
                : "text-gray-400 hover:text-red-400"
            }`}
          >
            <Heart className={`w-4 h-4 ${post.liked ? "fill-current" : ""}`} />
            {post.likes}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowComments(!showComments)}
            className="gap-2 text-gray-400 hover:text-blue-400"
          >
            <MessageCircle className="w-4 h-4" />
            {post.comments}
          </Button>

          {isLoggedIn && (
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-gray-400 hover:text-emerald-400"
            >
              <Reply className="w-4 h-4" />
              {t("reply_button")}
            </Button>
          )}
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-6 pt-4 border-t border-white/10 space-y-4">
            {/* Add Comment */}
            {isLoggedIn && (
              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white text-xs">
                    Y
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <Textarea
                    placeholder={t("comment_placeholder")}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="min-h-[80px] bg-white/5 border-white/20 text-white placeholder:text-gray-400 resize-none"
                  />
                  <Button
                    onClick={handleComment}
                    disabled={!newComment.trim()}
                    size="sm"
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700"
                  >
                    {t("comment_button")}
                  </Button>
                </div>
              </div>
            )}

            {/* Mock Comments */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600 text-white text-xs">
                    N
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-white text-sm">
                      Nang Aye
                    </span>
                    <span className="text-gray-400 text-xs">2h ago</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Great post! Thanks for sharing this with the community. 👍
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
