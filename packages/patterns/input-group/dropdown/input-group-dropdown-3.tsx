import { ChevronDownIcon } from "lucide-react";
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

export const title = "URL Builder with Dropdown";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupAddon>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton className="text-xs" variant="ghost">
              https:// <ChevronDownIcon className="size-3" />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>https://</DropdownMenuItem>
            <DropdownMenuItem>http://</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
    <InputGroup className="bg-background">
      <InputGroupInput placeholder="subdomain" />
      <InputGroupAddon align="inline-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton className="text-xs" variant="ghost">
              .com <ChevronDownIcon className="size-3" />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>.com</DropdownMenuItem>
            <DropdownMenuItem>.net</DropdownMenuItem>
            <DropdownMenuItem>.org</DropdownMenuItem>
            <DropdownMenuItem>.io</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
