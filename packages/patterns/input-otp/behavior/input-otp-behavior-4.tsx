"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "OTP with Resend Flow";

const Example = () => {
  const [value, setValue] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    setCanResend(true);
  }, [countdown]);

  const handleResend = () => {
    setCountdown(60);
    setCanResend(false);
    setValue("");
    // Simulate resending code
    console.log("Resending code...");
  };

  return (
    <div className="space-y-4">
      <InputOTP maxLength={6} onChange={setValue} value={value}>
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
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {canResend
            ? "Didn't receive the code?"
            : `Resend code in ${countdown}s`}
        </span>
        <Button
          className="h-auto p-0"
          disabled={!canResend}
          onClick={handleResend}
          size="sm"
          variant="link"
        >
          Resend Code
        </Button>
      </div>
    </div>
  );
};

export default Example;
