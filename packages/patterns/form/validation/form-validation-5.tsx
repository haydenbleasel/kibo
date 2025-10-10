"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

export const title = "Conditional Validation";

const formSchema = z
  .object({
    hasCompany: z.boolean().default(false),
    companyName: z.string().optional(),
    companyWebsite: z.string().url().optional().or(z.literal("")),
  })
  .refine(
    (data) => {
      if (data.hasCompany) {
        return data.companyName && data.companyName.length >= 2;
      }
      return true;
    },
    {
      message: "Company name is required",
      path: ["companyName"],
    }
  );

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasCompany: false,
      companyName: "",
      companyWebsite: "",
    },
  });

  const hasCompany = form.watch("hasCompany");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="hasCompany"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>I have a company</FormLabel>
                  <FormDescription>
                    Check this if you represent a company.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          {hasCompany && (
            <>
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="Acme Inc"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyWebsite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Website (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="https://example.com"
                        type="url"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Example;
