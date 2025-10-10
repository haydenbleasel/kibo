import { Separator } from "@/components/ui/separator";

export const title = "Dotted Separator";

const Example = () => (
  <div className="space-y-4">
    <p className="text-sm">Above</p>
    <Separator className="border-t border-dotted bg-transparent" />
    <p className="text-sm">Below</p>
  </div>
);

export default Example;
