import { Separator } from "@/components/ui/separator";

export const title = "Section Divider";

const Example = () => (
  <div className="space-y-4">
    <div>
      <h3 className="font-semibold text-lg">Section 1</h3>
      <p className="text-muted-foreground text-sm">Content for section 1</p>
    </div>
    <Separator />
    <div>
      <h3 className="font-semibold text-lg">Section 2</h3>
      <p className="text-muted-foreground text-sm">Content for section 2</p>
    </div>
  </div>
);

export default Example;
