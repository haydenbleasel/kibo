import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Filter Popover";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">
        <Filter className="h-4 w-4" />
        Filter
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="space-y-4">
        <h4 className="font-semibold">Filter Options</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked id="active" />
            <Label className="cursor-pointer" htmlFor="active">
              Active
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="pending" />
            <Label className="cursor-pointer" htmlFor="pending">
              Pending
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="archived" />
            <Label className="cursor-pointer" htmlFor="archived">
              Archived
            </Label>
          </div>
        </div>
        <Button className="w-full" size="sm">
          Apply Filters
        </Button>
      </div>
    </PopoverContent>
  </Popover>
);

export default Example;
