import { AspectRatio } from "@/components/ui/aspect-ratio";

export const title = "16:9 Aspect Ratio (Widescreen)";

const Example = () => (
  <div className="w-full max-w-md">
    <AspectRatio ratio={16 / 9}>
      <div className="flex size-full items-center justify-center rounded-md bg-muted">
        <span className="text-muted-foreground text-sm">16:9</span>
      </div>
    </AspectRatio>
  </div>
);

export default Example;
