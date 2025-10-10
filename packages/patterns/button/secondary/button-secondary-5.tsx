import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const title = "Loading Button";

const Example = () => (
  <Button className="gap-2" disabled variant="secondary">
    <Loader2 className="size-4 animate-spin" />
    Loading
  </Button>
);

export default Example;
