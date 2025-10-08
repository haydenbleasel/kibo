import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "With Description";

const Example = () => (
  <div className="flex items-start space-x-2">
    <Checkbox className="mt-1" id="description" />
    <div className="space-y-1">
      <Label htmlFor="description">Marketing emails</Label>
      <p className="text-muted-foreground text-sm">
        Receive emails about new products, features, and updates.
      </p>
    </div>
  </div>
);

export default Example;
