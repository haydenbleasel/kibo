import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const title = "Different Length OTP Variants";

const Example = () => (
  <div className="space-y-6">
    <div className="space-y-2">
      <p className="font-medium text-sm">4-Digit OTP</p>
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot className="bg-background" index={0} />
          <InputOTPSlot className="bg-background" index={1} />
          <InputOTPSlot className="bg-background" index={2} />
          <InputOTPSlot className="bg-background" index={3} />
        </InputOTPGroup>
      </InputOTP>
    </div>
    <div className="space-y-2">
      <p className="font-medium text-sm">6-Digit OTP</p>
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
    </div>
    <div className="space-y-2">
      <p className="font-medium text-sm">8-Digit OTP</p>
      <InputOTP maxLength={8}>
        <InputOTPGroup>
          <InputOTPSlot className="bg-background" index={0} />
          <InputOTPSlot className="bg-background" index={1} />
          <InputOTPSlot className="bg-background" index={2} />
          <InputOTPSlot className="bg-background" index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot className="bg-background" index={4} />
          <InputOTPSlot className="bg-background" index={5} />
          <InputOTPSlot className="bg-background" index={6} />
          <InputOTPSlot className="bg-background" index={7} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  </div>
);

export default Example;
