"use client";
import { useMessages } from "next-intl";

import { ShanProverbsViewPage } from "../../tools/shan_proverbs/ShanProverbsViewPage";
import { Spinner } from "@/components/Spinner";
import { DokSuViewPage } from "../../tools/dok_su/DokSuViewPage";

export const AppPageContent = ({ appId }: { appId: string }) => {
  const messages = useMessages();

  if (!messages) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner size="12" />
      </div>
    );
  }

  switch (appId) {
    case "DokSu":
      return <DokSuViewPage />;
    case "ShanProverbs":
      return <ShanProverbsViewPage />;
    default:
      return <div className="text-white">{appId}</div>;
  }
};
