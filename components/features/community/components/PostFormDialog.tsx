import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import { Textarea } from "@/components/ui/textarea";
import { CustomButton } from "@/components/CustomButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUtilStore } from "@/store/util.store";

export const PostFormDialog = () => {
  const t = useTranslations("CommunityPage.form");
  const { isCreatePostDialogOpen, setisCreatePostDialogOpen } = useUtilStore();

  const formSchema = z.object({
    content: z.string().min(10, { message: t("post_error") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setisCreatePostDialogOpen(false);
  };

  return (
    <Dialog
      open={isCreatePostDialogOpen}
      onOpenChange={setisCreatePostDialogOpen}
    >
      <DialogContent className="bg-black/70 backdrop-blur-sm border border-green/20 rounded-2xl ">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="w-full"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white ">
              {t("title")}
            </DialogTitle>
            <DialogDescription className="text-xl opacity-90">
              {t("content")}
            </DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder={t("post_placeholder")}
                          {...field}
                          className="border border-green/50 focus:ring-1! focus:ring-green/80 rounded-lg h-56 resize-none"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <div className="flex gap-2 justify-end">
                  <CustomButton
                    text={t("cancel_button")}
                    variant="secondary"
                    onClick={() => {
                      form.reset();
                    }}
                  />
                  <CustomButton
                    text={t("post_button")}
                    variant="primary"
                    type="submit"
                    icon={<Send className="w-4 h-4" />}
                  />
                </div>
              </form>
            </Form>
          </DialogHeader>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
