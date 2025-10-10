import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const title = "Button with Count";

const Example = () => (
  <Button className="gap-2" variant="outline">
    Button
    <Badge className="rounded-full" variant="secondary">
      3
    </Badge>
  </Button>
);

export default Example;
