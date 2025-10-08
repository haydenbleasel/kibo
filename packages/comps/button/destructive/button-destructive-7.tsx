import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";

export const title = "Button with Kbd";

const Example = () => (
  <Button className="gap-2" variant="destructive">
    Button
    <Kbd className="bg-white/20 text-white">⌘K</Kbd>
  </Button>
);

export default Example;
