"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

export const title = "OTP Code";

const Example = () => {
  const [value, setValue] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Enter Code</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Verify your email</DialogTitle>
          <DialogDescription>
            We've sent a 6-digit code to your email address. Please enter it
            below.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <Label htmlFor="otp">Verification code</Label>
          <div className="flex justify-center">
            <InputOTP maxLength={6} onChange={setValue} value={value}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <p className="text-center text-muted-foreground text-sm">
            Didn't receive the code?{" "}
            <button className="font-medium underline" type="button">
              Resend
            </button>
          </p>
        </div>
        <DialogFooter>
          <Button disabled={value.length !== 6} type="button">
            Verify
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Example;
