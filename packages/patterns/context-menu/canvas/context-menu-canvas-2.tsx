import {
  AlignCenter,
  AlignHorizontalJustifyCenter,
  AlignLeft,
  AlignRight,
  AlignVerticalJustifyCenter,
} from "lucide-react";
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

export const title = "Align and Distribute Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click on selection
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-2">
            <AlignLeft />
            <span>Align</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>
            <AlignLeft />
            <span>Align Left</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <AlignCenter />
            <span>Align Center</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <AlignRight />
            <span>Align Right</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <AlignVerticalJustifyCenter />
            <span>Align Top</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <AlignVerticalJustifyCenter />
            <span>Align Middle</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <AlignVerticalJustifyCenter />
            <span>Align Bottom</span>
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-2">
            <AlignHorizontalJustifyCenter />
            <span>Distribute</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>Distribute Horizontally</ContextMenuItem>
          <ContextMenuItem>Distribute Vertically</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
