import { InfoIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const title = "Label with Tooltip";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupInput id="email-2" placeholder="shadcn@vercel.com" />
    <InputGroupAddon align="block-start">
      <Label className="text-foreground" htmlFor="email-2">
        Email
      </Label>
      <Tooltip>
        <TooltipTrigger asChild>
          <InputGroupButton
            aria-label="Help"
            className="ml-auto rounded-full"
            size="icon-xs"
            variant="ghost"
          >
            <InfoIcon />
          </InputGroupButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>We&apos;ll use this to send you notifications</p>
        </TooltipContent>
      </Tooltip>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
