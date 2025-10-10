import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "Standard OTP Input";

const Example = () => (
  <InputOTP maxLength={6}>
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
);

export default Example;
