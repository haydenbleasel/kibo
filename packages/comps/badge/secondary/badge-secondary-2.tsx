import { Badge } from "@/components/ui/badge";

export const title = "Badge with Link";

const Example = () => (
  <Badge variant="secondary">
    <a className="hover:underline" href="#">
      Badge
    </a>
  </Badge>
);

export default Example;
