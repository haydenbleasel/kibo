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

export const title = "Spacious Form with Sections";

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  street: z.string().min(2),
  city: z.string().min(2),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-2xl">
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg">Personal Information</h3>
              <p className="text-muted-foreground text-sm">
                Tell us about yourself.
              </p>
            </div>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="John"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Your legal first name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Your legal last name.</FormDescription>
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
                        placeholder="john@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your primary email address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg">Address</h3>
              <p className="text-muted-foreground text-sm">
                Where are you located?
              </p>
            </div>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="123 Main St"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="New York"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </Form>
    </div>
  );
};

export default Example;
