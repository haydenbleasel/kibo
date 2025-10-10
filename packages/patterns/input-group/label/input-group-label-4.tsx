import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

export const title = "Label with Counter";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupInput id="title" maxLength={60} placeholder="Enter title" />
    <InputGroupAddon align="block-start">
      <Label className="text-foreground" htmlFor="title">
        Title
      </Label>
      <InputGroupText className="ml-auto">0/60</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
