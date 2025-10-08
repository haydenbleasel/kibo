import { HelpCircle, LogOut, Settings, User } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Context Menu with Labels";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuLabel>My Account</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <User />
        <span>Profile</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <Settings />
        <span>Settings</span>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuLabel>Support</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <HelpCircle />
        <span>Help Center</span>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">
        <LogOut />
        <span>Log Out</span>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
