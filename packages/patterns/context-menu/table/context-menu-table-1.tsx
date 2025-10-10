import { ArrowDown, ArrowUp } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Table Sort Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click on column header
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuItem>
        <ArrowUp />
        <span>Sort Ascending</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <ArrowDown />
        <span>Sort Descending</span>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Clear Sort</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
