import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "RadioGroup with Cards";

const Example = () => (
  <RadioGroup className="gap-2" defaultValue="card-1">
    <div className="relative flex cursor-pointer items-start space-x-3 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-accent">
      <RadioGroupItem id="card-1" value="card-1" />
      <div className="grid gap-1.5 leading-none">
        <Label className="cursor-pointer font-medium" htmlFor="card-1">
          Starter Plan
        </Label>
        <p className="text-muted-foreground text-sm">
          Perfect for individuals and small teams.
        </p>
      </div>
    </div>
    <div className="relative flex cursor-pointer items-start space-x-3 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-accent">
      <RadioGroupItem id="card-2" value="card-2" />
      <div className="grid gap-1.5 leading-none">
        <Label className="cursor-pointer font-medium" htmlFor="card-2">
          Professional Plan
        </Label>
        <p className="text-muted-foreground text-sm">
          Advanced features for growing businesses.
        </p>
      </div>
    </div>
    <div className="relative flex cursor-pointer items-start space-x-3 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-accent">
      <RadioGroupItem id="card-3" value="card-3" />
      <div className="grid gap-1.5 leading-none">
        <Label className="cursor-pointer font-medium" htmlFor="card-3">
          Enterprise Plan
        </Label>
        <p className="text-muted-foreground text-sm">
          Custom solutions for large organizations.
        </p>
      </div>
    </div>
  </RadioGroup>
);

export default Example;
