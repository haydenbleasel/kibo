import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Multi-Step Sequence";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="flex items-center gap-2">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <span className="text-muted-foreground text-sm">then</span>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>S</Kbd>
      </KbdGroup>
    </div>
  </div>
);

export default Example;
