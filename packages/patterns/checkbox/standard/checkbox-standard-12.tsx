import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "With Subtitle and Description";

const Example = () => (
  <div className="flex items-start space-x-2">
    <Checkbox className="mt-1" id="subtitle-description" />
    <div className="space-y-1">
      <div className="flex items-baseline gap-2">
        <Label htmlFor="subtitle-description">Security alerts</Label>
        <span className="text-muted-foreground text-sm">Recommended</span>
      </div>
      <p className="text-muted-foreground text-sm">
        Get notified about important security updates and potential threats to
        your account.
      </p>
    </div>
  </div>
);

export default Example;
