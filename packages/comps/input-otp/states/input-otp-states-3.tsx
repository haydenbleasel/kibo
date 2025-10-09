"use client";

import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "OTP with Error State";

const Example = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setError("");
    if (newValue.length === 6) {
      // Simulate validation
      if (newValue !== "123456") {
        setError("Invalid code. Please try again.");
      }
    }
  };

  return (
    <div className="space-y-2">
      <div className={error ? "animate-shake" : ""}>
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
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <p className="text-muted-foreground text-xs">Hint: Try entering 123456</p>
    </div>
  );
};

export default Example;
