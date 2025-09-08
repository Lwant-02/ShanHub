import { useTranslations } from "next-intl";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { CustomButton } from "@/components/CustomButton";
import { signIn } from "@/lib/auth-client";
import { SocialIcon } from "@/components/SocialIcon";
import { Separator } from "@radix-ui/react-separator";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const t = useTranslations("Auth");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
      errorCallbackURL: "/error",
    });
  };

  const handleFacebookLogin = async () => {
    await signIn.social({
      provider: "facebook",
      callbackURL: "/",
      errorCallbackURL: "/error",
    });
  };

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
            <DialogTitle className="text-2xl py-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {t("title")}
            </DialogTitle>
            <DialogDescription className="text-xl opacity-90">
              {t("sub_title")}
            </DialogDescription>

            <CustomButton
              className="mt-2 py-5"
              text={t("google_text")}
              icon={<SocialIcon provider={"google" as Provider} />}
              variant="secondary"
              onClick={handleGoogleLogin}
              disabled={!agreedToTerms}
            />
            <Separator className="flex items-center w-full text-gray-400 my-4">
              <span className="flex-grow border-t border-gray-300 opacity-50"></span>
              <span className="mx-3 text-sm font-medium">{t("or")}</span>
              <span className="flex-grow border-t border-gray-300 opacity-50"></span>
            </Separator>

            <CustomButton
              className=" py-5"
              text={t("facebook_text")}
              icon={<SocialIcon provider={"facebook" as Provider} />}
              variant="secondary"
              onClick={handleFacebookLogin}
              disabled={!agreedToTerms}
            />

            {/* Terms of Service and Privacy Policy Agreement */}
            <div className="flex justify-center items-center space-x-3 mt-4">
              <Checkbox
                id="terms-agreement"
                checked={agreedToTerms}
                onCheckedChange={(checked) =>
                  setAgreedToTerms(checked as boolean)
                }
                className="border border-green/50 bg-green/20 text-green cursor-pointer"
              />
              <label
                htmlFor="terms-agreement"
                className="text-sm text-gray-300 leading-relaxed cursor-pointer"
              >
                {t("terms_agreement")}{" "}
                <Link
                  href="/terms-of-service"
                  className="text-emerald-400 hover:text-emerald-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("terms_of_service")}
                </Link>{" "}
                {t("and")}{" "}
                <Link
                  href="/privacy-policy"
                  className="text-emerald-400 hover:text-emerald-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("privacy_policy")}
                </Link>
              </label>
            </div>
          </DialogHeader>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
