import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "RadioGroup with Disabled States";

const Example = () => (
  <div className="space-y-6">
    <div>
      <h3 className="mb-3 font-medium text-sm">Regular State</h3>
      <RadioGroup defaultValue="option-1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="d1" value="option-1" />
          <Label htmlFor="d1">Enabled and selected</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="d2" value="option-2" />
          <Label htmlFor="d2">Enabled</Label>
        </div>
      </RadioGroup>
    </div>
    <div>
      <h3 className="mb-3 font-medium text-sm">Disabled State</h3>
      <RadioGroup defaultValue="option-3" disabled>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="d3" value="option-3" />
          <Label htmlFor="d3">Disabled and selected</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="d4" value="option-4" />
          <Label htmlFor="d4">Disabled</Label>
        </div>
      </RadioGroup>
    </div>
    <div>
      <h3 className="mb-3 font-medium text-sm">Mixed State</h3>
      <RadioGroup defaultValue="option-5">
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="d5" value="option-5" />
          <Label htmlFor="d5">Enabled</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem disabled id="d6" value="option-6" />
          <Label className="opacity-50" htmlFor="d6">
            Disabled option
          </Label>
        </div>
      </RadioGroup>
    </div>
  </div>
);

export default Example;
