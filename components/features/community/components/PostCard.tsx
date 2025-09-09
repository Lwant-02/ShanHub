import { useState } from "react";
import { ArrowRight, Heart, MessageCircle } from "lucide-react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";
import { CustomButton } from "@/components/CustomButton";
import { LoginDialog } from "../../auth/LoginDialog";
import { useSession } from "@/lib/auth-client";

interface PostCardProps {
  post: any;
  formatTimeAgo: (timestamp: Date) => string;
  t: any;
}

export const PostCard = ({ post, formatTimeAgo, t }: PostCardProps) => {
  const { data: session } = useSession();
  const [showComments, setShowComments] = useState(false);
  const [posts, setPosts] = useState([post]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isAuthenticated = !!session;

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
    <>
      <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
        <CardHeader className="flex justify-start items-center">
          <div className="flex items-start gap-3 py-2">
            <Avatar className="w-10 h-10">
              <AvatarImage
                src={post.author.avatar}
                alt={post.author.name}
                className="object-cover size-full"
              />
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
              disabled={!isAuthenticated}
              onClick={() => handleLike(post.id)}
              className={`gap-2 cursor-pointer ${
                post.liked
                  ? "text-red-400 hover:text-red-300"
                  : "text-gray-400 hover:text-red-400"
              }`}
            >
              <Heart
                className={`w-4 h-4 ${post.liked ? "fill-current" : ""}`}
              />
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
          </div>

          {/* Comments Section */}
          {showComments && (
            <div className="mt-6 pt-4 border-t border-white/10 space-y-4">
              {/* Mock Comments */}
              <div className="space-y-3 h-64 overflow-y-scroll">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <CommentCard key={i} />
                ))}
              </div>

              {/* Add Comment */}
              {isAuthenticated ? (
                <CommentForm />
              ) : (
                <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-5 text-center flex flex-col gap-3">
                  <p className="text-gray-400 text-sm">{t("login_required")}</p>
                  <div className="w-40 mx-auto">
                    <CustomButton
                      text={t("login_button")}
                      variant="primary"
                      className="w-full"
                      icon={<ArrowRight className="w-4 h-4" />}
                      onClick={() => setIsDialogOpen(true)}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
      <LoginDialog onOpenChange={setIsDialogOpen} open={isDialogOpen} />
    </>
  );
};
