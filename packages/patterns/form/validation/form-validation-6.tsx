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

export const title = "Custom Validation Messages";

const formSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Come on, at least 3 characters! 😅",
    })
    .max(20, {
      message: "Whoa there! Keep it under 20 characters. 🛑",
    })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Letters, numbers, and underscores only, please! 🔤",
    }),
  email: z.string().email({
    message: "That doesn't look like an email address. 📧",
  }),
  age: z.coerce
    .number({
      invalid_type_error: "Age must be a number! 🔢",
    })
    .min(13, {
      message: "You must be at least 13 years old. 🚸",
    })
    .max(120, {
      message: "Please enter a realistic age. 🎂",
    }),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      age: undefined,
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="cool_user123"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Choose a unique username.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="25"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </Form>
    </div>
  );
};

export default Example;
