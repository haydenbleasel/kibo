import { ArrowUpIcon, MicIcon, PaperclipIcon } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";

export const title = "AI with Voice";

const Example = () => (
  <div className="flex w-full max-w-2xl flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupTextarea placeholder="Type or speak your message..." />
      <InputGroupAddon align="block-end">
        <InputGroupButton size="icon-xs" variant="ghost">
          <PaperclipIcon />
        </InputGroupButton>
        <InputGroupButton size="icon-xs" variant="ghost">
          <MicIcon />
        </InputGroupButton>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton className="ml-auto text-xs" variant="ghost">
              Claude 3.5
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="top">
            <DropdownMenuItem>Claude 3.5 Sonnet</DropdownMenuItem>
            <DropdownMenuItem>Claude 3 Opus</DropdownMenuItem>
            <DropdownMenuItem>Claude 3 Haiku</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Separator className="!h-4" orientation="vertical" />
        <InputGroupButton
          className="rounded-full"
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
