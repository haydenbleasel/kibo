"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "Masked OTP Input";

const Example = () => {
  const [value, setValue] = useState("");
  const [showValue, setShowValue] = useState(false);

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className={showValue ? "" : "select-none blur-sm"}>
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
        </div>
        <Button
          className="-translate-y-1/2 absolute top-1/2 right-0"
          onClick={() => setShowValue(!showValue)}
          size="icon"
          type="button"
          variant="ghost"
        >
          {showValue ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </div>
      <p className="text-muted-foreground text-sm">
        Toggle visibility to show/hide the entered code.
      </p>
    </div>
  );
};

export default Example;
