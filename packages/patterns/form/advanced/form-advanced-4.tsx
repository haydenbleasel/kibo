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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "Form with Radio Buttons";

const formSchema = z.object({
  plan: z.enum(["free", "pro", "enterprise"], {
    required_error: "You need to select a plan.",
  }),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
            name="plan"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Select your plan</FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex flex-col space-y-1"
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="free" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Free - $0/month
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="pro" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Pro - $9/month
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="enterprise" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Enterprise - Contact us
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormDescription>
                  Choose the plan that best fits your needs.
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
