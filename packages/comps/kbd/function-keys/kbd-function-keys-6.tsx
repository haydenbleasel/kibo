import { Kbd } from "@/components/ui/kbd";

export const title = "Editing Keys";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="flex gap-1">
      <Kbd>Home</Kbd>
      <Kbd>End</Kbd>
      <Kbd>PgUp</Kbd>
      <Kbd>PgDn</Kbd>
    </div>
  </div>
);

export default Example;
