"use client";

import { ClipboardPaste } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "OTP with Paste Optimization";

const Example = () => {
  const [value, setValue] = useState("");

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const digits = text.replace(/\D/g, "").slice(0, 6);
      setValue(digits);
    } catch (err) {
      console.error("Failed to read clipboard:", err);
    }
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
      <Button
        className="w-full"
        onClick={handlePaste}
        size="sm"
        variant="outline"
      >
        <ClipboardPaste className="mr-2 h-4 w-4" />
        Paste Code
      </Button>
      <p className="text-muted-foreground text-xs">
        Paste automatically filters to digits only.
      </p>
    </div>
  );
};

export default Example;
