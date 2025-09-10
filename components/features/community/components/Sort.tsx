import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Clock, Heart, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { item } from "../../landing/components/Hero";
import { CustomButton } from "@/components/CustomButton";
import { useSession } from "@/lib/auth-client";
import { useAuthStore } from "@/store/auth.store";
import { useUtilStore } from "@/store/util.store";

interface SortProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
}
export const Sort = ({ sortBy, setSortBy }: SortProps) => {
  const { data: session } = useSession();
  const { setisCreatePostDialogOpen } = useUtilStore();
  const { setIsLoginDialogOpen } = useAuthStore();
  const isAuthenticated = !!session;
  const t = useTranslations("CommunityPage");
  const sortOptions = [
    { key: "latest", label: t("sort.latest"), icon: Clock },
    { key: "popular", label: t("sort.popular"), icon: Heart },
  ];

  const handleLogin = () => {
    setIsLoginDialogOpen(true);
  };

  const handleOpenCreatePost = () => {
    setisCreatePostDialogOpen(true);
  };

  return (
    <motion.div variants={item} className="mb-6">
      <div className="flex w-full gap-2 justify-end items-center ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-blue-500/50 text-blue-400 w-44 cursor-pointer rounded-lg"
            >
              {(() => {
                const selectedSort = sortOptions.find(
                  (opt) => opt.key === sortBy
                );
                return selectedSort ? (
                  <>
                    <selectedSort.icon className="w-4 h-4 " />
                    {selectedSort.label}
                  </>
                ) : null;
              })()}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/90 border-blue-500/20 w-44">
            {sortOptions.map((option) => (
              <DropdownMenuItem
                key={option.key}
                onClick={() => setSortBy(option.key)}
                className="text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 cursor-pointer"
              >
                <option.icon className="w-4 h-4" />
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CustomButton
          text={isAuthenticated ? t("create_post_button") : t("login_button")}
          variant="primary"
          className="w-44"
          icon={
            isAuthenticated ? (
              <Plus className="w-4 h-4" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )
          }
          onClick={isAuthenticated ? handleOpenCreatePost : handleLogin}
        />
      </div>
    </motion.div>
  );
};
