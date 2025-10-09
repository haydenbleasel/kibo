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
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const title = "Password Requirements";

const Example = () => (
  <TooltipProvider>
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup className="bg-background">
        <InputGroupInput placeholder="Enter password" type="password" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton size="icon-xs" variant="ghost">
                <InfoIcon />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>Password must be at least 8 characters</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="bg-background">
        <InputGroupInput placeholder="Confirm password" type="password" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton size="icon-xs" variant="ghost">
                <InfoIcon />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>Enter the same password as above</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </div>
  </TooltipProvider>
);

export default Example;
