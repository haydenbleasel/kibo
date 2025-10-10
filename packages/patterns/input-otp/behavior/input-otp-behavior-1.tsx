"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "Auto-submit OTP";

const formSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success(`Code submitted: ${values.pin}`);
  }

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    {...field}
                    onChange={(value) => {
                      field.onChange(value);
                      if (value.length === 6) {
                        form.handleSubmit(onSubmit)();
                      }
                    }}
                  >
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
                </FormControl>
                <FormDescription>
                  Form will auto-submit when all digits are entered.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default Example;
