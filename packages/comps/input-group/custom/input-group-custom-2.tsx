import { SendIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export const title = "Textarea with Counter";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-6">
    <InputGroup className="bg-background">
      <InputGroupTextarea
        className="min-h-[100px]"
        maxLength={500}
        placeholder="Write your message..."
      />
      <InputGroupAddon align="block-end">
        <InputGroupText>0/500</InputGroupText>
        <InputGroupButton className="ml-auto" size="sm" variant="default">
          Post
          <SendIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
