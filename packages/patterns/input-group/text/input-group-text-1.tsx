import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export const title = "Currency Input";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupAddon>
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup className="bg-background">
      <InputGroupAddon>
        <InputGroupText>€</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>EUR</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
