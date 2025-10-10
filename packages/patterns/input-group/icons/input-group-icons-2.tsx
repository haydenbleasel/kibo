import { MailIcon, PhoneIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export const title = "Contact Fields with Icons";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupInput placeholder="Email address" type="email" />
      <InputGroupAddon>
        <MailIcon />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup className="bg-background">
      <InputGroupInput placeholder="Phone number" type="tel" />
      <InputGroupAddon>
        <PhoneIcon />
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
