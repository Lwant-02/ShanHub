"use client";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface ClientAppWrapperProps {
  children: React.ReactNode;
}

export const ClientAppWrapper = ({ children }: ClientAppWrapperProps) => {
  const t = useTranslations("RatingPage");
  const pathName = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 10, behavior: "smooth" });
  }, [pathName]);

  return (
    <div className="w-full mx-auto min-h-screen py-5">
      <Link
        href="/dashboard"
        className="text-green/80 hover:text-green cursor-pointer mb-4 text-base flex gap-2 justify-center items-center w-fit"
      >
        <ArrowLeft className="size-5" />
        {t("go_back")}
      </Link>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};
