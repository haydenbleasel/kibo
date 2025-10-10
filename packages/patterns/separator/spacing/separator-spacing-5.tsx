import { Separator } from "@/components/ui/separator";

export const title = "Inset Separator";

const Example = () => (
  <div className="space-y-4">
    <p className="text-sm">Section 1</p>
    <Separator className="mx-8" />
    <p className="text-sm">Section 2</p>
  </div>
);

export default Example;
