import { Kbd } from "@/components/ui/kbd";

export const title = "Vim Command Sequence";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="flex items-center gap-1">
      <Kbd>:</Kbd>
      <Kbd>W</Kbd>
      <Kbd>Q</Kbd>
    </div>
  </div>
);

export default Example;
