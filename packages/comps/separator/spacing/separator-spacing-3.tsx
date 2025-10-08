import { Separator } from "@/components/ui/separator";

export const title = "Wide Spacing";

const Example = () => (
  <div className="space-y-8">
    <p className="text-sm">Section 1</p>
    <Separator />
    <p className="text-sm">Section 2</p>
  </div>
);

export default Example;
