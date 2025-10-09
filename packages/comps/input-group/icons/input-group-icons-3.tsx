import { CreditCardIcon, HelpCircleIcon, LockIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export const title = "Dual Icons";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupAddon>
        <CreditCardIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Card number" />
      <InputGroupAddon align="inline-end">
        <LockIcon />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup className="bg-background">
      <InputGroupAddon>
        <LockIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Password" type="password" />
      <InputGroupAddon align="inline-end">
        <HelpCircleIcon />
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
