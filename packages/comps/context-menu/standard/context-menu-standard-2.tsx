import { Copy, Download, Eye, Share2, Trash } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Context Menu with Icons and Shortcuts";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuItem>
        <Eye />
        <span>View</span>
        <ContextMenuShortcut>⌘V</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Copy />
        <span>Copy Link</span>
        <ContextMenuShortcut>⌘C</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Share2 />
        <span>Share</span>
        <ContextMenuShortcut>⌘S</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Download />
        <span>Download</span>
        <ContextMenuShortcut>⌘D</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem variant="destructive">
        <Trash />
        <span>Delete</span>
        <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
