import { Kbd } from "@/components/ui/kbd";

export const title = "Function Keys Row";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <div className="flex gap-1">
      {Array.from({ length: 12 }, (_, i) => (
        <Kbd key={i}>F{i + 1}</Kbd>
      ))}
    </div>
  </div>
);

export default Example;
