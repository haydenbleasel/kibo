import { MoreHorizontalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export const title = "Dropdown Actions";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupInput placeholder="Enter file name" />
    <InputGroupAddon align="inline-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <InputGroupButton aria-label="More" size="icon-xs" variant="ghost">
            <MoreHorizontalIcon />
          </InputGroupButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Copy path</DropdownMenuItem>
          <DropdownMenuItem>Open location</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
