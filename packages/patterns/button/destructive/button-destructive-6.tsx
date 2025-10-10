import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const title = "Button with Count";

const Example = () => (
  <Button className="gap-2" variant="destructive">
    Button
    <Badge className="rounded-full bg-white/20 text-white hover:bg-white/20">
      3
    </Badge>
  </Button>
);

export default Example;
