import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export const title = "URL Builder";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupAddon>
      <InputGroupText>https://</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput placeholder="example" />
    <InputGroupAddon align="inline-end">
      <InputGroupText>.com</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
