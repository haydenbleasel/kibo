import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Large Kbd";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd className="h-8 min-w-8 px-2 text-base">⌘</Kbd>
      <Kbd className="h-8 min-w-8 px-2 text-base">K</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
