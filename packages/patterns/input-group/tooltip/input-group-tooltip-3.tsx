import { InfoIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const title = "API Key Info";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupInput placeholder="API key" type="password" />
    <InputGroupAddon align="inline-end">
      <Tooltip>
        <TooltipTrigger asChild>
          <InputGroupButton size="icon-xs" variant="ghost">
            <InfoIcon />
          </InputGroupButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>Found in your account settings</p>
        </TooltipContent>
      </Tooltip>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
