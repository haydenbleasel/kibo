import {
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  UnderlineIcon,
} from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export const title = "Rich Text Toolbar";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupTextarea
      className="min-h-[150px]"
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
      <InputGroupButton aria-label="Link" size="icon-xs" variant="ghost">
        <LinkIcon />
      </InputGroupButton>
      <InputGroupButton aria-label="List" size="icon-xs" variant="ghost">
        <ListIcon />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
