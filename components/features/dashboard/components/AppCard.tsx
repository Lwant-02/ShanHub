import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomButton } from "@/components/CustomButton";

interface AppCardProps {
  app: App;
  t: any;
}

const getBadgeColor = (badge: string | null) => {
  switch (badge) {
    case "new":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "popular":
      return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    default:
      return "";
  }
};

export const AppCard = ({ app, t }: AppCardProps) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div
            className={`bg-gradient-to-br ${app.gradient} rounded-xl flex items-center justify-center transition-transform duration-300 size-12`}
          >
            <app.icon className={`text-white size-6`} />
          </div>
          {app.badge && (
            <span
              className={`px-2 py-1 rounded-full text-xs border ${getBadgeColor(
                app.badge
              )}`}
            >
              {t(`${app.badge}_badge`)}
            </span>
          )}
        </div>
        <CardTitle
          className={`text-white group-hover:text-emerald-400 transition-colors text-lg`}
        >
          {app.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {app.description}
        </p>

        <div className="grid xl:grid-cols-2 gap-2 grid-cols-1">
          <CustomButton
            text={t("rate_app")}
            variant="secondary"
            className="w-full"
            link={`/dashboard/rating/${app.id}`}
            disabled={app.status === "coming_soon"}
          />
          <CustomButton
            text={
              app.status === "coming_soon" ? t("coming_soon") : t("launch_app")
            }
            variant="primary"
            className="w-full"
            link={app.link ? app.link : `/dashboard/${app.id}`}
            disabled={app.status === "coming_soon"}
          />
        </div>
      </CardContent>
    </Card>
  );
};
