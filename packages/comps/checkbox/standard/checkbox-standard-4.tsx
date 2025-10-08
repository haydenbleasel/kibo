import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "Disabled Checkbox";

const Example = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <Checkbox disabled id="disabled" />
      <Label className="text-muted-foreground" htmlFor="disabled">
        Disabled unchecked
      </Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox checked disabled id="disabled-checked" />
      <Label className="text-muted-foreground" htmlFor="disabled-checked">
        Disabled checked
      </Label>
    </div>
  </div>
);

export default Example;
