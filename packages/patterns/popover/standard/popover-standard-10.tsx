import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Popover with Footer";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="space-y-4">
        <h4 className="font-semibold">Title</h4>
        <p className="text-muted-foreground text-sm">Content goes here.</p>
        <div className="flex justify-end gap-2">
          <Button size="sm" variant="outline">
            Cancel
          </Button>
          <Button size="sm">Confirm</Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export default Example;
