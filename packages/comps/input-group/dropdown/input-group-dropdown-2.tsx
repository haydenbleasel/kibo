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

export const title = "Search Filters";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background [--radius:1rem]">
    <InputGroupInput placeholder="Search products" />
    <InputGroupAddon align="inline-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <InputGroupButton className="!pr-1.5 text-xs" variant="ghost">
            Category <ChevronDownIcon className="size-3" />
          </InputGroupButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="[--radius:0.95rem]">
          <DropdownMenuItem>All Products</DropdownMenuItem>
          <DropdownMenuItem>Electronics</DropdownMenuItem>
          <DropdownMenuItem>Clothing</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
