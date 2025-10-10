"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "OTP with Loading State";

const Example = () => {
  const [value, setValue] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (newValue.length === 6) {
      setIsVerifying(true);
      // Simulate verification
      setTimeout(() => {
        setIsVerifying(false);
      }, 2000);
    }
  };

  return (
    <div className="space-y-2">
      <InputOTP maxLength={6} onChange={handleChange} value={value}>
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
      {isVerifying && (
        <div className="flex items-center gap-2 text-sm">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Verifying code...</span>
        </div>
      )}
    </div>
  );
};

export default Example;
