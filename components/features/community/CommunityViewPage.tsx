"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Plus,
  MessageCircle,
  Heart,
  Filter,
  TrendingUp,
  Clock,
  Users,
  Hash,
  Globe,
  BookOpen,
  Megaphone,
  HelpCircle,
} from "lucide-react";

import { container, item } from "@/components/features/landing/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PostCard } from "./components/PostCard";
import { CustomButton } from "@/components/CustomButton";

// Mock data - in a real app, this would come from your backend
const mockPosts = [
  {
    id: 1,
    author: {
      name: "Sai Kham",
      avatar: "/api/placeholder/40/40",
      username: "saikham_shan",
      verified: true,
    },
    content:
      "မင်းတွေ ShanHub ရဲ့ font converter ကို သုံးကြည့်ပြီးပြီလား? အရမ်းကောင်းတယ်! ဒါကြောင့် ကျွန်တော်တို့ရဲ့ traditional texts တွေကို digital format ပြောင်းလို့ရပြီ 📝✨",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    likes: 12,
    comments: 3,
    category: "apps",
    liked: false,
    tags: ["font-converter", "tools"],
  },
  {
    id: 2,
    author: {
      name: "Nang Kham",
      avatar: "/api/placeholder/40/40",
      username: "nangkham",
      verified: false,
    },
    content:
      "ကျွန်တော်တို့ရဲ့ ရိုးရာ ဆန်းသီချင်းတွေကို ဒီမှာ share လုပ်ကြရအောင်။ ယဉ်ကျေးမှုကို ထိန်းသိမ်းကြရအောင် 🎵🏛️ ဘယ်သူ့မှာ traditional songs တွေ ရှိလဲ?",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    likes: 25,
    comments: 8,
    category: "culture",
    liked: true,
    tags: ["music", "tradition", "culture"],
  },
  {
    id: 3,
    author: {
      name: "Khun Sai",
      avatar: "/api/placeholder/40/40",
      username: "khunsai_dev",
      verified: true,
    },
    content:
      "ShanHub community မှာ developer တွေ ရှိလား? Open source project တွေမှာ contribute လုပ်ချင်တယ် 💻🚀 GitHub မှာ repository တွေ ရှိပြီးပြီ!",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    likes: 18,
    comments: 12,
    category: "discussion",
    liked: false,
    tags: ["development", "open-source", "github"],
  },
  {
    id: 4,
    author: {
      name: "Aye Chan",
      avatar: "/api/placeholder/40/40",
      username: "ayechan_teacher",
      verified: false,
    },
    content:
      "ဆန်းဘာသာ သင်ခန်းစာတွေ အတွက် ShanHub ရဲ့ learning tools တွေ အရမ်းကောင်းတယ်! ကျောင်းသားတွေကို သင်ပေးတဲ့အခါ အသုံးဝင်တယ် 📚👨‍🏫",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    likes: 31,
    comments: 15,
    category: "language",
    liked: true,
    tags: ["education", "teaching", "learning"],
  },
];

export default function CommunityViewPage() {
  const t = useTranslations("CommunityPage");
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState("");
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state

  const categories = [
    { key: "all", label: t("categories.all"), icon: Globe },
    {
      key: "discussion",
      label: t("categories.discussion"),
      icon: MessageCircle,
    },
    { key: "question", label: t("categories.question"), icon: HelpCircle },
    {
      key: "announcement",
      label: t("categories.announcement"),
      icon: Megaphone,
    },
    { key: "culture", label: t("categories.culture"), icon: Hash },
    { key: "language", label: t("categories.language"), icon: BookOpen },
    { key: "apps", label: t("categories.apps"), icon: Users },
  ];

  const sortOptions = [
    { key: "latest", label: t("sort.latest"), icon: Clock },
    { key: "popular", label: t("sort.popular"), icon: Heart },
    { key: "trending", label: t("sort.trending"), icon: TrendingUp },
  ];

  const handleCreatePost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      author: {
        name: "You",
        avatar: "/api/placeholder/40/40",
        username: "current_user",
        verified: false,
      },
      content: newPost,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      category: "discussion",
      liked: false,
      tags: ["community"],
    };

    setPosts([post, ...posts]);
    setNewPost("");
    setIsCreatingPost(false);
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

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - timestamp.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    if (diffInMinutes < 10080)
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    return `${Math.floor(diffInMinutes / 10080)}w ago`;
  };

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen py-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4">
            {t("title")}
          </h1>
          <p className="text-gray-400 text-xl mb-6">{t("subtitle")}</p>

          {/* Community Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <span className="text-2xl font-bold text-white">1.2K</span>
              </div>
              <p className="text-gray-400 text-sm">Active Members</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span className="text-2xl font-bold text-white">
                  {posts.length}
                </span>
              </div>
              <p className="text-gray-400 text-sm">Total Posts</p>
            </div>
          </div>
        </motion.div>

        {/* Filters and Sort */}
        <motion.div variants={item} className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            {/* Categories Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-emerald-500/50 text-emerald-400"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {
                    categories.find((cat) => cat.key === selectedCategory)
                      ?.label
                  }
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 border-emerald-500/20">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className="text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10"
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sort Options */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-blue-500/50 text-blue-400"
                >
                  {(() => {
                    const selectedSort = sortOptions.find(
                      (opt) => opt.key === sortBy
                    );
                    return selectedSort ? (
                      <>
                        <selectedSort.icon className="w-4 h-4 mr-2" />
                        {selectedSort.label}
                      </>
                    ) : null;
                  })()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 border-blue-500/20">
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.key}
                    onClick={() => setSortBy(option.key)}
                    className="text-gray-300 hover:text-blue-400 hover:bg-blue-500/10"
                  >
                    <option.icon className="w-4 h-4 mr-2" />
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </motion.div>

        {/* Create Post Section */}
        <motion.div variants={item} className="mb-8">
          {isLoggedIn ? (
            <Card className="bg-white/5 backdrop-blur-sm border-emerald-500/20">
              <CardContent className="p-6">
                {!isCreatingPost ? (
                  <Button
                    onClick={() => setIsCreatingPost(true)}
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {t("create_post")}
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <Textarea
                      placeholder={t("post_placeholder")}
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-gray-400 resize-none"
                    />
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsCreatingPost(false);
                          setNewPost("");
                        }}
                        className="border-gray-500/50 text-gray-400"
                      >
                        {t("cancel_button")}
                      </Button>
                      <Button
                        onClick={handleCreatePost}
                        disabled={!newPost.trim()}
                        className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700"
                      >
                        {t("post_button")}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/5 backdrop-blur-sm border-orange-500/20">
              <CardContent className="p-6 text-center">
                <p className="text-gray-300 mb-4">{t("login_required")}</p>
                <CustomButton
                  text={t("login_button")}
                  variant="primary"
                  onClick={() => setIsLoggedIn(true)}
                />
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Posts Feed */}
        <motion.div variants={item} className="space-y-6">
          {filteredPosts.length === 0 ? (
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">{t("no_posts")}</p>
              </CardContent>
            </Card>
          ) : (
            filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onLike={handleLike}
                formatTimeAgo={formatTimeAgo}
                t={t}
                isLoggedIn={isLoggedIn}
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
