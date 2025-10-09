"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const title = "Email Validation";

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    confirmEmail: z
      .string()
      .min(1, "Please confirm your email")
      .email("Please enter a valid email address"),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails don't match",
    path: ["confirmEmail"],
  });

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      confirmEmail: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="you@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Enter your email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="you@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Re-enter your email to confirm.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Continue</Button>
        </form>
      </Form>
    </div>
  );
};

export default Example;
