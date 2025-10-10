import { Separator } from "@/components/ui/separator";

export const title = "Vertical Separator";

const Example = () => (
  <div className="flex h-20 items-center space-x-4">
    <p className="text-sm">Left</p>
    <Separator orientation="vertical" />
    <p className="text-sm">Center</p>
    <Separator orientation="vertical" />
    <p className="text-sm">Right</p>
  </div>
);

export default Example;
