import { Filter, X } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Table Filter Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click on column
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-2">
            <Filter />
            <span>Filter by</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>Contains</ContextMenuItem>
          <ContextMenuItem>Does not contain</ContextMenuItem>
          <ContextMenuItem>Equals</ContextMenuItem>
          <ContextMenuItem>Not equals</ContextMenuItem>
          <ContextMenuItem>Starts with</ContextMenuItem>
          <ContextMenuItem>Ends with</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <X />
        <span>Clear Filters</span>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
