import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Arrow Keys Horizontal";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd>←</Kbd>
      <Kbd>→</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
