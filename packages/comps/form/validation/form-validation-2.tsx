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

export const title = "Min/Max Length Validation";

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must not exceed 20 characters"),
  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters")
    .max(160, "Bio must not exceed 160 characters"),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
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
                    placeholder="Enter username"
                    {...field}
                  />
                </FormControl>
                <FormDescription>3-20 characters required.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="Tell us about yourself"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  10-160 characters. {field.value.length}/160
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

export default Example;
