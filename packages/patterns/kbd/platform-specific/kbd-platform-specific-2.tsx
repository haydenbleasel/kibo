import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Mac Option Symbol";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd>⌥</Kbd>
      <Kbd>Tab</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
