import { CornerDownLeftIcon, FileCodeIcon, RefreshCwIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export const title = "Code Editor";

const Example = () => (
  <InputGroup className="w-full max-w-sm bg-background">
    <InputGroupTextarea
      className="min-h-[200px]"
      placeholder="console.log('Hello, world!');"
    />
    <InputGroupAddon align="block-end" className="border-t">
      <InputGroupText>Line 1, Column 1</InputGroupText>
      <InputGroupButton className="ml-auto" size="sm" variant="default">
        Run
        <CornerDownLeftIcon />
      </InputGroupButton>
    </InputGroupAddon>
    <InputGroupAddon align="block-start" className="border-b">
      <InputGroupText className="font-medium font-mono">
        <FileCodeIcon />
        script.js
      </InputGroupText>
      <InputGroupButton className="ml-auto" size="icon-xs">
        <RefreshCwIcon />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
