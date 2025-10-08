import { Copy, Minus, Plus, Trash2 } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Table Row Operations Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click on row
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuItem>
        <Plus />
        <span>Insert Row Above</span>
        <ContextMenuShortcut>⌘↑</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Plus />
        <span>Insert Row Below</span>
        <ContextMenuShortcut>⌘↓</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Copy />
        <span>Duplicate Row</span>
        <ContextMenuShortcut>⌘D</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">
        <Trash2 />
        <span>Delete Row</span>
        <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem variant="destructive">
        <Minus />
        <span>Delete Selected Rows</span>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
