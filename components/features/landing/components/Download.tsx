"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Download as DownloadIcon, Monitor } from "lucide-react";

import { Button } from "../../../ui/button";
import AnimateOnview from "@/components/AnimateOnview";

export const Download = () => {
  const t = useTranslations("HomePage.Download");
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimateOnview>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t("content")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-12">
            {/* Desktop Download */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Monitor className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("desktop_title")}
              </h3>
              <p className="opacity-80 mb-4">{t("desktop_content")}</p>
              <Button
                onClick={handleInstall}
                disabled={!isInstallable}
                variant="outline"
                className="w-full border-blue-500/30 hover:bg-blue-500/10 cursor-pointer"
              >
                <DownloadIcon className="w-4 h-4 mr-2" />
                {t("install_button")}
              </Button>
            </div>
          </div>
        </AnimateOnview>
        {/* Installation Instructions */}
        <AnimateOnview>
          <div className="bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl p-8 border border-emerald-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                {t("instructions_title")}
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-emerald-400">
                  {t("chrome_title")}
                </h4>
                <ol className="space-y-2 opacity-90">
                  <li>1. {t("chrome_step1")}</li>
                  <li>2. {t("chrome_step2")}</li>
                  <li>3. {t("chrome_step3")}</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-400">
                  {t("safari_title")}
                </h4>
                <ol className="space-y-2 opacity-90">
                  <li>1. {t("safari_step1")}</li>
                  <li>2. {t("safari_step2")}</li>
                  <li>3. {t("safari_step3")}</li>
                </ol>
              </div>
            </div>
          </div>
        </AnimateOnview>
      </div>
    </section>
  );
};
