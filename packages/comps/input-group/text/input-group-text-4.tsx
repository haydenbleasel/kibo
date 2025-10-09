import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export const title = "Character Counter";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupInput maxLength={280} placeholder="Enter tweet..." />
    <InputGroupAddon align="inline-end">
      <InputGroupText>0/280</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
