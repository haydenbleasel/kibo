import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Info Icon Popover";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button size="icon" variant="ghost">
        <Info className="h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <p className="text-sm">Helpful information goes here.</p>
    </PopoverContent>
  </Popover>
);

export default Example;
