"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "OTP with Success State";

const Example = () => {
  const [value, setValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setIsSuccess(false);
    if (newValue.length === 6) {
      // Simulate successful verification
      setTimeout(() => {
        setIsSuccess(true);
      }, 500);
    }
  };

  return (
    <div className="space-y-2">
      <InputOTP
        disabled={isSuccess}
        maxLength={6}
        onChange={handleChange}
        value={value}
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
      {isSuccess && (
        <div className="flex items-center gap-2 text-green-600 text-sm">
          <Check className="h-4 w-4" />
          <span>Code verified successfully!</span>
        </div>
      )}
    </div>
  );
};

export default Example;
