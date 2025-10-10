import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "Horizontal RadioGroup";

const Example = () => (
  <RadioGroup className="flex flex-row space-x-4" defaultValue="option-1">
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="h1" value="option-1" />
      <Label htmlFor="h1">Option 1</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="h2" value="option-2" />
      <Label htmlFor="h2">Option 2</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="h3" value="option-3" />
      <Label htmlFor="h3">Option 3</Label>
    </div>
  </RadioGroup>
);

export default Example;
