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

export const title = "Number Input Form";

const formSchema = z.object({
  age: z.coerce
    .number()
    .min(18, {
      message: "You must be at least 18 years old.",
    })
    .max(120, {
      message: "Please enter a valid age.",
    }),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
                <FormDescription>
                  You must be 18 or older to continue.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Verify Age</Button>
        </form>
      </Form>
    </div>
  );
};

export default Example;
