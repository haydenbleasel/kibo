import { Kbd } from "@/components/ui/kbd";

export const title = "Special Keys";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="flex gap-1">
      <Kbd>Esc</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Enter</Kbd>
    </div>
  </div>
);

export default Example;
