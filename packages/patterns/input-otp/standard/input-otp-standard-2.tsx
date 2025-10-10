"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "OTP with Pattern Validation";

const Example = () => (
  <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
    <InputOTPGroup>
      <InputOTPSlot className="bg-background" index={0} />
      <InputOTPSlot className="bg-background" index={1} />
      <InputOTPSlot className="bg-background" index={2} />
      <InputOTPSlot className="bg-background" index={3} />
      <InputOTPSlot className="bg-background" index={4} />
      <InputOTPSlot className="bg-background" index={5} />
    </InputOTPGroup>
  </InputOTP>
);

export default Example;
