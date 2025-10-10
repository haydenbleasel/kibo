"use client";

import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "Controlled OTP Input";

const Example = () => {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-2">
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
      <div className="text-center text-sm">
        {value === "" ? (
          "Enter your one-time password."
        ) : (
          <>You entered: {value}</>
        )}
      </div>
    </div>
  );
};

export default Example;
