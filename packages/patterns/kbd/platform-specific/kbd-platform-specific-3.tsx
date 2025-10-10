import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Windows Key";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd>Win</Kbd>
      <Kbd>R</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
