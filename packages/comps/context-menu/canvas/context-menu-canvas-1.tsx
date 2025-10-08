import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUp,
  ArrowUpToLine,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Layer Arrange Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click on element
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuItem>
        <ArrowUpToLine />
        <span>Bring to Front</span>
        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <ArrowUp />
        <span>Bring Forward</span>
        <ContextMenuShortcut>⌘⌥]</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <ArrowDown />
        <span>Send Backward</span>
        <ContextMenuShortcut>⌘⌥[</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <ArrowDownToLine />
        <span>Send to Back</span>
        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
