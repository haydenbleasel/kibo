import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "RadioGroup with Descriptions";

const Example = () => (
  <RadioGroup defaultValue="comfortable">
    <div className="flex items-start space-x-2">
      <RadioGroupItem className="mt-1" id="r1" value="default" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="r1">Default</Label>
        <p className="text-muted-foreground text-sm">
          The default spacing and sizing.
        </p>
      </div>
    </div>
    <div className="flex items-start space-x-2">
      <RadioGroupItem className="mt-1" id="r2" value="comfortable" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="r2">Comfortable</Label>
        <p className="text-muted-foreground text-sm">
          Increased spacing for better readability.
        </p>
      </div>
    </div>
    <div className="flex items-start space-x-2">
      <RadioGroupItem className="mt-1" id="r3" value="compact" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="r3">Compact</Label>
        <p className="text-muted-foreground text-sm">
          Reduced spacing to fit more content.
        </p>
      </div>
    </div>
  </RadioGroup>
);

export default Example;
