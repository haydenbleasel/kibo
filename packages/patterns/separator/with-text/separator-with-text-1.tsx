import { Separator } from "@/components/ui/separator";

export const title = "With Text Center";

const Example = () => (
  <div className="w-full max-w-sm">
    <div className="relative flex items-center gap-2">
      <Separator className="flex-1" />
      <span className="shrink-0 px-2 text-muted-foreground text-xs uppercase">
        OR
      </span>
      <Separator className="flex-1" />
    </div>
  </div>
);

export default Example;
