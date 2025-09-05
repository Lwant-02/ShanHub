import { useState } from "react";
import { Heart, MessageCircle, Reply } from "lucide-react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface PostCardProps {
  post: any;
  formatTimeAgo: (timestamp: Date) => string;
  t: any;
  isLoggedIn?: boolean;
}

export const PostCard = ({
  post,
  formatTimeAgo,
  t,
  isLoggedIn,
}: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [posts, setPosts] = useState([post]);

  const handleComment = () => {
    if (!newComment.trim()) return;
    // In a real app, you'd send this to your backend
    console.log("New comment:", newComment);
    setNewComment("");
  };

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
      <CardHeader className="flex justify-start items-center">
        <div className="flex items-start gap-3 py-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
              {post.author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-semibold text-white">{post.author.name}</h3>
            <p className="text-gray-400 text-sm">
              {formatTimeAgo(post.timestamp)}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 ">
        <p className="text-gray-300 leading-relaxed mb-4">{post.content}</p>
        {/* Post Actions */}
        <div className="flex items-center gap-6 pt-4 border-t border-white/10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleLike(post.id)}
            className={`gap-2 cursor-pointer ${
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
            className="gap-2 text-gray-400 hover:text-blue-400 cursor-pointer"
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
