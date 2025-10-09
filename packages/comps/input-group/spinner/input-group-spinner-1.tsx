import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

export const title = "Loading States";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <InputGroup className="bg-background" data-disabled>
      <InputGroupInput disabled placeholder="Searching..." />
      <InputGroupAddon align="inline-end">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup className="bg-background" data-disabled>
      <InputGroupInput disabled placeholder="Processing..." />
      <InputGroupAddon>
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
