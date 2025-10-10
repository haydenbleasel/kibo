import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Active State";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd className="bg-primary text-primary-foreground">⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
