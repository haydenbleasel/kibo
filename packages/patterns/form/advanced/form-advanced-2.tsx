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
import { Textarea } from "@/components/ui/textarea";

export const title = "Form with Textarea";

const formSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(500, {
      message: "Bio must not exceed 500 characters.",
    }),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none bg-background"
                    placeholder="Tell us a little about yourself"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {field.value.length}/500 characters
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
