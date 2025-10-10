import { ArrowUpIcon, FileIcon, ImageIcon } from "lucide-react";
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

export const title = "AI with Attachments";

const Example = () => (
  <div className="flex w-full max-w-2xl flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupTextarea placeholder="Describe your task..." />
      <InputGroupAddon align="block-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton size="icon-xs" variant="ghost">
              <FileIcon />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="top">
            <DropdownMenuItem>
              <FileIcon className="mr-2" />
              Attach File
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ImageIcon className="mr-2" />
              Attach Image
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <InputGroupText className="ml-auto">GPT-4</InputGroupText>
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
