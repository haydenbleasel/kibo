import { Separator } from "@/components/ui/separator";

export const title = "With Text Left";

const Example = () => (
  <div className="w-full max-w-sm">
    <div className="relative flex items-center gap-2">
      <span className="shrink-0 pr-2 text-muted-foreground text-xs">
        Continue with
      </span>
      <Separator className="flex-1" />
    </div>
  </div>
);

export default Example;
