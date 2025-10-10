import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Pressed Down";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd className="translate-y-0.5 shadow-none">⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
