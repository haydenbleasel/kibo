import { Kbd } from "@/components/ui/kbd";

export const title = "WASD Gaming Keys";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="grid w-fit grid-cols-3 gap-1">
      <div />
      <Kbd>W</Kbd>
      <div />
      <Kbd>A</Kbd>
      <Kbd>S</Kbd>
      <Kbd>D</Kbd>
    </div>
  </div>
);

export default Example;
