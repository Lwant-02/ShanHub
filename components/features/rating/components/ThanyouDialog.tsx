import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";

import { CustomButton } from "@/components/CustomButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface ThanyouDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export const ThanyouDialog = ({ open, onOpenChange }: ThanyouDialogProps) => {
  const t = useTranslations("RatingPage");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/70 backdrop-blur-sm border border-green/20 rounded-2xl flex justify-center items-center flex-col">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="size-16 text-emerald-400 mx-auto " />
        </motion.div>
        <DialogTitle className="text-2xl font-bold text-white mb-2">
          {t("thank_you")}
        </DialogTitle>
        <DialogDescription className="text-gray-300 text-lg">
          {t("rating_submitted")}
        </DialogDescription>
        <div className="space-y-3">
          <CustomButton
            text={t("close_btn")}
            className="w-32"
            variant="secondary"
            onClick={() => onOpenChange(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
