import { Separator } from "@/components/ui/separator";

export const title = "Thick Separator";

const Example = () => (
  <div className="space-y-4">
    <p className="text-sm">Above</p>
    <Separator className="h-1" />
    <p className="text-sm">Below</p>
  </div>
);

export default Example;
