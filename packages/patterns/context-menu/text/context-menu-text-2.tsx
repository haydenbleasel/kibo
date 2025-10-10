import { Bold, Italic, Strikethrough, Underline } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Text Formatting Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click to format text
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuItem>
        <Bold />
        <span>Bold</span>
        <ContextMenuShortcut>⌘B</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Italic />
        <span>Italic</span>
        <ContextMenuShortcut>⌘I</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Underline />
        <span>Underline</span>
        <ContextMenuShortcut>⌘U</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Strikethrough />
        <span>Strikethrough</span>
        <ContextMenuShortcut>⌘⇧X</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Clear Formatting</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
