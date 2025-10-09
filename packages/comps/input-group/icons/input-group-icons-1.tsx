import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export const title = "Search with Icon";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon>
      <SearchIcon />
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
