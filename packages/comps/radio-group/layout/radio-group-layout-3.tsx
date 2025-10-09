import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "RadioGroup in Grid";

const Example = () => (
  <RadioGroup className="grid grid-cols-2 gap-4" defaultValue="grid-1">
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="grid-1" value="grid-1" />
      <Label htmlFor="grid-1">Option 1</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="grid-2" value="grid-2" />
      <Label htmlFor="grid-2">Option 2</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="grid-3" value="grid-3" />
      <Label htmlFor="grid-3">Option 3</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="grid-4" value="grid-4" />
      <Label htmlFor="grid-4">Option 4</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="grid-5" value="grid-5" />
      <Label htmlFor="grid-5">Option 5</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem id="grid-6" value="grid-6" />
      <Label htmlFor="grid-6">Option 6</Label>
    </div>
  </RadioGroup>
);

export default Example;
