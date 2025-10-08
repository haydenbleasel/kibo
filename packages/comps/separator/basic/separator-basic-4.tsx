import { Separator } from "@/components/ui/separator";

export const title = "Section Divider";

const Example = () => (
  <div className="space-y-4">
    <div>
      <h3 className="text-lg font-semibold">Section 1</h3>
      <p className="text-sm text-muted-foreground">Content for section 1</p>
    </div>
    <Separator />
    <div>
      <h3 className="text-lg font-semibold">Section 2</h3>
      <p className="text-sm text-muted-foreground">Content for section 2</p>
    </div>
  </div>
);

export default Example;
