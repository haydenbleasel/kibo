import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const title = "Badge with Icon on Left";

const Example = () => (
  <Badge variant="secondary">
    <Star className="mr-1 size-3" />
    Badge
  </Badge>
);

export default Example;
