import { Label } from "@/components/ui/label";

export const title = "Label with Description";

const Example = () => (
  <div className="space-y-1">
    <Label>Username</Label>
    <p className="text-muted-foreground text-xs">
      This will be your public display name
    </p>
  </div>
);

export default Example;
