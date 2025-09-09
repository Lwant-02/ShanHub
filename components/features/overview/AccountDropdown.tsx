import { useTranslations } from "next-intl";
import { CircleUser, LogOut } from "lucide-react";
import { useState } from "react";

import { signOut, useSession } from "@/lib/auth-client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AccountDialog } from "./AccountDialog";

export const AccountDropdown = () => {
  const t = useTranslations("Navbar");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { data: session } = useSession();

  if (!session) {
    return null;
  }
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="xl:size-10 size-9 border border-green cursor-pointer">
            <AvatarImage
              src={session.user.image || ""}
              className="object-cover size-full"
            />
            <AvatarFallback className="text-sm text-center">
              {session.user.name.split(" ")[0]}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-36 bg-black/50 backdrop-blur-sm border border-green/20 rounded-2xl"
          align="center"
        >
          <DropdownMenuLabel className="text-center opacity-70">
            {t("account.my_account")}
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => setIsDialogOpen(true)}
              className="hover:text-green cursor-pointer hover:bg-green/20 transition-colors duration-300 rounded-2xl flex gap-2 text-base"
            >
              {t("account.profile")}
              <CircleUser className="w-4 h-4" />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleLogout}
              className="hover:text-green cursor-pointer mt-1 hover:bg-green/20 transition-colors duration-300 rounded-2xl flex gap-2 text-base"
            >
              {t("account.logout")}
              <LogOut className="w-4 h-4 " />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <AccountDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
};
