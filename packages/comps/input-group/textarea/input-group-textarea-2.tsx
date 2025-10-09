import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export const title = "Character Counter";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupTextarea
      className="min-h-[120px]"
      maxLength={500}
      placeholder="Enter your message..."
    />
    <InputGroupAddon align="block-end" className="border-t">
      <InputGroupText className="ml-auto">0/500</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
