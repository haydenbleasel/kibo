import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export const title = "Email with Domain";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupInput placeholder="username" />
    <InputGroupAddon align="inline-end">
      <InputGroupText>@vercel.com</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
