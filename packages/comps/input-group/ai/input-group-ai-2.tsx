import { ArrowUpIcon, SparklesIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";

export const title = "Simple AI Prompt";

const Example = () => (
  <div className="flex w-full max-w-2xl flex-col gap-4">
    <InputGroup className="bg-background">
      <InputGroupTextarea placeholder="Ask me anything..." />
      <InputGroupAddon align="block-end">
        <InputGroupButton size="icon-xs" variant="ghost">
          <SparklesIcon />
        </InputGroupButton>
        <InputGroupText className="ml-auto">0/4000</InputGroupText>
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
