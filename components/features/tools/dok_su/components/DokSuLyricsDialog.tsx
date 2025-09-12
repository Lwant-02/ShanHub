import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/Spinner";
import { Dok_Su_Titles } from "@/constant/constant";

interface DokSuLyricsDialogProps {
  id: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DokSuLyricsDialog = ({
  id,
  open,
  onOpenChange,
}: DokSuLyricsDialogProps) => {
  const t = useTranslations("DokSu");
  const [text, setText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const title = useMemo(() => {
    return Dok_Su_Titles.find((doksu) => doksu.id === id)?.title;
  }, [id]);

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/resources/dok_su/tmk${id}.txt`);
        if (!res.ok) throw new Error("Failed to load");
        const t = await res.text();
        setText(t);
      } catch (e) {
        setError("Failed to load lyrics.");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner size="12" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-12">{t("failed_to_load")}</div>;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/70 backdrop-blur-sm border border-green/20 rounded-2xl ">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="w-full"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mt-3">
              ({id}){t("doksu")} - {title}
            </DialogTitle>
            <DialogDescription className="text-xl opacity-90 sr-only">
              Dialog for viewing lyrics
            </DialogDescription>
            <div className="flex justify-center items-center mt-4">
              <pre className="whitespace-pre-wrap font-primary! text-xl font-semibold max-h-96 overflow-scroll text-blue-400">
                {text}
              </pre>
            </div>
          </DialogHeader>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
