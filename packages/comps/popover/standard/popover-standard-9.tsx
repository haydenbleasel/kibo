import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Compact Popover";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button size="sm" variant="outline">
        ?
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-2">
      <p className="text-xs">Quick tip</p>
    </PopoverContent>
  </Popover>
);

export default Example;
