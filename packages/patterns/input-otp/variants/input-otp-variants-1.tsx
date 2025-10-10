"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "Numeric Only OTP";

const Example = () => (
  <div className="space-y-2">
    <InputOTP inputMode="numeric" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
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
    <p className="text-muted-foreground text-sm">
      Numeric keyboard on mobile devices.
    </p>
  </div>
);

export default Example;
