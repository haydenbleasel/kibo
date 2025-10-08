import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Popover with List";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">View Items</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="space-y-2">
        <div className="text-sm">Item 1</div>
        <div className="text-sm">Item 2</div>
        <div className="text-sm">Item 3</div>
      </div>
    </PopoverContent>
  </Popover>
);

export default Example;
