import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export const title = "Textarea with Toolbar";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-6">
    <InputGroup className="bg-background">
      <InputGroupTextarea
        className="min-h-[100px]"
        placeholder="Write your content..."
      />
      <InputGroupAddon align="block-start" className="border-b">
        <InputGroupButton aria-label="Bold" size="icon-xs" variant="ghost">
          <BoldIcon />
        </InputGroupButton>
        <InputGroupButton aria-label="Italic" size="icon-xs" variant="ghost">
          <ItalicIcon />
        </InputGroupButton>
        <InputGroupButton aria-label="Underline" size="icon-xs" variant="ghost">
          <UnderlineIcon />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupAddon align="block-end">
        <InputGroupButton className="ml-auto" size="sm" variant="default">
          Submit
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
