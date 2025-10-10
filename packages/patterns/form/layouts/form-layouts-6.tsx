"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const title = "Compact Form";

const formSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(8),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-sm">
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Username</FormLabel>
                <FormControl>
                  <Input
                    className="h-9 bg-background"
                    placeholder="johndoe"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Password</FormLabel>
                <FormControl>
                  <Input
                    className="h-9 bg-background"
                    placeholder="********"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <Button className="h-9 w-full text-sm" type="submit">
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Example;
