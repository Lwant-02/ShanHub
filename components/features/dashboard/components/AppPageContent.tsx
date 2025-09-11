import { useMessages } from "next-intl";

import { ShanProverbsViewPage } from "../../tools/shan_proverbs/ShanProverbsViewPage";
import { Spinner } from "@/components/Spinner";

export const AppPageContent = ({ appId }: { appId: string }) => {
  const messages = useMessages();

  if (!messages) {
    return <Spinner size="12" />;
  }

  switch (appId) {
    case "ShanProverbs":
      return <ShanProverbsViewPage />;
    default:
      return <div className="text-white">{appId}</div>;
  }
};
