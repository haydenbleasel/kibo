import { Info, Lock, Users } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "File Properties Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click on file
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuLabel>File Management</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Info />
        <span>Get Info</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <Lock />
        <span>Permissions</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <Users />
        <span>Sharing Settings</span>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Info />
        <span>Properties</span>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
