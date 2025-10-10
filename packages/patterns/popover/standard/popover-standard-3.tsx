import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Popover with Actions";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Actions</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="space-y-2">
        <Button className="w-full">Edit</Button>
        <Button className="w-full" variant="outline">
          Share
        </Button>
        <Button className="w-full" variant="destructive">
          Delete
        </Button>
      </div>
    </PopoverContent>
  </Popover>
);

export default Example;
