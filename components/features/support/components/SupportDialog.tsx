import { motion } from "framer-motion";
import Link from "next/link";
import { Coffee, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";

import { CustomButton } from "@/components/CustomButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { developers_contacts } from "@/constant/constant";
import { useTranslations } from "next-intl";

interface SupportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export const SupportDialog = ({ open, onOpenChange }: SupportDialogProps) => {
  const t = useTranslations("SupportPage.support_dialog");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/70 backdrop-blur-sm border border-green/20 rounded-2xl flex justify-center items-center flex-col p-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="w-full"
        >
          <div className="flex flex-col items-center text-center gap-2 mb-4">
            <div className="rounded-full bg-emerald-500/10 border border-emerald-400/30 p-3 mb-1">
              <Coffee className="size-6 text-emerald-400" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white">
              {t("title")}
            </DialogTitle>
            <DialogDescription className="text-gray-300 text-base">
              {t("content")}
            </DialogDescription>
          </div>

          <div className="w-full">
            <h3 className="text-lg font-semibold text-white mb-2">
              {t("maintainer")}
            </h3>
            <div className="space-y-2">
              {developers_contacts.map((contact) => (
                <Link
                  key={contact.title}
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-blue-400/30 bg-blue-500/10 hover:bg-blue-500/15 transition-colors p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/svg/facebook.svg"
                      alt="Facebook Logo"
                      width={24}
                      height={24}
                    />
                    <span className="text-gray-200 group-hover:text-white">
                      {contact.title}
                    </span>
                  </div>
                  <ExternalLink className="size-4 text-gray-400" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 w-full">
            <CustomButton
              text={t("btn")}
              className="w-full"
              variant="secondary"
              onClick={() => onOpenChange(false)}
            />
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
