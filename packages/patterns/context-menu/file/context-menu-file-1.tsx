import { Copy, Edit, FolderOpen, Trash2 } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "File Operations Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click on file
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuItem>
        <FolderOpen />
        <span>Open</span>
        <ContextMenuShortcut>↵</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Edit />
        <span>Rename</span>
        <ContextMenuShortcut>F2</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Copy />
        <span>Duplicate</span>
        <ContextMenuShortcut>⌘D</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">
        <Trash2 />
        <span>Delete</span>
        <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
