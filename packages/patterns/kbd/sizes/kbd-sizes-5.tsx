import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Extra Large Kbd";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd className="h-12 min-w-12 px-3 text-2xl">⌘</Kbd>
      <Kbd className="h-12 min-w-12 px-3 text-2xl">K</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
