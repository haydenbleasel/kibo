"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Key, Shield } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "Two-Factor Authentication";

const formSchema = z.object({
  code: z.string().min(6, {
    message: "Authentication code must be 6 characters.",
  }),
  backupCode: z.string().optional(),
});

const Example = () => {
  const [useBackupCode, setUseBackupCode] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
      backupCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (useBackupCode) {
      toast.success(`Authenticated with backup code: ${values.backupCode}`);
    } else {
      toast.success(`Authenticated with code: ${values.code}`);
    }
  }

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Shield className="h-6 w-6 text-primary" />
        </div>
        <h2 className="font-semibold text-2xl">Two-Factor Authentication</h2>
        <p className="text-muted-foreground text-sm">
          Enter the code from your authenticator app
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          {useBackupCode ? (
            <FormField
              control={form.control}
              name="backupCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Backup Code</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-background"
                      placeholder="Enter backup code"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter one of your backup codes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex justify-center">
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot className="bg-background" index={0} />
                          <InputOTPSlot className="bg-background" index={1} />
                          <InputOTPSlot className="bg-background" index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot className="bg-background" index={3} />
                          <InputOTPSlot className="bg-background" index={4} />
                          <InputOTPSlot className="bg-background" index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <Button className="w-full" type="submit">
            Verify
          </Button>
        </form>
      </Form>
      <div className="text-center">
        <Button
          className="h-auto p-0 text-sm"
          onClick={() => setUseBackupCode(!useBackupCode)}
          type="button"
          variant="link"
        >
          <Key className="mr-2 h-3 w-3" />
          {useBackupCode ? "Use authenticator code" : "Use backup code instead"}
        </Button>
      </div>
    </div>
  );
};

export default Example;
