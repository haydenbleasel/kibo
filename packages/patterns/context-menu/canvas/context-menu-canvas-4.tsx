import { Copy, Eye, EyeOff, Layers, Layers2 } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Layer Management Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click on layer
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuLabel>Layer Options</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Copy />
        <span>Duplicate Layer</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <Layers2 />
        <span>Merge Down</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <Layers />
        <span>Flatten Layer</span>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Eye />
        <span>Show Layer</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <EyeOff />
        <span>Hide Layer</span>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
