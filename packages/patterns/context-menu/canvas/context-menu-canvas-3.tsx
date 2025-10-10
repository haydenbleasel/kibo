import { Group, Lock, Ungroup, Unlock } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Group and Lock Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click on elements
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuItem>
        <Group />
        <span>Group</span>
        <ContextMenuShortcut>⌘G</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Ungroup />
        <span>Ungroup</span>
        <ContextMenuShortcut>⌘⇧G</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Lock />
        <span>Lock</span>
        <ContextMenuShortcut>⌘L</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Unlock />
        <span>Unlock</span>
        <ContextMenuShortcut>⌘⇧L</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
