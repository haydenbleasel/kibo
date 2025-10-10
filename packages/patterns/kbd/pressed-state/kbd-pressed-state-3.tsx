import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Focus State";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd className="ring-2 ring-ring ring-offset-2 ring-offset-background">
        ⌘
      </Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
