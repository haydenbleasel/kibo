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

export const title = "Real-time Validation";

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed"),
  email: z.string().email("Please enter a valid email address"),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // Enable real-time validation
    defaultValues: {
      username: "",
      email: "",
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
                <FormDescription>
                  Validation happens as you type.
                </FormDescription>
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
                <FormDescription>
                  Instant feedback on your input.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={!form.formState.isValid} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Example;
