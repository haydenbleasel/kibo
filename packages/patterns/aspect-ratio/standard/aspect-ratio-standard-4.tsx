import { AspectRatio } from "@/components/ui/aspect-ratio";

export const title = "21:9 Aspect Ratio (Ultrawide)";

const Example = () => (
  <div className="w-full max-w-md">
    <AspectRatio ratio={21 / 9}>
      <div className="flex size-full items-center justify-center rounded-md bg-muted">
        <span className="text-muted-foreground text-sm">21:9</span>
      </div>
    </AspectRatio>
  </div>
);

export default Example;
