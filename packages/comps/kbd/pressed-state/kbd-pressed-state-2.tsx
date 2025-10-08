import { Kbd } from "@/components/ui/kbd";

export const title = "Disabled State";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <Kbd className="cursor-not-allowed opacity-50">⌘</Kbd>
  </div>
);

export default Example;
