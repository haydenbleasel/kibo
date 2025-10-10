import { CreditCard, Smartphone, Wallet } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "RadioGroup with Icons";

const Example = () => (
  <RadioGroup defaultValue="card">
    <div className="flex items-center space-x-3">
      <RadioGroupItem id="card" value="card" />
      <Label className="flex cursor-pointer items-center gap-2" htmlFor="card">
        <CreditCard className="size-4" />
        <span>Credit Card</span>
      </Label>
    </div>
    <div className="flex items-center space-x-3">
      <RadioGroupItem id="wallet" value="wallet" />
      <Label
        className="flex cursor-pointer items-center gap-2"
        htmlFor="wallet"
      >
        <Wallet className="size-4" />
        <span>Digital Wallet</span>
      </Label>
    </div>
    <div className="flex items-center space-x-3">
      <RadioGroupItem id="mobile" value="mobile" />
      <Label
        className="flex cursor-pointer items-center gap-2"
        htmlFor="mobile"
      >
        <Smartphone className="size-4" />
        <span>Mobile Payment</span>
      </Label>
    </div>
  </RadioGroup>
);

export default Example;
