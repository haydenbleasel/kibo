import { HelpCircleIcon } from "lucide-react";
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

export const title = "Help Tooltips";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupInput placeholder="Email address" type="email" />
    <InputGroupAddon align="inline-end">
      <Tooltip>
        <TooltipTrigger asChild>
          <InputGroupButton size="icon-xs" variant="ghost">
            <HelpCircleIcon />
          </InputGroupButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>We'll never share your email</p>
        </TooltipContent>
      </Tooltip>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
