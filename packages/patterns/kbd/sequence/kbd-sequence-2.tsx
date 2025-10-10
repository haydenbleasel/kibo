import { Kbd } from "@/components/ui/kbd";

export const title = "Key Sequence with Arrow";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="flex items-center gap-2">
      <Kbd>G</Kbd>
      <span className="text-muted-foreground">→</span>
      <Kbd>G</Kbd>
    </div>
  </div>
);

export default Example;
