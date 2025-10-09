import { SendIcon, SmileIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export const title = "Chat Input";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupTextarea
      className="min-h-[80px]"
      placeholder="Type a message..."
    />
    <InputGroupAddon align="block-end" className="border-t">
      <InputGroupButton aria-label="Emoji" size="icon-xs" variant="ghost">
        <SmileIcon />
      </InputGroupButton>
      <InputGroupText className="ml-auto">0/2000</InputGroupText>
      <InputGroupButton className="ml-2" size="sm" variant="default">
        Send
        <SendIcon />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
