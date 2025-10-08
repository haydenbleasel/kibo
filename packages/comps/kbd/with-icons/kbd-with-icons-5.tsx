import { Kbd } from "@/components/ui/kbd";

export const title = "Unicode Symbols";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="flex gap-1">
      <Kbd>↵ Enter</Kbd>
      <Kbd>⌫ Delete</Kbd>
      <Kbd>⇥ Tab</Kbd>
    </div>
  </div>
);

export default Example;
