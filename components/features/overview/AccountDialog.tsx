import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SaveAll } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "@/lib/auth-client";
import { CustomButton } from "@/components/CustomButton";
import { SocialIcon } from "@/components/SocialIcon";
import { formatDate } from "@/lib/utils";

type AccountDialogValues = {
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
};

export const AccountDialog = ({
  isDialogOpen,
  setIsDialogOpen,
}: AccountDialogValues) => {
  const t = useTranslations("Account");
  const { data: session } = useSession();
  const email = session?.user?.email ?? "Unknown";
  const image = session?.user?.image ?? undefined;
  const originalName = session?.user?.name ?? "Unknown";
  const joinedDate = session?.user?.createdAt ?? "Unknown";

  const formSchema = z.object({
    name: z.string().min(3, { message: t("name_error") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: originalName,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="bg-black/70 backdrop-blur-sm border border-green/20 rounded-2xl">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="w-full"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white ">
              {originalName} {t("title")}
            </DialogTitle>
            <DialogDescription className="text-xl opacity-90 sr-only">
              {t("subtitle")}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 grid grid-cols-[72px_1fr] gap-4 items-center">
            <Avatar className="h-16 w-16 ring-2 ring-green/30">
              <AvatarImage
                src={image}
                alt={originalName || "User"}
                className="object-cover size-full"
              />
              <AvatarFallback className="bg-green/20 text-green">
                {originalName.split(" ")[0]}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-white truncate">
                  {originalName || "Unknown"}
                </span>
                <span className="inline-flex capitalize items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2 py-1 text-xs text-white/80">
                  <SocialIcon
                    provider={session?.user?.provider as Provider}
                    size="4"
                  />{" "}
                  {session?.user?.provider}
                </span>
              </div>
              <span className="text-sm text-white/70 truncate">{email}</span>
            </div>
          </div>
          <Form {...form}>
            <form
              className="mt-6 space-y-3"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="space-y-2">
                <label className="text-sm text-white/80">
                  {t("member_since")}
                </label>
                <p>{formatDate(joinedDate)}</p>
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="opacity-80">
                      {t("display_name")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        type="text"
                        autoFocus={false}
                        {...field}
                        className="border border-green/50 focus:ring-1! mt-1 focus:ring-green/80 rounded-lg h-11"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <div className="flex xl:flex-row flex-col items-center justify-between pt-1 gap-2">
                <div className="text-xs text-white/60 xl:order-1 order-2">
                  {t("account")}{" "}
                  <span className="capitalize">{session?.user?.provider}</span>
                </div>
                <CustomButton
                  text={t("save_changes")}
                  variant="primary"
                  type="submit"
                  className="w-full xl:w-32 xl:order-2 order-1"
                  icon={<SaveAll className="w-4 h-4" />}
                  disabled={!form.formState.isValid}
                />
              </div>
            </form>
          </Form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
