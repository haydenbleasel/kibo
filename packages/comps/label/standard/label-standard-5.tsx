import { Label } from "@/components/ui/label";

export const title = "Label with Optional Indicator";

const Example = () => (
  <Label>
    Phone Number{" "}
    <span className="font-normal text-muted-foreground">(optional)</span>
  </Label>
);

export default Example;
