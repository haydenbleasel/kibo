import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Hover State";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd className="cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground">
        ⌘
      </Kbd>
      <Kbd className="cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground">
        K
      </Kbd>
    </KbdGroup>
  </div>
);

export default Example;
