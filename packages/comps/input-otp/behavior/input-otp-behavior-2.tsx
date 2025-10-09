"use client";

import { useRef, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "OTP with Enhanced Focus Management";

const Example = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-4">
      <div className="cursor-text" onClick={() => inputRef.current?.focus()}>
        <InputOTP
          maxLength={6}
          onChange={setValue}
          ref={inputRef}
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
      </div>
      <p className="text-muted-foreground text-sm">
        Click anywhere on the input to focus and type.
      </p>
    </div>
  );
};

export default Example;
