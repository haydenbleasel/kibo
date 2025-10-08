import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Complex Shortcut";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
