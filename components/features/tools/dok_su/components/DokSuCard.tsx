"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { item } from "@/components/features/landing/components/Hero";
import { DokSuLyricsDialog } from "./DokSuLyricsDialog";
import { Button } from "@/components/ui/button";

interface DokSuCardProps {
  doksu: { id: number; title: string };
  index: number;
}

export const DokSuCard = ({ doksu, index }: DokSuCardProps) => {
  const t = useTranslations("DokSu");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <motion.div variants={item}>
      <Card className="bg-gray-800/30 border-gray-700 hover:border-blue-500/50 transition-colors cursor-pointer">
        <CardContent>
          <div className="flex flex-col gap-2">
            <span className="text-blue-400 text-lg font-semibold">
              ({index}){t("doksu")} - {doksu.title}
            </span>
            <Button
              onClick={() => setIsDialogOpen(true)}
              variant="ghost"
              type="button"
              className="text-sm hover:underline flex gap-2 justify-end items-center cursor-pointer"
            >
              {t("view_lyrics")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
      <DokSuLyricsDialog
        id={doksu.id}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </motion.div>
  );
};
