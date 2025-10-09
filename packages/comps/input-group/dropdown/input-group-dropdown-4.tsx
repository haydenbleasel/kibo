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
  InputGroupTextarea,
} from "@/components/ui/input-group";

export const title = "Textarea with Dropdown";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupTextarea
        className="min-h-[100px]"
        placeholder="Write your message..."
      />
      <InputGroupAddon align="block-end" className="border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton size="sm" variant="ghost">
              Format <ChevronDownIcon className="size-3" />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Plain Text</DropdownMenuItem>
            <DropdownMenuItem>Markdown</DropdownMenuItem>
            <DropdownMenuItem>HTML</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <InputGroupButton className="ml-auto" size="sm" variant="default">
          Send
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
