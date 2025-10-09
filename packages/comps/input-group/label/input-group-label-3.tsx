import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

export const title = "Block Labels";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupInput id="name" placeholder="Enter your name" />
      <InputGroupAddon align="block-start">
        <Label className="text-foreground" htmlFor="name">
          Full Name
        </Label>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup className="bg-background">
      <InputGroupTextarea
        className="min-h-[100px]"
        id="bio"
        placeholder="Tell us about yourself"
      />
      <InputGroupAddon align="block-start" className="border-b">
        <Label className="text-foreground" htmlFor="bio">
          Bio
        </Label>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
