import { Label } from "@/components/ui/label";

export const title = "Required Label";

const Example = () => (
  <Label>
    Email <span className="text-destructive">*</span>
  </Label>
);

export default Example;
