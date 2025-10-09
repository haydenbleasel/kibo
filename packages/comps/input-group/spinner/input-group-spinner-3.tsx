import { LoaderIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export const title = "Animated Icon Spinner";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background" data-disabled>
    <InputGroupInput disabled placeholder="Refreshing data..." />
    <InputGroupAddon>
      <LoaderIcon className="animate-spin" />
    </InputGroupAddon>
    <InputGroupAddon align="inline-end">
      <InputGroupText className="text-muted-foreground">
        Please wait...
      </InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
