"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { subscribe } from "@/actions/customer/subscribe.action";
import { toast } from "sonner";
const formSchema = z.object({
  email: z.email({
    message: "Please add a valid email",
  }),
});

export default function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await subscribe(values);
      toast.info(
        "Thanks for subscribing! You’ll start receiving our latest updates soon."
      );
    } catch (err) {
      toast.error(
        "Sorry, we couldn’t add your email to our newsletter. Please try again later."
      );
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-[13px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="">
              <FormControl>
                <div className="bg-[rgba(0,0,0,0.05)] h-[44px]! w-[237px]! box-border flex items-center justify-center rounded-full ">
                  <input
                    placeholder="Enter your email address"
                    className=" font-area text-[12px]! xl:text-base! outline-none ring-0 focus:ring-0 focus:outline-none focus-within:ring-0 focus-within:outline-none placeholder:text-[#00000040] leading-[150%]"
                    {...field}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="

  h-[45px]! w-[46.7px]!
  rounded-full
    bg-black
    flex items-center justify-center
  "
        >
          <Image
            src="/svg/right-logo.svg"
            alt="right-logo"
            width={12}
            height={12}
            className="
      rounded-full
      w-[12px] 
      h-[12px]
    "
          />
        </button>
      </form>
    </Form>
  );
}
