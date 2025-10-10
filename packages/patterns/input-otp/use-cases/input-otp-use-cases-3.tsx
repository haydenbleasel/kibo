"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "SMS Verification";

const formSchema = z.object({
  code: z.string().min(6, {
    message: "Verification code must be 6 characters.",
  }),
});

const Example = () => {
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    setCanResend(true);
  }, [countdown]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Phone number verified successfully!");
  }

  const handleResend = () => {
    setCountdown(60);
    setCanResend(false);
    form.reset();
    toast.info("Verification code resent");
  };

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Smartphone className="h-6 w-6 text-primary" />
        </div>
        <h2 className="font-semibold text-2xl">Verify your phone</h2>
        <p className="text-muted-foreground text-sm">
          We sent a code to{" "}
          <span className="font-medium">+1 (555) 123-4567</span>
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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
          <Button className="w-full" type="submit">
            Verify Phone Number
          </Button>
        </form>
      </Form>
      <div className="text-center text-muted-foreground text-sm">
        {canResend ? (
          <>
            Didn't receive a code?{" "}
            <Button
              className="h-auto p-0 font-normal"
              onClick={handleResend}
              type="button"
              variant="link"
            >
              Resend code
            </Button>
          </>
        ) : (
          <span>Resend code in {countdown}s</span>
        )}
      </div>
    </div>
  );
};

export default Example;
