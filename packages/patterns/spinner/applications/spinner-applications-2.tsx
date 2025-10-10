import { ArrowUpIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

export const title = "Spinner in Input Group";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupInput disabled placeholder="Send a message..." />
      <InputGroupAddon align="inline-end">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup className="bg-background">
      <InputGroupTextarea disabled placeholder="Send a message..." />
      <InputGroupAddon align="block-end">
        <Spinner /> Validating...
        <InputGroupButton className="ml-auto" variant="default">
          <ArrowUpIcon />
          <span className="sr-only">Send</span>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
