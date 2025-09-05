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
import { useState } from "react";

interface SortProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
  setIsDialogOpen: (open: boolean) => void;
}
export const Sort = ({ sortBy, setSortBy, setIsDialogOpen }: SortProps) => {
  const t = useTranslations("CommunityPage");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const sortOptions = [
    { key: "latest", label: t("sort.latest"), icon: Clock },
    { key: "popular", label: t("sort.popular"), icon: Heart },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleOpenCreatePost = () => {
    setIsDialogOpen(true);
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
          text={isLoggedIn ? t("create_post_button") : t("login_button")}
          variant="primary"
          className="w-44"
          icon={
            isLoggedIn ? (
              <Plus className="w-4 h-4" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )
          }
          onClick={isLoggedIn ? handleOpenCreatePost : handleLogin}
        />
      </div>
    </motion.div>
  );
};
