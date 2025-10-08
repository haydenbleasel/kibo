import { Kbd } from "@/components/ui/kbd";

export const title = "Vim Navigation Keys";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="grid w-fit grid-cols-4 gap-1">
      <Kbd>H</Kbd>
      <Kbd>J</Kbd>
      <Kbd>K</Kbd>
      <Kbd>L</Kbd>
    </div>
  </div>
);

export default Example;
