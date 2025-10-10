import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "Simple Checkbox";

const Example = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
);

export default Example;
