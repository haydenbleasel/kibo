import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
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

export const title = "Text Alignment Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click to align text
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-2">
            <AlignLeft />
            <span>Align Text</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>
            <AlignLeft />
            <span>Left</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <AlignCenter />
            <span>Center</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <AlignRight />
            <span>Right</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <AlignJustify />
            <span>Justify</span>
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem>Increase Indent</ContextMenuItem>
      <ContextMenuItem>Decrease Indent</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
