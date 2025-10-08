import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Save Shortcut";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>S</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
