"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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
import { axiosInstance } from "@/config/axios.config";
import { GradientTitle } from "@/components/GradientTitle";

interface FAQDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FAQDialog = ({ open, onOpenChange }: FAQDialogProps) => {
  const t = useTranslations("FAQPage.contact.contact_form");
  const [isSending, setIsSending] = useState(false);

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSending(true);
      const res = await axiosInstance.post("/send", values);
      if (res.data.success) {
        onOpenChange(false);
        toast.success("Success!", {
          description: "Your message has been sent.",
          action: {
            label: <X className="size-4" />,
            onClick: () => toast.dismiss(),
          },
        });
        form.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error!", {
        description: "There was an error sending your message.",
        action: {
          label: <X className="size-4" />,
          onClick: () => toast.dismiss(),
        },
      });
      setIsSending(false);
    } finally {
      setIsSending(false);
    }
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
            <DialogTitle className="text-2xl py-2 ">
              <GradientTitle title={t("title")} />
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
                          className="border border-green/50 focus:ring-1! focus:ring-green/80 rounded-lg h-11 "
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
                          className="border border-green/50 focus:ring-1! focus:ring-green/80 rounded-lg h-11 "
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
                  isLoading={isSending}
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
