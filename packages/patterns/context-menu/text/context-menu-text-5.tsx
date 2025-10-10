import { Palette, Type } from "lucide-react";
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

export const title = "Font and Style Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click to style text
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-2">
            <Type />
            <span>Font Family</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>Arial</ContextMenuItem>
          <ContextMenuItem>Times New Roman</ContextMenuItem>
          <ContextMenuItem>Courier New</ContextMenuItem>
          <ContextMenuItem>Georgia</ContextMenuItem>
          <ContextMenuItem>Verdana</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-2">
            <Type />
            <span>Font Size</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>Small (12px)</ContextMenuItem>
          <ContextMenuItem>Medium (14px)</ContextMenuItem>
          <ContextMenuItem>Large (16px)</ContextMenuItem>
          <ContextMenuItem>Extra Large (20px)</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Palette />
        <span>Text Color</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <Palette />
        <span>Highlight Color</span>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
