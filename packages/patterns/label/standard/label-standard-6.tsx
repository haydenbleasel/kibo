import { Label } from "@/components/ui/label";

export const title = "Label with Character Count";

const Example = () => (
  <div className="flex items-center justify-between gap-2">
    <Label htmlFor="bio">Bio</Label>
    <span className="text-muted-foreground text-xs">0/500</span>
  </div>
);

export default Example;
