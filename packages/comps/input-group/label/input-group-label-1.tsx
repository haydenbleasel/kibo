import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

export const title = "Inline Labels";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupInput id="email" placeholder="shadcn" />
      <InputGroupAddon>
        <Label htmlFor="email">@</Label>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup className="bg-background">
      <InputGroupAddon>
        <Label htmlFor="price">$</Label>
      </InputGroupAddon>
      <InputGroupInput id="price" placeholder="0.00" />
    </InputGroup>
  </div>
);

export default Example;
