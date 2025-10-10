import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const title = "Button with Count";

const Example = () => (
  <Button className="gap-2" variant="secondary">
    Button
    <Badge className="rounded-full" variant="outline">
      3
    </Badge>
  </Button>
);

export default Example;
