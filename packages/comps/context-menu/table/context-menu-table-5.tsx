import {
  ArrowLeftRight,
  ArrowRightLeft,
  Columns,
  Eye,
  EyeOff,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Table Column Operations Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click on column
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuItem>
        <Eye />
        <span>Show Column</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <EyeOff />
        <span>Hide Column</span>
        <ContextMenuShortcut>⌘H</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <ArrowLeftRight />
        <span>Move Left</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <ArrowRightLeft />
        <span>Move Right</span>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Columns />
        <span>Resize Column</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <Columns />
        <span>Auto-fit Columns</span>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
