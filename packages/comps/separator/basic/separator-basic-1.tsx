import { Separator } from "@/components/ui/separator";

export const title = "Horizontal Separator";

const Example = () => (
  <div className="space-y-4">
    <p className="text-sm">Above the separator</p>
    <Separator />
    <p className="text-sm">Below the separator</p>
  </div>
);

export default Example;
