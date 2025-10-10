import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Popover with Heading";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">View Details</Button>
    </PopoverTrigger>
    <PopoverContent>
      <h4 className="mb-2 font-semibold">Details</h4>
      <p className="text-muted-foreground text-sm">
        Additional information about this item.
      </p>
    </PopoverContent>
  </Popover>
);

export default Example;
