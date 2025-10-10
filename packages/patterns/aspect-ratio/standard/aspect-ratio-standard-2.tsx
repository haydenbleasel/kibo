import { AspectRatio } from "@/components/ui/aspect-ratio";

export const title = "4:3 Aspect Ratio (Traditional)";

const Example = () => (
  <div className="w-full max-w-md">
    <AspectRatio ratio={4 / 3}>
      <div className="flex size-full items-center justify-center rounded-md bg-muted">
        <span className="text-muted-foreground text-sm">4:3</span>
      </div>
    </AspectRatio>
  </div>
);

export default Example;
