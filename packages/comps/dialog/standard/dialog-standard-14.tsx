"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const title = "Checkout";

const Example = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Checkout</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete your purchase</DialogTitle>
          <DialogDescription>
            Choose your billing cycle and enter payment details.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Billing cycle</Label>
            <div className="grid grid-cols-2 gap-2">
              <button
                className={cn(
                  "flex flex-col items-center justify-center rounded-lg border-2 p-4 transition-colors",
                  billingCycle === "monthly"
                    ? "border-primary bg-primary/5"
                    : "border-input hover:border-primary/50"
                )}
                onClick={() => setBillingCycle("monthly")}
                type="button"
              >
                <span className="font-semibold">Monthly</span>
                <span className="text-muted-foreground text-sm">$29/mo</span>
              </button>
              <button
                className={cn(
                  "flex flex-col items-center justify-center rounded-lg border-2 p-4 transition-colors",
                  billingCycle === "yearly"
                    ? "border-primary bg-primary/5"
                    : "border-input hover:border-primary/50"
                )}
                onClick={() => setBillingCycle("yearly")}
                type="button"
              >
                <span className="font-semibold">Yearly</span>
                <span className="text-muted-foreground text-sm">$290/yr</span>
                <span className="text-green-600 text-xs">Save 17%</span>
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cardName">Cardholder name</Label>
            <Input id="cardName" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card number</Label>
            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry date</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="default" />
            <Label className="font-normal text-sm" htmlFor="default">
              Set as default payment method
            </Label>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="button">
            Complete Purchase - ${billingCycle === "monthly" ? "29" : "290"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Example;
