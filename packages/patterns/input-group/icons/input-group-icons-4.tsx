import { EyeIcon, EyeOffIcon, KeyIcon, RefreshCwIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export const title = "Multiple Icons";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupInput placeholder="Enter password" type="password" />
      <InputGroupAddon align="inline-end">
        <EyeIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <RefreshCwIcon />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup className="bg-background">
      <InputGroupAddon>
        <KeyIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="API key" type="password" />
      <InputGroupAddon align="inline-end">
        <EyeOffIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <RefreshCwIcon />
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
