import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { PostCard } from "./PostCard";
import { item } from "../../landing/components/Hero";
import { formatTimeAgo } from "@/lib/utils";

export const PostFeed = () => {
  const t = useTranslations("CommunityPage");
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
      liked: false,
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
      liked: true,
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
      liked: false,
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
      liked: true,
    },
  ];
  return (
    <motion.div variants={item} className="space-y-6">
      {mockPosts.length === 0 ? (
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardContent className="p-8 text-center">
            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">{t("no_posts")}</p>
          </CardContent>
        </Card>
      ) : (
        mockPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            formatTimeAgo={formatTimeAgo}
            t={t}
          />
        ))
      )}
    </motion.div>
  );
};
