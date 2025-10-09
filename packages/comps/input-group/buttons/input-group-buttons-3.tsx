import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export const title = "Search Button";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon align="inline-end" className="pr-2">
      <InputGroupButton size="sm" variant="secondary">
        Search
        <SearchIcon />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
