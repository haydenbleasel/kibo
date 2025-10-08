import { Kbd } from "@/components/ui/kbd";

export const title = "Arrow Keys Cross Pattern";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="grid w-fit grid-cols-3 gap-1">
      <div />
      <Kbd>↑</Kbd>
      <div />
      <Kbd>←</Kbd>
      <Kbd>↓</Kbd>
      <Kbd>→</Kbd>
    </div>
  </div>
);

export default Example;
