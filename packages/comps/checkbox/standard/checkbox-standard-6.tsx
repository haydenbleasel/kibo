import { Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "Custom Indicator Checkbox";

const Example = () => (
  <div className="flex items-center space-x-2">
    <Checkbox
      className="data-[state=checked]:border-green-500 data-[state=checked]:bg-green-500"
      id="custom"
    >
      <Check className="h-4 w-4 text-white" />
    </Checkbox>
    <Label htmlFor="custom">Custom green checkmark</Label>
  </div>
);

export default Example;
