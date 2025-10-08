import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Copy Shortcut";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>C</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
