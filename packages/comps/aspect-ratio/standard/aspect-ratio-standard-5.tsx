import { AspectRatio } from "@/components/ui/aspect-ratio";

export const title = "3:2 Aspect Ratio (Photography)";

const Example = () => (
  <div className="w-full max-w-md">
    <AspectRatio ratio={3 / 2}>
      <div className="flex size-full items-center justify-center rounded-md bg-muted">
        <span className="text-muted-foreground text-sm">3:2</span>
      </div>
    </AspectRatio>
  </div>
);

export default Example;
