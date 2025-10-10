import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

export const title = "Label with Badge";

const Example = () => (
  <Label>
    Advanced Settings
    <Badge className="text-xs" variant="secondary">
      Beta
    </Badge>
  </Label>
);

export default Example;
