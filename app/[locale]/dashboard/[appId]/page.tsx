import { AppPageContent } from "@/components/features/dashboard/components/AppPageContent";
import { ClientAppWrapper } from "@/components/features/dashboard/components/ClientAppWrapper";

type AppPageProps = {
  params: Promise<{ appId: string }>;
};

export const generateMetadata = async ({ params }: AppPageProps) => {
  const { appId } = await params;
  return {
    title: `ShanHub | ${appId}`,
    description: `ShanHub ${appId} page`,
  };
};

export default async function AppPage({ params }: AppPageProps) {
  const { appId } = await params;

  return (
    <ClientAppWrapper>
      <AppPageContent appId={appId} />
    </ClientAppWrapper>
  );
}
