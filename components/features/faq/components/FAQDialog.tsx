"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import { CustomButton } from "@/components/CustomButton";

interface FAQDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FAQDialog = ({ open, onOpenChange }: FAQDialogProps) => {
  const t = useTranslations("FAQPage.contact.contact_form");

  const formSchema = z.object({
    name: z
      .string()
      .min(2, { message: t("name_error") })
      .max(50),
    email: z.email({ message: t("email_error") }),
    message: z.string().min(10, { message: t("message_error") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/70 backdrop-blur-sm border border-green/20 rounded-2xl ">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="w-full"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl py-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {t("title")}
            </DialogTitle>
            <DialogDescription className="text-xl opacity-90">
              {t("content")}
            </DialogDescription>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-3"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("name")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("name_placeholder")}
                          {...field}
                          className="border border-green/50 focus:ring-1! focus:ring-green/80 rounded-lg h-11"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("email")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("email_placeholder")}
                          {...field}
                          className="border border-green/50 focus:ring-1! focus:ring-green/80 rounded-lg h-11"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("message_placeholder")}
                          {...field}
                          className="border border-green/50 focus:ring-1! focus:ring-green/80 rounded-lg h-40 resize-none"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <CustomButton
                  text={t("submit")}
                  variant="primary"
                  className="w-full mt-3"
                  type="submit"
                  icon={<Send className="w-4 h-4" />}
                />
              </form>
            </Form>
          </DialogHeader>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
