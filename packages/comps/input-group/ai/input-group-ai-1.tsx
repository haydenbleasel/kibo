import { ArrowUpIcon, PlusIcon } from "lucide-react";
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
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";

export const title = "AI Prompt Input";

const Example = () => (
  <div className="flex w-full max-w-2xl flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupTextarea placeholder="Ask, Search or Chat..." />
      <InputGroupAddon align="block-end">
        <InputGroupButton
          className="rounded-full"
          size="icon-xs"
          variant="outline"
        >
          <PlusIcon />
        </InputGroupButton>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton variant="ghost">Auto</InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="[--radius:0.95rem]"
            side="top"
          >
            <DropdownMenuItem>Auto</DropdownMenuItem>
            <DropdownMenuItem>Agent</DropdownMenuItem>
            <DropdownMenuItem>Manual</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <InputGroupText className="ml-auto">52% used</InputGroupText>
        <Separator className="!h-4" orientation="vertical" />
        <InputGroupButton
          className="rounded-full"
          disabled
          size="icon-xs"
          variant="default"
        >
          <ArrowUpIcon />
          <span className="sr-only">Send</span>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>

    <small className="text-center text-muted-foreground">
      For better AI components, check out{" "}
      <a className="underline" href="https://ai-sdk.dev/elements/overview">
        AI Elements
      </a>
    </small>
  </div>
);

export default Example;
