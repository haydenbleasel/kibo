import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Simple Text Popover";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open</Button>
    </PopoverTrigger>
    <PopoverContent>
      <p className="text-sm">This is a simple popover with text content.</p>
    </PopoverContent>
  </Popover>
);

export default Example;
