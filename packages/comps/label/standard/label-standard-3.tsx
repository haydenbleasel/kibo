import { Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const title = "Label with Tooltip";

const Example = () => (
  <Label>
    API Key
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="h-3.5 w-3.5 text-muted-foreground" />
        </TooltipTrigger>
        <TooltipContent>Your secret API key for authentication</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Label>
);

export default Example;
