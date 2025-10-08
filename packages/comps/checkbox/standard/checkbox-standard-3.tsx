import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "With Subtitle";

const Example = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="subtitle" />
    <div className="flex items-baseline gap-2">
      <Label htmlFor="subtitle">Enable notifications</Label>
      <span className="text-muted-foreground text-sm">Recommended</span>
    </div>
  </div>
);

export default Example;
