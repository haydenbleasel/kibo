import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export const title = "Textarea with Actions";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupTextarea
      className="min-h-[100px]"
      placeholder="Type your message..."
    />
    <InputGroupAddon align="block-end">
      <InputGroupButton className="ml-auto" size="sm" variant="default">
        Submit
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
