import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Small Kbd";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd className="h-4 min-w-4 text-[10px]">⌘</Kbd>
      <Kbd className="h-4 min-w-4 text-[10px]">K</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
