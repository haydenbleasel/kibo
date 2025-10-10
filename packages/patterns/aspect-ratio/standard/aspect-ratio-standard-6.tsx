import { AspectRatio } from "@/components/ui/aspect-ratio";

export const title = "9:16 Aspect Ratio (Vertical/Mobile)";

const Example = () => (
  <div className="w-full max-w-xs">
    <AspectRatio ratio={9 / 16}>
      <div className="flex size-full items-center justify-center rounded-md bg-muted">
        <span className="text-muted-foreground text-sm">9:16</span>
      </div>
    </AspectRatio>
  </div>
);

export default Example;
