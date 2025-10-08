import { Separator } from "@/components/ui/separator";

export const title = "With Text Right";

const Example = () => (
  <div className="w-full max-w-sm">
    <div className="relative flex items-center gap-2">
      <Separator className="flex-1" />
      <span className="shrink-0 pl-2 text-muted-foreground text-xs">More</span>
    </div>
  </div>
);

export default Example;
