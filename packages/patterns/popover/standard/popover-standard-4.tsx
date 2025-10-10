import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Popover with Form";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Settings</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="space-y-4">
        <h4 className="font-semibold">Settings</h4>
        <Input placeholder="Enter value" />
        <Button className="w-full">Save</Button>
      </div>
    </PopoverContent>
  </Popover>
);

export default Example;
