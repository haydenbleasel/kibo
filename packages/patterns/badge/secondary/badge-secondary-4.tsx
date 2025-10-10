import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const title = "Badge with Icon on Right";

const Example = () => (
  <Badge variant="secondary">
    Badge
    <Star className="ml-1 size-3" />
  </Badge>
);

export default Example;
