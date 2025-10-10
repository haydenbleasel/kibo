import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "Basic RadioGroup";

const Example = () => (
  <RadioGroup defaultValue="option-1">
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="option-1" value="option-1" />
      <Label htmlFor="option-1">Option 1</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="option-2" value="option-2" />
      <Label htmlFor="option-2">Option 2</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="option-3" value="option-3" />
      <Label htmlFor="option-3">Option 3</Label>
    </div>
  </RadioGroup>
);

export default Example;
