"use client";

import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { CustomButton } from "@/components/CustomButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export const CommentForm = () => {
  const t = useTranslations("CommunityPage");

  const formSchema = z.object({
    comment: z.string().min(2, { message: t("comment_error") }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex gap-3 mt-3 border-t border-white/10 pt-4">
      <Avatar className="w-8 h-8">
        <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white text-xs">
          Y
        </AvatarFallback>
      </Avatar>
      <Form {...form}>
        <form
          className="flex-1 space-y-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder={t("comment_placeholder")}
                    {...field}
                    className="border border-white/50 focus:ring-1! focus:ring-white/80 rounded-lg h-32 resize-none"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <CustomButton
              type="submit"
              text={t("comment_button")}
              variant="primary"
              disabled={!form.formState.isValid}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};
