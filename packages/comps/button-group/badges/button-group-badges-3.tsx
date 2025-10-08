import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";

export const title = "Cart Button";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button className="relative" size="sm" variant="outline">
        <ShoppingCartIcon />
        Cart
        <Badge className="-top-1 -right-2 absolute h-5 min-w-5 rounded-full px-1 text-xs">
          3
        </Badge>
      </Button>
      <ButtonGroupText>$127.50</ButtonGroupText>
    </ButtonGroup>
    <ButtonGroup>
      <Button className="relative" size="sm" variant="outline">
        <ShoppingCartIcon />
        <Badge className="-top-1 -right-2 absolute h-5 min-w-5 rounded-full px-1 text-xs">
          5
        </Badge>
      </Button>
      <ButtonGroupText className="font-medium">5 items</ButtonGroupText>
    </ButtonGroup>
  </div>
);

export default Example;
