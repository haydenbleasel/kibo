import { Kbd } from "@/components/ui/kbd";

export const title = "Modifier Keys";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="flex gap-1">
      <Kbd>Shift</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Alt</Kbd>
    </div>
  </div>
);

export default Example;
