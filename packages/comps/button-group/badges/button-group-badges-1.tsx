import { BellIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Notifications Button";

const Example = () => (
  <ButtonGroup>
    <Button className="relative" size="sm" variant="outline">
      <BellIcon />
      <Badge className="-top-1 -right-2 absolute z-10 h-5 min-w-5 rounded-full px-1 text-xs">
        12
      </Badge>
    </Button>
    <Button className="relative" size="sm" variant="outline">
      <BellIcon />
      <Badge
        className="-top-1 -right-2 absolute z-10 h-5 min-w-5 rounded-full px-1 text-xs"
        variant="destructive"
      >
        99+
      </Badge>
    </Button>
  </ButtonGroup>
);

export default Example;
