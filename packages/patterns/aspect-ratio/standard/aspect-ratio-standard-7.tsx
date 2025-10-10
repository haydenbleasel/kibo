import { AspectRatio } from "@/components/ui/aspect-ratio";

export const title = "2:1 Aspect Ratio (Panoramic)";

const Example = () => (
  <div className="w-full max-w-md">
    <AspectRatio ratio={2}>
      <div className="flex size-full items-center justify-center rounded-md bg-muted">
        <span className="text-muted-foreground text-sm">2:1</span>
      </div>
    </AspectRatio>
  </div>
);

export default Example;
