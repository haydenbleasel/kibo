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
import { Textarea } from "@/components/ui/textarea";

export const title = "Profile Edit Form";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160, {
    message: "Bio must not exceed 160 characters.",
  }),
  website: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "johndoe",
      email: "john@example.com",
      bio: "Software developer passionate about building great products.",
      website: "https://johndoe.com",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-2xl">
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <h3 className="font-medium text-lg">Profile Settings</h3>
            <p className="text-muted-foreground text-sm">
              Update your profile information
            </p>
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="johndoe"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
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
                    placeholder="john@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your email address is not publicly visible.
                </FormDescription>
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
                  <Textarea
                    className="resize-none bg-background"
                    placeholder="Tell us about yourself"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {field.value?.length || 0}/160 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="https://example.com"
                    type="url"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your personal website or portfolio.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2">
            <Button type="submit">Save Changes</Button>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Example;
