import { Kbd } from "@/components/ui/kbd";

export const title = "Inline with Text";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <p className="text-sm">
      Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette
    </p>
  </div>
);

export default Example;
