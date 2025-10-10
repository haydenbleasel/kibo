import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Key Sequence with Then";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="flex items-center gap-2">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <span className="text-muted-foreground text-sm">then</span>
      <Kbd>B</Kbd>
    </div>
  </div>
);

export default Example;
