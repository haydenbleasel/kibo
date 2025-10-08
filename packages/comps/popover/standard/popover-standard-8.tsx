import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export const title = "Popover with Divider";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Options</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="space-y-2">
        <p className="font-medium text-sm">Section 1</p>
        <Separator />
        <p className="font-medium text-sm">Section 2</p>
      </div>
    </PopoverContent>
  </Popover>
);

export default Example;
