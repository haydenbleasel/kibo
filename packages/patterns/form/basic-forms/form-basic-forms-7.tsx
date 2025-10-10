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

export const title = "Search Input Form";

const formSchema = z.object({
  query: z.string().min(1, {
    message: "Please enter a search query.",
  }),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
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
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Search</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="Search for anything..."
                    type="search"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter keywords to search our database.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Search</Button>
        </form>
      </Form>
    </div>
  );
};

export default Example;
