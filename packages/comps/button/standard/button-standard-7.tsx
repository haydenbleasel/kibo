import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";

export const title = "Button with Kbd";

const Example = () => (
  <Button className="gap-2">
    Button
    <Kbd className="border bg-transparent text-primary-foreground">⌘K</Kbd>
  </Button>
);

export default Example;
