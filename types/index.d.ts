type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

interface App {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  category: string;
  status: string;
  badge: string | null;
  required_login: boolean;
  link: string;
}

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  content: string;
  timestamp: Date;
  likes: number;
  comments: number;
  liked: boolean;
  category: string;
}

enum Provider {
  GOOGLE = "google",
  FACEBOOK = "facebook",
}

interface Proverb {
  proverb: string;
}

interface ProverbGroup {
  proverb_key: string;
  proverb_list: Proverb[];
}

interface ProverbsData {
  all_proverbs: ProverbGroup[];
}
