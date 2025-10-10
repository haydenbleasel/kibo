import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

export const title = "Textarea Loading";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <InputGroup className="bg-background" data-disabled>
      <InputGroupTextarea
        className="min-h-[100px]"
        disabled
        placeholder="Generating content..."
      />
      <InputGroupAddon align="block-end" className="border-t">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup className="bg-background" data-disabled>
      <InputGroupInput disabled placeholder="Uploading file..." />
      <InputGroupAddon align="inline-end">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
