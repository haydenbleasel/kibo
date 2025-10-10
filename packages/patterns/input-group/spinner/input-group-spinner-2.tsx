import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

export const title = "Spinner with Text";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background" data-disabled>
    <InputGroupInput disabled placeholder="Saving changes..." />
    <InputGroupAddon align="inline-end">
      <InputGroupText>Saving...</InputGroupText>
      <Spinner />
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
