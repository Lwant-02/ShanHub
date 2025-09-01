"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Keyboard,
  Type,
  FileText,
  Languages,
  Music,
  Calendar,
  StickyNote,
  BookOpen,
  Sparkles,
  TrendingUp,
  Users,
  Download,
  Star,
  Clock,
  Zap,
  Heart,
  Search,
  Filter,
  Grid,
  List,
} from "lucide-react";

import { container, item } from "@/components/features/landing/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardViewPage() {
  const t = useTranslations("DashboardPage");
  const appT = useTranslations("HomePage.Features.app");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const apps = [
    {
      id: "LikDai",
      name: appT("LikDai"),
      description: t("app_descriptions.LikDai"),
      icon: Keyboard,
      gradient: "from-blue-500 to-purple-600",
      category: "language_tools",
      status: "available",
      badge: "popular",
      featured: true,
    },
    {
      id: "FontConverter",
      name: appT("FontConverter"),
      description: t("app_descriptions.FontConverter"),
      icon: Type,
      gradient: "from-emerald-500 to-teal-600",
      category: "converters",
      status: "available",
      badge: "new",
      featured: true,
    },
    {
      id: "TaiLeConverter",
      name: appT("TaiLeConverter"),
      description: t("app_descriptions.TaiLeConverter"),
      icon: Languages,
      gradient: "from-orange-500 to-red-600",
      category: "converters",
      status: "available",
      badge: null,
      featured: true,
    },
    {
      id: "ShanTranslit",
      name: appT("ShanTranslit"),
      description: t("app_descriptions.ShanTranslit"),
      icon: FileText,
      gradient: "from-pink-500 to-rose-600",
      category: "converters",
      status: "available",
      badge: null,
      featured: false,
    },
    {
      id: "ShanSyllable",
      name: appT("ShanSyllable"),
      description: t("app_descriptions.ShanSyllable"),
      icon: Zap,
      gradient: "from-indigo-500 to-blue-600",
      category: "converters",
      status: "available",
      badge: null,
      featured: false,
    },
    {
      id: "TaiLeSyllable",
      name: appT("TaiLeSyllable"),
      description: t("app_descriptions.TaiLeSyllable"),
      icon: Sparkles,
      gradient: "from-cyan-500 to-blue-600",
      category: "converters",
      status: "available",
      badge: null,
      featured: false,
    },
    {
      id: "ShanWordSorting",
      name: appT("ShanWordSorting"),
      description: t("app_descriptions.ShanWordSorting"),
      icon: BookOpen,
      gradient: "from-green-500 to-emerald-600",
      category: "utilities",
      status: "available",
      badge: null,
      featured: false,
    },
    {
      id: "ShanProverbs",
      name: appT("ShanProverbs"),
      description: t("app_descriptions.ShanProverbs"),
      icon: Heart,
      gradient: "from-purple-500 to-pink-600",
      category: "cultural",
      status: "available",
      badge: "popular",
      featured: true,
    },
    {
      id: "DokSu",
      name: appT("DokSu"),
      description: t("app_descriptions.DokSu"),
      icon: Music,
      gradient: "from-yellow-500 to-orange-600",
      category: "cultural",
      status: "available",
      badge: null,
      featured: true,
    },
    {
      id: "PakPi",
      name: appT("PakPi"),
      description: t("app_descriptions.PakPi"),
      icon: Calendar,
      gradient: "from-red-500 to-pink-600",
      category: "cultural",
      status: "available",
      badge: null,
      featured: false,
    },
    {
      id: "ShanNote",
      name: appT("ShanNote"),
      description: t("app_descriptions.ShanNote"),
      icon: StickyNote,
      gradient: "from-teal-500 to-green-600",
      category: "utilities",
      status: "coming_soon",
      badge: "new",
      featured: true,
    },
  ];

  const categories = [
    { key: "all", label: "All Apps", icon: Grid },
    {
      key: "language_tools",
      label: t("categories.language_tools"),
      icon: BookOpen,
    },
    { key: "converters", label: t("categories.converters"), icon: Type },
    { key: "cultural", label: t("categories.cultural"), icon: Heart },
    { key: "utilities", label: t("categories.utilities"), icon: Zap },
  ];

  const filteredApps = apps.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredApps = apps.filter((app) => app.featured);
  const recentlyUsed = apps.slice(0, 3); // Mock recently used

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

  const handleLaunchApp = (appId: string) => {
    // In a real app, this would navigate to the specific app
    console.log(`Launching app: ${appId}`);
  };

  return (
    <div className="min-h-screen py-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4">
            {t("title")}
          </h1>
          <p className="text-gray-400 text-xl mb-6">{t("subtitle")}</p>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  {apps.length}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{t("stats.total_apps")}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">2.5K</span>
              </div>
              <p className="text-gray-400 text-sm">{t("stats.active_users")}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">15K</span>
              </div>
              <p className="text-gray-400 text-sm">{t("stats.downloads")}</p>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div variants={item} className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search apps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-emerald-500/50 text-emerald-400"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {
                      categories.find((cat) => cat.key === selectedCategory)
                        ?.label
                    }
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black/90 border-emerald-500/20">
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category.key}
                      onClick={() => setSelectedCategory(category.key)}
                      className="text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10"
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="outline"
                onClick={() =>
                  setViewMode(viewMode === "grid" ? "list" : "grid")
                }
                className="border-blue-500/50 text-blue-400"
              >
                {viewMode === "grid" ? (
                  <List className="w-4 h-4" />
                ) : (
                  <Grid className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Recently Used */}
        <motion.div variants={item} className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">
              {t("recently_used")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentlyUsed.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onLaunch={handleLaunchApp}
                getBadgeColor={getBadgeColor}
                t={t}
                compact
              />
            ))}
          </div>
        </motion.div>

        {/* Featured Apps */}
        <motion.div variants={item} className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <h2 className="text-2xl font-semibold text-white">
              {t("featured_apps")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onLaunch={handleLaunchApp}
                getBadgeColor={getBadgeColor}
                t={t}
              />
            ))}
          </div>
        </motion.div>

        {/* All Apps */}
        <motion.div variants={item}>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-semibold text-white">
              {t("all_apps")}
            </h2>
            {searchQuery && (
              <span className="text-gray-400 text-sm">
                ({filteredApps.length} results for "{searchQuery}")
              </span>
            )}
          </div>

          {filteredApps.length === 0 ? (
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">
                  No apps found matching your search.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div
              className={`grid gap-4 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {filteredApps.map((app) => (
                <AppCard
                  key={app.id}
                  app={app}
                  onLaunch={handleLaunchApp}
                  getBadgeColor={getBadgeColor}
                  t={t}
                  compact={viewMode === "grid"}
                  listView={viewMode === "list"}
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

// App Card Component
interface AppCardProps {
  app: any;
  onLaunch: (appId: string) => void;
  getBadgeColor: (badge: string | null) => string;
  t: any;
  compact?: boolean;
  listView?: boolean;
}

function AppCard({
  app,
  onLaunch,
  getBadgeColor,
  t,
  compact = false,
  listView = false,
}: AppCardProps) {
  if (listView) {
    return (
      <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div
              className={`bg-gradient-to-br ${app.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 w-12 h-12`}
            >
              <app.icon className="text-white w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {app.name}
                </h3>
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
              <p className="text-gray-300 text-sm leading-relaxed">
                {app.description}
              </p>
            </div>
            <Button
              onClick={() => onLaunch(app.id)}
              disabled={app.status === "coming_soon"}
              className={`${
                app.status === "coming_soon"
                  ? "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700"
              } transition-all duration-300`}
            >
              {app.status === "coming_soon"
                ? t("coming_soon")
                : t("launch_app")}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
      <CardHeader className={compact ? "pb-3" : "pb-4"}>
        <div className="flex items-start justify-between">
          <div
            className={`bg-gradient-to-br ${
              app.gradient
            } rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
              compact ? "w-10 h-10" : "w-12 h-12"
            }`}
          >
            <app.icon
              className={`text-white ${compact ? "w-5 h-5" : "w-6 h-6"}`}
            />
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
          className={`text-white group-hover:text-emerald-400 transition-colors ${
            compact ? "text-base" : "text-lg"
          }`}
        >
          {app.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {!compact && (
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {app.description}
          </p>
        )}
        <Button
          onClick={() => onLaunch(app.id)}
          disabled={app.status === "coming_soon"}
          className={`w-full ${
            app.status === "coming_soon"
              ? "bg-gray-600/50 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700"
          } transition-all duration-300`}
          size={compact ? "sm" : "default"}
        >
          {app.status === "coming_soon" ? t("coming_soon") : t("launch_app")}
        </Button>
      </CardContent>
    </Card>
  );
}
